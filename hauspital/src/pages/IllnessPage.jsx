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
    <>
      <div>
        <Header text="내 정보 입력하기" page="7" />
      </div>
      <div>
        <Title text="기저질환을 입력해주세요" />
      </div>

      <div className="flex justify-center mt-[60px]">
        <Input placeholder="기저질환" add="+ 추가하기" />
      </div>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center">
          <NextButton
            text="시작하기"
            onClick={() => {
              nav(`/predict`);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default IllnessPage;
