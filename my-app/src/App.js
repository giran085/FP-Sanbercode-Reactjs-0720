import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import { toast } from "react-toastify";
import { NavProvider } from "./Context/NavContext";
import { AuthProvider } from "./Context/AuthContext";

class App extends React.Component {
  render() {
    toast.configure();
    return (
      <Router>
        <AuthProvider>
          <NavProvider>
            <Routes />
          </NavProvider>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
