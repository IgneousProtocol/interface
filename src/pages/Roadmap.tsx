interface RoadmapItem {
    title: string,
    content: string,
}


const roadmapItems: RoadmapItem[] = [
    {
        title: "Integration of cross-chain protocols",
        content: "Igneous Protocol seeks to be a multi-chain compatible platform, integrating cross-chain protocols such as Polkadot, Cosmos and Avalanche to leverage performance opportunities across different ecosystems."
    },
    {
        title: "Customized estrategy development",
        content: "Igneous Protocol plans to enable users to create and share their own investment strategies, providing a flexible and customized platform to maximize returns."
    },
    {
        title: "Improving the user experience",
        content: "The platform will continue to improve its interface and functionality to provide a more intuitive and accessible user experience, including the implementation of a mobile application and advanced analytics tools."
    },
    {
        title: "Ecosystem expansion",
        content: "Igneous Protocol seeks to collaborate with other DeFi projects and expand its ecosystem, offering users access to an even wider range of investment and performance opportunities."
    }
];


const RoadmapItem: React.FC<RoadmapItem> = ({title, content}) => {
    return (
        <div className="flex flex-col mb-8">
            <div className="bg-white flex justify-center items-center text-center rounded-full p-2 md:py-4 md:px-6">
                <span className="text-[#BC284A] text-base md:text-2xl font-bold">{title}</span>
            </div>
            <p className="text-center text-[#342C3C] text-sm md:text-base mt-4 max-w-[450px]">{content}</p>
        </div>
    )
}


const Roadmap: React.FC = () => {
    return (
        <div className="bg-[#F4F4F4] px-16 md:px-32">
            <div className="w-full flex flex-col items-center justify-center">
                <h3 className="text-[#342C3D] text-4xl font-bold">Roadmap</h3>
                <div className="my-12 max-w-[500px]">
                    {roadmapItems.map(({title, content}) => <RoadmapItem key={title} title={title} content={content}  /> )}
                </div>
            </div>
        </div>
    )
};

export default Roadmap;