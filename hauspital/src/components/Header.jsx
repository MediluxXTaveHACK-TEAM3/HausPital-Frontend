import { useNavigate } from "react-router-dom";
import backIcon from "../assets/doctorPage/back.svg";
const Header = ({ text, page = "" }) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="flex p-5 justify-between items-center gap-[1.9375rem] w-[393px] bg-white">
      <div className="flex items-center gap-4">
        <img
          className="w-6 h-6 cursor-pointer"
          src={backIcon}
          onClick={handleBackClick}
        />
        <div className="text-[20px] text-gray-700 font-semibold">{text}</div>
      </div>
      <div className="text-[20px] text-gray-500 font-medium">{page}</div>
    </div>
  );
};

export default Header;
