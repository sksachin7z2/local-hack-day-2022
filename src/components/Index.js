import React from 'react'
import dp from './dp.png'
import {useNavigate} from 'react-router-dom'
function Index() {
    let navigate=useNavigate()
    return (
        <div className='bg'>
               <div style={{backgroundColor:"transparent",paddingTop:"6rem"}} className="card cardd mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={dp} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body mt-5">
        <h3 style={{color:"Highlight"}} className="card-title">Test Your Knowledge</h3>
        <p  style={{color:"white"}} className="card-text mt-3">Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught. – Oscar Wilde</p>
       <div> <button className='btnn' onClick={()=>{navigate("/quizz")}}>Play Quiz</button></div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Index
