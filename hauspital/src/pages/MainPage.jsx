import NextButton from "../components/NextButton";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

const MainPage = () => {


  return (
    <div>
      <div className="text-black">병원을 집으로</div>
      <div>
        <Header title="내 정보 입력하기" leftChild={<BackButton text="<"/>} page={6}/>
      </div>
    </div>
  );
};
export default MainPage;
