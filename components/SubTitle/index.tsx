type SubTitleProps = {
  children: string;
};

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <h2 className="text-center text-2xl font-extralight text-veryDarkBlue lg:text-4xl">
      {children}
    </h2>
  );
};

export default SubTitle;
