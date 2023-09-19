// import React, { Component } from "react";

// export default class Birthday extends Component {
//   state = {
//     birthdays: [
//       {
//         id: 1,
//         name: "Bertie Yates",
//         age: 29,
//         image:
//           "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
//       },
//       {
//         id: 2,
//         name: "Hester Hogan",
//         age: 32,
//         image:
//           "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
//       },
//       {
//         id: 3,
//         name: "Larry Little",
//         age: 36,
//         image:
//           "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
//       },
//       {
//         id: 4,
//         name: "Sean Walsh",
//         age: 34,
//         image:
//           "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
//       },
//       {
//         id: 5,
//         name: "Lola Gardner",
//         age: 29,
//         image:
//           "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
//       },
//       {
//         id: 5,
//         name: "Lola Gardner",
//         age: 29,
//         image:
//           "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
//       },
//     ],
//   };
//   render() {
//     return (
//       <div className="bg">

//         <div className="box">
//           <h1>{this.state.birthdays.length} Birthday Todays</h1>

//           {this.state.birthdays.map((bd, i) => (
//             <div key={i}>
//               <img src={bd.image} height={100} width={100} />

//               <h3>{bd.name}</h3>
//               <p>{bd.age} years</p>
//             </div>
//           ))}
//         </div>


//       </div>
//     );
//   }
// }
