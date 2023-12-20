import './BestSelling.css'
import flower from '../assets/Home Decor/flower.webp'
import glass from '../assets/Home Decor/glass.webp'
import glass1 from '../assets/Home Decor/glass1.webp'
import light from '../assets/Home Decor/light.webp'
import plant from '../assets/Home Decor/plant.webp'
import wall from '../assets/Home Decor/wall.webp'

const BestSelling = () => {

    const homeDecor = [{ name: 'flower', path: flower }, { name: 'glass', path: glass }, { name: 'glass1', path: glass1 }, { name: 'light', path: light }, { name: 'plant', path: plant }, { name: 'wall', path: wall }]

    return (
        <div className='bestSell-con'>

            <div className='bestSell-title-con'>
                <h4>Best Selling Items</h4>
                <button >&#11166;</button>
            </div>

            <div className='bestSell-img-con'>
                {homeDecor.map((homeDecorItem) => {
                    return <div className='bestSell-img-ind' key={homeDecorItem.name}>
                        <div className='bestSell-img-ind-img'>
                            <img className='' src={homeDecorItem.path} />
                        </div>
                        <p className='bestSell-img-ind-title'>{homeDecorItem.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default BestSelling