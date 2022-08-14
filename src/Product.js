
import prodact from './components/products';
import './product.css';
import Slider from "react-slick";


const Prodact = () =>{

  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: false,
  autoplaySpeed: 2000,
   
  };


  fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>prodact)
  return (
    <>
    <span className="imgslider">
      <Slider {...settings}>
        {prodact.map((item) => (
          <span className='product' key={item.id}>
            <img src={item.image} />
            <p>{item.title}</p>
            <p>{item.price}</p>
          </span>
        ))}
      </Slider>
    </span>
        </>
  )
}

export default Prodact;