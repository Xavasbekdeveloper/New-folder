import React, { memo } from "react";
import { Link } from "react-router-dom";
// import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.compat.css";

import "./main.scss";

const Main = () => {
  return (
    <section className="main container">
      <h1>Assalomu alaykum!</h1>
      <h1>Keling, kimligingizni aniqlaymiz!</h1>
      <p>
        Sizni yaxshi tanish imkoniyatiga ega bo'lamiz. Siz introvertmisiz yoki
        extrovert? Javobni bilishga tayyormisiz? Bu qiziqarli va tezkor test
        sizga o'zingizni yaxshiroq tushunishga yordam beradi.
      </p>
      <Link to={"/question/1"}>Boshlash</Link>
    </section>
  );
};

export default memo(Main);
