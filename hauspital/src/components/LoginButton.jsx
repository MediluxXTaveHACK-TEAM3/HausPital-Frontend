const LoginButton = ({ onClick, text }) => {
  return (
    <div className="flex w-[353px] h-[44px] justify-center items-center gap-2 rounded-[var(--Corner-Large,16px)] text-gray-800 font-bold bg-white px-6 py-2 border border-solid border-[#B0B0B0]">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default LoginButton;
