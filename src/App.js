import logo from "./logo.svg";
import "./App.css";
import { Component, useState } from "react";
import Hand from "./components/Hand";
import { GiPaper } from "react-icons/gi";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1a202c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "700px",
          backgroundColor: "#2d3748",
          borderRadius: "20px",
          border: "5px solid #3b60d1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Hand icon={<GiPaper size="50px" />}></Hand>
      </div>
    </div>
  );
};
// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Title title={"XD"}></Title>
//         <Title title={"UwU"}></Title>
//         <Button chuj={"NicroCwel"} title={"VulmarSmieć"}></Button>
//         <Button chuj={"KlosiekCwel"} title={"VulmarSmieć"}></Button>
//         <TextField></TextField>
//         <RedBox abc={"150px"} acb={"150px"} c={"red"}></RedBox>
//         <RedBox abc={"200px"} acb={"200px"}></RedBox>
//         <RedBox password={"password"}></RedBox>
//         <BlueTextBox text={"Yes"} abc={"300px"} acb={"300px"}></BlueTextBox>
//         <PinkTwoTextBox
//           text={"Ok"}
//           texttwo={"No"}
//           abc={"300px"}
//           acb={"300px"}
//         ></PinkTwoTextBox>
//         <PinkTwoTextBox></PinkTwoTextBox>

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };

// const PinkTwoTextBox = (props) => {
//   let color = "pink";
//   let acb = "70px";
//   let abc = "70px";
//   if (props.acb) {
//     acb = props.acb;
//   }
//   if (props.abc) {
//     abc = props.abc;
//   }
//   if (props.text === props.texttwo) {
//     color = "red";
//   }
//   return (
//     <div style={{ width: abc, height: acb, backgroundColor: color }}>
//       <p>
//         {props.text}
//         <br></br>

//         {props.texttwo}
//       </p>
//     </div>
//   );
// };
// const BlueTextBox = (props) => {
//   return (
//     <div
//       style={{ width: props.abc, height: props.acb, backgroundColor: "green" }}
//     >
//       <p>{props.text}</p>
//     </div>
//   );
// };
// const RedBox = (props) => {
//   let color = "blue";
//   if (props.c) {
//     color = props.c;
//   } else {
//     // alert("Nie Ma Kurwa");
//   }
//   if (props.password === "password") {
//     // alert("Logged in");
//   }
//   const [number, setNumber] = useState(0);
//   return (
//     <div
//       style={{ width: props.abc, height: props.acb, backgroundColor: color }}
//     >
//       <p>{number}</p>
//       <button onClick={() => setNumber(number + 1)}>Zmien</button>
//       <button onClick={() => setNumber(number - 1)}>Zmien</button>
//     </div>
//   );
// };
// const TextField = () => {
//   return <input></input>;
// };
// const Title = (props) => {
//   return <p>{props.title}</p>;
// };
// const Button = (props) => {
//   return (
//     <button
//       onClick={() => {
//         alert(props.chuj);
//       }}
//     >
//       {props.title}
//     </button>
//   );
// };

export default App;
