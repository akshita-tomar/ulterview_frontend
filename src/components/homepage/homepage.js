import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import HomepageData from "./homepageData";

const HomePage = ({configurechange,setConfigurechange}) => {
  const navigate = useNavigate()
  const [openmodal, setOpenModal] = useState(false)
  const [questionType, setQuestionType] = useState("mcq");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answer, setAnswer] = useState("");
  const [holdChange, setHoldChange] = useState(0)





  const handleQuestionTypeChange = (type) => {
    setQuestionType(type);
  };



  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };




  const openTestModal = () => {
    setOpenModal(true)
  }

  const closeTestModal = () => {
    setOpenModal(false)
  }



  const handleAddQuestion = (e) => {
    e.preventDefault()
    console.log("correct answer--", correctAnswer)
    if (question === '') {
      toast.error("Please enter question.", {
        duration: 1300
      })
      return
   }

   if(questionType==='mcq'){
    const filteredOptions = options.filter(option => option.trim() !== "");
    if (filteredOptions.length < 4) {
      toast.error("Please enter all four options", {
        duration: 1300
      });
      return;
    }
  }
   

    let token = localStorage.getItem('token')
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "question": question,
      "options": options,
      "correctAnswer": correctAnswer,
      "answer": answer
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    switch (questionType) {
      case "mcq":

        fetch("http://localhost:8000/api/v1/addObjective", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            if (result.type === 'success') {
              setQuestion('')
              setOptions(["", "", "", ""]);
              setCorrectAnswer('')
              setHoldChange(prev => prev + 1)
            } else {
              toast.error(result.message)
            }

          })
          .catch((error) => console.error(error));
        break;

      case "subjective":

        fetch("http://localhost:8000/api/v1/addSubjective", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            if (result.type === 'success') {
              setQuestion('')
              setAnswer('')
              setHoldChange(prev => prev + 1)
            } else {
              toast.error(result.message)
            }
          })
          .catch((error) => console.error(error));
        break;

      case "logical":

        fetch("http://localhost:8000/api/v1/addLogical", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            if (result.type === 'success') {
              setQuestion('')
              setAnswer('')
              setHoldChange(prev => prev + 1)
            } else {
              toast.error(result.message)
            }
          })
          .catch((error) => console.error(error));
        break;

      default:
        break;
    }
  };



  return (
    <div className="homepage-outer-div">
      <div className="create-test-btn-wrapper">
        <button className="createtest-btn" onClick={openTestModal}>Create Test</button>
      </div>
      <HomepageData configurechange={configurechange} setConfigurechange={setConfigurechange} holdChange={holdChange} />
      {
        openmodal && (
          <div className="test-box">
            <div className="cross-sign" onClick={closeTestModal}> <b>  &#10005; </b></div>
            <div className="internal-testbox">
              <button onClick={() => handleQuestionTypeChange("mcq")} className="mcq-btn">
                MCQ
              </button>
              <button onClick={() => handleQuestionTypeChange("subjective")} className="subjective-btn">
                Subjective
              </button>
              <button onClick={() => handleQuestionTypeChange("logical")} className="logical-btn">
                Logical
              </button>
            </div>
            {questionType === "mcq" && (
              <div className="mcq-inputs">
                <input className="mcq-question" type="text" placeholder="Enter question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                {options.map((option, index) => (
                  <input className="mcq-options" key={index} type="text" placeholder={`Option ${index + 1}`} value={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
                ))}
                <label>Select correct answer:</label>
                <select value={correctAnswer} onChange={(e) => setCorrectAnswer(parseInt(e.target.value))}>
                  <option defaultChecked ></option>
                  {options.map((_, index) => (
                    <option key={index} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </div>
            )}
            {questionType === "subjective" && (
              <div className="subjective-inputs">
                <input type="text" placeholder="Enter subjective question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                <textarea className="testbox-textarea" type="text" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
              </div>
            )}
            {questionType === "logical" && (
              <div className="logical-inputs">
                <textarea type="text" className="testbox-textarea-logical" placeholder="Enter logical question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                <textarea className="testbox-textarea" type="text" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
              </div>
            )}
            {questionType && (
              <button onClick={handleAddQuestion} className="add-question-btn">
                Add Question
              </button>
            )}
          </div>
        )}
      <Toaster />
    </div>
  );
};

export default HomePage;

 



