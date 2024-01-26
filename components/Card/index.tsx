import Image from "next/image";

type CardProps = {
  className?: string;
  id: "Supervisor" | "Team Builder" | "Karma" | "Calculator";
  text: string;
};

const Card = ({ className, id, text }: CardProps) => {
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
      className={`${className} ${borderColor[id]} flex h-56 w-80 flex-col justify-between rounded-md border-t-4 bg-[white] p-7 shadow-[0_8px_16px] shadow-[#d4dae9] lg:w-[340px] lg:p-8`}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-DarkBlue text-xl font-semibold">{id}</h3>
        <p className="text-[13px] text-grayishBlue">{text}</p>
      </div>
      <div className="relative h-12 w-12 self-end lg:h-16 lg:w-16">
        <Image className="object-contain" src={iconUrl[id]} alt="" fill />
      </div>
    </div>
  );
};

export default Card;
