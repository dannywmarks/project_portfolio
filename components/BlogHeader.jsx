import React, { useContext } from 'react'
import Link from 'next/link'

const categories = [{name: 'React', slug: 'react'},{ name: 'Web3', slug: 'web3-dev'}, {name: 'Martial Arts', slug: 'martial-arts'}]

const BlogHeader = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-red-200 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="font-poppins cursor-pointer font-bold text-4xl text-white">Blog</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer font-poppins">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogHeader