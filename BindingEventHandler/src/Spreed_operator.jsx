import { useState } from "react"

function Spreed_operator()
{
const[student,setstudent]=useState ({id:1,name:"Yash Dharsanda",city:"ksd"})

const change=()=>{

    setstudent({...student,name:"Dharsanda Yash"})
}

return(
    <>
        <h1>{student.id}</h1>
         <h1>{student.name}</h1>
          <h1>{student.city}</h1>
          <button onClick={change}>Change Data</button>
    </>

    
)

}
export default Spreed_operator;
