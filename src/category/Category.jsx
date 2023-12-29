import './Category.css'
import offers from '../assets/category/offers.webp'
import beauty from '../assets/category/beauty.webp'
import fashoin from '../assets/category/fashoin.webp'
import flight from '../assets/category/flight.webp'
import furniture from '../assets/category/furniture.webp'
import grocery from '../assets/category/grocery.webp'
import home from '../assets/category/home.webp'
import laptop from '../assets/category/laptop.webp'
import mobile from '../assets/category/mobile.webp'
import tv from '../assets/category/tv.webp'
import { useState } from 'react'
import SubCategory from './sub-category/SubCategory'

const Category = () => {

    const [showTypes, setShowTypes] = useState(true)

    const categoryImgs = [
        { name: 'Offers', path: offers },
        { name: 'TV', path: tv },
        { name: 'Beauty', path: beauty },
        { name: 'Fashoin', path: fashoin, },
        { name: 'Travel', path: flight },
        { name: 'Furniture', path: furniture },
        { name: 'Grocery', path: grocery },
        { name: 'Home', path: home },
        { name: 'Laptops', path: laptop },
        { name: 'Mobiles', path: mobile }
    ];

    return (
        <>
            <div className='category-con'>
                {categoryImgs.map((imgs) => {
                    return <div
                        onMouseEnter={() => setShowTypes(true)}
                        className='category-item' key={imgs.name}>

                        <img src={imgs.path} />
                        <p>{imgs.name}</p>
                    </div>
                })}
            </div>

            <SubCategory style={{ position: "absolute" }}></SubCategory>

        </>
    )
}

export default Category