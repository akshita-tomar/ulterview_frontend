import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md"



const CreateTask = () => {

  const navigate = useNavigate()
  const [questionType, setQuestionType] = useState(localStorage.getItem('questionType')?localStorage.getItem('questionType'):'mcq');
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answer, setAnswer] = useState("");
  const [checkChange, setCheckChange] = useState(0)

  let series = localStorage.getItem('series')


  const url = process.env.REACT_APP_BACKEND_URL



  const handleQuestionTypeChange = (type) => {
    setQuestionType(type);
  };



  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };



  const handleAddQuestion = (e) => {
    e.preventDefault()
    // console.log("correct answer--", correctAnswer)
    if (question === '') {
      toast.error("Please enter question.", {
        duration: 1300
      })
      return
    }

    if (questionType === 'mcq') {
      const filteredOptions = options.filter(option => option.trim() !== "");
      if (filteredOptions.length < 4) {
        toast.error("Please enter all four options", {
          duration: 1300
        });
        return;
      }
    }


    let token = localStorage.getItem('token')
    let seriesId = localStorage.getItem('seriesId')
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "question": question,
      "options": options,
      "correctAnswer": correctAnswer,
      "answer": answer,

    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    switch (questionType) {
      case "mcq":

        fetch(`${url}addObjective?seriesId=${seriesId}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            // console.log(result)
            if (result.type === 'success') {
              setQuestion('')
              setOptions(["", "", "", ""]);
              setCorrectAnswer('')
              setCheckChange(prev => prev + 1)
              navigate('/updateQuestions')
            } else {
              toast.error(result.message)
            }

          })
          .catch((error) => console.error(error));
        break;

      case "subjective":

        fetch(`${url}addSubjective?seriesId=${seriesId}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            // console.log(result)
            if (result.type === 'success') {
              setQuestion('')
              setAnswer('')
              setCheckChange(prev => prev + 1)
              navigate('/updateQuestions')
            } else {
              toast.error(result.message)
            }
          })
          .catch((error) => console.error(error));
        break;

      case "logical":

        fetch(`${url}addLogical?seriesId=${seriesId}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            // console.log(result)
            if (result.type === 'success') {
              setQuestion('')
              setAnswer('')
              setCheckChange(prev => prev + 1)
              navigate('/updateQuestions')
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




  useEffect(() => {
    let series = localStorage.getItem('seriesId')
    let token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    fetch(`${url}getQuestionsSeriesWise?seriesId=${series}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        if (result.type === 'error') {
          // toast.error(result.message)
        }
      })
      .catch((error) => console.error(error));

  }, [series, checkChange])


   const handleBackClick = () => {
        navigate('/updateQuestions')
    }


    const getButtonClass = (type) => {
      return questionType === type ? "active-btn" : "";
    };
  



  return (
    <section className="createtask_wrapper wrapper">
    <div className="homepage-outer-div">
      <div className="back-btn me-2" onClick={handleBackClick}>< MdOutlineArrowBack /></div>
      {
        // openmodal || series && (
        series && (
          <>
           
            {/* <div className="headings"><h2 className="create-series-heading"> Create test for {series} ({language}) </h2>
            </div> */}
            
            <div className="test-box">

              {/* <div className="cross-sign" onClick={closeTestModal}> <b>  &#10005; </b></div> */}
              <div className="internal-testbox">
              <button onClick={() => handleQuestionTypeChange("mcq")} className={`mcq-btn ${getButtonClass("mcq")}`}>
                Objective
              </button>
              <button onClick={() => handleQuestionTypeChange("subjective")} className={`subjective-btn ${getButtonClass("subjective")}`}>
                Subjective
              </button>
              <button onClick={() => handleQuestionTypeChange("logical")} className={`logical-btn ${getButtonClass("logical")}`}>
                Logical
              </button>
            </div>
              {questionType === "mcq" && (
                <div className="mcq-inputs">
                  <input className="mcq-question form-control mt-3" type="text" placeholder="Enter question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                  {options?.map((option, index) => (
                    <input className="mcq-options form-control" key={index} type="text" placeholder={`Option ${index + 1}`} value={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
                  ))}
                  <label className="new_series_label">Select correct answer:</label>
                  <select className="form-control mt-3" value={correctAnswer} onChange={(e) => setCorrectAnswer(parseInt(e.target.value))}>
                    <option defaultChecked ></option>
                    {options?.map((_, index) => (
                      <option key={index} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                </div>
              )}
              {questionType === "subjective" && (
                <div className="subjective-inputs">
                  <input type="text" className="form-control mt-3" placeholder="Enter subjective question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                  <textarea className="testbox-textarea form-control mt-3" type="text" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                </div>
              )}
              {questionType === "logical" && (
                <div className="logical-inputs mt-4">
                  <textarea type="text" className="testbox-textarea-logical form-control mt-2" placeholder="Enter logical question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                  <textarea className="testbox-textarea form-control mt-4" type="text" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                </div>
              )}
              {questionType && (
                <button onClick={handleAddQuestion} className="add-question-btn cmn_btn_color ">
                  Add Question
                </button>
              )}
            </div></>
        )}
      <Toaster />
    </div>

    </section>
  );
};

export default CreateTask;
