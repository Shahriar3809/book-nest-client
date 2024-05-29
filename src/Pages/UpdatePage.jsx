

import axios from "axios";

import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";


const UpdatePage = () => {

    const data = useLoaderData()
    const { _id, bookName, photoUrl, rating, author,  } = data;
    // console.log(data)
    
    const handleUpdate = (e) => {
        console.log("Update")
        e.preventDefault();
        const form = e.target;
        const name = form.book_name.value;
        const photo = form.photo.value;
        const author = form.author.value;
        const rating = form.rating.value;
        const category_name = form.category_name.value;
        const updatedData = {bookName: name, photoUrl: photo, rating: rating, author: author, category_name: category_name }
        axios.put(`http://localhost:5000/update/${_id}`, updatedData)
        .then(res=> {
            if(res.data.modifiedCount) {
                toast.success('Successfully Updated.')
            }
        })

    }








    return (
      <div className="bg-violet-100 rounded-lg mt-5">
        <div>
          <h1 className="text-xl md:text-4xl font-bold text-center  text-violet-600 underline ">
            Update Book:
          </h1>
          <p className="text-center text-violet-800 py-2">
            You can update some data here. Remember, updated data should be real.
          </p>
        </div>
        <form onSubmit={handleUpdate} className="p-3">
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
                  defaultValue={bookName}
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
                  defaultValue={photoUrl}
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
                  defaultValue={author}
                  className="input text-black  w-full"
                />
              </div>
            </div>

            <div className=" md:p-5 w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-black">Category</span>
              </label>

              <select
                name="category_name"
                className="select select-bordered  w-full"
              >
                <option disabled>Select a Category</option>
                <option>Novel</option>
                <option>Thriller</option>
                <option>History</option>
                <option>Drama</option>
                <option>Sci-Fi</option>
                <option>Travel</option>
              </select>

              <label className="label">
                <span className="label-text text-black">Rating</span>
              </label>
              <input
                type="number"
                max={5}
                min={1}
                name="rating"
                placeholder="Rating"
                defaultValue={rating}
                className="p-5 rounded-md w-full"
                required
              />
            </div>
          </div>

          <input
            className="btn mt-5 bg-violet-600 text-white w-full font-bold text-xl"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    );
};

export default UpdatePage;