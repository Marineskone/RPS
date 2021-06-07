const Card = (props) => {
    return (
    <div style = {{
        width: "180px",
        height: "110px",
        backgroundColor: "#463d78",
        borderRadius: "20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer"
    
    }}>{props.icon}</div>
    )
}
export default Card