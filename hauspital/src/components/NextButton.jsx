const NextButton = ({text, onClick})=>{
    return (
        <div className="flex justify-center items-center py-5 px-[23px] gap-2.5 bg-gray-600 text-white w-353 rounded-lg">
            <button onClick={onClick}>{text}</button>
        </div>
    );
};

// 폰트 사이즈는 일부러 안 넣었습니당
export default NextButton;