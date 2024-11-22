import { useState } from "react";
import { useNavigate } from "react-router-dom";
import checkIcon from "../assets/onboardingPage/check.svg";
const FontPage = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null); // 선택된 항목 추적

  const handleClick = (size) => {
    setSelectedSize(size);
  };
  const handleNextClick = () => {
    navigate(`/name`);
  };
  return (
    <div className="flex flex-col pb-20">
      <div className=" ml-5 mt-[3.25rem] text-[24px] font-semibold">
        어떤 크기가 가장 마음에 드세요?
      </div>
      <div className="ml-5 mt-4 text-[14px] font-medium text-gray-500">
        앞으로의 하우스피탈 사용에 도움이 될거에요!
      </div>
      <div className="flex flex-col items-center mt-16 gap-2">
        {/* 첫 번째 선택 */}
        <div
          className={`flex justify-center text-s1 font-semibold px-[1.4375rem] py-[2.0625rem] border-2 w-[353px] rounded-2xl cursor-pointer ${
            selectedSize === "s1"
              ? "bg-gray-200 text-gray-700"
              : selectedSize
              ? "text-custom-gray"
              : "text-gray-700"
          } border-gray-400`}
          onClick={() => handleClick("s1")}
        >
          글씨가 이 크기로 표시돼요
        </div>

        {/* 두 번째 선택 */}
        <div
          className={`flex justify-center text-s2 text-center font-semibold px-[1.4375rem] py-[2.0625rem] border-2 w-[353px] rounded-2xl cursor-pointer ${
            selectedSize === "s2"
              ? "bg-gray-200 text-gray-700"
              : selectedSize
              ? "text-custom-gray"
              : "text-gray-700"
          } border-gray-400`}
          onClick={() => handleClick("s2")}
        >
          글씨가 이 크기로
          <br /> 표시돼요
        </div>

        {/* 세 번째 선택 */}
        <div
          className={`flex justify-center text-s3 text-center font-semibold px-[1.4375rem] py-[2.0625rem] border-2 w-[353px] rounded-2xl cursor-pointer ${
            selectedSize === "s3"
              ? "bg-gray-200 text-gray-700"
              : selectedSize
              ? "text-custom-gray"
              : "text-gray-700"
          } border-gray-400`}
          onClick={() => handleClick("s3")}
        >
          글씨가 이 크기로 <br />
          표시돼요
        </div>
      </div>

      {selectedSize && (
        <div
          className="flex justify-center mx-5 py-5 gap-2.5 mt-[63px] bg-gray-600 font-bold text-s2 text-white w-[353px] rounded-2xl cursor-pointer"
          onClick={handleNextClick}
        >
          <img src={checkIcon} alt="Check Icon" />
          확인했어요
        </div>
      )}
    </div>
  );
};
export default FontPage;
