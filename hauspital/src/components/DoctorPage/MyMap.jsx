import React, { useState, useEffect } from "react";
import pin1 from "../../assets/pin1.svg";
import pin2 from "../../assets/pin2.svg";
import pin3 from "../../assets/pin3.svg";
import docmark from "../../assets/doctorPage/doctor-mark.svg";

const { kakao } = window;
const MyMap = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = { center: new kakao.maps.LatLng(37.4467466, 127.1315632) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    var markerPosition = new kakao.maps.LatLng(37.4467466, 127.1315632);

    //임시
    const docImageSize = new kakao.maps.Size(60, 40); // 마커 이미지 크기
    const docMarkerImage = new kakao.maps.MarkerImage(
      docmark, // 첫 번째는 pin1, 두 번째는 pin2, 이후는 pin3
      docImageSize
    );

    var doctorMarker = new kakao.maps.Marker({
      position: markerPosition,
      image: docMarkerImage,
    });
    doctorMarker.setMap(kakaoMap);

    //환자 핀 위치
    var positions = [
      {
        title: "1순위 환자",
        latlng: new kakao.maps.LatLng(37.4470905, 127.1319222),
      },
      {
        title: "2순위 환자",
        latlng: new kakao.maps.LatLng(37.447288, 127.1310512),
      },
      {
        title: "3순위 환자",
        latlng: new kakao.maps.LatLng(37.4461156, 127.1319258),
      },
      {
        title: "4순위 환자",
        latlng: new kakao.maps.LatLng(37.446194, 127.1310197),
      },
      {
        title: "5순위 환자",
        latlng: new kakao.maps.LatLng(37.445644, 127.1314697),
      },
    ];
    const pinImages = [pin1, pin2, pin3];
    // 마커 생성
    positions.forEach((position, index) => {
      const maxSize = 45; // 첫 번째 마커 크기
      const minSize = 25; // 가장 작은 마커 크기
      const sizeStep = 5; // 마커 크기 감소 폭

      const currentSize = Math.max(
        maxSize - index * sizeStep, // 크기를 순차적으로 줄임
        minSize // 최소 크기 보장
      );
      const imageSize = new kakao.maps.Size(currentSize, currentSize); // 크기 적용
      // const imageSize = new kakao.maps.Size(35, 38); // 마커 이미지 크기
      const markerImage = new kakao.maps.MarkerImage(
        pinImages[Math.min(index, 2)], // 첫 번째는 pin1, 두 번째는 pin2, 이후는 pin3
        imageSize
      );

      const marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: position.latlng,
        title: position.title,
        image: markerImage,
      });
      marker.setMap(kakaoMap);
    });
  }, []);

  console.log("되나", window.kakao);
  return <div id="map" className="w-[353px] h-[374px] rounded-3xl"></div>;
};
export default MyMap;
