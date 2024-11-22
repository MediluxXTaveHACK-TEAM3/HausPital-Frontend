import backIcon from "../../assets/doctorPage/back.svg";
const DoctorHeader = ({ text }) => {
  return (
    <div>
      <div className="flex p-5 gap-5 w-[393px]">
        <img className="w-6 h-6 cursor-pointer" src={backIcon} />
        <div className="text-d1 text-gray-700 font-semibold">{text} </div>
      </div>
    </div>
  );
};
export default DoctorHeader;