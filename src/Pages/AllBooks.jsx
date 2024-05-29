// import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";
import BookTable from "../components/BookTable";
import axios from "axios";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const AllBooks = () => {
    const [originalData, setOriginalData] = useState([])
    const [allBook, setAllBook] = useState([]);
    // console.log(allBook)

    useEffect(()=> {
      axios.get("http://localhost:5000/allBook", {withCredentials: true})
      .then(res=> {
        
        setOriginalData(res.data);
        setAllBook(res.data);
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
   

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchText = event.target.search.value;
    const {data} = await axios.get(`http://localhost:5000/allBook?search=${searchText}`, { withCredentials: true })
     
        setOriginalData(data);
        setAllBook(data);
        console.log(data)
    
  }
  
    return (
      <div>
        <div>
          <h1 className="text-xl md:text-4xl font-bold text-center pt-5 text-violet-600 underline ">
            Our All Book Here:
          </h1>
          <p className="text-center text-violet-800 py-2">
            You can view by table and card, also you can filter by available
            book{" "}
          </p>
        </div>
        <div className="py-3 flex justify-between">
          <div className="dropdown dropdown-right">
            <div
              tabIndex={0}
              role="button"
              className="bg-violet-700 rounded-sm flex items-center gap-2 font-bold text-white p-3 m-1"
            >
              <span>View By</span> <FaArrowRight />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content rounded-sm  z-[1] menu p-2 shadow bg-base-100  w-52"
            >
              <li
                className=" rounded-sm  text-center font-bold text-white bg-violet-500"
                onClick={handleTableView}
              >
                <a>Table View</a>
              </li>
              <li
                className=" text-center my-1 font-bold text-white bg-violet-500"
                onClick={handleCardView}
              >
                <a>Card View</a>
              </li>
            </ul>
          </div>

          <div>
            <form onSubmit={handleSearch}>
              <input type="text" name="search" placeholder="Search by Book Name" className="border rounded-md bg-base-200 p-3 mx-5" />
              <input type="submit" value='Search' className="btn btn-secondary" />
            </form>
          </div>

          <div className="dropdown dropdown-left">
            <div
              tabIndex={0}
              role="button"
              className="bg-violet-700 flex items-center gap-2 rounded-sm  font-bold text-white p-3 m-1"
            >
              <FaArrowLeft />
              <span>Filter By</span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content rounded-sm  z-[1] menu p-2 shadow bg-base-100  w-52"
            >
              <li
                className=" rounded-sm  text-center font-bold text-white bg-violet-500"
                onClick={handleAvailableBooks}
              >
                <a>Show available books</a>
              </li>
              <li
                className=" text-center my-1 font-bold text-white bg-violet-500"
                onClick={handleAllBooks}
              >
                <a>All books</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          {view ? (
            <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {allBook &&
                allBook.map((book) => (
                  <BookCard key={book._id} book={book}></BookCard>
                ))}
            </div>
          ) : (
            <div>
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead className="bg-violet-300 text-center font-bold">
                      <tr>
                        <th className="font-bold text-black text-base">
                          Serial No
                        </th>
                        <th className="font-bold text-black text-base">
                          Photo, Name & Author
                        </th>
                        <th className="font-bold text-black text-base">
                          Category
                        </th>
                        <th className="font-bold text-black text-base">
                          Available Quantity
                        </th>
                        <th className="font-bold text-black text-base">
                          Rating
                        </th>
                        <th className="font-bold text-black text-base">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-violet-100 text-center">
                      {allBook &&
                        allBook.map((book, index) => (
                          <BookTable
                            key={book._id}
                            index={index}
                            book={book}
                          ></BookTable>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default AllBooks;