
import { Link } from "react-router-dom";

import Rating from "react-rating";
import PropTypes from "prop-types";
import { FaStar, FaRegStar } from "react-icons/fa";



const CategoryBasedCard = ({book}) => {
const {
  _id,
  bookName,
  photoUrl,
  rating,
  author,
  category_name,
} = book;

    return (
      <div className="border rounded-lg ">
        <div className="flex h-[200px] overflow-hidden  rounded-lg shadow-lg ">
          <div className="w-1/2  bg-cover">
            <img src={photoUrl} alt="" className="h-full w-full" />
          </div>

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-violet-800 ">{bookName}</h1>

            <p className="mt-2 text-sm text-violet-600 my-3 dark:text-gray-800">
              <span className="font-semibold text-violet-600">Author: </span>
              <span className="font-bold text-violet-600"> {author}</span>
            </p>

            <p className="flex items-center gap-1">
              <span className="font-semibold text-violet-600">Rating: </span>
              <Rating
                readonly
                initialRating={rating}
                emptySymbol={<FaRegStar className="text-xl text-violet-600" />}
                fullSymbol={<FaStar className="text-xl text-violet-600" />}
              />
            </p>
            <h1 className="flex items-center gap-1">
              <span>Category: </span>{" "}
              <span className="text-lg font-bold flex items-center text-violet-700 ">
                {category_name}
              </span>
            </h1>
            <div className=" mt-3 ">
              <Link to={`/details/${_id}`}>
                <button className="btn btn-sm bg-violet-600 w-full text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};


CategoryBasedCard.propTypes = {
  book: PropTypes.any,
};
export default CategoryBasedCard;