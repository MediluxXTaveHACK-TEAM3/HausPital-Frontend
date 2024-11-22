const Header = ({ text, leftChild, page }) => {
  return (
    <div className="flex p-5 justify-between items-center gap-[1.9375rem] w-353 bg-white">
      <div className="flex gap-4">
        <div className="text-gray-800">{leftChild}</div>
        <div className="text-[1.375rem] text-gray-700 font-semibold">
          {text}
        </div>
      </div>
      <div className="text-gray-500">{`${page}/7`}</div>
    </div>
  );
};

export default Header;
