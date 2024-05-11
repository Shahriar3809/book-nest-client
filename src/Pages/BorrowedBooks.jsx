import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
// import BookCard from "../components/BookCard";
import BorrowedCard from "../components/BorrowedCard";

const BorrowedBooks = () => {

    const {user} = useContext(AuthContext);
    const [borrowedData, setBorrowedData] = useState(null);
    // console.log(borrowedData)
    useEffect(()=> {
        axios.get(`http://localhost:5000/borrowedBooks?email=${user.email}`)
        .then(res=> {
            // console.log(res.data)
            setBorrowedData(res.data)
        })
    },[user.email])


    return (
      <div>
        <h1 className="text-xl md:text-4xl font-bold text-center pt-5 text-violet-600 underline ">
          Your Borrowed Book Here:
        </h1>
        <p className="text-center py-4 text-violet-800">
         You can return book and after returning you can borrow that book again.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 lg:grid-cols-3 gap-5">
          {borrowedData &&
            borrowedData.map((book) => (
              <BorrowedCard key={book._id} book={book}></BorrowedCard>
            ))}
        </div>
      </div>
    );
};

export default BorrowedBooks;