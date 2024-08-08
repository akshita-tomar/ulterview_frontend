import { useEffect, useState } from "react";
import { useAppContext } from "../../utils/useContext";
import swal from "sweetalert";
import { Table } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
import HrRoundSeries from "./addSeriesModal";
import UpdateHrRoundSeries from "./updateSeriesModal";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';
import "./hrstyle.css"
import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";


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

  const renderToString = (component) => ReactDOMServer.renderToString(component);

  const handleSeriesDelete = (id) => {

    const deleteIconHtml = renderToString(<RiDeleteBinLine size={50} />);
    Swal.fire({

      html: `
      <div>
      <div class="custom_deleteicon_outer">
      <div class="custom_deleteicon">
      ${deleteIconHtml}
      
      </div>

      </div>
       <h2 class="custom-title">Are you sure to delete this Series? </h2>
        <p class="custom-text">You won't be able to revert this!</p>
      
      </div>
        
        `,
      
      icon: null,
      showCancelButton: true,
      confirmButtonColor: "#FF3030",
      cancelButtonColor: "#ECEAF3",
      confirmButtonText: "Delete",
      customClass:{
        cancelButton: 'swal-cancel',
        confirmButton:"swal-delete",
         title: 'custom-title',
        content: 'custom-text'
      }
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
         <h5 className="cmn_heading">HR Round Series</h5>
      <div className="text-end mb-3 pe-3">
        <button className="register-btn submit_btn" onClick={addHrRoundSeries} > <MdAdd /> Add Series</button>
      </div>
      <div className="table-responsive cmn_radius candidate_table_outer">
        <Table   hover className="user-table">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Series</th>
              <th>Series status</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((element, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{element.questionSeries}</td>
                <td> {element.questions?.length < 3 || element.questions === undefined ? "(pending)" : element.questions?.length + " questions"}</td>
                <td>
                  <div className="d-flex justify-content-center align-items-center gap-4 CiEdit_outer">
              
                 <CiEdit onClick={() => handleEditSeries(element._id, element.questionSeries)} /> 
                  <RiDeleteBinLine onClick={() => handleSeriesDelete(element._id)} />

                 
                  </div>
                  </td>
                  <td> <button className="show_btn" onClick={() => handleShowQuestions(element._id)}>Show </button>
                  </td>
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