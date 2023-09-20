import React, { Component } from "react";
import TicketBooking from "./Pages/ClassComponent/TicketBooking";
import Student from "./Pages/ClassComponent/Student";
import College from "./Pages/ClassComponent/Accordian/College";
import Form from "./Pages/ClassComponent/Form";
import ListRender from "./Pages/ClassComponent/ListRender";
import Birthday from "./Pages/ClassComponent/Birthday";
import AccordParent from "./Pages/ClassComponent/Accordian/AccordParent";
import LifeCycle from "./Pages/ClassComponent/LifeCycle";
import First from "./Pages/FunctionalComponent/First";
import Api from "./Pages/FunctionalComponent/Api";
import Filter from "./Pages/FunctionalComponent/Filter";
import TodoDelete from "./Pages/FunctionalComponent/TodoDelete";
import Slider from "./Pages/FunctionalComponent/Slider";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./Pages/TODO/Todo";

class App extends Component {
  state = {
    name: "sankara",
  };

  render() {
    return (

      <>

         <Slider />


      {/* <Todo/> */}
      
      
      </>
      // <Router>
      //   <div>
      //     <nav className="m-3">
      //         <Link to="/slider">slider</Link>
      //         <Link to="/todo">Todo</Link>

      //         <Link to="/Filter">Filter</Link>
      //         <Link to="/">Api</Link>
      //     </nav>

      //     <Switch>
      //       <Route exact path="/slider">
      //         <Slider />
      //       </Route>

      //       <Route exact path="/todo">
      //         <TodoDelete />
      //       </Route>

      //       <Route exact path="/Filter">
      //         <Filter />
      //       </Route>

      //       <Route exact path="/">
      //         <Api />
      //       </Route>
      //     </Switch>

      //     {/* <First/> */}

      //     {/* <LifeCycle/> */}
      //     {/* <AccordParent/> */}
      //     {/* <College name="sank" />
      //   <College name="kpm" /> */}

      //     {/* <ListRender/> */}
      //     {/* <div>Arun</div> */}

      //     {/* <Birthday/> */}

      //     {/* <Form/> */}
      //     {/* 
      //   <Student name={this.state.name} />
      //   // <College name={this.state.name} />

      //   <button onClick={this.handlechangename}>chabnge</button> */}
      //   </div>
      // </Router>
    );
  }
}

export default App;
