import React from "react";
import { Route, Link } from "react-router-dom";
import UsersList from "./UsersList";
import UserDetail from "./UserDetail";
const App = () => {
  return (
    <div>
      <Link to="/">Home |</Link>
      <Link to="/users">Users |</Link>
      <Link to="/posts">Posts</Link>
      <Route path="/users" component={UsersList} exact={true} />
      <Route path="/users/:id" component={UserDetail} />
    </div>
  );
};
export default App;
