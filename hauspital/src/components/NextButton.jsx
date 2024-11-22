
const NextButton = ({text, onClick, tag})=>{
    return (
        <div className="flex justify-center items-center py-8 px-[23px] gap-2.5 bg-gray-600 text-[21px] font-semibold text-white w-[353px] h-[7px] rounded-lg">
            <button onClick={onClick}>{text}</button>
        </div>
    );
};

export default NextButton;