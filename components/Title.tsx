interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <h2 className="text-3xl font-bold text-center font-special">{text}</h2>
  );
};

export default Title;
