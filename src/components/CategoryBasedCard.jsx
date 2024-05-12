/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import Rating from "./Rating";
import Rating from "react-rating";
// import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";


// eslint-disable-next-line react/prop-types, no-unused-vars
const CategoryBasedCard = ({book}) => {
const {
  _id,
  bookName,
  photoUrl,
  rating,
  author,
  category_name,
} = book;
console.log(rating)
    return (
      <div className="border rounded-lg ">
        <div className="flex max-w-md overflow-hidden  rounded-lg shadow-lg ">
          <div className="w-1/2 bg-cover">
            <img src={photoUrl} alt="" className="h-[200px] w-full" />
          </div>

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-2xl font-bold text-gray-800 ">{bookName}</h1>

            <p className="mt-2 text-sm text-gray-600 my-3 dark:text-gray-800">
              {author}
            </p>

            <Rating
              readonly
              initialRating={rating}
              emptySymbol={<FaRegStar className="text-xl text-violet-600" />}
              fullSymbol={<FaStar className="text-xl text-violet-600" />}
            />

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-lg font-bold text-gray-700  md:text-xl">
                {category_name}
              </h1>
              <Link to={`/details/${_id}`}>
                <button className="btn btn-sm bg-violet-600 text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CategoryBasedCard;