import { Link } from "react-router-dom";

export function NavigationBar(): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/add">New</Link>
        </li>
      </ul>
    </nav>
  );
}