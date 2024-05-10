/* eslint-disable react/prop-types */
import Rating from "./Rating";
import { Link } from "react-router-dom";


const BookTable = ({book}) => {
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
      <tr>
        <td>
          <div className="flex items-center gap-3">
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
          <Rating value={rating}></Rating>
        </td>
        <th>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-sm bg-green-600 text-white">
              Update
            </button>
          </Link>
          <Link to={`/details/${_id}`}>
            <button className="btn btn-sm bg-green-800 text-white">
              View Details
            </button>
          </Link>
        </th>
      </tr>
    );
};

export default BookTable;