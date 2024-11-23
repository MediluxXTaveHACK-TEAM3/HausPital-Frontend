import MyMap from "../../components/DoctorPage/MyMap";
import MyMapBefore from "../../components/DoctorPage/MyMapBefore";
import DoctorHeader from "../../components/DoctorPage/DoctorHeader";
import PredictComponent from "../../components/DoctorPage/PredictComponent";
import DoctorNav from "../../components/DoctorPage/DoctorNav";
const DoctorMainPage = () => {
  return (
    <div className="flex flex-col items-center pb-12">
      <DoctorHeader text="환자를 찾고 있어요" />
      <div className="text-d2 font-medium w-full px-5 mb-4 text-gray-600">
        최대 6명이내 내 주변 5km이내 환자를 찾고 있어요
      </div>
      <MyMapBefore />
      <div className="flex gap-2 mt-4">
        <PredictComponent text="예상 환자 수" />
        <div className="flex w-[210px] text-gray-400 text-d2 font-medium h-11 justify-end items-center gap-2.5 shrink-0 border border-gray-300 px-[18px] py-2 rounded-2xl">
          <span className="text-[18px] text-gray-500 font-semibold">5</span>명
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <PredictComponent text="예상 수익" />
        <div className="flex w-[210px] text-gray-200 bg-gray-400 text-d2 font-medium h-11 justify-end  gap-2.5 items-center  px-[18px] py-2 rounded-2xl">
          <span className="text-[18px] text-white font-semibold">60</span>만원
        </div>
      </div>
      <div className="mt-[60px]">
        <DoctorNav />
      </div>
    </div>
  );
};
export default DoctorMainPage;
