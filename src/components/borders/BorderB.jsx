import { useState } from "react"
import "../../styles/BorderB.css"
const BorderB = props => {
  const {
    border
  } = props
  const [isHover,setIsHover] = useState(false)
  return (
    <div className={`borderb ${isHover?"active":""}`}
      onMouseEnter={()=>setIsHover(true)}
      onMouseLeave={()=>setIsHover(false)}
    >
      <img className="borderb-border" src={border} />
      {props.children}
    </div>
  )
}
export default BorderB