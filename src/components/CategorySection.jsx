import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";


const CategorySection = () => {


    const [categoryData, setCategoryData] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:5000/category")
        .then(res=> {
            setCategoryData(res.data)
        })
    },[])

    // console.log(categoryData)

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryData &&
          categoryData.map((item) => <CategoryCard key={item._id} item={item}></CategoryCard>)}
      </div>
    );
};

export default CategorySection;