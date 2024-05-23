import { decryptId } from "../../utils/encryption";
import { useEffect, useState } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import logo from "../header/ultivic-logo.png"
import { MdOutlineTimer } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";

const InterviewQuestions = () => {
  const { id } = useParams();
  let url = 'http://localhost:8000/api/v1/'
  // const url = 'http://16.171.41.223:8000/api/v1/'

  var candidateID
  const [decryptedCandidateId, setDecryptedCandidateId] = useState()
  const [questions, setQuestions] = useState([])
  const [questionCopy, setQuestonCopy] = useState([])
  const [answers, setAnswers] = useState({});
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTest, setStartTest] = useState(false)
  const [estimateTime, setEstimatedTime] = useState()
  const [checkComplete, setCheckComplete] = useState('')



  useEffect(() => {
    const cleanedEncryptedId = id.startsWith(':') ? id.slice(1) : id;
    const decryptedId = decryptId(decodeURIComponent(cleanedEncryptedId));
    candidateID = decryptedId
    // setDecryptedCandidateId(decryptedId);
  }, [id]);


  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    setDecryptedCandidateId(candidateID)
    fetch(`${url}getInterviewQuestions?candidateId=${candidateID}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEstimatedTime(result.time)
        setCheckComplete(result.completedStatus)
        setQuestions(result.questions)
      })
      .catch((error) => console.error(error));
  }, [id])



  const handleChange = (id, value) => {
    setAnswers({
      ...answers,
      [id]: value
    });
  };

  const handleSubmit = () => {

    // event.preventDefault();
  };

  useEffect(() => {
    let intervalId;
    if (startTime && !endTime) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [startTime, endTime]);




  const handleLogoClick = () => {
    if (!startTime) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        "candidateId": decryptedCandidateId
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      fetch(`${url}inviteAccepted`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.type === 'success') {
            setStartTime(Date.now());
            setStartTest(true)
          }
        })
        .catch((error) => console.error(error));

    } else {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "candidateId": decryptedCandidateId
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(`${url}testCompleted`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.type === 'success') {
            submitForm();
          }
        })
        .catch((error) => console.error(error));
    }
  };


  const submitForm = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "candidateId": decryptedCandidateId,
      "quesAns": answers
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}addCandidateAnswers`, requestOptions)
      .then((response) => response.json())
      .then((result) =>{ 
        if(result.type==='success'){
          setEndTime(Date.now());
          toast.success(result.message,{
            duration:3000
          })
        }
      })
      .catch((error) => console.error(error));
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };




  return (
    <>
      {
        checkComplete === 'completed' ? <div className="regards-message">Your interview result will be shared with you as soon as possible. Thankyou!</div> :
          <section className="question-form">
            <div className="Interview_header">
              {
                startTest && (
                  <div className="d-flex align-items-center gap-3">
                    <img src={logo} height={"40px"} width={"120px"} className="logo_img" />
                    {
                      endTime === null ? (
                        <h3>Good Luck for your Interview!</h3>
                      ) : <h3>Your interview result will be shared with you as soon as possible.Thankyou!</h3>
                    }

                  </div>
                )
              }

              <div className="timer_outer">
                {formatTime(elapsedTime)}
                {
                  endTime === null ? (
                    <MdOutlineTimer className={startTest === true ? 'timer-start' : 'timer'} alt="Logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
                  ) : null
                }
              </div>
            </div>
            {
              startTest === true ? (
                <form >
                  <h2 >Objective Questions</h2>
                  {questions[0]?.objective?.map((question) => (
                    <div className="question-wrapper" key={question._id}>
                      <h3 className="question-text">{question.question}</h3>
                      <div className="options-wrapper">
                        {question.options.map((option, index) => (
                          <label className="option-label" key={index}>
                            <input
                              type="radio"
                              name={`question-${question._id}`}
                              value={option}
                              key={index}
                              onChange={(e) => handleChange(question.question, index + 1)}
                              className="option-input"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <h2>Subjective Questions</h2>
                  {questions[0]?.subjective?.map((question) => (
                    <div className="question-wrapper" key={question._id}>
                      <h3 className="question-text">{question.question}</h3>
                      <textarea
                        className="text-input"
                        placeholder="Your answer here"
                        onChange={(e) => handleChange(question.question, e.target.value)}
                      />
                    </div>
                  ))}
                  <h2>Logical Questions</h2>
                  {questions[0]?.logical?.map((question) => (
                    <div className="question-wrapper" key={question._id}>
                      <h3 className="question-text">{question.question}</h3>
                      <textarea
                        className="text-input"
                        placeholder="Your answer here"
                        onChange={(e) => handleChange(question.question, e.target.value)}
                      />
                    </div>
                  ))}
                  {/* <div className="text-center">
              <button type="submit" className="submit-button">Submit</button>
            </div> */}
                </form>
              ) :
                <div className="interview-caution">
                  <h5>Please read carefully</h5>
                  <ol>
                    <li>When you will click on the timer(given above) you will see list of interview questions and your timer will start automatically.</li>
                    <li>Try to complete your test in the predefinded estimate time. ({estimateTime} minutes) </li>
                    <li>When you will again click on the timer your test will be submitted automatically.</li>
                    <li>Please dont try to stop the time in between the test otherwise your test will be submitted as much you have done till that time.</li>
                  </ol>
                  <h6 className="regards"> Best! <br></br>Ultivic Technologies</h6>
                </div>
            }
            <Toaster />
          </section>
      }
    </>
  );
}

export default InterviewQuestions