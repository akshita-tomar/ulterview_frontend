import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import CreateTask from "../homepage/createTask";
import { MdEdit, MdDelete } from "react-icons/md";
import swal from "sweetalert";



const HomePage = () => {
  const [languages, setLanguages] = useState([]);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showAddlanguageModal, setShowAddlanguageModal] = useState(false)
  const [newlanguage, setNewLanguage] = useState('')
  const [showseries, setShowSeries] = useState(false)
  const [seriesOptions, setSeriesOptions] = useState(['easy', 'very easy', 'medium', 'hard', 'very hard'])
  const [series, setSeries] = useState('')
  const [showquestionFrom, setshowQuestionForm] = useState(false)
  const [language, setlanguage] = useState('')
  const [showcreteTasksection, setShowcreteTasksection] = useState(false)
  const [configurechange, setconfigureChange] = useState(0)
  const [showEditBox, setshowEditBox] = useState(false)
  const [languageId, setLanguageId] = useState('')
  const [holdLanguage, setHoldLanguage] = useState('')
  const navigate = useNavigate();


  useEffect(() => {
    fetchLanguages()
  }, [configurechange])




  const fetchLanguages = () => {
    let token = localStorage.getItem('token')
    if (!token) {
      navigate('/');
    }
    setSeries('')
    setShowcreteTasksection(true)
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
    setlanguage(mylanguage)
    let token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

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
        
        if (result.type === 'error') {
          toast.error(result.message)
        } else {
          setShowLanguageModal(false);
          setShowSeries(true)
        }
      })
      .catch((error) => console.error(error));

  };



  const handleEditLanguage2 = (id, language) => {
    let token = localStorage.getItem('token')
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "language": language
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`http://localhost:8000/api/v1/updateLanguage?languageId=${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => console.error(error));

  }



  const handleDeleteLanguage = (id) => {
    console.log("id--->", id)
    let token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`http://localhost:8000/api/v1/deleteLanguage?languageId=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.type === 'error') {
          toast.error(result.message)
        } else {
          setconfigureChange((prev) => prev + 1)
          swal("language deleted successfully!", "", "success");
        }
      })
      .catch((error) => console.error(error));
  }




  const updateLanguage=()=>{
    let token = localStorage.getItem('token')
    if(!token){
      navigate('/')
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+token);
    
    const raw = JSON.stringify({
      "language": holdLanguage
    });
    
    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch(`http://localhost:8000/api/v1/updateLanguage?languageId=${languageId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if(result.type==='error'){
          toast.error(result.message)
        }else{
          toast.success(result.message)
          setshowEditBox(false)
          setconfigureChange(prev=>prev + 1)
        }
      })
      .catch((error) => console.error(error));
    }
    


  const handleEditLanguage = (id, language) => {
    setHoldLanguage(language)
    setLanguageId(id)
    setshowEditBox(true)
    setShowLanguageModal(false)
  }



  const handleAddNewLanguage = () => {
    setShowLanguageModal(false)
    setShowAddlanguageModal(true)
  }

  const closeAddlanguageModal = () => {
    setShowAddlanguageModal(false)
    setShowLanguageModal(true)
   
  }

  const showQuestion = (series) => {
    localStorage.setItem('series',series)
    setSeries(series);
    setShowSeries(false);
    setShowLanguageModal(false);
    setshowQuestionForm(true);

  };

  const closeseries = () => {
    setShowSeries(false)
    setShowLanguageModal(true)
  }

  const closeAddlanguageModal2 =()=>{
    setshowEditBox(false)
    setShowLanguageModal(true)
  }






  return (
    <>
      <div className="sidebar">
        <button className="sidebar-button" onClick={fetchLanguages}>Create Task</button>
        <Toaster />
      </div>
      {
        showcreteTasksection && (
          <>

            {showLanguageModal && (
              <>
                {/* <div className="chooselanguage-heading-sidebar">Select language to create task</div> */}
                <div className="language-modal">
                  {languages.map((language) => (

                    <div key={language.id} className="language-card">
                      <div className="card-inner"><MdEdit onClick={() => handleEditLanguage(language._id, language.language)} /> <MdDelete onClick={() => handleDeleteLanguage(language._id)} /> </div>
                      <div className="text-space" onClick={() => handleLanguageClick(language.language)}> {language.language}</div>
                    </div>
                  ))}
                  <button className="add-more-languages-btn" onClick={handleAddNewLanguage}>Add new</button>
                </div>
              </>
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
              showEditBox && (
                <div className="modal-overlay">
                  <div className="modal">
                    <div><h3>Update language</h3></div>
                    <div className="cross-sign" onClick={closeAddlanguageModal2}>  &#10005;</div>

                    <div className="input-field">
                      <input
                        defaultValue={holdLanguage}
                        type="text"
                        placeholder="language"
                        onChange={event => setHoldLanguage(event.target.value)}
                      />
                      <button onClick={updateLanguage}>Add</button>
                    </div>
                    <Toaster />
                  </div>
                </div>
              )
            }
            {showquestionFrom && (

              <CreateTask series={series} language={language} />
            )}
          </>)}

    </>

  );
}
export default HomePage;

 



