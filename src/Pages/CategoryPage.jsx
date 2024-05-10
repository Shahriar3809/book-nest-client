
import { useLoaderData } from "react-router-dom";
// import BookCard from "../components/BookCard";
import CategoryBasedCard from "../components/CategoryBasedCard";



const CategoryPage = () => {

    const categoryData  = useLoaderData();

    console.log(categoryData)
    

    return (
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryData &&
          categoryData.map((book) => (
            <CategoryBasedCard book={book} key={book._id}></CategoryBasedCard>
          ))}
        
      </div>
    );
};

export default CategoryPage;