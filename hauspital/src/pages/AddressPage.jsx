import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const AddressPage = () => {
  const nav = useNavigate();
  return (
    <>
      <div>
        <Header
          text="내 정보 입력하기"
          page="4"
          leftChild={
            <BackButton className="pt-8 text-[40px] font-bold" text="<" />
          }
        />
      </div>
      <div>
        <Title text="주소를 입력해주세요" />
      </div>

      <div className="flex justify-center mt-[60px]">
        <Input placeholder="서울시 병원동 의사구" />
      </div>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center">
          <NextButton
            text="다음"
            onClick={() => {
              nav(`/univhos`);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AddressPage;
