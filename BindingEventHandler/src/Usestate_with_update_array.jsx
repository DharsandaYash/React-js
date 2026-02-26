import { useState } from "react";

function Usestate_with_update_array()
{
    const [student,setstudent] = useState([10,20,30,40,50]);
        function upadteInfo()
        {
            const mydata = [...student];
            mydata[2]=100;
            mydata[4]=500;
            setstudent(mydata);
        }
        function setInfo () 
        {
            return student.map(num=><h1>{num}</h1>)
        }
        return(
            <>
            {setInfo()}
            <button onClick={upadteInfo}>Click Me</button>
            </>
        )
}
export default Usestate_with_update_array;