import React from 'react'

function Alert(props) {
  return (
     <div style={{height :'90px'}}>
    {props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong> : {props.alert.msg}
 
</div>
    </div>} </div>
  )
}

export default Alert
