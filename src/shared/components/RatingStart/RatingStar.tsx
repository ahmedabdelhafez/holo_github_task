import React from "react";
import "./RatingStar.module.scss";
type Props = {};

const RatingStar = (props: Props) => {
  return (
    <>
      <div id="full-stars-example">
        <div className="rating-group">
          <input
            className="rating__input rating__input--none"
            name="rating"
            id="rating-none"
            value="0"
            type="radio"
          />
          <label
            aria-label="No rating"
            className="rating__label"
            htmlFor="rating-none"
          >
            <i className="rating__icon rating__icon--none fa fa-ban"></i>
          </label>
          <label
            aria-label="1 star"
            className="rating__label"
            htmlFor="rating-1"
          >
            <i className="rating__icon rating__icon--star fa fa-star"></i>
          </label>
          <input
            className="rating__input"
            name="rating"
            id="rating-1"
            value="1"
            type="radio"
          />
          <label
            aria-label="2 stars"
            className="rating__label"
            htmlFor="rating-2"
          >
            <i className="rating__icon rating__icon--star fa fa-star"></i>
          </label>
          <input
            className="rating__input"
            name="rating"
            id="rating-2"
            value="2"
            type="radio"
          />
          <label
            aria-label="3 stars"
            className="rating__label"
            htmlFor="rating-3"
          >
            <i className="rating__icon rating__icon--star fa fa-star"></i>
          </label>
          <input
            className="rating__input"
            name="rating"
            id="rating-3"
            value="3"
            type="radio"
            checked
          />
          <label
            aria-label="4 stars"
            className="rating__label"
            htmlFor="rating-4"
          >
            <i className="rating__icon rating__icon--star fa fa-star"></i>
          </label>
          <input
            className="rating__input"
            name="rating"
            id="rating-4"
            value="4"
            type="radio"
          />
          <label
            aria-label="5 stars"
            className="rating__label"
            htmlFor="rating-5"
          >
            <i className="rating__icon rating__icon--star fa fa-star"></i>
          </label>
          <input
            className="rating__input"
            name="rating"
            id="rating-5"
            value="5"
            type="radio"
          />
        </div>
        <p className="desc">
          Full stars
          <br />
          'No rating' option
        </p>
      </div>
      <div id="half-stars-example">
        <div className="rating-group">
          <input
            className="rating__input rating__input--none"
            checked
            name="rating2"
            id="rating2-0"
            value="0"
            type="radio"
          />
          <label
            aria-label="0 stars"
            className="rating__label"
            htmlFor="rating2-0"
          >
            &nbsp;
          </label>
          <label
            aria-label="0.5 stars"
            className="rating__label rating__label--half"
            htmlFor="rating2-05"
          >
            <i className="rating__icon rating__icon--star fa fa-star-half"></i>
          </label>
          <input
            className="rating__input"
            name="rating2"
            id="rating2-05"
            value="0.5"
            type="radio"
          />
          <label
            aria-label="1 star"
            className="rating__label"
            htmlFor="rating2-10"
          >
            <i className="rating__icon rating__icon--star fa fa-star"></i>
          </label>
          <input
            className="rating__input"
            name="rating2"
            id="rating2-10"
            value="1"
            type="radio"
          />
          <label
            aria-label="1.5 stars"
            className="rating__label rating__label--half"
            htmlFor="rating2-15"
          >
            <i className="rating__icon rating__icon--star fa fa-star-half"></i>
          </label>
          <input
            className="rating__input"
            name="rating2"
            id="rating2-15"
            value="1.5"
            type="radio"
          />
          <label
            aria-label="2 stars"
            className="rating__label"
            htmlFor="rating2-20"
          >
            <i className="rating__icon rating__icon--star fa fa-star"></i>
          </label>
          <input
            className="rating__input"
            name="rating2"
            id="rating2-20"
            value="2"
            type="radio"
          />
          <label
            aria-label="2.5 stars"
            className="rating__label rating__label--half"
            htmlFor="rating2-25"
          >
            <i className="rating__icon rating__icon--star fa fa-star-half"></i>
          </label>
          <input
            className="rating__input"
            name="rating2"
            id="rating2-25"
            value="2.5"
            type="radio"
            checked
          />
          <label
            aria-label="3 stars"
            className="rating__label"
            htmlFor="rating2-30"
          >
            <i className="rating__icon rating__icon--star fa fa-star"></i>
          </label>
          <input
            className="rating__input"
            name="rating2"
            id="rating2-30"
            value="3"
            type="radio"
          />
          <label
            aria-label="3.5 stars"
            className="rating__label rating__label--half"
            htmlFor="rating2-35"
          >
            <i className="rating__icon rating__icon--star fa fa-star-half"></i>
          </label>
          <input
            className="rating__input"
            name="rating2"
            id="rating2-35"
            value="3.5"
            type="radio"
          />
          <label
            aria-label="4 stars"
            className="rating__label"
            htmlFor="rating2-40"
          >
            <i className="rating__icon rating__icon--star fa fa-star"></i>
          </label>
          <input
            className="rating__input"
            name="rating2"
            id="rating2-40"
            value="4"
            type="radio"
          />
          <label
            aria-label="4.5 stars"
            className="rating__label rating__label--half"
            htmlFor="rating2-45"
          >
            <i className="rating__icon rating__icon--star fa fa-star-half"></i>
          </label>
          <input
            className="rating__input"
            name="rating2"
            id="rating2-45"
            value="4.5"
            type="radio"
          />
          <label
            aria-label="5 stars"
            className="rating__label"
            htmlFor="rating2-50"
          >
            <i className="rating__icon rating__icon--star fa fa-star"></i>
          </label>
          <input
            className="rating__input"
            name="rating2"
            id="rating2-50"
            value="5"
            type="radio"
          />
        </div>

        <div id="full-stars-example-two">
          <div className="rating-group">
            <input
              disabled
              checked
              className="rating__input rating__input--none"
              name="rating3"
              id="rating3-none"
              value="0"
              type="radio"
            >
              {" "}
            </input>
            <label
              aria-label="1 star"
              className="rating__label"
              htmlFor="rating3-1"
            >
              <i className="rating__icon rating__icon--star fa fa-star"></i>
            </label>
            <input
              className="rating__input"
              name="rating3"
              id="rating3-1"
              value="1"
              type="radio"
            />
            <label
              aria-label="2 stars"
              className="rating__label"
              htmlFor="rating3-2"
            >
              <i className="rating__icon rating__icon--star fa fa-star"></i>
            </label>
            <input
              className="rating__input"
              name="rating3"
              id="rating3-2"
              value="2"
              type="radio"
            />
            <label
              aria-label="3 stars"
              className="rating__label"
              htmlFor="rating3-3"
            >
              <i className="rating__icon rating__icon--star fa fa-star"></i>
            </label>
            <input
              className="rating__input"
              name="rating3"
              id="rating3-3"
              value="3"
              type="radio"
            />
            <label
              aria-label="4 stars"
              className="rating__label"
              htmlFor="rating3-4"
            >
              <i className="rating__icon rating__icon--star fa fa-star"></i>
            </label>
            <input
              className="rating__input"
              name="rating3"
              id="rating3-4"
              value="4"
              type="radio"
            />
            <label
              aria-label="5 stars"
              className="rating__label"
              htmlFor="rating3-5"
            >
              <i className="rating__icon rating__icon--star fa fa-star"></i>
            </label>
            <input
              className="rating__input"
              name="rating3"
              id="rating3-5"
              value="5"
              type="radio"
            />
          </div>
          <p className="desc">
            Full stars
            <br />
            Must select a star value
          </p>
        </div>
      </div>
    </>
  );
};

export default RatingStar;
