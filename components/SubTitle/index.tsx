type SubTitleProps = {
  children: string;
};

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <h2 className="text-center text-2xl font-extralight text-veryDarkBlue">
      {children}
    </h2>
  );
};

export default SubTitle;
