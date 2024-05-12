
import { useLoaderData } from "react-router-dom";

import CategoryBasedCard from "../components/CategoryBasedCard";



const CategoryPage = () => {

    const categoryData  = useLoaderData();

    
    

    return (
      <div>
        <div>
          <h1 className="text-xl md:text-4xl font-bold text-center py-5 text-violet-600 underline ">
            Category: {categoryData && categoryData[0]?.category_name}
          </h1>
          <p className="text-center text-violet-800 py-2">
            Here is category based book. You can explore more category on homepage
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {categoryData &&
            categoryData.map((book) => (
              <CategoryBasedCard book={book} key={book._id}></CategoryBasedCard>
            ))}
        </div>
      </div>
    );
};

export default CategoryPage;