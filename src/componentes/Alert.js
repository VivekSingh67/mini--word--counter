import React from 'react'

export default function Alert(props) {
    // const capitalize = (word)=>{
    //     const lower = word.toLowreCase();
    //     return lower.charAt(0).toUpperCase()+ lower.slice(1)
    // }
  return (
    
        props.alert &&<div class={`alert alert-success alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong>:{props.alert.msg} 
    
  </div>
  )
}
