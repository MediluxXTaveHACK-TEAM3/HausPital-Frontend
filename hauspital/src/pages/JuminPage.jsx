import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const JuminPage = () => {
  const nav = useNavigate();

  return (
    <>
      <div>
        <Header text="내 정보 입력하기" page="2" />
      </div>
      <div>
        <Title text="주민등록번호 앞자리를 입력해주세요" />
      </div>

      <div className="flex justify-center mt-[25px]">
        <Input placeholder="971021" />
      </div>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center mt-[240px]">
          <NextButton
            text="다음"
            onClick={() => {
              nav(`/gender`);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default JuminPage;
