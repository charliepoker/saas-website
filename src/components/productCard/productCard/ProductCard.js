import React, {useState} from 'react';

import './ProductCard.css';

// console.log(newProducts[0].products)

function ProductCard({productData}) {

    const [margin, setMargin] = useState(0);

    const handleSlideRight = ()=>{
        setMargin( margin + 1);
    }
        
    const handleSlideLeft = ()=>{
        setMargin( margin - 1);
        console.log(margin)
    }
        
  return (
    <>
    <div className= {margin > 0? 'lamp_prod-cards lamp_prod-cards-moveright' : 'lamp_prod-cards '}>

    {productData.map((product, i)=>{
       return <div className={ `lamp_prod-card `} key={i}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <a href={product.productUrl}>
            <span>Know more</span>
            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 5.5H11.5M7.125 1.125L11.5 5.5L7.125 9.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
    </div>
    })}

       
   
  
     </div>


    {productData.length > 4? (<><div className="lamp-prod-arrow lamp-arrow-left" onClick={ handleSlideLeft} style={{display: margin < 1 && 'none'}}>
            <svg width="9" height="16" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6842 3.42106L5.13157 11.9737L13.6842 20.5263L11.9737 23.9474L-7.72249e-06 11.9737L11.9737 3.72582e-06L13.6842 3.42106Z" fill="#000"/>
            </svg>
    </div>
    <div className="lamp-prod-arrow lamp-arrow-right" onClick={handleSlideRight} style={{display: margin === 1 && 'none'}}>
        <svg width="9" height="16" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20.5263L8.55263 11.9737L0 3.42105L1.71053 0L13.6842 11.9737L1.71053 23.9474L0 20.5263Z" fill="#000"/>
        </svg>

    </div></>): null }

     
   
    
    </>
  )
}

export default ProductCard