import { useState } from "react"

function Use_state_with_object()
{
const[student]=useState ({id:1,name:"Yash Dharsanda",city:"ksd"})

return(
    <>
        <h1>{student.id}</h1>
         <h1>{student.name}</h1>
          <h1>{student.city}</h1>
    </>
)

}
export default Use_state_with_object;
