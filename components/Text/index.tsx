type TextProps = {
  children: string;
};

const Text = ({ children }: TextProps) => {
  return <p className="text-grayishBlue text-center">{children}</p>;
};

export default Text;
