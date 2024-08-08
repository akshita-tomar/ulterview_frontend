import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { setQuestion, setOptions, setCorrectAnswer, setAnswer, addQuestion } from '../../utils/redux/homepageSlice/createTaskSlice'

const CreateTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [questionType, setQuestionType] = useState(localStorage.getItem('questionType') ? localStorage.getItem('questionType') : 'mcq');
  const { question, options, correctAnswer, answer, status, error } = useSelector((state) => state.CREATE_TASK);

  const handleQuestionTypeChange = (type) => {
    setQuestionType(type);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    dispatch(setOptions(newOptions));
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();

    if (question === '') {
      toast.error("Please enter question.", { duration: 1300 });
      return;
    }

    if (questionType === 'mcq') {
      const filteredOptions = options.filter(option => option.trim() !== "");
      if (filteredOptions.length < 4) {
        toast.error("Please enter all four options", { duration: 1300 });
        return;
      }
    }

    dispatch(addQuestion({ questionType, question, options, correctAnswer, answer }))
      .unwrap()
      .then((result) => {
        toast.success('Question added successfully!');
        navigate('/updateQuestions');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleBackClick = () => {
    navigate('/updateQuestions');
  };

  const getButtonClass = (type) => {
    return questionType === type ? "active-btn" : "";
  };

  return (
    <section className="createtask_wrapper wrapper">
      <div className="homepage-outer-div">
        <div className="back-btn me-2" onClick={handleBackClick}>< MdOutlineArrowBack /></div>
        {localStorage.getItem('series') && (
          <>
            <div className="test-box">
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
                  <input className="mcq-question form-control mt-3" type="text" placeholder="Enter question" value={question} onChange={(e) => dispatch(setQuestion(e.target.value))} />
                  {options.map((option, index) => (
                    <input className="mcq-options form-control" key={index} type="text" placeholder={`Option ${index + 1}`} value={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
                  ))}
                  <label className="new_series_label">Select correct answer:</label>
                  <select className="form-control mt-3" value={correctAnswer} onChange={(e) => dispatch(setCorrectAnswer(parseInt(e.target.value)))}>
                    <option defaultChecked ></option>
                    {options.map((_, index) => (
                      <option key={index} value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                </div>
              )}
              {questionType === "subjective" && (
                <div className="subjective-inputs">
                  <input type="text" className="form-control mt-3" placeholder="Enter subjective question" value={question} onChange={(e) => dispatch(setQuestion(e.target.value))} />
                  <textarea className="testbox-textarea form-control mt-3" type="text" placeholder="Enter answer" value={answer} onChange={(e) => dispatch(setAnswer(e.target.value))} />
                </div>
              )}
              {questionType === "logical" && (
                <div className="logical-inputs mt-4">
                  <textarea type="text" className="testbox-textarea-logical form-control mt-2" placeholder="Enter logical question" value={question} onChange={(e) => dispatch(setQuestion(e.target.value))} />
                  <textarea className="testbox-textarea form-control mt-4" type="text" placeholder="Enter answer" value={answer} onChange={(e) => dispatch(setAnswer(e.target.value))} />
                </div>
              )}
              {questionType && (
                <button onClick={handleAddQuestion} className="add-question-btn cmn_btn_color ">
                  Add Question
                </button>
              )}
            </div>
          </>
        )}
        <Toaster />
      </div>
    </section>
  );
};

export default CreateTask;
