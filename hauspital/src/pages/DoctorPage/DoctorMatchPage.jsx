import MyMap from "../../components/DoctorPage/MyMap";
import DoctorHeader from "../../components/DoctorPage/DoctorHeader";
import Patient from "../../components/DoctorPage/Patient";
const DoctorMatchPage = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-12">
      <DoctorHeader text="환자를 찾았어요" />
      <div className="text-d2 font-medium w-full px-5 mb-4 text-gray-600">
        도움이 급한 환자 순서대로 알려드릴게요
      </div>
      <MyMap />
      <div className="flex flex-col justify-center items-center gap-2 mt-4 w-[353px]">
        <div className="flex px-8 py-1.5 bg-custom-blue text-d4 text-white font-semibold w-[353px] rounded-full">
          <span>No.</span>
          <span className="ml-[61px]">이름</span>
          <span className="ml-[65px]">주소</span>
          <span className="ml-[65px]">거리</span>
        </div>
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
      </div>
    </div>
  );
};
export default DoctorMatchPage;
