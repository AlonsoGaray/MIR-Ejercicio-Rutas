import { Link, Outlet } from "react-router-dom";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <h1>Routes</h1>
      <div className="Lorems">
        <Link to="/">Lorem 1</Link>
        <Link to="/lorem2">Lorem 2</Link>
        <Link to="/lorem3">Lorem 3</Link>
      </div>
      <Outlet />
    </div>
  );
}