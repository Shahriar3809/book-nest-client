import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import BookCard from "../components/BookCard";

const BorrowedBooks = () => {

    const {user} = useContext(AuthContext);
    const [borrowedData, setBorrowedData] = useState();
    console.log(borrowedData)
    useEffect(()=> {
        axios.get(`http://localhost:5000/borrowedBooks?email=${user.email}`)
        .then(res=> {
            // console.log(res.data)
            setBorrowedData(res.data)
        })
    },[user.email])


    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {borrowedData && borrowedData.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    );
};

export default BorrowedBooks;