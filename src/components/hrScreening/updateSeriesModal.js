import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const UpdateHrRoundSeries =(props)=>{
    let url = process.env.REACT_APP_BACKEND_URL
    const token = localStorage.getItem('token')
    const [seriesName, setSeriesName] = useState('')
    

    const handleSubmit =()=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+token);
        
        const raw = JSON.stringify({
          "seriesId": props.seriesId,
          "seriesName": seriesName?seriesName:props.series
        });
        
        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch(`${url}updateHrRoundSeries`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            // console.log(result)
            if(result.type==='success'){
                props.handleChange(prev=>prev+1)
                props.onHide(false)
            }
          })
          .catch((error) => console.error(error)); 
    }

    return (
        <div>
             <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='custom_modal_container'
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="heading"> Update Series</h3>
                    
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter series" defaultValue={props.series} onChange={(e)=>setSeriesName(e.target.value)}></input>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleSubmit} className='submit_btn'>Submit</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default UpdateHrRoundSeries