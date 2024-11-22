import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const TownHosPage = () => {
  const nav = useNavigate();
  return (
    <>
      <div>
        <Header
          text="내 정보 입력하기"
          page="6"
          leftChild={
            <BackButton className="pt-8 text-[40px] font-bold" text="<" />
          }
        />
      </div>
      <div>
        <Title text="다니는 동네 병원🏥을 입력해주세요" />
      </div>

      <div className="flex justify-center mt-[65px]">
        <Input placeholder="하우스피탈대학병원" tag="동네병원" />
      </div>

      <div className="flex justify-center mt-[255px]">
        <NextButton
          text="다음"
          onClick={() => {
            nav(`/illness`);
          }}
        />
      </div>
    </>
  );
};

export default TownHosPage;
