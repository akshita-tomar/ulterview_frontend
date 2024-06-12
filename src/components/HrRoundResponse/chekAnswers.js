import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const CheckHrRoundAnswers = () => {
    let navigate = useNavigate()
    let url = process.env.REACT_APP_BACKEND_URL
    let token = localStorage.getItem('token')
    const { id } = useParams()
    const [questions, setQuestions] = useState([])
    const [quesAns, setQuesAns] = useState([])


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
                // console.log(result)
                if (result.type === 'success') {
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

    return (
        <div className="wrapper">
            <div className="hrcheckans-heading">Asked questions</div>
            {
                questions.map((ele) => {
                    return (
                        <div className="question-wrapper" key={ele._id}>
                            <h3 className="question-text-inner">{ele.question}</h3>
                        </div>
                    )
                })

            } <br></br>
            <div className="hrcheckans-heading">Candidate response</div>
            {quesAns.map((ele, index) => {
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
