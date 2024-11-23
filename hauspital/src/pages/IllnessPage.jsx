import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const IllnessPage = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col justify-between pb-[81px] h-full">
      <div className="flex flex-col">
        <div>
          <Header text="내 정보 입력하기" page="7" />
        </div>
        <div>
          <Title text="기저질환을 입력해주세요" />
        </div>

        <div className="flex justify-center mt-[60px]">
          <Input placeholder="기저질환" add="+ 추가하기" />
        </div>
      </div>
      <div className="flex justify-center">
        <NextButton
          text="시작하기"
          onClick={() => {
            nav(`/predict`);
          }}
        />
      </div>
    </div>
  );
};

export default IllnessPage;
