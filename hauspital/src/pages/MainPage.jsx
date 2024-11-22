import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import logo from "../assets/logo.svg";

const MainPage = () => {
  return (
    <div>
      <div className="flex text-8 ">
        <p className="text-col2">병원</p>
        <p className="text-gray-800">을 </p>
        <p className="text-col1">내 집</p>
        <p className="text-gray-800">으로</p>
      </div>
      <div className="flex justify-center p-10">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex justify-center">
        <LoginButton text="로그인" />
      </div>
    </div>
  );
};

export default MainPage;
