import { useState } from "react"

function Usestate_with_array()
{
    const[student,setstudent]=useState([10,20,30,40,50]);

function show()
{
    return student.map((num)=>(<h1>{num}</h1>));
}

return(
    <>
       {show()}
    </>
)

}
export default Usestate_with_array;
