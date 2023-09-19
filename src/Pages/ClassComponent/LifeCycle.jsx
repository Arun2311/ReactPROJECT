// import React, { Component } from "react";
// import Life2 from "./Life2";

// export default class LifeCycle extends Component {
//   state = {
//     count: 0,
//   };
//   constructor(props) {
//     super(props);
//     console.log("Constructor-----------");
//     this.state = {
//       name: "Constructor Method",
//     };
//   }

//   componentDidMount() {
//     console.log("componentDidMount------");
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate---------");
//   }

//   hndlechange = () => {
//     this.setState({ count: 1 });
//   };


//   componentWillUnmount(){
//     console.log("componentWillUnmount----------");
//   }
//   render() {
//     return (
//       <div>
//         {console.log("RENDER---------")}
// {/* 
//         <h1>count::{this.state.count}</h1>
//         <br />
//         <button onClick={this.hndlechange}>count</button> */}
// <Life2 />
//         {/* {this.state.count == 1 ?  : <></>} */}
//       </div>
//     );
//   }
// }
