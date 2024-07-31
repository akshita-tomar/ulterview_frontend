import { decryptId } from "../../utils/encryption";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../header/ultivic-logo.png"
import { toast, Toaster } from "react-hot-toast";


const InterviewQuestions = () => {  
  const { id } = useParams();
  let url = process.env.REACT_APP_BACKEND_URL
  var candidateID
  const [decryptedCandidateId, setDecryptedCandidateId] = useState()
  const [questions, setQuestions] = useState([])
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTest, setStartTest] = useState(false)
  const [estimateTime, setEstimatedTime] = useState()
  const [checkComplete, setCheckComplete] = useState('')
  const [ConfigureHandleChange, setConfigureHandleChange] = useState('content')
  const [linkClickedCount,setLinkClickedCount]= useState(0)
  const [updatedAnswers, setUpdatedAnswers] = useState({
    objective: [],
    subjective: [],
    logical: []
  });
  


  const handleChange = (questionId, quesiton, value, type,options) => {
    setUpdatedAnswers((prev) => {
      if (type === 'objective') {
        const newObjectiveAnswers = prev.objective.filter(ans => ans._id !== questionId);
        newObjectiveAnswers.push({ _id: questionId, question: quesiton,options:options, correctAnswer: value });
        return { ...prev, objective: newObjectiveAnswers };
      } else if (type === 'subjective') {
        const newSubjectiveAnswers = prev.subjective.filter(ans => ans._id !== questionId);
        newSubjectiveAnswers.push({ _id: questionId, question: quesiton, answer: value });
        return { ...prev, subjective: newSubjectiveAnswers };
      } else if (type === 'logical') {
        const newObjectiveAnswers = prev.logical.filter(ans => ans._id !== questionId);
        newObjectiveAnswers.push({ _id: questionId, question: quesiton, answer: value });
        return { ...prev, logical: newObjectiveAnswers };
      }
      return prev;
    });
  };



  useEffect(() => {
    const cleanedEncryptedId = id.startsWith(':') ? id.slice(1) : id;
    const decryptedId = decryptId(decodeURIComponent(cleanedEncryptedId));
    console.log('decrypted id --------',decryptedId)
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
        // console.log("get interview details ----------",result)
        setEstimatedTime(result.time)
        setCheckComplete(result.completedStatus)
        setQuestions(result.questions)
        
      })
      .catch((error) => console.error(error));
  }, [id])


  // const handleChange = (id, value) => {
  //   setAnswers({
  //     ...answers,
  //     [id]: value
  //   });
  // };


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
    // if (!startTime) {
      
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
            if(result.linkClickedCount>1){             
              setLinkClickedCount((prev)=>prev+1)
            }else{
              setStartTime(Date.now());
              setStartTest(true)
            }}
        })
        .catch((error) => console.error(error));
    // } 
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "candidateId": decryptedCandidateId,
      "quesAns": updatedAnswers,
      "endTime":endTime
    });

    const requestOptions = {  
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}addCandidateAnswers`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.type === 'success') {
          setEndTime(Date.now());
          toast.success(result.message, {
            duration: 3000
          })
          setConfigureHandleChange('')
        }
      })
      .catch((error) => console.error(error));
  }


  useEffect(() => {
    // const handleBeforeUnload = (e) => {
    //   // e.preventDefault()
    //   setEndTime(Date.now())
    //   handleSubmit(e)
    // };

    const handleKeyDown = (e) => {
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r' ||e.key === 'C' )) {
        e.preventDefault();
      }};

    const handleContextMenu = (e) => {
      // console.log("inside the handle context")
      // e.preventDefault();
    };

    // window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      // window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleCopy = (e) => {
   
    e.preventDefault();
  };

  const handlePaste =(e)=>{
   
    e.preventDefault()
  }


  return (
    <>
     {
        checkComplete === 'completed' || ConfigureHandleChange === '' ||linkClickedCount >1?
          <div className="regards-message">
            <h3>Your interview result will be shared with you as soon as possible. <br></br> Thankyou!</h3>
          </div> :
          <section className="question-form">
            {
              startTest && (
                <div className="Interview_header">
                  <div className="d-flex align-items-center gap-3 Interview_header_content">
                    <img src={logo} height={"40px"} width={"120px"} className="logo_img" />
                    <h3>Good Luck for your Interview!</h3>
                  </div>
                  <div className="timer_outer">
                    {formatTime(elapsedTime)}
                    {/* <MdOutlineTimer className={startTest === true ? 'timer-start' : 'timer'} alt="Logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }} /> */}
                  </div>
                </div>
              )}
            {
              startTest === true ? (
                <form>
                  <h2 >Objective Questions</h2>
                  {questions[0]?.objective?.map((question) => (
                    <div className="question-wrapper" key={question._id}>
                      <h3 onCopy={handleCopy} className="question-text">{question.question}</h3>
                      <div className="options-wrapper">
                        {question.options.map((option, index) => (
                          <label className="option-label" key={index}>
                            <input
                              type="radio"
                              name={`question-${question._id}`}
                              value={option}
                              key={index}
                              onChange={(e) => handleChange(question._id, question.question, index + 1, 'objective', question.options)}
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
                      <h3 onCopy={handleCopy} className="question-text">{question.question}</h3>
                      <textarea
                        className="text-input form-control"
                        placeholder="Your answer here"
                        onChange={(e) => handleChange(question._id, question.question, e.target.value, 'subjective')}
                        onPaste={handlePaste}
                      />
                    </div>
                  ))}
                  <h2>Logical Questions</h2>
                  {questions[0]?.logical?.map((question) => (
                    <div className="question-wrapper" key={question._id}>
                      <h3 onCopy={handleCopy} className="question-text">{question.question}</h3>
                      <textarea
                        className="text-input form-control"
                        placeholder="Your answer here"
                        onChange={(e) => handleChange(question._id, question.question, e.target.value, 'logical')}
                        onPaste={handlePaste}
                      />
                    </div>
                  ))}
                  <div className="text-center">
                    <button type="submit" className="submit-button" onClick={handleSubmit} >Submit</button>
                  </div>
                </form>
              ) :
                <>
                  <div className="interview-caution">
                    <h5>Please read carefully</h5>
                    <ol>
                      <li>When you will click on the start button(given bellow) you will see list of interview questions and your timer will start automatically.</li>
                      <li>Try to complete your test in the predefinded estimate time. ({estimateTime} minutes) </li>
                      <li>When you will complete the test click on the submit button.</li>
                      <li>You will get list of objective, subjective as well as logical questions</li>
                      <li>link is one time openable you can not access it again after submitting so please be carefull during test.</li>
                    </ol>
                    <h6 className="regards"> Best! <br></br>Ultivic Technologies</h6>
                  </div>
                  <div className="text-center mb-4">
                  <button onClick={handleLogoClick} className='timer-start'>Start</button>
                  </div>
                </>
            }
            <Toaster />
          </section>
      }

    </>
  );
}

export default InterviewQuestions