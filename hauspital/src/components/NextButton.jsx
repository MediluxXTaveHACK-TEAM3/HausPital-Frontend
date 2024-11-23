const NextButton = ({ text, onClick, tag }) => {
  return (
    <div
      className="flex justify-center items-center py-7 gap-2.5 bg-gray-600 text-[21px] font-semibold text-white w-[353px] h-[7px] rounded-lg hover:bg-gray-500 cursor-pointer"
      onClick={onClick}
    >
      <div>{text}</div>
    </div>
  );
};

export default NextButton;
