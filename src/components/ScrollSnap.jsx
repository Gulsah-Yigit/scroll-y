import React from "react";

import "../styles/ScrollSnap.css";

// css le hallettik. parenta -> scroll-snap-type: y mandatory; verdik, children a ise -> scroll-snap-align: start; verdik ve bitti...

// main içerisine header eklediğimizde, elementlerin start noktaları header ın altında kaldı, şöyle çözdük, parent a -> scroll-padding-top: 50px; -> çünkü header ın yüksekliği 50px. parent yerine margin kullanarak child a verebilirdik -> scroll-margin-top: 50px;

const ScrollSnap = () => {
  return (
    <main>
      <header>HEADER</header>

      <article>
        <h3>Başlık 1</h3>
        <p>Buraya açıklama gelecek</p>
      </article>

      <article>
        <h3>Başlık 2</h3>
        <p>Buraya açıklama gelecek</p>
      </article>

      <article>
        <h3>Başlık 3</h3>
        <p>Buraya açıklama gelecek</p>
      </article>

      <article>
        <h3>Başlık 4</h3>
        <p>Buraya açıklama gelecek</p>
      </article>

      <article>
        <h3>Başlık 5</h3>
        <p>Buraya açıklama gelecek</p>
      </article>

      <article>
        <h3>Başlık 6</h3>
        <p>Buraya açıklama gelecek</p>
      </article>

      <article>
        <h3>Başlık 7</h3>
        <p>Buraya açıklama gelecek</p>
      </article>

      <article>
        <h3>Başlık 8</h3>
        <p>Buraya açıklama gelecek</p>
      </article>
    </main>
  );
};

export default ScrollSnap;
