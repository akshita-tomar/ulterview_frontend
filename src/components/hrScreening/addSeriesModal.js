import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { hr_add_series, clear_hr_add_series_state } from '../../utils/redux/hr_screening_slice/add_series';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';



const HrRoundSeries = (props) => {
    const dispatch = useDispatch()
    const [series, setSeries] = useState('')
    const hr_add_series_state = useSelector(store => store.HR_ADD_SERIES)

    const handleSubmit = () => {
        dispatch(hr_add_series({ questionSeries: series }))
    }

    useEffect(() => {
        if (hr_add_series_state?.isSuccess) {
            toast(hr_add_series_state?.message?.message)
            props.handleChange(prev => prev + 1)
            props.onHide(false)
            dispatch(clear_hr_add_series_state())
        }
        if (hr_add_series_state?.isError) {
            toast(hr_add_series_state?.error?.message)
            dispatch(clear_hr_add_series_state())
        }
    }, [hr_add_series_state])


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
                    <h3 className="heading">Add Series</h3>
                    <div className='form-group'>
                        <label className='modal_label'>Series</label>
                        <input className="candidate-register-input form-control mt-2" placeholder="Enter series" value={series} onChange={(e) => setSeries(e.target.value)}></input>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleSubmit} className='submit_btn'>Submit</button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    )
}

export default HrRoundSeries