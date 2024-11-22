const BackButton = ({ text, onClick }) => (
  <div className="flex items-center">
    <button className=" text-[20px] font-bold" onClick={onClick}>
      {text}
    </button>
  </div>
);

export default BackButton;
