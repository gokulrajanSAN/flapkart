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

const Category = () => {

    const categoryImgs = [{ name: 'Offers', path: offers }, { name: 'TV', path: tv }, { name: 'Beauty', path: beauty }, { name: 'Fashoin', path: fashoin }, { name: 'Flight & Travels', path: flight }, { name: 'Furniture', path: furniture }, { name: 'Grocery', path: grocery }, { name: 'Home', path: home }, { name: 'Laptops & Cables', path: laptop }, { name: 'Mobile & Headphones', path: mobile }];

    return (
        <div className='category-con'>
            {categoryImgs.map((imgs) => {
                return <div className='category-item' key={imgs}>
                    < img
                        src={imgs.path}
                    />
                    <p>{imgs.name}</p>
                </div>
            })}
        </div>
    )
}

export default Category