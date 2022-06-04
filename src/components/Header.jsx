import React from "react";

function Header() {
  return (
    <>
      <header>
        <div class="header-text-box">
          <h1>We design and build better chairs, for a better life</h1>
          <p class="header-text">
            In a small shop in the heart of Lisbon, we spend our days
            relentlessly perfecting the chair. The result is a perfect blend of
            beauty and comfort, that will have a lasting impact on your health.
          </p>
          <a class="btn btn--big" href="#">
            Shop chairs
          </a>
        </div>
        <img src="images/hero.jpg" alt="Photo" />
      </header>
    </>
  );
}

export default Header;
