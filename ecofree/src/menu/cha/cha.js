import React, {useState, useEffect } from 'react';
import './cha.css';
import { makeStyles } from "@material-ui/core/styles"; // styles 기능 추가
import Button from '@material-ui/core/Button'




function Cha() {
  const [개발자,개발자변경] = useState([]);
  let [누른제목, 누른제목변경] = useState(0);

  const getData=()=>{
    fetch('mockdata/developer.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      
      console.log(myJson)
      var newArr = [...myJson.person];

      개발자변경(newArr);
    });
  }
  useEffect(()=>{
    getData()
  },[])
    
  return (
    <>   

    { 개발자.map(function(a,idx){
        return (
        <div className="list">
          <h3 onClick={ ()=>{ 누른제목변경(idx) } }>{ a.name } <span>👍</span> </h3>
          <p>2월 18일 발행</p>
          <hr />
        </div>
      )
    }) }

      <Button onClick={ ()=>{ 누른제목변경(0)} }> 모달1 </Button> 
      <Button onClick={ ()=>{ 누른제목변경(1) } }> 모달2 </Button> 
      <Button onClick={ ()=>{ 누른제목변경(2) } }> 모달3 </Button> 

      <Modal 개발자={개발자} 누른제목={누른제목}/>
      {/* { 개발자[0] } */}
    </>
  );
}

function Modal(props){
  return ( 
  <div>
     <div className="modal">
     { !!props.개발자[props.누른제목] ? 
     <>
      <h2> 이름 : {props.개발자[props.누른제목].name} </h2>
      <h2> 나이 : {props.개발자[props.누른제목].age} </h2>
      <h2> 주소 : {props.개발자[props.누른제목].address}</h2>
     </> : '' }
       
    </div>
  </div> )
}

export default Cha;