import React, { Component } from "react";
class EventHandleWithClass extends Component{
    render()
    {
        function Demo()
        {
            alert("Hello World");
        }
        return(
            <>
                <button onClick={Demo}>Click Me </button>
            </>
        );
    }
}
export default EventHandleWithClass