import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'


const Sidebar = (props) => {
  const [language, setLanguage] = useState([]);
  const navigate = useNavigate();
  const [holdChange, setHoldChange] = useState(0);

  useEffect(() => {
    let token = localStorage.getItem('token');
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
        console.log("total languages in sidebar--", result);
        setLanguage(result.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlechangeLanguage = (Language) => {
    let token = localStorage.getItem('token');
    const updatededLanguage = Language;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "language": updatededLanguage
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
        console.log(result);
        if (result.type === 'success') {
          setHoldChange(prev=>prev +1);
          props?.setConfigurechange(true)
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="sidebar">
        <nav className="nav">
          {language.map((Element, index) => (
            <ul className="nav-list" key={index}>
              <li className="nav-item">
                <p className="nav-link" onClick={() => handlechangeLanguage(Element.language)}>{Element.language}</p>
              </li>
            </ul>
          ))}
        </nav>
      </div>
      {/* <HomepageData holdChange={holdChange} /> */}
    </>
  );
};

export default Sidebar;
