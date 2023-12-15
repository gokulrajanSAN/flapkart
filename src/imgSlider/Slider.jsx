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

    const pre = () => setslide({ ...currentSlide, slide: currentSlide.slide - 1 });
    const next = () => setslide({ ...currentSlide, slide: currentSlide.slide + 1 });

    useEffect(() => {
        const timeOut = setTimeout(() => {
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
        return () => clearTimeout(timeOut)
    }, [currentSlide.slide])

    return (
        <div className='slider-con'>
            {images.map((img) =>
                <img
                    key={img}
                    src={img}
                    style={{
                        translate: `${-100 * currentSlide.slide}%`,
                        transition: '999ms ease-in-out',
                        width: '100%'
                    }} />
            )}
            <button className='left-btn' onClick={pre} disabled={currentSlide.slide === 0} >PRE</button>
            <button className='right-btn' onClick={next} disabled={currentSlide.slide === 4}>NEXT</button>
        </div>
    )
}

export default Slider