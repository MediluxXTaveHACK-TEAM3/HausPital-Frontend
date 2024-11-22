import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const UnivHosPage = () => {
  return (
    <>
      <div>
        <Header
          text="내 정보 입력하기"
          page="5"
          leftChild={
            <BackButton className="pt-8 text-[40px] font-bold" text="<" />
          }
        />
      </div>
      <div>
        <Title text="다니는 대학 병원🏥을 입력해주세요" />
      </div>

      <div className="flex justify-center mt-[65px]">
        <Input placeholder="좋은병원" tag="대학병원" />
      </div>

      <div className="flex justify-center mt-[20px]">
        <Input placeholder="김병원" tag="교수" />
      </div>

      <div className="flex justify-center mt-[180px]">
        <NextButton text="다음" />
      </div>
    </>
  );
};

export default UnivHosPage;
