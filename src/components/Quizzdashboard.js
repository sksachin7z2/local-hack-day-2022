import React,{useState,useEffect} from 'react'
import QuizzItem from './QuizzItem';
import jquery from 'jquery';
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
function Quizzdashboard() {
  let navigate=useNavigate()
  // let string=[];
const [gameover, setGameover] = useState(false);
  const score=(score)=>{
      document.getElementById("getscore").innerText=score;
     
  }
  // console.log(gameover);
  const count=(count)=>{
      if(count===retrive().amount){
      
        setGameover(true);
      }
      
  }
  const getData=(questions)=>{
    // let question =document.getElementById("question");
let str = questions;
    
let html = jquery.parseHTML(str);
    // console.log(html);
// question.innerHTML= html[0].data ;
return html[0].data;
}
  const getDataa=(answer)=>{
    // let question =document.getElementById("question");
    let arr=[],i;
    for(i=0;i<4;i++)
       {
           arr[i]=jquery.parseHTML(answer[i])[0].data;
       }
// let str = answer;
    
// let html = jquery.parseHTML(str);
    // console.log(html);
// question.innerHTML= html[0].data ;
return arr;
}
  
    const retrive=()=>{
        var a=localStorage.getItem("quizz");
        return JSON.parse(a);
    }
    const [results, setResults] = useState([])
    const [url1, seturl] = useState("")
    const retrievequizz=async()=>{
        
    let url = `https://opentdb.com/api.php?amount=${retrive().amount}&category=${retrive().category}&difficulty=${retrive().difficulty}&type=${retrive().type}`;
    seturl(url);
    // setLoading(true);
    let data = await fetch(url);
    // props.setProgress(50);
    let parsedData = await data.json();
    // props.setProgress(70);
    setResults(parsedData.results);
    // setTotalResults(parsedData.totalResults);
    // setLoading(false);
    
    // props.setProgress(100);
    }
    useEffect(() => {
      retrievequizz();
      
    
      
      // eslint-disable-next-line
    }, []);

    function shuffleArray(array) {
      let curId = array.length;
      // There remain elements to shuffle
      while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
      }
      return array;
    }
    
    return (
      <>
      {gameover &&<div className='gameover'>
        <div className="card">
          <h1>Your Score:</h1>
          <div>{localStorage.getItem("score")}</div>
          <div>
            <button onClick={()=>{window.location.reload()}} className='btn btn-success'>Play Again</button>&emsp;
            <button onClick={()=>{navigate("/quizz")}} className='btn btn-success'>Back to Quizz Menu</button>
          </div>
        </div>
      </div>}
        <div>
            <div className='container header'>
                <h1>Quizzer</h1>
                <div><h3>Score</h3>  <div id="getscore"></div></div>
            </div>

                <div className="container">
            {results.map((element) => {
                    let answer=shuffleArray([...element.incorrect_answers,element.correct_answer])
                    // console.log(answer);

              // getData(element.question);
              return (
                <div className="container"  key={url1+element.question} >
                  
                  {localStorage.getItem("typest")==="multiple"?<QuizzItem
                  // key={element.url}
                  score={score}
                 count={count}
                    question={getData(element.question)}
                   category={getData(element.category)}
                    type={getData(element.type)}
                    difficulty={getData(element.difficulty)}
                    answer={getDataa(answer)}
                    correct_answer={getData(element.correct_answer)}
                  />:
                  <QuizzItem
                  // key={element.url}
                  score={score}
                  count={count}
                  amount={retrive().amount}

                    question={getData(element.question)}
                   category={getData(element.category)}
                    type={getData(element.type)}
                    difficulty={getData(element.difficulty)}
                    correct_answer={getData(element.correct_answer)}
                   
                    answer={answer}
                  />}

                </div>
              );

            })}
{/* <div><button className='btn btn-success'>Submit</button></div> */}

          </div>
        </div>
        </>
    )
}

export default Quizzdashboard
