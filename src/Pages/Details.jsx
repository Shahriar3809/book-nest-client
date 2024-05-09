import { useContext } from "react";
import { FaRegStar } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";


const Details = () => {
    const {user} = useContext(AuthContext)
    const data = useLoaderData();
    const navigate = useNavigate()
    const {
      bookName,
      photoUrl,
      rating,
      author,
      quantity,
      description,
      category_name,
    } = data;
    
    const {email} = user;

    const handleBorrowed = () => {
        const borrowedBook = { bookName,
      photoUrl,
      rating,
      author,
      quantity,
      description,
      category_name, email }
        console.log(borrowedBook)

        axios.post("http://localhost:5000/borrowed", borrowedBook)
        .then(res=> {
            if(res.data.insertedId) {
                toast.success('Successfully Borrowed')
                navigate('/borrowed-books')
            }
        })
    }




    return (
      <div className="flex flex-col md:flex-row gap-8 p-5 bg-gray-100 rounded-lg mt-5">
        <div className="md:w-1/2 w-full">
          <img className="w-full rounded-lg h-full" src={photoUrl} alt="" />
        </div>
        <div className="md:w-1/2 w-full space-y-5">
          <div>
            <h1 className="text-5xl text-center md:text-left p-3 md:p-0 font-bold text-green-700">
              Book Name: {bookName}
            </h1>
            <p className="font-bold my-2 text-2xl  text-black">
              Author: {author}
            </p>
          </div>
          <div className="flex text-xl font-bold justify-around">
            <p className="bg-green-500 rounded-md p-2 px-4">
              Quantity: {quantity} $
            </p>
            <p className="bg-green-500 px-4 rounded-md p-2">
              Category Name: {category_name}
            </p>
          </div>
          <div>
            <p>
              <span className="text-xl font-bold">Details:</span> {description}
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex justify-between">
              <p className="text-xl gap-1 flex items-center font-bold">
                Ratings: {rating} <FaRegStar />
              </p>
              {/* <p className="text-xl font-bold">Created by: {user_name}</p> */}
            </div>
            <p>
              <span className="text-xl font-bold">Processing Time: </span>
              <span className="underline font-bold text-2xl">
                {/* {processing_time} */}
              </span>
            </p>
            <p className="text-xl bg-green-700 text-white text-center font-bold p-2">
              Category: <span className="underline"></span>
            </p>
          </div>
          <div>
            <button onClick={handleBorrowed} className="btn btn-primary">Borrow</button>
          </div>
        </div>
      </div>
    );
};

export default Details;