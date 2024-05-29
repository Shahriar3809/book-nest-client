import { useContext, useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CategorySection = () => {
const {loading} = useContext(AuthContext)

    const [categoryData, setCategoryData] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:5000/category")
        .then(res=> {
            setCategoryData(res.data)
        })
    },[])


  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }
    return (
      <div>
        <div>
          <h1 className="text-xl md:text-4xl font-bold text-center py-10 text-violet-600 underline">Some Category:</h1>
          <p className="text-violet-600 text-center font-semibold text-xl max-w-[500px] mx-auto mb-10">Here is all the category book we have. You can see category base book by clicking on these card.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoryData &&
            categoryData.map((item) => (
              <CategoryCard key={item._id} item={item}></CategoryCard>
            ))}
        </div>
      </div>
    );
};

export default CategorySection;