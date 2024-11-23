import { useNavigate } from "react-router-dom";

const BackButton = ({ text, onClick }) => {
  const nav = useNavigate();

  return (
    <div className="flex items-center">
      <button
        className=" text-[20px] font-bold"
        onClick={() => {
          nav(-1);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default BackButton;
