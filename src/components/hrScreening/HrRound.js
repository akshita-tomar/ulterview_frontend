import { useEffect, useState } from "react";
import { useAppContext } from "../../utils/useContext";
import swal from "sweetalert";
import { Table } from "react-bootstrap";
import { MdEdit, MdDelete } from "react-icons/md";
import HrRoundSeries from "./addSeriesModal";
import UpdateHrRoundSeries from "./updateSeriesModal";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




const HrRound = () => {
  const token = localStorage.getItem('token')
  const { show } = useAppContext()
  const url = process.env.REACT_APP_BACKEND_URL
  const navigate = useNavigate()
  const [showHrRoundSeries, setShowHrRoundSeries] = useState(false)
  const [data, setData] = useState([])
  const [handleChange, setHandleChange] = useState(0)
  const [showEditModal, setShowEditModal] = useState(false)
  const [series, setSeries] = useState('')
  const [seriesId, setSeriesId] = useState('')

  const addHrRoundSeries = () => {
    setShowHrRoundSeries(true)
  }




  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url}getHrRoundSeries`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.allSeries)
        if (result.allSeries.length < 1) {
          swal("No series added yet !", " Add series and HR round questions.")
        } else {
          setData(result.allSeries)
        }
      })
      .catch((error) => console.error(error));
  }, [handleChange])


  const handleSeriesDelete = (id) => {

    Swal.fire({
      title: "Are you sure to delete this Series?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ce2128",
      cancelButtonColor: "#333",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteConfirm(id)
      }
    })
  }


  const handleDeleteConfirm = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "SeriesId": id
    });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}deleteHrRoundSeries`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        if (result.type === 'success') {
          setHandleChange(prev => prev + 1)
        }
      })
      .catch((error) => console.error(error));
  }


  const handleEditSeries = (id, seriesName) => {
    setSeriesId(id)
    setSeries(seriesName)
    setShowEditModal(true)
  }

  const handleShowQuestions = (id) => {
    navigate(`/hr-round-questions/${id}`)
  }



  return (
    <div className={`wrapper ${show ? "cmn_margin" : ""} `}>
      <div className="text-end mb-3 pe-3">
        <button className="register-btn" onClick={addHrRoundSeries} >Add Series</button>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover className="user-table candidate_entry_table">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Series</th>
              <th>Series status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{element.questionSeries}</td>
                <td> {element.questions?.length < 3 || element.questions === undefined ? "(pending)" : element.questions?.length + " questions"}</td>
                <td><button onClick={() => handleShowQuestions(element._id)}>Show </button> <MdEdit onClick={() => handleEditSeries(element._id, element.questionSeries)} /> <MdDelete onClick={() => handleSeriesDelete(element._id)} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {
        showHrRoundSeries && (
          <HrRoundSeries
            show={showHrRoundSeries}
            onHide={() => setShowHrRoundSeries(false)}
            handleChange={setHandleChange}
          />
        )}
      {
        showEditModal && (
          <UpdateHrRoundSeries
            show={showEditModal}
            onHide={() => setShowEditModal(false)}
            handleChange={setHandleChange}
            series={series}
            seriesId={seriesId}
          />
        )}
    </div>
  )
}

export default HrRound