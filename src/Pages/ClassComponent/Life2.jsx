// import React, { Component } from 'react'

// export default class componentWillUnmount extends Component {
//     constructor(props){
//         super(props)
//             this.state = {
//                 show: true,
//             } 
//     }

//     componentDidMount() {
//         console.log("componentDidMount------");
//       }
    
//       componentDidUpdate() {
//         console.log("componentDidUpdate---------");
//       }




//     render() {
//         return (
//             <>
//                     {console.log("RENDER---------")}

//               <p>{this.state.show ? <Child/> : null}</p>
//                <button onClick={() => {this.setState({show: !this.state.show})}}>Click me to toggle</button>
//             </>
//         )
//     }
// }

// export class Child extends Component{
//     componentWillUnmount(){
//      console.log("componentWillUnmount=====");
//     }
//     render(){
//         return(
//             <>
//             I am a child component
//             </>
//         )
//     }
// }
