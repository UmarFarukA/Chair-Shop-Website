import React from "react";

function Card(props) {
  return (
    <figure className="chair">
      <img src={props.img} alt="Chair" />
      <div className="chair-box">
        <h3>{props.title}</h3>
        <ul className="chair-details">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chair-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <span>{props.item_1}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chair-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{props.item_2}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chair-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span>{props.item_3}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chair-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span>{props.item_4}</span>
          </li>
        </ul>
        <div className="chair-price">
          <strong>{props.price}</strong>
          <a href="#" className="btn btn--small">
            Add to cart
          </a>
        </div>
      </div>
    </figure>
  );
}

export default Card;
