import { Link } from "react-router-dom";
import { taipeiView } from "../assets/taipei";

const Taipei = () => {
  return (
    <div className="list-container">
      {taipeiView
        .filter((tpe) => tpe.images[0] !== undefined)
        .map((tpe) => (
          // <div className="list" key={tpe.id}>
          //   <p>{tpe.name}</p>
          //   <img src={tpe.images[0].src} alt="" />
          // </div>
          <div key={tpe.id} className="list">
            <Link className="link" to={`/haveaniceday/taipei/${tpe.id}`}>
              <img className="pic2" src={tpe.images[0].src} alt={tpe.name} />

              <p>{tpe.name}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Taipei;
