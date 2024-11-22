import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";

const NamePage = () => {
  return (
    <>
      <div>
        <Header
          text="내 정보 입력하기"
          page="1"
          leftChild={
            <BackButton className="pt-8 text-[40px] font-bold" text="<" />
          }
        />
      </div>
      <div>
        <Title text="이름을 입력해주세요" />
      </div>

      <div className="flex justify-center mt-[90px]">
        <Input placeholder="김병원" />
      </div>

      <div className="flex justify-center mt-[250px]">
        <NextButton text="다음" />
      </div>
    </>
  );
};

export default NamePage;
