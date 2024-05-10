/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { toast } from "react-toastify";


const BorrowedCard = ({book}) => {
    const {
      // _id,
      bookName,
      photoUrl,
      borrowedDate,
      category_name,
      returnDate,
      bookId
    } = book;
    // console.log(bookId)



    const handleReturn = (bookId) => {
    
      axios.delete(`http://localhost:5000/returnBook/${bookId}`)
      .then(res=> {
        console.log(res.data)
        toast.success('Return Successful.')
      })
    }


    return (
      <div>
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-green-700">
          <img src={photoUrl} alt="" className="w-full" />
          <div className="flex items-center px-6 py-3 bg-green-950">
            <p className="mx-3 text-lg font-semibold text-white">
              Return Date:{" "}
            </p>
            <h1 className="mx-3 text-lg font-semibold text-white">
              {returnDate}
            </h1>
          </div>

          <div className="px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Book Name: {bookName}
            </h1>

           

            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <h1 className="px-2 text-2xl font-bold">Category Name: {category_name}</h1>
            </div>

            <div className="flex items-center justify-between mt-4 text-gray-700 dark:text-gray-200">
              <h1 className="px-2 font-bold text-xl"> Borrowed Date: {borrowedDate}</h1>
              <button onClick={()=> handleReturn(bookId)} className="btn btn-primary">Return</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BorrowedCard;