const Title = ({ text, text2 }) => {
  return (
    <div
      className="flex flex-col text-wrap p-5 text-[28px] text-gray-800 font-semibold  leading-9 w-[353px] h-auto"
      style={{ whiteSpace: "pre-line" }}
    >
      <p>{text}</p>
      {text2}
    </div>
  );
};

export default Title;
