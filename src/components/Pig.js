import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => {
  
    return <img className="exclamation" src={exclamation} alt="" />
  }

  checkPanic = () => {
    if (this.props.environment === 'inhospitable')
    {setInterval(this.props.relax())
    this.panic()}
  }

  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {this.checkPanic()}
        {/* {this.props.relax()} */}
      </div>
    )
  }
}
