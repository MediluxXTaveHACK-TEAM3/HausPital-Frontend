import { useState } from "react";
import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const ConfirmPage = () => {
  const nav = useNavigate();
  const [text, setText] = useState("추가 진료 원해요");

  return (
    <div className="flex flex-col justify-between pb-[81px] h-full">
      <div className="flex flex-col">
        <Header text="의료인과 매칭이 됐어요" />

        <div className="flex flex-col font-semibold">
          <p className="flex justify-center mt-[50px] text-[25px]">
            📌최윤서님!
          </p>

          <p className="flex justify-center mt-[50px] text-[26px]">
            예상 진료일은
          </p>

          <div className="flex flex-col items-center ">
            <div
              className="py-[30px] mt-[15px] w-[320px] bg-col3 text-[30px] text-white rounded-xl"
              onClick={() => {
                nav(`/predict`);
              }}
            >
              <p className="flex justify-center">오늘 오후 6시</p>
              <p className="flex justify-center">전후로</p>
            </div>
          </div>

          <p className="flex justify-center mt-[15px] text-[26px]">
            의료인이 방문
          </p>
          <p className="flex justify-center text-[26px]">할 예정입니다!</p>
        </div>
      </div>
      <div className="flex justify-center">
        <NextButton
          text={text}
          onClick={() => {
            setText("추가 진료 접수되었습니다");
          }}
        />
      </div>
    </div>
  );
};

export default ConfirmPage;
