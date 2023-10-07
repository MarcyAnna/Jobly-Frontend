import { Outlet } from "react-router-dom";
import NavBar from "./NavBar"

export default function RouteLayout() {
    return (
        <div className="root-layout">
    <header>
      <NavBar />
    </header>
    <main>
    <Outlet />
    </main>
    </div>
    )
};