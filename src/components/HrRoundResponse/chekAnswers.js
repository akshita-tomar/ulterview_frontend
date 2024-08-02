import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import emptyIcon from '../../assets/empty.gif'
import { useAppContext } from "../../utils/useContext";

const CheckHrRoundAnswers = () => {
    const { show } = useAppContext()
    let navigate = useNavigate()
    let url = process.env.REACT_APP_BACKEND_URL
    let token = localStorage.getItem('token')
    const { id } = useParams()
    const [questions, setQuestions] = useState([])
    const [quesAns, setQuesAns] = useState([])
    const [showIcon,setShowIcon]=useState(false)


    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url}hrRoundCandidateAnswers?candidateId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'success') {
                    if(result.answers?.length<1){
                        setShowIcon(true)
                    }
                    setQuestions(result.questions)
                    setQuesAns(result.answers)
                }
            })
            .catch((error) => console.error(error));
    }, [])


    const handleClick = (status) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+token);
        
        const raw = JSON.stringify({
          "candidateId": id,
          "hrResponse": status
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch(`${url}hrRoundSelectReject`, requestOptions)
          .then((response) => response.json())
          .then((result) =>{
            // console.log(result)
            if(result.type==='success'){
                navigate('/hr-round-response')
            }
          })
          .catch((error) => console.error(error));
    }

    const handleBack =()=>{
      navigate('/hr-round-response')
    }

    return (
        <div  className={`wrapper ${show ? "cmn_margin" : ""} `}>
            <div className="back-btn-outer"><button className="back-btn-checkans" onClick={handleBack}>back</button></div>
           {/* <div className=""> <button className="back-btn-checkans">back</button></div>  */}
            <div className="hrcheckans-heading">Asked questions</div>
            {
                questions?.map((ele) => {
                    return (
                        <div className="question-wrapper" key={ele._id}>
                            <h3 className="question-text-inner">{ele.question}</h3>
                        </div>
                    )
                })

            } <br></br>
            <div className="hrcheckans-heading">Candidate response</div>
            {
                showIcon && (
                    <>
                    <img src={emptyIcon} alt="image"/> 
                    <h4>Not completed even a single question</h4>
                    </>
                )
            }
            {quesAns?.map((ele, index) => {
                return (
                    <>
                        <div className="question-wrapper" key={ele._id}>
                            <h3 className="question-text-inner">{ele.question}</h3>
                            <textarea
                                className="text-input form-control"
                                placeholder="Your answer here"
                                value={ele.answer}
                            />
                        </div>
                    </>
                )
            })}
            <div className="text-center">
                <button type="submit" className="submit-button" onClick={() => handleClick('selected')} >Select</button> 
                <button type="submit" className="reject-btn" onClick={() => handleClick('rejected')} >Reject</button>
            </div>

        </div>
    )
}
export default CheckHrRoundAnswers
