import image from './images/image-product-desktop.jpg';
import './App.css';

function App() {
  return (
    <div className='body'>
        <div className='main'>
            <div className='img-box'>
                <img src={image} alt=""/>
            </div>
            <div className='info-box'>
                <p>
                    Parfume
                </p>
                <h1>
                    Gabrielle Essence Eau De Parfume
                </h1>
                <p>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                    Perfumer-Creator for the House of CHANEL.
                </p>
                <div>
                    <h4>
                        $149.99
                    </h4>
                    <p>
                        $169.99
                    </p>
                </div>
                <button>Add To Cart</button>
            </div>
        </div>
        
    </div>
  );
}

export default App;
