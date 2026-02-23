import { Component } from "react";

class PassingArgumentWithClass extends Component{
    render()
    {
        const {name} = this.props
        return(
            <>
            <h1>PassingArgumentWithClass {name}</h1>
            </>
        )
    }
}
export default PassingArgumentWithClass