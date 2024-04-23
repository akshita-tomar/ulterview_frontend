import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import HomepageData from "../homepage/homepageData";


const Sidebar = () => {
  const [languages, setLanguages] = useState([]);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showAddlanguageModal, setShowAddlanguageModal] = useState(false)
  const [newlanguage, setNewLanguage] = useState('')
  const [showseries, setShowSeries] = useState(false)
  const [seriesOptions, setSeriesOptions] = useState(['easy', 'very easy', 'medium', 'hard', 'very hard'])
  const [series, setSeries] = useState('')
  const [showquestionFrom, setshowQuestionForm] = useState(false)
  const navigate = useNavigate();


  const fetchLanguages = () => {
    let token = localStorage.getItem('token')
    if (!token) {
      navigate('/');
    }
   
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("http://localhost:8000/api/v1/getAllLanguages", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLanguages(result.data);
        setShowLanguageModal(true);
      })
      .catch((error) => console.error(error));
  };






  const addLanguages = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token')
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "language": newlanguage
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:8000/api/v1/addLanguage", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.type === 'error') {
          toast.error(result.message, {
            duration: 1000
          })
        } else {
          setShowAddlanguageModal(false)
          fetchLanguages();
        }
      })
      .catch((error) => console.error(error));
  }


  const handleLanguageClick = (language) => {
    let mylanguage = language
    console.log("getting language 0-----",mylanguage)
    let token = localStorage.getItem('token')
    if(!token){
      navigate('/')
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+token);

    const raw = JSON.stringify({
      "language": mylanguage
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:8000/api/v1/UpdateUserLanguage", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('result00000000',result)
        if(result.type==='error'){
          toast.error(result.message)
        }else{
          setShowLanguageModal(false);
          setShowSeries(true)
        }
      })
      .catch((error) => console.error(error));

  };


  const handleAddNewLanguage = () => {
    setShowLanguageModal(false)
    setShowAddlanguageModal(true)
  }

  const closeAddlanguageModal = () => {
    setShowLanguageModal(true)
    setShowAddlanguageModal(false)
  }

  const showQuestion = (series) => {
    setSeries(series);
    setShowSeries(false);
    setShowLanguageModal(false);
    setshowQuestionForm(true);
    console.log("series ---", series);
  };

  const closeseries = () => {
    setShowSeries(false)
    setShowLanguageModal(true)
  }


  console.log("language model --", languages)

  return (
    <>
      <div className="sidebar">
        <button className="sidebar-button" onClick={fetchLanguages}>Create Task</button>
        <button className="sidebar-button">Show Tasks</button>
        <Toaster />
      </div>

      {showLanguageModal && (

        <div className="language-modal">
          {languages.map((language) => (
            <div key={language.id} className="language-card" onClick={() => handleLanguageClick(language.language)}>
              {language.language}
            </div>
          ))}
          <button className="add-more-languages-btn" onClick={handleAddNewLanguage}>Add new</button>
        </div>

      )}
      {
        showAddlanguageModal && (

          <div className="modal-overlay">
            <div className="modal">
              <div><h3>Add another language</h3></div>
              <div className="cross-sign" onClick={closeAddlanguageModal}>  &#10005;</div>

              <div className="input-field">
                <input
                  type="text"
                  placeholder="language"
                  onChange={event => setNewLanguage(event.target.value)}
                />
                <button onClick={addLanguages}>Add</button>
              </div>
              <Toaster />
            </div>
          </div>
        )}
      {showseries && (
        <div className="series-modal-overlay">
          <div className="series-modal">
            <div className="close-series" onClick={closeseries}> &#10005;</div>
            <div className="modal-header">
              <h3>Select Series</h3>
            </div>
            <div className="modal-body">
              {seriesOptions.map((series, index) => (
                <div key={index} className={`series-option series-${series.toLowerCase()}`} onClick={() => showQuestion(series)}>
                  <div> {series}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {
        showquestionFrom && (

          <HomepageData series={series} />
        )
      }
    </>

  );
};

export default Sidebar;


