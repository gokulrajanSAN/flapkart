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

    const [showTypes, setShowTypes] = useState({ display: "none", left: 0 })

    // const [showTypes, setShowTypes]

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
            {/* <div className='category-con'>
                {categoryImgs.map((imgs) => {
                    return <div
                        onMouseEnter={() => setShowTypes(true)}
                        onMouseLeave={() => { setShowTypes(false) }}
                        className='category-item' key={imgs.name}>

                        <img src={imgs.path} />
                        <p>{imgs.name}</p>
                    </div>
                })}
                {showTypes && <SubCategory></SubCategory>}
            </div> */}

            {/* <div className='category-con'>
                {categoryImgs.map((imgs) => {
                    return <div
                        className='category-main-item'
                        key={imgs.name}>

                        <div className='category-item'
                            onMouseEnter={() => setShowTypes(true)}
                            onMouseLeave={() => setShowTypes(false)}>
                            <img src={imgs.path} />
                            <p>{imgs.name}</p>
                        </div>
                    </div>
                })}
                {showTypes && <SubCategory></SubCategory>}
            </div> */}

            {/* <div className='category-con'>
                {categoryImgs.map((imgs) => {
                    return <div
                        // className='category-main-item'
                        onMouseEnter={(e) => {
                            setShowTypes({ display: "flex", left: e.screenX});
                            console.log(e);
                        }}
                        onMouseLeave={(e) => setShowTypes({ display: "none", left: e.target.offsetLeft })}

                        key={imgs.name}>

                        <div className='category-item'>
                            <img src={imgs.path} />
                            <p>{imgs.name}</p>
                        </div>
                    </div>
                })}
                {<div style={{ position: "absolute", display: `${showTypes.display}`, left: `${showTypes.left}px` }}>
                    <SubCategory ></SubCategory>
                </div>}
            </div> */}

            {/* <div className='category-con'>
                {categoryImgs.map((imgs) => {
                    return <div
                        // className='category-main-item'
                        onMouseEnter={(e) => {
                            setShowTypes({ display: "flex", left: e.clientX });
                            console.log(e);
                        }}
                        onMouseLeave={(e) => setShowTypes({ display: "none", left: e.target.offsetLeft })}

                        key={imgs.name}>

                        <div className='category-item'>
                            <img src={imgs.path} />
                            <p>{imgs.name}</p>
                        </div>
                        {<div style={{ position: "absolute", display: `${showTypes.display}`, left: `${showTypes.left}px` }}>
                            <SubCategory></SubCategory>
                        </div>}
                    </div>
                })}
            </div> */}

            <div className='category-con'>
                {categoryImgs.map((imgs) => {
                    return <div
                        onMouseEnter={(e) => {
                            setShowTypes({ display: "flex", left: e.clientX });
                            console.log(e);
                        }}
                        onMouseLeave={(e) => setShowTypes({ display: "none", left: e.target.offsetLeft })}

                        key={imgs.name}>

                        <div className='category-item'>
                            <img src={imgs.path} />
                            <p>{imgs.name}</p>
                        </div>
                        {<div style={{ position: "absolute", display: `${showTypes.display}`, left: `${showTypes.left}px` }}>
                            <SubCategory></SubCategory>
                        </div>}
                    </div>
                })}
            </div>
        </>
    )
}

export default Category