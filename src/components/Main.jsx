import React, { useState } from "react";
import { ReactComponent as NextIcon } from "../svgs/next.svg";
import { ReactComponent as PrevIcon } from "../svgs/prev.svg";
import { ReactComponent as ImageIcon } from "../svgs/img.svg";
import { Data } from "./data";
import "../main.css";

const Main = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const { name, description, img, job } = data[index];

  // button frunctions

  // listenin sonu geldiğinde veya index 0 olduğunda sonraki kontroller için fonksion
  const checkIndex = (newIndex) => {
    if (newIndex > data.length - 1) {
      return 0;
    } else if (newIndex < 0) {
      return data.length - 1;
    } else return newIndex;
  };

  // geri butonu
  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  // ileri butonu
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  // suprise me butonu

  const handleSurprise = () => {
    const randomNumber = Math.floor(Math.random() * data.length);
    setIndex(randomNumber);
  };

  // return

  return (
    <div className="container">

      {/* header */}

      <div className="title">
      Our Reviews
      </div>
      <div className="underline"></div>
        
      {/* person */}

      <main className="person">

        {/* image  */}
        <section className="image-container">
          <span className="quote-icon">
            <ImageIcon />
          </span>
          <img className="person-img" src={img} alt="" />
        </section>

        {/* person */}

        <section>
          <h4 className="person-name">{name}</h4>
          <h3 className="person-job">{job}</h3>
          <p className="person-quote">{description}</p>
        </section>

        {/* buttons */}

        <section className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <PrevIcon />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <NextIcon />
          </button>
          <div>
            <button className="suprise" onClick={handleSurprise}>
            Suprise Me
          </button>
          </div>          
        </section>

      </main>
    </div>
  );
};

export default Main;
