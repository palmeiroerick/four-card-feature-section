import Image from "next/image";

type CardProps = {
  id: "Supervisor" | "Team Builder" | "Karma" | "Calculator";
  text: string;
};

const Card = ({ id, text }: CardProps) => {
  const borderColor = {
    Supervisor: "border-t-cyan",
    "Team Builder": "border-t-red",
    Karma: "border-t-orange",
    Calculator: "border-t-blue",
  };

  const iconUrl = {
    Supervisor: "/assets/icon-supervisor.svg",
    "Team Builder": "/assets/icon-team-builder.svg",
    Karma: "/assets/icon-karma.svg",
    Calculator: "/assets/icon-calculator.svg",
  };

  return (
    <div
      className={`${borderColor[id]} flex justify-between h-56 w-80 flex-col rounded-md border-t-4 p-7 shadow-[0_6px_16px] shadow-grayishBlue`}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl text-veryDarkBlue font-semibold">{id}</h3>
        <p className="text-[13px] text-grayishBlue">{text}</p>
      </div>
      <Image className="self-end" src={iconUrl[id]} alt="" width={48} height={48} />
    </div>
  );
};

export default Card;
