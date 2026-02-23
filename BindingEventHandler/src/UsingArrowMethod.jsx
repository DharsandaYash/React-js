import { Component } from "react";

class UsingArrowMethod extends Component
{
    state={name:"somnath computer"};

    display=()=>
    {
        console.log(this.state.name);

    }
    render()
    {
        return(
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.display }>click me</button>
        </div>
        )
    }
}
export default UsingArrowMethod;
