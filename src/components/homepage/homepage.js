import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { MdEdit, MdDelete } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import { RiQuestionnaireFill } from "react-icons/ri";
import "./homepage.css"
import { PiNotebookFill } from "react-icons/pi"
import { useAppContext } from "../../utils/useContext";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

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
  const [taskTime, setTaskTime] = useState(0)
  const [updatedTasktime, setUpdatedTaskTime] = useState(0)
  const navigate = useNavigate();
  let token = localStorage.getItem('token')

  const url = process.env.REACT_APP_BACKEND_URL


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
        // console.log("series---", result)
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
        // console.log(result)
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
      confirmButtonColor: "#ce2128",
      cancelButtonColor: "#333",
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
        // console.log(result)
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
        // console.log(result)
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
        // console.log(result)
        if (result.type === 'success') {
          localStorage.setItem('series', result.series.seriesName)
          localStorage.setItem('seriesId', result.series._id)
          setSeries(result.series.seriesName);
          setShowSeries(false);
          setShowLanguageModal(false);
          if (localStorage.getItem('role') === 'DEVELOPER') {
            navigate('/updateQuestions')
          }
          if (localStorage.getItem('role' === 'HR')) {
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
    let languageId = localStorage.getItem('languageId')
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "seriesName": holdNewSeries,
      "taskTime": taskTime
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}createSeries?languageId=${languageId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        if (result.type === 'success') {
          setConfigureSeriesChange(prev => prev + 1)
          setopenAddnewseriesModal(false)
        }else{
          toast.error(result.message)
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
      confirmButtonColor: "#ce2128",
      cancelButtonColor: "#333",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        delteSeriesyes(id, seriesName)
      }
    })
  }

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
        // console.log(result)
        setConfigureSeriesChange(prev => prev + 1)
        // swal(seriesName + " deleted successfully!", "", "success");
      })
      .catch((error) => console.error(error));
  }



  const AddEditSeries = () => {
    let token = localStorage.getItem('token')
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "updatedSeries": updatedSeries ? updatedSeries : series,
      "taskTime": updatedTasktime ? updatedTasktime : taskTime
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
        // console.log(result)
        if (result.type === 'success') {
          setConfigureSeriesChange(prev => prev + 1)
          setOpenEditseriesModal(false)
        }
      })
      .catch((error) => console.error(error));
  }


  const handleEditSeries = (seriesName, seriesId, taskTime) => {
    setSeriesId(seriesId)
    setSeries(seriesName)
    setTaskTime(taskTime)
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

  const handleCandidateResults = () => {
    navigate('/candidates-performance')
  }
  const { show, setShow } = useAppContext();

  const path=useLocation()

  return (
    <>
      <div className={`sidebar ${show ? "cmn_width" : ""}`}>
        <h3 className="bar" onClick={() => { setShow(!show) }}>{show ? <RxCross2 className="p-0 text-center" /> : <FaBars />}</h3>

        <div className={`sidebar-button mt-4 ${path.pathname==="/homepage" ? "active-pathname":""}`}  onClick={fetchLanguages}>
          <div className="sidebar_content"><RiQuestionnaireFill/><h4 className={show? "d-none":"sidebar_content"}>Questionnaire</h4></div>
        </div>
        <div className={`sidebar-button mt-2 ${path.pathname==="/candidates-performance" ? "active-pathname":""}`} onClick={handleCandidateResults}>
          <div className="sidebar_content">
            <PiNotebookFill />
            <h4 className={show ? "d-none" : "sidebar_content"}>Candidate Results</h4>

          </div>
        </div>
        <Toaster />
      </div>
      {showcreteTasksection && (
        <>
          {showLanguageModal && (
            <div className="language-modal">
              <div className={`d-flex flex-wrap-wrap language-modal_outer  ${show ? "" : "margin"}`}>
                {languages?.map((language) => (
                  <div key={language.id} className="language-card align-items-center">
                    <h3 className="text-space" onClick={() => handleLanguageClick(language.language, language._id)}> {language.language}</h3>

                    {localStorage.getItem('role') === 'DEVELOPER' ? (
                      <div className="card-inner"><MdEdit onClick={() => handleEditLanguage(language._id, language.language)} /> <MdDelete onClick={() => handleDeleteLanguage(language._id)} /> </div>
                    ) : null}
                  </div>
                ))}
                {
                  localStorage.getItem('role') === 'DEVELOPER' ? (
                    <button className="add-more-languages-btn" onClick={handleAddNewLanguage}>Add new</button>
                  ) : null}

              </div>
            </div>

          )}

          <Modal centered show={showAddlanguageModal} onHide={closeAddlanguageModal} backdrop="static" keyboard={false} className="modal-inner" >
            <Modal.Header closeButton>
              <Modal.Title className="heading">Add language</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input className="form-control" required type="text" placeholder="language" onChange={event => setNewLanguage(event.target.value)} />
            </Modal.Body>
            <div className="language_footer">
              <button className="modal_close_btn" onClick={closeAddlanguageModal}> Close </button>
              <button className="modal_add_btn cmn_btn_color" onClick={addLanguages} >Add</button>
            </div>
          </Modal>
          <Modal centered show={showEditBox} onHide={closeAddlanguageModal2} backdrop="static" keyboard={false} className="modal-inner" >
            <Modal.Header closeButton>
              <Modal.Title className="heading">Update language</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input className="form-control" required defaultValue={holdLanguage} type="text" onChange={event => setHoldLanguage(event.target.value)} />
            </Modal.Body>

            <div className="language_footer">
            <button  onClick={closeAddlanguageModal2} className="modal_close_btn"> Close</button>
            <button className="modal_add_btn cmn_btn_color" onClick={updateLanguage} >Update</button>
            
            </div>

          </Modal>
          {/* ****** Series */}
          {showseries && (
            <div className="series-modal-overlay">
              <div className="series-modal">
                <h3 className="close-series" onClick={closeseries}> <RxCross2 /></h3>
                <div className="modal-header">
                  <h3 className="heading">Select Series</h3>
                </div>
                <div className="modal-body">{
                  localStorage.getItem('role') === 'DEVELOPER' ? (
                    <div className="series-option-new" onClick={openAddseries} >Add new series</div>
                  ) : null}
                  {seriesOptions?.map((series, index) => (
                    <>
                      <div className={series.status === 'pending' ? 'series-outer-box-pending mt-3' : "series-outer-box mt-3 series-outer-box-pending"}>
                        <h4 key={index} className="series-option" onClick={() => showQuestion(series._id)}> {series.seriesName} ({series.status})</h4>
                        {localStorage.getItem('role') === 'DEVELOPER' ? (
                          <div className="edit_series_outer">
                            <MdEdit className="me-2" onClick={() => handleEditSeries(series.seriesName, series._id, series.taskTime)} />
                            <MdDelete onClick={() => delteSeries(series._id, series.seriesName)} />
                          </div>
                        ) : null}

                      </div></>
                  ))}
                </div>
              </div>
            </div>
          )}
          <Modal centered show={openAddnewseriesModal} onHide={handlecloseAddseriesModal} backdrop="static" keyboard={false} className="modal-inner" >
            <Modal.Header closeButton>
              <Modal.Title className="heading">Add new series</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input required className="input-field form-control" type="text" placeholder="Enter new series" onChange={event => setHoldNewSeries(event.target.value)} />
              <label className="mb-3 new_series_label">Time taken to complete this series test (in minuites)</label>
              <input required className="input-field form-control" type="number" min={0} placeholder="Enter task time" value={taskTime} onChange={event => setTaskTime(event.target.value)} />
            </Modal.Body>
            <div className="language_footer">
              <button onClick={handlecloseAddseriesModal} className="modal_close_btn"> Close</button>
              <button className="modal_add_btn cmn_btn_color" onClick={AddNewSeries} >Add</button>

            </div>

          </Modal>

          <Modal centered show={openEditseriesModal} onHide={handleCloseEditSeries} backdrop="static" keyboard={false} className="modal-inner" >
            <Modal.Header closeButton>
              <Modal.Title className="heading">Edit series</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input required className="input-field form-control " type="text" defaultValue={series} placeholder="Edit series" onChange={event => setUpdatedSeries(event.target.value)} />
              <input required className="input-field form-control" type="number" min={0} placeholder="Enter task time" defaultValue={taskTime} onChange={event => setUpdatedTaskTime(event.target.value)} />
            </Modal.Body>
            <div className="language_footer">
              <button onClick={handleCloseEditSeries} className="modal_close_btn"> Close</button>
              <button className="modal_add_btn cmn_btn_color" onClick={AddEditSeries} >Submit</button>

            </div>

          </Modal>
        </>)}
    </>)
}

export default HomePage;





