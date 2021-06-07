const Hand = (props) => {
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
  >{props.icon}</div>)
}
export default Hand