import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { decryptId } from "../../utils/encryption"
import logo from "../../assets/ultivic-logo.png"


const HrRoundTest = () => {
  let { id } = useParams()
  var candidateID
  const [showQuestions, setShowQuestions] = useState(false)
  const [questions, setQuestions] = useState([])
  const url = process.env.REACT_APP_BACKEND_URL
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [candidateuserId, setCandidateUserId] = useState('')
  const [isCompleted,setIsCompleted]=useState('')
  const [linkClickedCount,setLinkClickedCount]=useState()
  const [change,setChange]=useState(0)
  const [updatedAnswers, setUpdatedAnswers] = useState({
    hrRoundAnswers: [],
  });



  const handleChange = (questionId, quesiton, value) => {
    setUpdatedAnswers((prev) => {
      const newObjectiveAnswers = prev.hrRoundAnswers.filter(ans => ans._id !== questionId);
      newObjectiveAnswers.push({ _id: questionId, question: quesiton, answer: value });
      return { ...prev, hrRoundAnswers: newObjectiveAnswers };
    })
  }



  useEffect(() => {
    const cleanedEncryptedId = id.startsWith(':') ? id.slice(1) : id;
    const decryptedId = decryptId(decodeURIComponent(cleanedEncryptedId));
    // console.log('decrypted id --', decryptedId)
    candidateID = decryptedId
    setCandidateUserId(decryptedId)
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch(`${url}getTestDetails?candidateId=${decryptedId}`, requestOptions)
      .then((response) => response.json())
      .then((result) =>{
        // console.log('result ------------',result)
        setIsCompleted(result.testStatus)
        setLinkClickedCount(result.linkedClickedCount)
      })
      .catch((error) => console.error(error));
  }, [id,change]);


  useEffect(() => {
    let intervalId;
    if (startTime && !endTime) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [startTime, endTime]);



  const handleStart = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "candidateId": candidateuserId
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}startHrRound`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        if (result.type === 'success') {
          const requestOptions = {
            method: "GET",
            redirect: "follow"
          };

          fetch(`${url}getHrRoundInterviewQues?candidateId=${candidateuserId}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
              // console.log(result)
              if (result.type === 'success') {
                setQuestions(result.questions)
                setStartTime(Date.now());
                setShowQuestions(true)
              }
            })
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => console.error(error));
  }


  const handleSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "candidateId": candidateuserId,
      "answers": updatedAnswers
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}addHrRoundCandidateAnswer`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        if(result.type==='success'){
          setChange(prev=>prev+1)
        }
      })
      .catch((error) => console.error(error));
  }



  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r' ||e.key === 'C' )) {
        e.preventDefault();
      }};

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);


  const handleCopy = (e) => {
    e.preventDefault();
  };

  const handlePaste = (e)=>{
    e.preventDefault()
  }

  return (
    <div className="wrapper-hr-round-caution">
      {
        isCompleted === 'completed' || isCompleted === 'selected'||isCompleted === 'pending' || isCompleted === 'rejected' || linkClickedCount>0 ?
          <div className="regards-message">
            <h3>Your interview result will be shared with you as soon as possible. <br></br> Thankyou!</h3>
          </div> :
          <div>
            {
              showQuestions === false ?
                <>
                  <div className="interview-caution">
                    <h5>Please read carefully</h5>
                    <ol>
                      <li>When you will click on the start button(given bellow) you will see list of interview questions and your timer will start automatically.</li>
                      <li>Try to complete your test in the predefinded estimate time. ( minutes) </li>
                      <li>When you will complete the test click on the submit button.</li>
                      <li>You will get list of objective, subjective as well as logical questions</li>
                      <li>link is one time openable you can not access it again after submitting so please be carefull during test.</li>
                    </ol>
                    <h6 className="regards"> Best! <br></br>Ultivic Technologies</h6>
                  </div>
                  <div className="text-center mb-4">
                    <button className='timer-start' onClick={handleStart}>Start</button>
                  </div>
                </> :
                <div>
                  <div className="Interview_header">
                    <div className="d-flex align-items-center gap-3 Interview_header_content">
                      <img src={logo} height={"40px"} width={"120px"} className="logo_img" />
                      <h3>Good Luck for your Interview!</h3>
                    </div>
                    <div className="timer_outer">
                      {formatTime(elapsedTime)}
                    </div>
                  </div>
                  {
                    questions?.map((ele, index) => {
                      return (
                        <>
                          <div className="question-wrapper" key={ele._id}>
                            <h3 onCopy={handleCopy}  className="question-text">{ele.question}</h3>
                            <textarea
                              className="text-input form-control"
                              placeholder="Your answer here"
                              onChange={(e) => handleChange(ele._id, ele.question, e.target.value)}
                              onPaste={handlePaste}
                            />
                          </div>
                        </>
                      )
                    })
                  }
                  <div className="text-center">
                    <button type="submit" className="submit-button" onClick={handleSubmit}  >Submit</button>
                  </div>
                </div>
            }
          </div>
      }

    </div>
  )
}
export default HrRoundTest