import womanImg from "../assets/imgs/women_team.webp";
import manImg from "../assets/imgs/man_team.webp";

interface MemberProps {
    image: string;
    name: string;
    position: string
}

const members: MemberProps[] = [
    { image:womanImg, name: "Iryna", position: "position"  },
    { image:manImg, name: "José", position: "position"  },
    { image:manImg, name: "Tony", position: "position"  }
]


const Member: React.FC<MemberProps> = ({image, name, position}) => {
    return (
        <div className="flex flex-col item-center">
            <img src={image} alt={image.toString()} />
            <span className="mt-4 text-2xl font-bold">{name}</span>
            <span className="text-xl font-normal">{position}</span>
        </div>
    )
}

const Team = () => {
    return (
        <section className="bg-[#F4F4F4] px-16 md:px-32 text-center">
            <h3 className="text-[#342C3D] text-4xl font-bold">Team</h3>
            <div className="w-full flex flex-col md:flex-row justify-between py-12">
                {members.map(({name, image, position}) => <Member key={name} name={name} image={image} position={position} />)}
            </div>
        </section>
    ) 
}

export default Team;