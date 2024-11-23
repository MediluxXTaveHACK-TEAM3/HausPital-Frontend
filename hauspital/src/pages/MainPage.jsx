import { useEffect } from "react";
import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LoginButton from "../components/LoginButton";
import Title from "../components/Title";
import Input from "../components/Input";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const nav = useNavigate();
  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    fetch(`${API_BASE_URL}/patients/all`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <>
      <div className="p-10 mt-[60px]">
        <div className="flex justify-center space-x-3 text-[30px] font-semibold">
          <div className="flex justify-center">
            <p className="text-col2">병원</p>
            <p className="text-gray-800">을</p>
          </div>
          <div className="flex justify-center">
            <p className="text-col1">내 집</p>
            <p className="text-gray-800">으로</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-6">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-[130px]">
        <LoginButton
          text="시작하기"
          onClick={() => {
            nav(`/onboarding-1`);
          }}
        />
        {/* <LoginButton text="가입하기" /> */}
      </div>
    </>
  );
};

export default MainPage;
