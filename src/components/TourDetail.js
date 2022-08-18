import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { useParams } from "react-router-dom";

const TourDetail = () => {
  const [content, setContent] = useState([]);
  const { Id } = useParams();
  const fetchView = async () => {
    const { data } = await axios.get(
      `https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c`
    );
    const Info = data.data.XML_Head.Infos.Info.filter((item) => item.Id === Id);
    console.log(Info);
    setContent(Info);
  };

  useEffect(() => {
    fetchView();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {content.map((c) => (
        <div className="info">
          <div>
            <img src={c.Picture1} alt={c.Name} />
          </div>

          <div className="desc-container">
            <h2 className="desc">{c.Name}</h2>
            <p className="desc">{c.Toldescribe}</p>
            <div className="desc">
              <p>開放時間</p>
              <p>{c.Opentime}</p>
            </div>
            <div className="desc">
              <p>景點地址</p>
              <p>{c.Add}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TourDetail;
