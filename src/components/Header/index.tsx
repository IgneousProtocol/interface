import Hamburger from "hamburger-react";
import { HomeIcon } from "../Svg";
import { useState } from "react";

export const headerList = [
  { label: "Our products" },
  { label: "Docs" },
  { label: "Team" },
  { label: "Roadmap" },
];

const MobileMenu: React.FC = () => {
  return (
    <div className="bg-gray-600 bg-opacity-95 w-screen h-screen z-20 fixed top-0 left-0">
      <div className="w-full h-full">
        <ul className="w-full h-full py-24 px-8">
          {headerList.map(item => (
            <li key={item.label} className="text-4xl mb-8 font-bold">{item.label}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Header: React.FC = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);


  const onMobileMenuOpen  = () => { 
    setIsOpenMobileMenu(true);
  }

  const onMobileMenuClose = () => {
    setIsOpenMobileMenu(false);
  }

  const onToggleMobileMenu = () => {
    const action = isOpenMobileMenu ? onMobileMenuClose : onMobileMenuOpen
    action()
  }

  return (
    <div className="w-screen h-[90px] bg-[#342C3D] text-[#F4F4F4] flex items-center fixed top-0 left-0 z-30">
      <div className="flex w-full px-4 md:px-12 justify-between items-center">
        <div>
          <a href="/">
              <HomeIcon />
          </a>
        </div>
        <ul className="hidden md:flex -ml-8 select-none">
          {headerList.map((item) => (
            <li
              key={item.label}
              className="mr-8 font-bold text-xl cursor-pointer hover:opacity-90 active:scale-110"
            >
              {item.label}
            </li>
          ))}
          <li>
            <button className="bg-[#BC274A] px-2 rounded hover:opacity-90 active:scale-110 select-none">
              <span className="font-bold text-xl text-[#F4F4F4]">
                Coming soon
              </span>
            </button>
          </li>
        </ul>
        {/** Mobile Menu */}
        {isOpenMobileMenu && <MobileMenu />}
        <ul className="md:hidden z-30">
          <Hamburger 
            toggled={isOpenMobileMenu}
            toggle={onToggleMobileMenu}
          />
        </ul>
      </div>
    </div>
  );
}

export default Header;
