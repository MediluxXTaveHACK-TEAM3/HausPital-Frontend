const Input = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex w-[353px] bg-gray-200 px-5 py-2.5 rounded-[var(--Corner-Large,16px)] ">
      <input
        className="w-[310px] h-auto bg-gray-200 border-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
