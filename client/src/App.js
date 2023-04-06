import React, { useState } from "react";
// import { Component } from "react";
import SidePanel from "./SidePanel.js";
import "./SidePanel.css";

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <div>
      <SidePanel isOpen={sidebarOpen} toggle={handleViewSidebar} />
      <button className="openbtn" onClick={handleViewSidebar}>
        Feedback
      </button>
    </div>
  );
}

export default App;
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

//   callAPI() {
//     fetch("http://localhost:4000/")
//       .then((res) => res.text())
//       .then((res) => this.setState({ apiResponse: res }))
//       .catch((err) => err);
//   }

//   componentDidMount() {
//     this.callAPI();
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">{this.state.apiResponse}</p>
//       </div>
//     );
//   }
// }

// export default App;
