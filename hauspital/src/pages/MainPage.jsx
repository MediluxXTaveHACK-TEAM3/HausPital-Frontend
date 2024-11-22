import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import logo from "../assets/logo.svg";

const MainPage = () => {
  return (
    <div className="p-10 mt-[100px]">
      <div className="flex justify-center text-[32px] font-semibold">
        <p className="text-col2">병원</p>
        <p className="text-gray-800">을 </p>
        <p className="text-col1">내 집</p>
        <p className="text-gray-800">으로</p>
      </div>
      <div className="flex justify-center p-10">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex flex-col gap-3">
        <LoginButton className="" text="로그인" />
        <LoginButton text="회원가입" />
      </div>
    </div>
  );
};

export default MainPage;
