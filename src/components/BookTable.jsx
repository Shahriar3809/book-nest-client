/* eslint-disable react/prop-types */
// import Rating from "./Rating";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const BookTable = ({book, index}) => {
    const {
      bookName,
      photoUrl,
      rating,
      author,
      _id,
      quantity,
      category_name,
    } = book;

    return (
      <tr className="">
        <td>{index + 1}</td>
        <td>
          <div className="flex  items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoUrl} />
              </div>
            </div>
            <div>
              <div className="font-bold">{bookName}</div>
              <div className="text-sm opacity-50">{author}</div>
            </div>
          </div>
        </td>
        <td>
          <br />
          <span className="">{category_name}</span>
        </td>
        <td>{quantity}</td>
        <td>
          <Rating
            readonly
            initialRating={rating}
            emptySymbol={<FaRegStar className="text-xl text-violet-600" />}
            fullSymbol={<FaStar className="text-xl text-violet-600" />}
          />
        </td>
        <td className="flex items-center justify-center gap-2">
          <Link to={`/update/${_id}`}>
            <button className="btn btn-sm bg-violet-500 text-white">
              Update
            </button>
          </Link>
          <Link to={`/details/${_id}`}>
            <button className="btn btn-sm bg-violet-800 text-white">
              View Details
            </button>
          </Link>
        </td>
      </tr>
    );
};

export default BookTable;