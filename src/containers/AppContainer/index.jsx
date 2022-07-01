import { Outlet, Link } from "react-router-dom";

export default function AppContainer() {
  return (
    <div>
      <Link to="">Home</Link>
      <Outlet />
    </div>
  );
}
