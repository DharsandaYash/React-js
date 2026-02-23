import { Component } from "react";

class Constructore extends Component
{
    constructor(props)
    {
        super(props)
        this.state={count:0};

    }
    display=()=>
    {
        this.setState({count:this.state.count+1})
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.display}>Count ++</button>
            </div>
        )
    }

}
export default Constructore;