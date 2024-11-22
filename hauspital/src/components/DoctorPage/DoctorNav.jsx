import homeIcon from "../../assets/doctorPage/home.svg";
import matchIcon from "../../assets/doctorPage/match.svg";
import myIcon from "../../assets/doctorPage/person.svg";

const DoctorNav = () => {
  return (
    <div className="flex justify-center items-center p-2 gap-[49px] shadow-custom1 w-[353px] rounded-full">
      <div className="flex flex-col justify-center items-center gap-1 bg-gray-300 w-20 h-20 rounded-[1000px] cursor-pointer">
        <img className="w-6 h-6" src={homeIcon} />
        <div className="text-d3 text-white font-semibold">홈</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 bg-button-gradation w-20 h-20 rounded-[1000px] cursor-pointer">
        <img className="w-8 h-8" src={matchIcon} />
        <div className="text-d3 text-white font-semibold">매칭하기</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 bg-gray-300 w-20 h-20 rounded-[1000px] cursor-pointer">
        <img className="w-6 h-6" src={myIcon} />
        <div className="text-d3 text-white font-semibold">마이</div>
      </div>
    </div>
  );
};
export default DoctorNav;
