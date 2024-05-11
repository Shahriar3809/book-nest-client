/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CategoryCard = ({item}) => {
    const {category, Image} = item;
    return (
      <Link to={`/category/${category}`}>
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div className="w-full h-80  py-5 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
            <img src={Image} alt="" className="w-5/8 mx-auto h-full" />
          </div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-violet-500">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              {category}
            </h3>

            <div className=" px-3 py-2 bg-gray-200 dark:bg-violet-700">
              <p className="px-2 cursor-pointer text-center py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-violet-800 rounded hover:bg-violet-700 dark:hover:bg-violet-600 focus:bg-violet-700 dark:focus:bg-gray-600 focus:outline-none">
                Click On This Card To See This Category Data
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default CategoryCard;