import React, { useState, useEffect } from "react";

const { kakao } = window;
const MyMap = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = { center: new kakao.maps.LatLng(37.4467466, 127.1315632) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  // 의사가 등록한 위치의 마커가 표시될 위치
  var markerPosition = new kakao.maps.LatLng(37.4467466, 127.1315632);

  // 의사가 등록한 위치의 마커 생성
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 의사가 등록한 위치의 마커가 지도 위에 표시되도록 설정
  marker.setMap(map);

  console.log("되나", window.kakao);
  return <div id="map" className="w-[353px] h-[374px] rounded-3xl"></div>;
};
export default MyMap;
