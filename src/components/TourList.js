import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const TourList = () => {
  const [content, setContent] = useState([]);
  const fetchView = async () => {
    const { data } = await axios.get(
      `https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c`
    );
    const newData = data.data.XML_Head.Infos.Info;
    setContent(newData);
  };

  useEffect(() => {
    fetchView();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="list-container">
      {content.map((c) => {
        return (
          <div key={c.Id} className="list">
            <Link className="link" to={`/tour/${c.Id}`}>
              {c.Name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TourList;
