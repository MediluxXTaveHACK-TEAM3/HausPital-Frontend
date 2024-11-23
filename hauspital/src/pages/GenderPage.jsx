import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import GenderButton from "../components/genderButton";
import { useNavigate } from "react-router-dom";

const GenderPage = () => {
  return (
    <>
      <div>
        <Header
          text="내 정보 입력하기"
          page="3"
          leftChild={
            <BackButton className="pt-8 text-[40px] font-bold" text="<" />
          }
        />
      </div>
      <div>
        <Title text="성별을 골라주세요" />
      </div>

      <div className="flex flex-col items-center mt-[80px] gap-[15px]">
        <GenderButton text="남성" />
        <GenderButton text="여성" />
      </div>

      {/* <div className="flex justify-center mt-[270px]">
        <NextButton text="다음" />
      </div> */}
    </>
  );
};

export default GenderPage;
