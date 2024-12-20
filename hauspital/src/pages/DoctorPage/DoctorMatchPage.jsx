import MyMap from "../../components/DoctorPage/MyMap";
import DoctorHeader from "../../components/DoctorPage/DoctorHeader";
import Patient from "../../components/DoctorPage/Patient";
const DoctorMatchPage = () => {
  return (
    <div className="flex flex-col bg-white justify-center items-center pb-12">
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
        <Patient no="1" name="김돌봄" add="은평구" dis="103m" />
        <Patient no="2" name="최윤서" add="은평구" dis="225m" />
        <Patient no="3" name="신민혁" add="은평구" dis="312m" />
        <Patient no="4" name="채정윤" add="은평구" dis="552m" />
        <Patient no="5" name="박수빈" add="은평구" dis="708m" />
      </div>
    </div>
  );
};
export default DoctorMatchPage;
