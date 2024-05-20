import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { MdEdit, MdDelete } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";


const HomePage = () => {
  const [languages, setLanguages] = useState([]);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showAddlanguageModal, setShowAddlanguageModal] = useState(false)
  const [newlanguage, setNewLanguage] = useState('')
  const [showseries, setShowSeries] = useState(false)
  const [seriesOptions, setSeriesOptions] = useState([])
  const [series, setSeries] = useState('')
  const [showcreteTasksection, setShowcreteTasksection] = useState(false)
  const [configurechange, setconfigureChange] = useState(0)
  const [showEditBox, setshowEditBox] = useState(false)
  const [languageId, setLanguageId] = useState('')
  const [holdLanguage, setHoldLanguage] = useState('')
  const [openAddnewseriesModal, setopenAddnewseriesModal] = useState(false)
  const [holdNewSeries, setHoldNewSeries] = useState('')
  const [configureSeriesChange, setConfigureSeriesChange] = useState(0)
  const [openEditseriesModal, setOpenEditseriesModal] = useState(false)
  const [seriesId, setSeriesId] = useState('')
  const [updatedSeries, setUpdatedSeries] = useState('')
  const navigate = useNavigate();
  let token = localStorage.getItem('token')

  const url = 'http://localhost:8000/api/v1/'
  // const url = 'http://16.171.41.223:8000/api/v1/'


  useEffect(() => {
    let token = localStorage.getItem('token')
    let languageId = localStorage.getItem('languageId')
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url}/getAllSeries?languageId=${languageId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("series---", result)
        if (result.type === 'success') {
          setSeriesOptions(result.allSeries)
        }
      })
      .catch((error) => console.error(error));
  }, [configureSeriesChange])



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

    fetch(`${url}getAllLanguages`, requestOptions)
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

    fetch(`${url}addLanguage`, requestOptions)
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


  const handleLanguageClick = (language, id) => {
    let mylanguage = language
    localStorage.setItem("language", language)
    localStorage.setItem('languageId', id)

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

    fetch(`${url}UpdateUserLanguage`, requestOptions)
      .then((response) => response.json())
      .then((result) => {

        if (result.type === 'error') {
          toast.error(result.message)
        } else {
          setShowLanguageModal(false);
          setConfigureSeriesChange(prev => prev + 1)
          setShowSeries(true)
        }
      })
      .catch((error) => console.error(error));

  };




  const handleDeleteLanguage = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteLanguageYes(id)

      } else {
        // handleDeleteLanguageYes(id)
      }
    });
  }



  const handleDeleteLanguageYes = (id) => {

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

    fetch(`${url}deleteLanguage?languageId=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.type === 'error') {
          toast.error(result.message)
        } else {
          setconfigureChange((prev) => prev + 1)
        }
      })
      .catch((error) => console.error(error))
  }





  const updateLanguage = () => {

    if (!token) {
      navigate('/')
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "language": holdLanguage
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}updateLanguage?languageId=${languageId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.type === 'error') {
          toast.error(result.message)
        } else {
          toast.success(result.message)
          setshowEditBox(false)
          setconfigureChange(prev => prev + 1)
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

  const showQuestion = (seriesId) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url}getSeries?seriesId=${seriesId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.type === 'success') {
          localStorage.setItem('series', result.series.seriesName)
          localStorage.setItem('seriesId', result.series._id)
          setSeries(result.series.seriesName);
          setShowSeries(false);
          setShowLanguageModal(false);
          if (localStorage.getItem('role') === 'DEVELOPER') {
            navigate('/updateQuestions')
          } 
          if(localStorage.getItem('role'==='HR')){
            navigate('/candidates')
          }
        }
      })
      .catch((error) => console.error(error));
  };




  const AddNewSeries = (e) => {
    e.preventDefault()
    let token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "seriesName": holdNewSeries
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}createSeries`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.type === 'success') {
          setConfigureSeriesChange(prev => prev + 1)
          setopenAddnewseriesModal(false)
        }

      })
      .catch((error) => console.error(error));
  }



  const delteSeries = (id, seriesName) => {
    Swal.fire({
      title: "Are you sure to delete this series?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        delteSeriesyes(id, seriesName)
      } })}

  const delteSeriesyes = (id, seriesName) => {
    let token = localStorage.getItem('token')
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url}deleteSeries?seriesId=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setConfigureSeriesChange(prev => prev + 1)
        // swal(seriesName + " deleted successfully!", "", "success");
      })
      .catch((error) => console.error(error));
  }



  const AddEditSeries = () => {
    console.log("series id -----", seriesId)
    let token = localStorage.getItem('token')
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "updatedSeries": updatedSeries
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}updateSeries?updateSeriesId=${seriesId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.type === 'success') {
          console.log('here--', result)
          setConfigureSeriesChange(prev => prev + 1)
          setOpenEditseriesModal(false)}
      })
      .catch((error) => console.error(error));
  }


  const handleEditSeries = (seriesName, seriesId) => {
    setSeriesId(seriesId)
    setSeries(seriesName)
    setOpenEditseriesModal(true)
  }

  const handleCloseEditSeries = () => {
    setOpenEditseriesModal(false)
  }

  const closeseries = () => {
    setShowSeries(false)
    setShowLanguageModal(true)
  }

  const closeAddlanguageModal2 = () => {
    setshowEditBox(false)
    setShowLanguageModal(true)
  }

  const openAddseries = () => {
    setopenAddnewseriesModal(true)
  }

  const handlecloseAddseriesModal = () => {
    setopenAddnewseriesModal(false)
  }


  return (
    <>
      <div className="sidebar">
        <button className="sidebar-button" onClick={fetchLanguages}>Questionnaire</button>
        <Toaster />
      </div>
      {showcreteTasksection && (
        <>
          {showLanguageModal && (
            <div className="language-modal">
              {languages?.map((language) => (
                <div key={language.id} className="language-card">
                  {localStorage.getItem('role') === 'DEVELOPER' ? (
                    <div className="card-inner"><MdEdit onClick={() => handleEditLanguage(language._id, language.language)} /> <MdDelete onClick={() => handleDeleteLanguage(language._id)} /> </div>
                  ) : null}
                  <div className="text-space" onClick={() => handleLanguageClick(language.language, language._id)}> {language.language}</div>
                </div>
              ))}{
                localStorage.getItem('role') === 'DEVELOPER' ? (
                  <button className="add-more-languages-btn" onClick={handleAddNewLanguage}>Add new</button>
                ) : null}
            </div>)}

          <Modal show={showAddlanguageModal} onHide={closeAddlanguageModal} backdrop="static" keyboard={false} className="modal-inner" >
            <Modal.Header closeButton>
              <Modal.Title>Add language</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input required type="text" placeholder="language" onChange={event => setNewLanguage(event.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeAddlanguageModal}> Close </Button>
              <Button onClick={addLanguages} variant="primary">Add</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showEditBox} onHide={closeAddlanguageModal2} backdrop="static" keyboard={false} className="modal-inner" >
            <Modal.Header closeButton>
              <Modal.Title>Update language</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input required defaultValue={holdLanguage} type="text" onChange={event => setHoldLanguage(event.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeAddlanguageModal2}> Close</Button>
              <Button onClick={updateLanguage} variant="primary">Update</Button>
            </Modal.Footer>
          </Modal>
          {/* ****** Series */}
          {showseries && (
            <div className="series-modal-overlay">
              <div className="series-modal">
                <div className="close-series" onClick={closeseries}> &#10005;</div>
                <div className="modal-header">
                  <h3>Select Series</h3>
                </div>
                <div className="modal-body">{
                  localStorage.getItem('role') === 'DEVELOPER' ? (
                    <div className="series-option-new" onClick={openAddseries} >Add new series</div>
                  ) : null }
                  {seriesOptions.map((series, index) => (
                    <>
                      <div className={series.status === 'pending' ? 'series-outer-box-pending' : "series-outer-box"}>
                        {localStorage.getItem('role') === 'DEVELOPER' ? (
                          <>
                            <MdEdit onClick={() => handleEditSeries(series.seriesName, series._id)} /> <MdDelete onClick={() => delteSeries(series._id, series.seriesName)} />
                          </>
                        ) : null}
                        <div key={index} className="series-option" onClick={() => showQuestion(series._id)}> {series.seriesName} ({series.status})</div>
                      </div> <br></br></>
                  ))}
                </div>
              </div>
            </div>
          )}
          <Modal show={openAddnewseriesModal} onHide={handlecloseAddseriesModal} backdrop="static" keyboard={false} className="modal-inner" >
            <Modal.Header closeButton>
              <Modal.Title>Add new series</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input required className="input-field" type="text" placeholder="Enter new series" onChange={event => setHoldNewSeries(event.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handlecloseAddseriesModal}>Close </Button>
              <Button onClick={AddNewSeries} variant="primary">Add</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={openEditseriesModal} onHide={handleCloseEditSeries} backdrop="static" keyboard={false} className="modal-inner" >
            <Modal.Header closeButton>
              <Modal.Title>Edit series</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input required className="input-field" type="text" defaultValue={series} placeholder="Edit series" onChange={event => setUpdatedSeries(event.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditSeries}> Close </Button>
              <Button onClick={AddEditSeries} variant="primary">Sumit</Button>
            </Modal.Footer>
          </Modal>
        </>)}
    </>)}

export default HomePage;





