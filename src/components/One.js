import React from 'react'
import image from '../images/image-product-desktop.jpg';
import '../App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const One = () => {
  return (
    <div className='main'>
            <div className='img-box'>
                <img src={image} alt=""/>
            </div>
            <div className='info-box'>
                <p style={{letterSpacing: '5px', fontSize:'10px'}}>
                    PERFUME
                </p>
                <h2>
                    Gabrielle Essence Eau De Perfume
                </h2>
                <p>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                    Perfumer-Creator for the House of CHANEL.
                </p>
                <div className='price'>
                    <h4 className='price-new'>
                        $149.99
                    </h4>
                    <p className='price-old'>
                        $169.99
                    </p>
                </div>
                <button className='button'>
                    <div style={{marginRight : "5px"}}>
                        <ShoppingCartIcon fontSize='small'/>
                    </div>
                    <div>
                        Add To Cart
                    </div>
                </button>
            </div>
        </div>
  )
}

export default One;
