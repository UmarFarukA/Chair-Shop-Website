import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import Card from "./Card";
import Testimonial from "./Testimonial";
import Data from "../Data.js";

function Main() {
  return (
    <>
      <div className="container">
        <Header />
        <section className="first-section">
          <h2>What makes our chairs special</h2>
          <div className="grid-3-cols">
            <Section
              icon="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              label="Science meets design"
              text="Reprehenderit optio placeat quasi excepturi architecto, explicabo facilis perspiciatis error maxime magnam."
            />
            <Section
              icon="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              label="Maximal comfort"
              text="Reprehenderit optio placeat quasi excepturi architecto,
                explicabo facilis perspiciatis error maxime magnam."
            />

            <Section
              icon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              label="Ethical and sustainable"
              text="Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat
                omnis est laudantium voluptatem voluptas!"
            />
          </div>
        </section>

        <Testimonial />

        <section className="selling-section">
          <h2>Our bestselling chairs</h2>
          <div className="grid-3-cols">
            {Data.map((data) => {
              return (
                <Card
                  key={data.id}
                  img={data.img}
                  title={data.title}
                  item_1={data.item_1}
                  item_2={data.item_2}
                  item_3={data.item_3}
                  item_4={data.item_4}
                  price={data.price}
                />
              );
            })}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Main;
