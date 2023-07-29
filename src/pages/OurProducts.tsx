import dragonImg from "../assets/imgs/dragon_our_products.webp"

interface IgneousMenuProducts {
    id: number;
    title: string;
    info: string;
    info2?: string;
}

const products: IgneousMenuProducts[] = [
    {
        id: 0,
        title: "Liquidity farming",
        info: "The platform lakes advantage of liquidity farming opportunities indifferent DeFi protocols, such as Uniswap, providing liquidity to token pairs and earning rewards in governance tokens and trading fees."
    },
    {
        id: 1,
        title: "Staking",
        info: "Igneous Protocol also participates in the staking of tokens in different DeFi protocols to earn additional returns.",
        info2: "These tokens include governance tokens as well as tokens native to liquid staking protocols."
    },
    {
        id: 2,
        title: "Arbitrage",
        info: "Igneous Protocol's arbitrage strategies seek to leverage price in differences between different decrentralized exchanges protocols and lending protocols to generate profits.",
    }
]

const Card: React.FC<{ product: IgneousMenuProducts }> = (props) => {
    const { product } = props
    return (
        <div className="w-[300px] rounded-2xl bg-white p-4 text-center mb-8 mb:mb-0">
            <h5 className="mb-2 text-[#BC284A] text-xl font-bold">{product.title}</h5>
            <p className="text-[#342C3C]">{product.info}</p>
            {product.info2 &&  <p className="mt-2 text-[#342C3C]">{product.info2}</p>}
        </div>)
}

const OurProducts: React.FC = () => {
    return (
        <section className="bg-[#F4F4F4] px-16 md:px-32">
            <div className="w-full flex-col flex md:flex-row items-center justify-center">
                <img className="mr-12" src={dragonImg} alt="our-products" />
                <div className="max-w-90% md:max-w-[500px]">
                    <h4 className="text-[#342C3D] text-2xl font-bold mb-4">What is Igneous Procotol?</h4>

                    <p className="text-[#342C3D] text-normal mb-2">Using smart contracts and investment
                        strategies to maximize rewards from liquidity pools, automated market making
                        projects and yield farming opportunities in the DeFi ecosystem, it offers advantages
                        over manual management, all automatically through smart contracts.</p>
                    <p className="text-[#342C3D] text-normal mb-2">

                        Using smart contracts and investment
                        strategies to maximize rewards from liquidity pools, automated market making
                        projects and yield farming opportunities in the DeFi ecosystem, it offers advantages
                        over manual management, all automatically through smart contracts.

                    </p>

                    <p className="text-[#342C3D] text-normal">Our ecosystem is protected by Palax, the guardian of vaults!
                    </p>
                </div>
            </div>
            <div className="mt-36 w-full flex flex-col h-auto items-center">
                <h3 className="text-[#342C3D] text-4xl font-bold">Our Products</h3>
                <div className="w-full flex flex-col md:flex-row justify-between my-12">
                    {
                        products.map((product) => <Card product={product} key={product.title} />)
                    }
                </div>
            </div>
        </section>
    );
}

export default OurProducts;
