import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
// import BookCard from "../components/BookCard";
import BorrowedCard from "../components/BorrowedCard";

const BorrowedBooks = () => {

    const {user} = useContext(AuthContext);
    const [borrowedData, setBorrowedData] = useState(null);
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
          <BorrowedCard key={book._id} book={book}></BorrowedCard>
        ))}
      </div>
    );
};

export default BorrowedBooks;