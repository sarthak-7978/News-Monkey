import React, { PureComponent } from 'react'
import loading from "./Loading.gif"

export default class Spinner extends PureComponent {
  render() {
    return (

      <div className="container text-center">
          <img className='my-3' src={loading} alt="" style={{ width: "70px", height: "70px", backgroundSize: "cover" }} />
      </div>
        
    )
  }
}
