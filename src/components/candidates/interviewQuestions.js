import { decryptId } from "../../utils/encryption";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../header/ultivic-logo.png"
import { MdOutlineTimer } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";

const InterviewQuestions = () => {
  const { id } = useParams();
  let url = 'http://localhost:8000/api/v1/'
  // const url = 'http://16.171.41.223:8000/api/v1/'

  var idToFind
  // const [decryptedCandidateId, setDecryptedCandidateId] = useState(null)
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({});
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  



  useEffect(() => {
    const cleanedEncryptedId = id.startsWith(':') ? id.slice(1) : id;
    const decryptedId = decryptId(decodeURIComponent(cleanedEncryptedId));
    idToFind = decryptedId
    // setDecryptedCandidateId(decryptedId);
  }, [id]);


  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    fetch(`${url}getInterviewQuestions?candidateId=${idToFind}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setQuestions(result.questions)
        toast.success("Test will be automatically submit when you will stop the timer",{
          duration:7000
        })
      })
      .catch((error) => console.error(error));
  }, [id])


  const handleChange = (id, value) => {
    setAnswers({
      ...answers,
      [id]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
      setStartTime(Date.now());
    } else {
      setEndTime(Date.now());
      submitForm();
    }
  };

  const submitForm = () => {
    console.log('Form submitted');
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  console.log('answers----------', answers)


  return (
    <section className="question-form">
      <div className="Interview_header">
        <div className="d-flex align-items-center gap-3">
          <img src={logo} height={"40px"} width={"120px"} className="logo_img" />
          <h3>Good Luck for your Interview!</h3>
        </div>
        <div className="timer_outer">
          {/* {startTime && ( */}
          {formatTime(elapsedTime)}
          {/* )} */}
          <MdOutlineTimer className="timer" alt="Logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <form className="" onSubmit={handleSubmit}>
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
                    onChange={(e) => handleChange(question._id, index + 1)}
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
              onChange={(e) => handleChange(question._id, e.target.value)}
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
              onChange={(e) => handleChange(question._id, e.target.value)}
            />
          </div>
        ))}
        <div className="text-center">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
      <Toaster />
    </section>
  );
}

export default InterviewQuestions