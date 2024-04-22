import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import LanguageModal from "./language";
// import SeriesDropdown from "./SeriesDropdown";

const Sidebar = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [series, setSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showSeriesDropdown, setShowSeriesDropdown] = useState(false);
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


  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setShowLanguageModal(false);
    // Fetch series based on selected language
    // For example:
    // setSeries([...]); // Set series fetched from API
    // setShowSeriesDropdown(true);
  };

//   const handleSeriesSelect = (series) => {
//     setSelectedSeries(series);
//     setShowSeriesDropdown(false);
//     // Perform actions based on selected series
//   };
console.log("language model --",languages)

  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={fetchLanguages}>Create Task</button>
      <button className="sidebar-button">Show Tasks</button>
      <Toaster />
      {showLanguageModal && (
        <LanguageModal languages={languages} handleLanguageClick={handleLanguageClick} />
      )}
      {/* {showSeriesDropdown && (
        <SeriesDropdown series={series} handleSeriesSelect={handleSeriesSelect} />
      )} */}
    </div>
  );
};

export default Sidebar;
