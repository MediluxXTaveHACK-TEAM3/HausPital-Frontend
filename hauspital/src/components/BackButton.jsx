const BackButton = ({text, onClick}) => (
  <div className="flex items-center">
    <button onClick={onClick}>{text}</button>
  </div>
);

export default BackButton;
