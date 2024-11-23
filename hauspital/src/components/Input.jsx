import { useState } from "react";

const Input = ({ placeholder, onChange, value, tag, add }) => {
  const [hospitalList, setHospitalList] = useState([]); // 병원 이름 리스트
  const [inputValue, setInputValue] = useState(""); // input 현재 값 저장

  const handleAddHospital = () => {
    if (inputValue.trim()) {
      setHospitalList([...hospitalList, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteHospital = (index) => {
    const newHospitalList = hospitalList.filter((_, i) => i !== index);
    setHospitalList(newHospitalList);
  };

  return (
    <>
      <div className="flex-col">
        <div>
          <p className="p-2 text-gray-600 font-semibold">{tag}</p>
        </div>
        <div className="flex w-[353px] bg-gray-200 px-5 py-2.5 rounded-[var(--Corner-Large,16px)] ">
          <input
            className="w-[310px] h-auto bg-gray-200 border-none"
            placeholder={placeholder}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>

        <div className="text-right p-2">
          <button
            className=" text-gray-400 border-none"
            onClick={handleAddHospital}
          >
            {add}
          </button>
        </div>

        <div>
          <div className="space-y-[20px] ">
            {hospitalList.map((hospital, index) => (
              <div
                key={index}
                className="flex justify-between w-[353px] bg-col3 text-white px-5 py-2.5 rounded-[var(--Corner-Large,16px)]"
              >
                <p>{hospital}</p>
                <button
                  onClick={() => handleDeleteHospital(index)}
                  className="flex items-center text-white border-none text-[13px]"
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
