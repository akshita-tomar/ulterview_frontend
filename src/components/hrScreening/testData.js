import { useEffect, useState } from "react";

const TestData=()=>{
    const [data,setData]=useState([])

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNDAxNCwiaXNfZ3Vlc3QiOjAsImlhdCI6MTcxNzU4NTMzMywiZXhwIjoxNzE3NjE0MTMzfQ.L9DphUaNR1EMp_1VDFTTp4yUIAfBjmnB3dU5JPWC4xI");
    
        const raw = JSON.stringify({
          "edata": "fIVk/aHuLjjwO3aEMStJpHbcXYMP9Byng777GBHWdZwBXtp3Cc2ZyzE9mse1iaz11jcEv6emfIlIm3u9lD7lscZRBNeTUv6JzDjvErmH1Pj1jyjTslKnC1B7NoFG0puiheCH+elPCqXz1XLXR2xPf+7zANT/z/4gP/mlvY5D1sUGtFZVo+a+etCucZnZTOGGjvUGy9G9juazJKf9Ae0Yzw=="
        });
    
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
    
        fetch("https://api.traderphd.com:1000/app/v1/posts/phdagnews/list", requestOptions)
          .then((response) => response.json())
          .then((result) =>{
            console.log('api response result ------',result)
            setData(result.edata)
          })
          .catch((error) => console.error(error));
      },[])


    return(
        <div className="wrapper">
           {data}
        </div>
    )
}

export default TestData