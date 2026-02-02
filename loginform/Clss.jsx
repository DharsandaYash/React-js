import { Component, PureComponent } from "react";

class Clss extends PureComponent
{
    temp={Rollno:1,Name:"Yash"};

    render ()
    {
        return(<>
            <h1>{this.temp.Rollno}</h1>
            <h2>{this.temp.Name}</h2>
            <h3>yash</h3>

         </>)

    }

}
export default Clss;    