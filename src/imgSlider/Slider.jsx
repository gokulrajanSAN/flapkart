import { useState, useEffect } from 'react'
import './Slider.css'
import iphone from './slider/iphone.webp'
import laptop from './slider/laptop.webp'
import laptopq from './slider/laptopq.webp'
import sale from './slider/sale.webp'
import zeb from './slider/zeb.webp'

const Slider = () => {

    const images = [iphone, laptop, laptopq, sale, zeb]

    const [currentSlide, setslide] = useState({ slide: 0, direction: 'forward' })

    useEffect(() => {
        setTimeout(() => {
            if (currentSlide.direction === 'forward') {
                if (currentSlide.slide === 4) {
                    setslide({ slide: 3, direction: 'b' })
                } else {
                    setslide({ ...currentSlide, slide: currentSlide.slide + 1 })
                }
            } else {
                if (currentSlide.slide === 0) {
                    setslide({ slide: 1, direction: 'forward' })
                } else {
                    setslide({ ...currentSlide, slide: currentSlide.slide - 1 })
                }
            }
        }, 2900);
    }, [currentSlide.slide])

    return (
        <div className='slider'>
            {images.map((img) =>
                <img
                    key={img}
                    src={img}
                    style={{
                        translate: `${-100 * currentSlide.slide}%`,
                        transition: '999ms ease-in-out'
                    }} />
            )}
        </div>
    )
}

export default Slider