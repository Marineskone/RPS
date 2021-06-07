import {hand} from "../App"
const Hand = ({selectedHand}) => {
    return (
    <div
    style={{
      width: "150px",
      height: "150px",
      backgroundColor: "#6b6c75",
      borderRadius: "50%", display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >{selectedHand}</div>)
}
export default Hand