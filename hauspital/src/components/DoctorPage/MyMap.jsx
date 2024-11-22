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

  // 마커를 표시할 위치와 title 객체 배열입니다
  var positions = [
    {
      title: "카카오",
      latlng: new kakao.maps.LatLng(37.4470905, 127.1319222),
    },
    {
      title: "생태연못",
      latlng: new kakao.maps.LatLng(37.447288, 127.1310512),
    },
    {
      title: "텃밭",
      latlng: new kakao.maps.LatLng(33.450879, 126.56994),
    },
    {
      title: "근린공원",
      latlng: new kakao.maps.LatLng(33.451393, 126.570738),
    },
  ];

  // 마커 이미지의 이미지 주소입니다
  var imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  for (var i = 0; i < positions.length; i++) {
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35);

    // 마커 이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    });
  }
  console.log("되나", window.kakao);
  return <div id="map" className="w-[353px] h-[374px] rounded-3xl"></div>;
};
export default MyMap;
