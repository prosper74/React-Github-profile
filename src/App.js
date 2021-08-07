// import { useState } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { Switch, Route } from "react-router-dom";

function App() {
  // const [user, setUser] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">{!user ? <Home /> : <Profile />}</Route>
      </Switch>
    </>
  );
}

export default App;

// setName={setUser}
