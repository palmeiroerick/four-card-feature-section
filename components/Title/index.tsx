type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-center text-2xl font-semibold text-veryDarkBlue lg:text-4xl">
      {children}
    </h1>
  );
};

export default Title;
