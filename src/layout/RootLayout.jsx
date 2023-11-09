import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className="site-container flex justify-between gap-[36px] py-[32px]">
        <Navbar />
        <Outlet />
    </div>
  );
}

export default RootLayout;
