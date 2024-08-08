

import Modal from 'react-bootstrap/Modal';
import { IoMdPower } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import "./modal.css"
function LogoutModal({show,setShow}) {

  const handleClose = () => setShow(false);

const navigate=useNavigate()

const handleLogout=()=>{
    localStorage.removeItem("token")
    setShow(false)
    navigate('/')
}
  return (
    <>
      

      <Modal  size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='logout_modal_wrapper' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
            <div className='IoMdPower_outer d-flex justify-content-center align-items-center'>
            <div className='logout_wrapper'>
            <IoMdPower />
            </div>

            </div>
            <h3 className='text-center logout_heading'>Log out</h3>
            <h4 className='logout_title text-center'>
            Are you Logging Out? You can log back anytime

            </h4>
            </Modal.Body>
        <Modal.Footer className='justify-content-center'>
          <button className='cmn_cancel_btn' onClick={handleClose}>
          Cancel
          </button>
          <button className='submit_btn' onClick={handleLogout}>
           Logout
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutModal;