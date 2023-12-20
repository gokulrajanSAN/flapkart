import './Phones.css'
import apple1 from '../assets/mobiles/apple/1.webp'
import apple2 from '..//assets/mobiles/apple/2.webp'
import apple4 from '..//assets/mobiles/apple/4.webp'
import { useState } from 'react'

const Phones = () => {

  const [curImg, setCurImg] = useState(0)

  const [favItem, setFavItem] = useState(false)

  const phones = [
    {
      pname: "Apple iPhone 12",
      pics: [apple1, apple2, apple4]
    }
  ]

  const product = {
    name: "",
    Specifications: {
      General: {
        ["Sales Package"]: "1 External SSD, USB Cable",
        ["Model Name"]: "SDSSDE30-1T00-G26",
        Type: "SSD",
        Capacity: "1 TB",
        Color: "Black",
        ["System Requirements"]: "Windows, Mac OS, Android",
        ["Form Factor"]: "Portable",
        ["Cloud Backup"]: "No",
      },
      ["Additional Features"]: {
        ["Number of Ports"]: 1,
        ["Connector Type"]: "Type C",
        ["Case Material"]: "Plastic",
        ["Data Transfer Rate"]: "800 MB/s",
      },
      Dimensions: {
        Width: "46.9 mm",
        Height: "96.9 mm",
        Depth: "9.91 mm",
        Weight: "40 g",
      },
      Warranty: {
        ["Warranty Summary"]: "3 Years Warranty",
        ["Warranty Service Type"]: "Carry-in",
        ["Covered in Warranty"]: "Manufacturing Defects",
        ["Not Covered in Warranty"]: "Physical Damages",
        ["Domestic Warranty"]: "3 Years",
      },
    },
    id: 1,
    tittle:
      "SanDisk E30 / 800 Mbs / Window,Mac OS,Android / Portable,Type C Enabled / USB 3.2 1 TB External Solid State Drive (SSD)  (Black)",
    images: {
      small: [
        "https://rukminim2.flixcart.com/image/128/128/xif0q/external-hard-drive/ssd/y/s/7/sdssde30-1t00-g26-sandisk-original-imagsgpmhcxmsxet.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/128/128/xif0q/external-hard-drive/ssd/x/g/b/sdssde30-1t00-g26-sandisk-original-imags46jkmht2pzr.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/128/128/xif0q/external-hard-drive/ssd/m/e/r/sdssde30-1t00-g26-sandisk-original-imagsgpmfdyshkyb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/128/128/xif0q/external-hard-drive/ssd/h/i/m/sdssde30-1t00-g26-sandisk-original-imags46j8xqkg8np.jpeg?q=70",
      ],
      big: [
        "https://rukminim2.flixcart.com/image/832/832/xif0q/external-hard-drive/ssd/y/s/7/sdssde30-1t00-g26-sandisk-original-imagsgpmhcxmsxet.jpeg?q=70 ",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/external-hard-drive/ssd/x/g/b/sdssde30-1t00-g26-sandisk-original-imags46jkmht2pzr.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/external-hard-drive/ssd/m/e/r/sdssde30-1t00-g26-sandisk-original-imagsgpmfdyshkyb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/external-hard-drive/ssd/h/i/m/sdssde30-1t00-g26-sandisk-original-imags46j8xqkg8np.jpeg?q=70",
      ],
    },
    ratings: {},
    prices: { price: "20,500", discount: "65%" },
    offers: {
      ["Available Offers"]: [
        "Bank Offer 10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above",
        "Bank Offer 10% off on Federal Bank Credit Card and Credit EMI Txns, up to ₹2,000 on orders of ₹5,000 and above",
        "Bank Offer 5% Cashback on Flipkart Axis Bank Card",
        "Special Price Get extra 60% off (price inclusive of cashback/coupon)",
        " Buy this product and Get Extra ₹100 Off on Select Room Heaters",
        "EMI starting from ₹250/month",
      ],
    },
    highlights: [
      "Portable",
      "Hard Drive",
      "Capacity: 1 TB",
      "Connectivity: USB 3.2",
      "1 Port",
    ],
    services: ["3 Years Warranty", "Cash on Delivery available"],
    seller: {
      name: "MTAILMODEECOM",
      Rating: 4.9,
      services: [
        " 7 Days Service Center Replacement/Repair",
        "GST invoice available",
      ],
    },
  };

  return (
    <div className='phones-con'>
      <div className='phones-details'>

        <div className='phones-pic-con' >
          {phones.map((phone, j) => {
            return <div className='phones-pic-side' key={phone}>

              <div className='phones-pic-side-all'> {phone.pics.map((pic, i) => {
                return <img
                  onMouseOver={() => setCurImg(i)}
                  className='phones-pic-side-ind'
                  src={pic} key={pic} />
              })}
              </div>

              <div className='phones-pic-main'>
                <button onClick={() => setFavItem(!favItem)}
                  className='fav-icon'
                  style={{ fill: (favItem === true ? 'red' : 'gray') }}>
                  <svg height="24" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                </button>
                <img src={phones[j].pics[curImg]} />
              </div>
            </div>
          })}
          <div className='btn-con'>
            <button className='addToCart-btn'>Add to Cart</button>
            <button className='buyNow-btn'>Buy Now</button>
          </div>
        </div>

        <div className='phones-details-con'>
          <h4 className='title'>APPLE iPhone 14 (Starlight, 128 GB)</h4>
          <div className='ratings'>
            <button disabled>4.2</button>
            <p>655,816 Ratings & 3,266 Reviews</p>
          </div>

          <div className='price'>
            <p className='offer-price'>₹99,990</p>
            <p className='actual-price'>₹1,09,900</p>
            <p className='offer-percent'>9% off</p>
          </div>

          <div className='bank-offer'>
            Available offers
            <ul>
              <li>Bank Offer10% off on HDFC Bank Credit Card EMI Transactions, up to ₹750 on orders of ₹7,500 and aboveT&C</li>
              <li>Bank OfferExtra ₹500 off on HDFC Bank Credit Card EMI on 6 months and above tenure, Min. Product Value ₹24,990T&C</li>
              <li>Bank Offer10% off on Federal Bank Credit Card and Credit EMI Txns, up to ₹1,500 on orders of ₹10,000 and aboveT&C</li>
              <li>Special PriceGet extra ₹9910 off (price inclusive of cashback/coupon)T&C</li>
            </ul>
          </div>

        </div>
      </div>
      <div>Review</div>
    </div>
  )
}

export default Phones