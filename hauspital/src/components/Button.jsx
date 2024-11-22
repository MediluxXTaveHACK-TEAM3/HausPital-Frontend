const Button = ({text, onClick})=>{
    return (
        <div className="flex justify-center items-center py-2 bg-orange-50 w-auto rounded-lg">
            <button onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button;