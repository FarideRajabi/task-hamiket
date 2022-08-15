
import prodact from './products';
import './product.css';
import Slider from "react-slick";
import {useState} from "react";
import {BsHandbag} from "react-icons/bs";
import { Link } from 'react-router-dom';
const Prodact = () =>{

  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 0.2,
    lazyLoad: false,
    autoplay: false,
  autoplaySpeed: 0,
   
  };


  fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>prodact)

  const [newprodact, setnewProdact] = useState([]);


  const  handleChange = () => {
    alert("Added Product");
    setnewProdact({...newprodact,id:prodact.id ,
    title: prodact.title,
    price: prodact.price,
    image: prodact.image})
    console.log(newprodact);
  }
  return (
    <>
    <Link to="/add" className='handbag' ><BsHandbag /></Link>
    <span className="imgslider">
      <Slider {...settings}>
        {prodact.map((item) => (
          <span className='product' key={item.id}>
            <img src={item.image} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <botton idProduct={item.id} className="add" onClick={handleChange} >Add</botton>
            {/* <BsPlusLg/>
            <BsFillTrashFill/> */}
          </span>
        ))}
      </Slider>
    </span>
        </>
  )
}

export default Prodact;