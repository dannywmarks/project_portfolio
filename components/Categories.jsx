import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-gray-900 shadow-lg rounded-lg p-8 mb-8 border-red-300 border-2 text-red-200">
      <h3 className="text-xl mb-8 font-semibold border-b border-red-200 pb-4 text-white">
        Categories
      </h3>

      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="pb-3 mb-3 cursor-pointer block">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
