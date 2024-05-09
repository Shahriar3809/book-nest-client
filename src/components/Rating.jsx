

const Rating = () => {
    return (
      <div>
        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            disabled
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            disabled
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            disabled
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            disabled
            className="mask mask-star-2 bg-green-500"
          />
          <input
            type="radio"
            name="rating-4"
            disabled
            checked
            className="mask mask-star-2 bg-green-500"
          />
        </div>
      </div>
    );
};

export default Rating;