import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CandidateAnswerSheet = () => {
    let token = localStorage.getItem('token')
    let url = 'http://localhost:8000/api/v1/'
    // const url = 'http://16.171.41.223:8000/api/v1/'
    let {id} = useParams()
    const [originalQuesAns,setOriginalQuesAns]=useState([])
    const [candidateResponse,setCandidateResponse]=useState([])



    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+token);
        
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };
        
        fetch(`${url}get-dev-candidate-answers?candidatId=${id}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
             if(result.type==='success'){
                setOriginalQuesAns(result.providedQuesAns)
                setCandidateResponse(result.retrivedQuesAns)
             }
          })
          .catch((error) => console.error(error)); 
    },[])

    return (
        <div className="wrapper">
            <Container>
                <Row>
                    <Col>
                     ogkjfdog
                    </Col>
                    <Col>
                    fdgdfg
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default CandidateAnswerSheet