const Input = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex w-[353px] bg-gray-200 px-5 py-2.5 rounded-[var(--Corner-Large,16px)] ">
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
