import Image from "next/image";

type CardProps = {
  id: "Supervisor" | "Team Builder" | "Karma" | "Calculator";
  text: string;
};

const Card = ({ id, text }: CardProps) => {
  const iconUrl = {
    Supervisor: "/assets/icon-supervisor.svg",
    "Team Builder": "/assets/icon-team-builder.svg",
    Karma: "/assets/icon-karma.svg",
    Calculator: "/assets/icon-calculator.svg",
  };

  return (
    <div>
      <div>
        <h3>{id}</h3>
        <p>{text}</p>
      </div>
      <Image src={iconUrl[id]} alt="" width={48} height={48} />
    </div>
  );
};

export default Card;
