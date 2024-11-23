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
        <Header text="내 정보 입력하기" page="6" />
      </div>
      <div>
        <Title text="다니는 동네 병원🏥을" text2="입력해주세요" />
      </div>

      <div className="flex justify-center mt-[25px]">
        <Input
          placeholder="하우스피탈대학병원"
          tag="동네병원"
          add="+ 추가하기"
        />
      </div>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center">
          <NextButton
            text="다음"
            onClick={() => {
              nav(`/illness`);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TownHosPage;
