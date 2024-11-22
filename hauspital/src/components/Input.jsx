const Input = ({ placeholder, onChange, tag, add }) => {
  return (
    <>
      <div>
        <div>
          <p className="p-2 text-gray-600 font-semibold">{tag}</p>
        </div>
        <div className="flex w-[353px] bg-gray-200 px-5 py-2.5 rounded-[var(--Corner-Large,16px)] ">
          <input
            className="w-[310px] h-auto bg-gray-200 border-none"
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>

        <div className="text-right p-2">
          <button className=" text-gray-400 border-none">{add}</button>
        </div>
      </div>
    </>
  );
};

export default Input;
