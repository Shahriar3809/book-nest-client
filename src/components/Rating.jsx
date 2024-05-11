/* eslint-disable react/prop-types */



const Rating = ({value}) => {
  // console.log(value)
    return (
      <div>
        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            disabled
            className="mask mask-star-2 bg-violet-500"
            checked={value === 1 && true}
          />
          <input
            type="radio"
            name="rating-4"
            disabled
            className="mask mask-star-2 bg-violet-500"
            checked={value === 2 && true}
          />
          <input
            type="radio"
            name="rating-4"
            disabled
            className="mask mask-star-2 bg-violet-500"
            checked={value === 3 && true}
          />
          <input
            type="radio"
            name="rating-4"
            disabled
            className="mask mask-star-2 bg-violet-500"
            checked={value === 4 && true}
          />
          <input
            type="radio"
            name="rating-4"
            disabled
            // checked
            className="mask mask-star-2 bg-violet-500"
            checked={value === 5 && true}
          />
        </div>
      </div>
    );
};

export default Rating;