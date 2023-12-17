import './Phones.css'
import apple1 from '../assets/mobiles/apple/1.webp'
import apple2 from '..//assets/mobiles/apple/2.webp'
import apple4 from '..//assets/mobiles/apple/4.webp'
import { useState } from 'react'



const Phones = () => {

  const [curImg, setCurImg] = useState(0)

  const phones = [
    {
      pname: "Apple iPhone 12",
      pics: [apple1, apple2, apple4]
    }
  ]

  return (
    <div className='phones-con'>
      <div className='phones-details'>

        <div className='phones-pic-con' >
          {phones.map((phone, j) => {
            return <div className='phones-pic-side' key={phone}>

              <div className='phones-pic-side-all'> {phone.pics.map((pic, i) => {
                return <img
                  onClick={() => setCurImg(i)}
                  className='phones-pic-side-ind'
                  src={pic} key={pic} />
              })}
              </div>

              <div className='phones-pic-main'> <img src={phones[j].pics[curImg]} /> </div>

            </div>
          })}
        </div>

        <div className='phones-details-con'>
          <h4>APPLE iPhone 14 (Starlight, 128 GB)</h4>
        </div>
      </div>
      <div>Review</div>


    </div>
  )
}

export default Phones