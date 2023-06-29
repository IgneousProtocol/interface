import { HomeIcon } from "../Svg";

export const headerList = [
  { label: "Our products" },
  { label: "Docs" },
  { label: "Team" },
  { label: "Roadmap" },
];

const Header: React.FC = () => (
  <div className="w-screen h-[90px] bg-[#342C3D] text-[#F4F4F4] flex items-center fixed top-0 left-0 z-30">
    <div className="flex w-full px-12 justify-between items-center">
      <div>
        <a href="/">
            <HomeIcon />
        </a>
      </div>
      <ul className="flex -ml-8 select-none">
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
    </div>
  </div>
);

export default Header;
