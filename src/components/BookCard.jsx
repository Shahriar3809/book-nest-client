/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BookCard = ({book}) => {
    const {
        _id,
      bookName,
      photoUrl,
      rating,
      author,
      description,
      quantity,
      about,
      category_name,
    } = book;
    return (
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px]" src={photoUrl} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{bookName}</h2>
          <p className="">
            <span className="font-bold">Details:</span> {description}
          </p>
          <div>
            <div className="flex justify-between">
              <p className="underline">
                Quantity: <span className="font-bold ">{quantity}</span>
              </p>
              <p className="font-bold">
                Author: <span>{author}</span>
              </p>
            </div>
            <div className="flex font-bold mt-3 justify-between">
              <p className="">
                Category <span className="font-bold ">{category_name}</span>
              </p>
              <p>
                About: <span>$ {about}</span>
              </p>
              <p className="flex gap-1">
                Rating:{" "}
                <span className="flex gap-1 items-center">
                  {rating} 
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="bg-gray-200 p-2 text-center font-bold mt-3">
              Category: 
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn bg-green-600 text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default BookCard;