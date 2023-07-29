import { MediumIcon, TelegramIcon, TwitterIcon } from "../components/Svg";

const Footer: React.FC = () => {
    return (
        <div className="w-full h-auto bg-[#F4F4F4] px-16 md:px-32">
            <div className="w-full h-auto py-24 flex flex-col justify-center items-center">
                <div className="flex mb-4"> 
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
                <div className="w-full text-center">
                    <p className="text-[#342C3D] text-sm md:text-base">Igneous Protocol, 2023. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

