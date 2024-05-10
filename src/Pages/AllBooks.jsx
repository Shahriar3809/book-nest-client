// import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";
import BookTable from "../components/BookTable";
import axios from "axios";


const AllBooks = () => {
    const [originalData, setOriginalData] = useState(null)
    const [allBook, setAllBook] = useState(null);
    // console.log(allBook)

    useEffect(()=> {
      axios.get("http://localhost:5000/allBook")
      .then(res=> {
        setOriginalData(res.data)
        setAllBook(res.data)
      })
    },[])


    const [view, setView] = useState(false)

    const handleTableView = () => {
        setView(false);
    }
    const handleCardView = () => {
        setView(true)
    }

  const handleAvailableBooks = () => {
    const available = originalData.filter(item=> item.quantity > 0)
    setAllBook(available)
  }
  const handleAllBooks = () => {
    
    setAllBook(originalData);
  }
   
    return (
      <div>
        <div className="flex justify-between">
          <div className="dropdown dropdown-right">
            <div
              tabIndex={0}
              role="button"
              className="bg-green-700 rounded-sm text-xl font-bold text-white p-3 m-1"
            >
              View By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content rounded-sm  z-[1] menu p-2 shadow bg-base-100  w-52"
            >
              <li
                className="p-1 text-xl rounded-sm  text-center font-bold text-white bg-green-700"
                onClick={handleTableView}
              >
                <a>Table View</a>
              </li>
              <li
                className="p-1 text-xl text-center my-1 font-bold text-white bg-green-700"
                onClick={handleCardView}
              >
                <a>Card View</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-left">
            <div
              tabIndex={0}
              role="button"
              className="bg-green-700 rounded-sm text-xl font-bold text-white p-3 m-1"
            >
              Filter By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content rounded-sm  z-[1] menu p-2 shadow bg-base-100  w-52"
            >
              <li
                className="p-1 text-xl rounded-sm  text-center font-bold text-white bg-green-700"
                onClick={handleAvailableBooks}
              >
                <a>Available Books</a>
              </li>
              <li
                className="p-1 text-xl text-center my-1 font-bold text-white bg-green-700"
                onClick={handleAllBooks}
              >
                <a>All Books</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          {view ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {allBook && allBook.map((book) => (
                <BookCard key={book._id} book={book}></BookCard>
              ))}
            </div>
          ) : (
            <div>
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Photo, Name & Author</th>
                        <th>Category</th>
                        <th>Available Quantity</th>
                        <th>Rating</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allBook && allBook.map((book) => (
                        <BookTable key={book._id} book={book}></BookTable>
                      ))}
                    </tbody>
                  </table>
                </div>
                ;
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default AllBooks;