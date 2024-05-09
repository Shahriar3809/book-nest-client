import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useState } from "react";
import BookTable from "../components/BookTable";


const AllBooks = () => {
    const allBook = useLoaderData();
    // console.log(allBook)
    const [view, setView] = useState(false)

    const handleTableView = () => {
        setView(false);
    }

    const handleCardView = () => {
        setView(true)
    }
   
    return (
      <div>
        <div>
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
        </div>

        <div>
          {view ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {allBook.map((book) => (
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
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Rating</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allBook.map((book) => (
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