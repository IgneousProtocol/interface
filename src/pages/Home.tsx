import backgroundIMG from "../assets/imgs/background.webp";
import dragonIMG1 from "../assets/imgs/dragon-1.webp";
import { MediumIcon, TelegramIcon, TwitterIcon } from "../components/Svg";

const Home:React.FC = () => (
    <div className="relative w-screen h-screen mt-[90px]">
        <img src={backgroundIMG} alt="background-home" className="absolute left-0 top-0 w-screen h-screen bg-fixed -z-10" />
        <div className="w-full h-full flex justify-between items-center -mt-[90px] px-24 md:px-32">
            <div>
                <div>
                    <h3 className="text-4xl md:text-6xl font-bold text-[#F4F4F4]">Unleash the power of</h3>
                    <h3 className="text-4xl md:text-6xl font-bold text-[#F4F4F4]">fire in your</h3>
                    <h3 className="text-4xl md:text-6xl font-bold text-[#F4F4F4]">investments</h3>
                </div>
                <div className="flex mt-4">
                    <div className="mr-2">
                    <TwitterIcon />
                    </div>
                    <div className="mr-2">
                    <TelegramIcon />
                    </div>
                    <div className="mr-2">
                    <MediumIcon />
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <img src={dragonIMG1} alt="dragon-home-1" />
            </div>
        </div>
    </div>
);

export default Home;