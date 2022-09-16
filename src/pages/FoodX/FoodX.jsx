import React from "react";
import "./FoodX.css";
import Button from "../../components/ProductPageButton/Button";
import Phone1 from "../../assets/hero section image.png";
import Phone2 from "../../assets/phone2.png";
import { feature } from "../../data/feature";

import FeatureCard from "../../components/ProductPageCard/FeatureCard";

function FoodX() {
  return (
    <>
      <div className="header__container">
        <div className="header__container_text">
          <h1>We’ve Got You Covered For Your Food Business</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel
            tempus varius mi in purus maximus vulputate. Cras sit amet dignissim
            enim. amet consectetur adipiscing elit. Aliquam vel neque nec ex
            efficitur tempus.
          </p>
          <div className="header__button">
            <Button text="Get Started" btnStyle="btn__primary" />
            <Button text="Get a Demo" btnStyle="btn__primary" />
          </div>
        </div>
        <div className="header__container_phone">
          <img src={Phone1} alt="" />
        </div>
      </div>

      <div className="why__section_container">
        <h2>Why choose FoodX</h2>
        <div className="feature__card_container">
          {feature.map((cur, i) => {
            return (
              <FeatureCard
                key={i}
                title={cur.title}
                description={cur.description}
              />
            );
          })}
        </div>
      </div>

      <div className="features__container">
        <div className="features__text">
          <h3 className="feature__heading">Features</h3>
          <div className="feature__row">
            <span>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 18.125C16.502 18.125 18.125 16.502 18.125 14.5C18.125 12.498 16.502 10.875 14.5 10.875C12.498 10.875 10.875 12.498 10.875 14.5C10.875 16.502 12.498 18.125 14.5 18.125Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.41797 15.5633V13.4367C2.41797 12.18 3.44505 11.1408 4.7138 11.1408C6.90089 11.1408 7.79505 9.59417 6.69547 7.69709C6.06714 6.60959 6.44172 5.19584 7.5413 4.5675L9.63172 3.37125C10.5863 2.80334 11.8188 3.14167 12.3867 4.09625L12.5196 4.32584C13.6071 6.22292 15.3955 6.22292 16.4951 4.32584L16.628 4.09625C17.1959 3.14167 18.4284 2.80334 19.383 3.37125L21.4734 4.5675C22.573 5.19584 22.9476 6.60959 22.3192 7.69709C21.2196 9.59417 22.1138 11.1408 24.3009 11.1408C25.5576 11.1408 26.5967 12.1679 26.5967 13.4367V15.5633C26.5967 16.82 25.5696 17.8592 24.3009 17.8592C22.1138 17.8592 21.2196 19.4058 22.3192 21.3029C22.9476 22.4025 22.573 23.8042 21.4734 24.4325L19.383 25.6288C18.4284 26.1967 17.1959 25.8583 16.628 24.9038L16.4951 24.6742C15.4076 22.7771 13.6192 22.7771 12.5196 24.6742L12.3867 24.9038C11.8188 25.8583 10.5863 26.1967 9.63172 25.6288L7.5413 24.4325C6.44172 23.8042 6.06714 22.3904 6.69547 21.3029C7.79505 19.4058 6.90089 17.8592 4.7138 17.8592C3.44505 17.8592 2.41797 16.82 2.41797 15.5633Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p>Registration / User Login</p>
          </div>
          <hr />
          <div className="feature__row">
            <span>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 18.125C16.502 18.125 18.125 16.502 18.125 14.5C18.125 12.498 16.502 10.875 14.5 10.875C12.498 10.875 10.875 12.498 10.875 14.5C10.875 16.502 12.498 18.125 14.5 18.125Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.41797 15.5633V13.4367C2.41797 12.18 3.44505 11.1408 4.7138 11.1408C6.90089 11.1408 7.79505 9.59417 6.69547 7.69709C6.06714 6.60959 6.44172 5.19584 7.5413 4.5675L9.63172 3.37125C10.5863 2.80334 11.8188 3.14167 12.3867 4.09625L12.5196 4.32584C13.6071 6.22292 15.3955 6.22292 16.4951 4.32584L16.628 4.09625C17.1959 3.14167 18.4284 2.80334 19.383 3.37125L21.4734 4.5675C22.573 5.19584 22.9476 6.60959 22.3192 7.69709C21.2196 9.59417 22.1138 11.1408 24.3009 11.1408C25.5576 11.1408 26.5967 12.1679 26.5967 13.4367V15.5633C26.5967 16.82 25.5696 17.8592 24.3009 17.8592C22.1138 17.8592 21.2196 19.4058 22.3192 21.3029C22.9476 22.4025 22.573 23.8042 21.4734 24.4325L19.383 25.6288C18.4284 26.1967 17.1959 25.8583 16.628 24.9038L16.4951 24.6742C15.4076 22.7771 13.6192 22.7771 12.5196 24.6742L12.3867 24.9038C11.8188 25.8583 10.5863 26.1967 9.63172 25.6288L7.5413 24.4325C6.44172 23.8042 6.06714 22.3904 6.69547 21.3029C7.79505 19.4058 6.90089 17.8592 4.7138 17.8592C3.44505 17.8592 2.41797 16.82 2.41797 15.5633Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p>Registration / User Login</p>
          </div>
          <hr />
          <div className="feature__row">
            <span>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 18.125C16.502 18.125 18.125 16.502 18.125 14.5C18.125 12.498 16.502 10.875 14.5 10.875C12.498 10.875 10.875 12.498 10.875 14.5C10.875 16.502 12.498 18.125 14.5 18.125Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.41797 15.5633V13.4367C2.41797 12.18 3.44505 11.1408 4.7138 11.1408C6.90089 11.1408 7.79505 9.59417 6.69547 7.69709C6.06714 6.60959 6.44172 5.19584 7.5413 4.5675L9.63172 3.37125C10.5863 2.80334 11.8188 3.14167 12.3867 4.09625L12.5196 4.32584C13.6071 6.22292 15.3955 6.22292 16.4951 4.32584L16.628 4.09625C17.1959 3.14167 18.4284 2.80334 19.383 3.37125L21.4734 4.5675C22.573 5.19584 22.9476 6.60959 22.3192 7.69709C21.2196 9.59417 22.1138 11.1408 24.3009 11.1408C25.5576 11.1408 26.5967 12.1679 26.5967 13.4367V15.5633C26.5967 16.82 25.5696 17.8592 24.3009 17.8592C22.1138 17.8592 21.2196 19.4058 22.3192 21.3029C22.9476 22.4025 22.573 23.8042 21.4734 24.4325L19.383 25.6288C18.4284 26.1967 17.1959 25.8583 16.628 24.9038L16.4951 24.6742C15.4076 22.7771 13.6192 22.7771 12.5196 24.6742L12.3867 24.9038C11.8188 25.8583 10.5863 26.1967 9.63172 25.6288L7.5413 24.4325C6.44172 23.8042 6.06714 22.3904 6.69547 21.3029C7.79505 19.4058 6.90089 17.8592 4.7138 17.8592C3.44505 17.8592 2.41797 16.82 2.41797 15.5633Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p>Registration / User Login</p>
          </div>
          <hr />
          <div className="feature__row">
            <span>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 18.125C16.502 18.125 18.125 16.502 18.125 14.5C18.125 12.498 16.502 10.875 14.5 10.875C12.498 10.875 10.875 12.498 10.875 14.5C10.875 16.502 12.498 18.125 14.5 18.125Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.41797 15.5633V13.4367C2.41797 12.18 3.44505 11.1408 4.7138 11.1408C6.90089 11.1408 7.79505 9.59417 6.69547 7.69709C6.06714 6.60959 6.44172 5.19584 7.5413 4.5675L9.63172 3.37125C10.5863 2.80334 11.8188 3.14167 12.3867 4.09625L12.5196 4.32584C13.6071 6.22292 15.3955 6.22292 16.4951 4.32584L16.628 4.09625C17.1959 3.14167 18.4284 2.80334 19.383 3.37125L21.4734 4.5675C22.573 5.19584 22.9476 6.60959 22.3192 7.69709C21.2196 9.59417 22.1138 11.1408 24.3009 11.1408C25.5576 11.1408 26.5967 12.1679 26.5967 13.4367V15.5633C26.5967 16.82 25.5696 17.8592 24.3009 17.8592C22.1138 17.8592 21.2196 19.4058 22.3192 21.3029C22.9476 22.4025 22.573 23.8042 21.4734 24.4325L19.383 25.6288C18.4284 26.1967 17.1959 25.8583 16.628 24.9038L16.4951 24.6742C15.4076 22.7771 13.6192 22.7771 12.5196 24.6742L12.3867 24.9038C11.8188 25.8583 10.5863 26.1967 9.63172 25.6288L7.5413 24.4325C6.44172 23.8042 6.06714 22.3904 6.69547 21.3029C7.79505 19.4058 6.90089 17.8592 4.7138 17.8592C3.44505 17.8592 2.41797 16.82 2.41797 15.5633Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p>Registration / User Login</p>
          </div>
          <hr />
          <div className="feature__row">
            <span>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 18.125C16.502 18.125 18.125 16.502 18.125 14.5C18.125 12.498 16.502 10.875 14.5 10.875C12.498 10.875 10.875 12.498 10.875 14.5C10.875 16.502 12.498 18.125 14.5 18.125Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.41797 15.5633V13.4367C2.41797 12.18 3.44505 11.1408 4.7138 11.1408C6.90089 11.1408 7.79505 9.59417 6.69547 7.69709C6.06714 6.60959 6.44172 5.19584 7.5413 4.5675L9.63172 3.37125C10.5863 2.80334 11.8188 3.14167 12.3867 4.09625L12.5196 4.32584C13.6071 6.22292 15.3955 6.22292 16.4951 4.32584L16.628 4.09625C17.1959 3.14167 18.4284 2.80334 19.383 3.37125L21.4734 4.5675C22.573 5.19584 22.9476 6.60959 22.3192 7.69709C21.2196 9.59417 22.1138 11.1408 24.3009 11.1408C25.5576 11.1408 26.5967 12.1679 26.5967 13.4367V15.5633C26.5967 16.82 25.5696 17.8592 24.3009 17.8592C22.1138 17.8592 21.2196 19.4058 22.3192 21.3029C22.9476 22.4025 22.573 23.8042 21.4734 24.4325L19.383 25.6288C18.4284 26.1967 17.1959 25.8583 16.628 24.9038L16.4951 24.6742C15.4076 22.7771 13.6192 22.7771 12.5196 24.6742L12.3867 24.9038C11.8188 25.8583 10.5863 26.1967 9.63172 25.6288L7.5413 24.4325C6.44172 23.8042 6.06714 22.3904 6.69547 21.3029C7.79505 19.4058 6.90089 17.8592 4.7138 17.8592C3.44505 17.8592 2.41797 16.82 2.41797 15.5633Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p>Registration / User Login</p>
          </div>
          <hr />
          <div className="feature__row">
            <span>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 18.125C16.502 18.125 18.125 16.502 18.125 14.5C18.125 12.498 16.502 10.875 14.5 10.875C12.498 10.875 10.875 12.498 10.875 14.5C10.875 16.502 12.498 18.125 14.5 18.125Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.41797 15.5633V13.4367C2.41797 12.18 3.44505 11.1408 4.7138 11.1408C6.90089 11.1408 7.79505 9.59417 6.69547 7.69709C6.06714 6.60959 6.44172 5.19584 7.5413 4.5675L9.63172 3.37125C10.5863 2.80334 11.8188 3.14167 12.3867 4.09625L12.5196 4.32584C13.6071 6.22292 15.3955 6.22292 16.4951 4.32584L16.628 4.09625C17.1959 3.14167 18.4284 2.80334 19.383 3.37125L21.4734 4.5675C22.573 5.19584 22.9476 6.60959 22.3192 7.69709C21.2196 9.59417 22.1138 11.1408 24.3009 11.1408C25.5576 11.1408 26.5967 12.1679 26.5967 13.4367V15.5633C26.5967 16.82 25.5696 17.8592 24.3009 17.8592C22.1138 17.8592 21.2196 19.4058 22.3192 21.3029C22.9476 22.4025 22.573 23.8042 21.4734 24.4325L19.383 25.6288C18.4284 26.1967 17.1959 25.8583 16.628 24.9038L16.4951 24.6742C15.4076 22.7771 13.6192 22.7771 12.5196 24.6742L12.3867 24.9038C11.8188 25.8583 10.5863 26.1967 9.63172 25.6288L7.5413 24.4325C6.44172 23.8042 6.06714 22.3904 6.69547 21.3029C7.79505 19.4058 6.90089 17.8592 4.7138 17.8592C3.44505 17.8592 2.41797 16.82 2.41797 15.5633Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p>Registration / User Login</p>
          </div>
          <hr />
          <div className="feature__row">
            <span>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 18.125C16.502 18.125 18.125 16.502 18.125 14.5C18.125 12.498 16.502 10.875 14.5 10.875C12.498 10.875 10.875 12.498 10.875 14.5C10.875 16.502 12.498 18.125 14.5 18.125Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.41797 15.5633V13.4367C2.41797 12.18 3.44505 11.1408 4.7138 11.1408C6.90089 11.1408 7.79505 9.59417 6.69547 7.69709C6.06714 6.60959 6.44172 5.19584 7.5413 4.5675L9.63172 3.37125C10.5863 2.80334 11.8188 3.14167 12.3867 4.09625L12.5196 4.32584C13.6071 6.22292 15.3955 6.22292 16.4951 4.32584L16.628 4.09625C17.1959 3.14167 18.4284 2.80334 19.383 3.37125L21.4734 4.5675C22.573 5.19584 22.9476 6.60959 22.3192 7.69709C21.2196 9.59417 22.1138 11.1408 24.3009 11.1408C25.5576 11.1408 26.5967 12.1679 26.5967 13.4367V15.5633C26.5967 16.82 25.5696 17.8592 24.3009 17.8592C22.1138 17.8592 21.2196 19.4058 22.3192 21.3029C22.9476 22.4025 22.573 23.8042 21.4734 24.4325L19.383 25.6288C18.4284 26.1967 17.1959 25.8583 16.628 24.9038L16.4951 24.6742C15.4076 22.7771 13.6192 22.7771 12.5196 24.6742L12.3867 24.9038C11.8188 25.8583 10.5863 26.1967 9.63172 25.6288L7.5413 24.4325C6.44172 23.8042 6.06714 22.3904 6.69547 21.3029C7.79505 19.4058 6.90089 17.8592 4.7138 17.8592C3.44505 17.8592 2.41797 16.82 2.41797 15.5633Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p>Registration / User Login</p>
          </div>
        </div>
        <div className="features__image">
          <img src={Phone2} alt="" />
        </div>
      </div>

      <div className="getStarted__container">
        <div className="getStarted__header">
          <h4>How To Get Started</h4>
          <p>
            Getting started is easier than you think, follow the simple steps to
            quickly set up your account and start getting delicious meals
            delivered to your clients wherever they are
          </p>
        </div>
        <div className="getStarted__cta">
          <div className="getStarted__cta_top">
            <div className="getStarted__cta_1">
              <h4>Contact Our Sales Team</h4>
              <p>
                <span>1</span>
                lorem ipsum dolor sit amet, consectetur Eligendi non quis
                exercitationem culpa aut nostrum explicabo.
              </p>
            </div>
            <div className="getStarted__cta_2">
              <h4>Choose A Plan</h4>
              <p>
                <span>2</span>
                lorem ipsum dolor sit amet, consectetur Eligendi non quis
                exercitationem culpa aut nostrum explicabo.
              </p>
            </div>
          </div>
          <div className="getStarted__cta_bottom">
            <div className="getStarted__cta_3">
              <h4>Contact Our Sales Team</h4>
              <p>
                <span>3</span>
                lorem ipsum dolor sit amet, consectetur Eligendi non quis
                exercitationem culpa aut nostrum explicabo.
              </p>
            </div>
            <div className="getStarted__cta_4">
              <h4>Choose A Plan</h4>
              <p>
                <span>4</span>
                lorem ipsum dolor sit amet, consectetur Eligendi non quis
                exercitationem culpa aut nostrum explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodX;
