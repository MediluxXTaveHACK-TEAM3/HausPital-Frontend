import nextIcon from "../../assets/doctorPage/next.svg";
const Patient = ({ no, name, add, dis }) => {
  return (
    <div className="flex justify-between items-center gap-1 w-[353px] cursor-pointer">
      <div className="flex items-center text-d4 text-gray-500 font-semibold  gap-[14px]">
        <div className="flex justify-center px-5 py-2 border border-gray-300 w-[69px] rounded-2xl">
          {no}
        </div>
        <div className="px-5 w-[74px]">{name}</div>
        <div className="px-5 w-[74px]">{add}</div>
        <div className="px-5 w-[74px]">{dis}</div>
      </div>
      <img className="w-5 h-5" src={nextIcon} />
    </div>
  );
};
export default Patient;
