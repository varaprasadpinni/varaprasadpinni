import React from 'react'
import { categories } from '../data';
import "../styles/Categories.scss"
import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
        <h1>Explore Top Categories</h1>
        <p>
           Exploring the top categories of photography services helps to understand
            the diverse needs and preferences of clients. Here are some of the most popular categories like:
            Portrait Photography,Pre-wedding,Candid,Modeling,Live-telecast,New-born-baby...
        </p>

        <div className='categories_list'>
            {categories?.slice(1, 10).map((category, index ) =>(
                <Link to="">
                    <div className='category' key={index}>
                        <img src={category.img} alt={category.label} />
                        <div className='overlay'></div>
                        <div className='category_text'>
                            <div className='category_text_icon'>{category.icon}</div>
                            <p>{category.label}</p>
                        </div>
                    </div>
                </Link>
            ))}

        </div>
    </div>
  )
}

export default Categories