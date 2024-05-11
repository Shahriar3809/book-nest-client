import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddBook = () => {

  const {user} = useContext(AuthContext)
  const handleAddBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookName = form.book_name.value;
    const photoUrl = form.photo.value;
    const rating = parseInt(form.rating.value);
    const author = form.author.value;
    const description = form.description.value;
    const quantity = parseInt(form.quantity.value);
    const about = form.about.value;
    const category_name = form.category_name.value;
    const newBook = {bookName, photoUrl, rating, author, description, quantity, about, category_name, email: user.email}
    console.log(newBook)
    

    axios.post("https://dream-library-server.vercel.app/addBook", newBook, {withCredentials: true})
    .then(res=> {
      if(res.data.insertedId) {
        toast.success("Book Added Successfully");
      }
    })
  };

  return (
    <div className="bg-violet-200 p-5 rounded-lg mt-5">
      <h1 className="text-xl md:text-4xl font-bold text-center  text-violet-600 underline ">
        Add Book Here:
      </h1>
      <p className="text-center text-violet-800 py-2">Wanna add book to our Library? Fill this book info and click Add this Book button </p>
      <form onSubmit={handleAddBook} className="p-3">
        <div className="flex flex-col md:flex-row md:gap-5 justify-center ">
          <div className=" md:p-5 w-full md:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Book Name</span>
              </label>
              <input
                type="text"
                name="book_name"
                placeholder="Book name"
                className="p-5 rounded-md"
                required
              />

              <label className="label">
                <span className="label-text text-black">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="p-5 rounded-md"
                required
              />
              <label className="label">
                <span className="label-text text-black">Rating</span>
              </label>
              <input
                type="number"
                max={5}
                min={1}
                name="rating"
                placeholder="Rating"
                className="p-5 rounded-md"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Author Name</span>
              </label>

              <input
                name="author"
                placeholder="Author"
                className="input text-black  w-full"
              />
            </div>
          </div>

          <div className=" md:p-5 w-full md:w-1/2">
            <label className="label">
              <span className="label-text text-black">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="p-5 w-full rounded-md"
              required
            />
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Quantity Of Book</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity of books"
                className="p-5 rounded-md"
                required
              />
            </div>
            <label className="label">
              <span className="label-text text-black">Category</span>
            </label>

            <select
              name="category_name"
              className="select select-bordered  w-full"
            >
              <option disabled selected>
                Select a Category
              </option>
              <option>Novel</option>
              <option>Thriller</option>
              <option>History</option>
              <option>Drama</option>
              <option>Sci-Fi</option>
              <option>Travel</option>
            </select>

            <label className="label">
              <span className="label-text text-black">About The Book</span>
            </label>
            <input
              type="text"
              name="about"
              placeholder="About"
              className="p-5 w-full rounded-md"
              required
            />
          </div>
        </div>

        <input
          className="btn mt-5 bg-violet-600 text-white w-full font-bold text-xl"
          type="submit"
          value="Add This Book"
        />
      </form>
    </div>
  );
};

export default AddBook;
