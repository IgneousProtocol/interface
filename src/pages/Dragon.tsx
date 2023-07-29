import dragonFullImg from "../assets/imgs/dragon_3.webp"

const Dragon: React.FC = () => {
    return (
        <div className="bg-[#F4F4F4] w-screen h-auto py-16">
            <img src={dragonFullImg} alt="full page dragon" />
        </div>
    )
};

export default Dragon;
