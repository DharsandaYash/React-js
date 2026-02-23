import { Component } from "react";

class BindingWithClassComponent extends Component
{
    state={name:"Welcome to somnath computer"};

    display()
    {
        console.log(this.state.name);

    }
    render()
    {
        return(
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={()=>this.display() }>click me</button>
        </div>
        )
    }
}
export default BindingWithClassComponent;
