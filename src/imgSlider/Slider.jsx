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
                if (currentSlide.slide === (images.length - 1)) {
                    setslide({ slide: (images.length - 2), direction: 'b' })
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

            <button className='left-btn' onClick={pre} disabled={currentSlide.slide === 0} >&lt;</button>
            <button className='right-btn' onClick={next} disabled={currentSlide.slide === 4}>&gt;</button>

            <div className='slider-dots-con'>
                <div className='slider-dots'>{[...Array(images.length)].map((e, i) =>
                    <button className='slider-dot'
                        onClick={() => setslide({ ...currentSlide, slide: i })}
                        key={i} type="button">
                    </button>
                )}
                </div>
                <button className='slider-move-dot' disabled
                    style={{
                        translate: `${2.4 * currentSlide.slide}rem`,
                        transition: '1900ms ease-in-out',
                    }}
                ></button>

            </div>

        </div >
    )
}

export default Slider