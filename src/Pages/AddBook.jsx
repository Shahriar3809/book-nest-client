const AddBook = () => {
  const handleAddBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookName = form.name.value;
    const photoUrl = form.photo.value;
    const rating = form.rating.value;
    const author = form.author.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const about = form.about.value;
    const category_name = form.category_name.value;
    const newBook = {bookName, photoUrl, rating, author, description, quantity, about, category_name}
    console.log(newBook)
  };

  //     {
  //   "bookImage": "https://example.com/book-image.jpg",
  //   "bookName": "The Great Gatsby",
  //   "bookQuantity": 100,
  //   "authorName": "F. Scott Fitzgerald",
  //   "category": "Novel",
  //   "description": "The Great Gatsby is a novel written by American author F. Scott Fitzgerald. It follows a cast of characters living in the fictional town of West Egg on prosperous Long Island in the summer of 1922.",
  //   "rating": 4,
  //   "contents": "The novel explores themes of decadence, idealism, resistance to change, and social upheaval."
  // }

  return (
    <div className="bg-gray-300 rounded-lg mt-5">
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
              <span className="label-text text-black">About The Book</span>
            </label>
            <input
              type="text"
              name="about"
              placeholder="About"
              className="p-5 w-full rounded-md"
              required
            />
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
          </div>
        </div>

        <input
          className="btn mt-5 bg-green-600 text-white w-full font-bold text-xl"
          type="submit"
          value="Add This Book"
        />
      </form>
      
    </div>
  );
};

export default AddBook;
