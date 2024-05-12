import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  const {
    _id,
    bookName,
    photoUrl,
    rating,
    author,

    category_name,
  } = book;
  return (
    <div className="card border card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-[250px] w-full" src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{bookName}</h2>

        <div>
          <div className="flex justify-between">
            <p className="font-bold">
              Author:{" "}
              <span className="font-bold text-violet-700 ">{author}</span>
            </p>
          </div>
          <div className="flex font-bold mt-3 justify-between">
            <p className="">
              Category:{" "}
              <span className="font-bold text-violet-700 ">
                {category_name}
              </span>
            </p>

            <p className="flex justify-end gap-1">
              Rating:{" "}
              <span className="flex gap-1 items-center">
                <Rating
                  readonly
                  initialRating={rating}
                  emptySymbol={
                    <FaRegStar className="text-xl text-violet-600" />
                  }
                  fullSymbol={<FaStar className="text-xl text-violet-600" />}
                />
              </span>
            </p>
          </div>
        </div>

        <div className="card-actions justify-end">
          <Link to={`/update/${_id}`}>
            <button className="btn bg-violet-500 text-white">Update</button>
          </Link>
          <Link to={`/details/${_id}`}>
            <button className="btn bg-violet-800 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.any,
};
export default BookCard;
