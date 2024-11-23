import React, { useState, useEffect } from "react";
import pin1 from "../../assets/pin1.svg";
import pin2 from "../../assets/pin2.svg";
import pin3 from "../../assets/pin3.svg";
import docmark from "../../assets/doctorPage/doctor-mark.svg";

const { kakao } = window;
const MyMapBefore = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.4467466, 127.1315632),

      level: 4,
    };
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
        latlng: new kakao.maps.LatLng(37.446194, 127.1312697),
      },
      {
        title: "5순위 환자",
        latlng: new kakao.maps.LatLng(37.447194, 127.1314697),
      },
      {
        title: "6순위 환자",
        latlng: new kakao.maps.LatLng(37.443846, 127.1300627),
      },
      {
        title: "7순위 환자",
        latlng: new kakao.maps.LatLng(37.4455091, 127.1335011),
      },
      {
        title: "8순위 환자",
        latlng: new kakao.maps.LatLng(37.4474043, 127.1336935),
      },
      {
        title: "9순위 환자",
        latlng: new kakao.maps.LatLng(37.4462342, 127.1298103),
      },
    ];
    const pinImages = [pin1, pin2, pin3];
    // 마커 생성
    positions.forEach((position, index) => {
      const imageSize = new kakao.maps.Size(24, 35); // 마커 이미지 크기
      const markerImage = new kakao.maps.MarkerImage(
        pin3, // 첫 번째는 pin1, 두 번째는 pin2, 이후는 pin3
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
export default MyMapBefore;
