import React from "react";

import "../styles/ScrollSnap2.css";

// bunu children a verirsek, her scroll da durur böylece aynı anda 2 element geçemez. -> scroll-snap-stop: always;

const ScrollSnap2 = () => {
  return (
    <main>
      <article>1. değer</article>
      <article>2. değer</article>
      <article>3. değer</article>
      <article>4. değer</article>
      <article>5. değer</article>
      <article>6. değer</article>
      <article>7. değer</article>
      <article>8. değer</article>
      <article>9. değer</article>
      <article>10. değer</article>
    </main>
  );
};

export default ScrollSnap2;
