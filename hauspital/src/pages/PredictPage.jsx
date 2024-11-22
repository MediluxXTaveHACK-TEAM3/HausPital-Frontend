import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const PredictPage = () => {
  const nav = useNavigate();
  return (
    <div>
      <Header
        text="의료인과 매칭이 됐어요"
        leftChild={
          <BackButton className="pt-8 text-[40px] font-bold" text="<" />
        }
      />

      <div className="flex flex-col font-semibold">
        <p className="flex justify-center mt-[50px] text-[25px]">📌김병원님!</p>

        <p className="flex justify-center mt-[60px] text-[26px]">
          예상 진료일은
        </p>

        <div className="flex flex-col items-center ">
          <div className="py-[30px] mt-[15px] w-[320px] bg-col3 text-[30px] text-white rounded-xl">
            <p className="flex justify-center">11/23 토요일</p>
            <p className="flex justify-center">오후 3시</p>
          </div>
        </div>

        <p className="flex justify-center mt-[15px] text-[26px]">입니다!</p>
      </div>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center">
          <NextButton
            text="추가 진료 원해요"
            onClick={() => {
              nav(`/confirm`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PredictPage;
