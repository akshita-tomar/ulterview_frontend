import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const Language = () => {
  const [language, setLanguage] = useState('');
  const [storeLanguages, setStoreLanguages] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const url = 'http://localhost:8000/api/v1/'
  // const url = 'http://16.171.41.223:8000/api/v1/'


  useEffect(() => {
    let token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
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
        setStoreLanguages(result.data);
      })
      .catch((error) => console.error(error));
  }, []);




  const addLanguage = (e) => {
    e.preventDefault()
    setShowModal(true)
  }
  const closeModal = (e) => {
    e.preventDefault()
    setShowModal(false)
  }



  const collectLanguage = (e) => {
    e.preventDefault()
    let token = localStorage.getItem('token')
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "language": language
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}selectLanguage`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.type === 'error') {
          toast.error(result.message, {
            duration: 1000
          })
        } else {
          navigate('/homepage')
        }
      })
      .catch((error) => console.error(error));
  }


  const addLanguages = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token')
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "language": language
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
          navigate('/homepage')
        }
      })
      .catch((error) => console.error(error));
  }


  return (
    <>
      <div className="language-container">
        <h3 className="heading">Choose your language</h3>
        <form>
          <div className="ad-language-btn mt-5">
            <select className="select-role" onChange={event => setLanguage(event.target.value)}>
              <option defaultChecked value=""></option>
              {storeLanguages?.map((lang, index) => (
                <option key={index} value={lang.language}>{lang.language}</option>
              ))}
            </select><button className="ad-btn" onClick={addLanguage}>+</button>
          </div>
          <button className="btn" onClick={collectLanguage}>submit</button> <br></br>
        </form>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div><h3>Add another language</h3></div>
            <div className="cross-sign" onClick={closeModal}>  &#10005;</div>
            <div className="input-field">
              <input
                type="text"
                placeholder="language"
                onChange={event => setLanguage(event.target.value)}
              />
              <button onClick={addLanguages} >Add</button>
            </div>
            <Toaster />
          </div>
        </div>
      )}
    </>
  );
};

export default Language;
