type SubTitleProps = {
  children: string;
};

const SubTitle = ({ children }: SubTitleProps) => {
  return <h2>{children}</h2>;
};

export default SubTitle;
