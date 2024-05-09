
import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";



const CategoryPage = () => {

    const categoryData  = useLoaderData();

    

    return (
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryData &&
          categoryData.map((book) => (
            <BookCard book={book} key={book._id}></BookCard>
          ))}
        
      </div>
    );
};

export default CategoryPage;