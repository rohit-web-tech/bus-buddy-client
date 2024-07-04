import { FC, useState } from "react";
import NavBarBtn from "./NavBarBtn";
import Logo from "../Logo";
import NavBtn from "./NavBtn";
import MoreMenu from "./MoreMenu";
import OpenMoreMenu from "./OpenMoreMenu";

const NavBar: FC = () => {

  const [menuBarOpened,setMenuBarOpened] = useState<Boolean>(false) ;
  const [moreoptionsOpened,setMoreOptionsOpened] = useState<Boolean>(false);

  return (
    <div className="antialiased bg-gray-100 dark:bg-gray-900">
      <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <Logo />
            <NavBarBtn menuBarOpened={menuBarOpened} setMenuBarOpened={setMenuBarOpened}/>
          </div>
          <nav className={`${menuBarOpened ? "flex" : "hidden"} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
            <NavBtn to="/">
              Home
            </NavBtn>
            <NavBtn to="/booking">
              Book Ticket
            </NavBtn>
            <div className="relative">
              <OpenMoreMenu setMoreOptionsOpened={setMoreOptionsOpened}/>
              {moreoptionsOpened && <MoreMenu />}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
