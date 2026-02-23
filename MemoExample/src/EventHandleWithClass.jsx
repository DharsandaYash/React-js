import React, { Component } from "react";
class EventHandleWithClass extends Component{
    render()
    {
        function view()
        {
            alert("Hello Dharsanda Yash");
        }
        return(
            <>
                <button onClick={view}>Click Me </button>
            </>
        );
    }
}
export default EventHandleWithClass