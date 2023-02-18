import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function RootPage(props) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"countapp"}>CountApp</Link>
          </li>
          <li>
            <Link to={"rock-paper-scissors"}>RPS</Link>
          </li>
        </ul>
      </div>
      <div>
        {/* Content will go here later */}
        <Outlet />
      </div>
    </div>
  );
}
