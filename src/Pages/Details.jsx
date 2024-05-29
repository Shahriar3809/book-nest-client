import { useContext, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const Details = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  // const navigate = useNavigate();
  const {
    bookName,
    photoUrl,
    rating,
    author,
    quantity,
    _id: bookId,
    description,
    category_name,
    about,
  } = data;
  console.log(data);
  const { email, displayName } = user;
  const [avail, setAvail] = useState(quantity);

  const handleBorrowed = () => {
    const borrowedBook = {
      bookName,
      photoUrl,
      rating,
      author,
      quantity,
      description,
      category_name,
      bookId,
      email,
      displayName,
      isBorrowed: true,
    };
    const borrowedDate = new Date().toLocaleDateString();

    Swal.fire({
      title: "Borrow",
      html:
        '<label for="returnDate">Return Date:</label>' +
        '<input id="returnDate" class="swal2-input" type="date" placeholder="Return Date">' +
        "<br>" +
        '<label for="email">Email:</label>' +
        `<input id="email" disabled class="swal2-input" type="email" placeholder="${email}">` +
        "<br>" +
        '<label for="userName">Name:</label>' +
        `<input id="userName" disabled class="swal2-input" type="text" placeholder="${displayName}">`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Submit",
      preConfirm: () => {
        const returnDate = Swal.getPopup().querySelector("#returnDate").value;
        if (!returnDate) {
          Swal.showValidationMessage("Return date is required");
        }
        return { returnDate: returnDate };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const returnDate = result.value.returnDate;
        // Handle submission, e.g., send returnDate to backend
        console.log("Borrowing with return date:", returnDate);
        axios
          .post("http://localhost:5000/borrowed", {
            ...borrowedBook,
            returnDate,
            borrowedDate,
          })
          .then((res) => {
            if (res.data.insertedId) {
              toast.success("Successfully Borrowed");
              // navigate("/borrowed-books");
              setAvail(quantity-1)
            } else toast.error("Already Borrowed");
          });
      }
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-5 bg-gray-100 rounded-lg mt-5">
      <div className="lg:w-1/2 w-full">
        <img
          className="w-full rounded-lg h-[300px] md:h-[600px] lg:h-[600px]"
          src={photoUrl}
          alt=""
        />
      </div>
      <div className="lg:w-1/2 w-full space-y-5">
        <div>
          <h1>
            <span className="text-4xl text-center lg:text-left py-3 lg:p-0 font-bold text-violet-500">
              Book Name:{" "}
            </span>{" "}
            <span className="text-4xl text-center lg:text-left p-3 lg:p-0 font-bold text-violet-700">
              {bookName}
            </span>
          </h1>
          <p className="font-bold my-2 text-2xl  text-black">
            <span className="text-violet-500">Author:</span> {author}
          </p>
        </div>
        <hr />
        <div>
          <p className="text-xl font-semibold text-violet-500">
            <span className="text-xl text-violet-700 font-bold">Details:</span>{" "}
            {description}
          </p>
        </div>
        <hr />
        <div className="text-xl flex flex-col lg:flex-row lg:items-center font-bold space-y-2 justify-around">
          <p className="">Category Name: {category_name}</p>
          <p className="text-xl gap-1 flex items-center font-bold">
            Ratings:{" "}
            <Rating
              readonly
              initialRating={rating}
              emptySymbol={<FaRegStar className="text-xl text-violet-600" />}
              fullSymbol={<FaStar className="text-xl text-violet-600" />}
            />
          </p>
        </div>

        <div className="space-y-5">
          <hr />

          <p className="font-semibold space-y-2">
            <p className="font-bold text-xl">About the book:</p>{" "}
            <p className="">{about}</p>
          </p>
          <p className=" flex items-center gap-5 font-bold text-2xl rounded-lg p-2 px-4">
            <span>Available Quantity:</span>{" "}
            <span className="text-3xl bg-violet-600 text-white p-3 px-5 rounded-full">
              {avail}
            </span>
          </p>
        </div>
        <div>
          <button
            disabled={avail === 0 ? true : false}
            onClick={handleBorrowed}
            className="btn btn-lg w-full bg-violet-700 text-white font-bold text-xl "
          >
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
