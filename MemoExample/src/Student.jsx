import React, { useState } from "react";
const Student = React.memo(function Student()
{
    const [msg,setmsg] = useState(0);
    function view()
    {
        setmsg(msg+1);
    }
    return(
        <>
            <h1>{msg}</h1>
            <button onClick={view}>Click Me</button>
        </>
    )
});
export default Student;
