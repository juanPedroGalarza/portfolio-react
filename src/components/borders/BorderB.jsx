import "../../styles/BorderB.css"
const BorderB = props => {
  const {
    border
  } = props
  return (
    <div className="borderb">
      <img className="borderb-border" src={border} />
      {props.children}
    </div>
  )
}
export default BorderB