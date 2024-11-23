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
    <div className="flex flex-col justify-between pb-[81px] h-full">
      <div className="flex flex-col">
        <div>
          <Header text="내 정보 입력하기" page="2/7" />
        </div>
        <div>
          <Title text="주민등록번호 앞자리를 입력해주세요" />
        </div>

        <div className="flex justify-center mt-[25px]">
          <Input placeholder="971021" />
        </div>
      </div>

      <div className="flex justify-center mt-[240px]">
        <NextButton
          text="다음"
          onClick={() => {
            nav(`/gender`);
          }}
        />
      </div>
    </div>
  );
};

export default JuminPage;
