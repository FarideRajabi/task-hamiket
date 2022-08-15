import { useState } from "react"
import prodact from "./products"

const Add = (props) => {
  const [valid , setValid] = useState([])

  if(props.idProduct === prodact.id){
    return <div>{valid.title}</div>
  }
  else{
    <div>is empty...</div>
  }

}

export default Add;