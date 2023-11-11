import { useContext } from 'react'
import Layout from './../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonials/Testimonials';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
export default function Home() {
    const context = useContext(myContext);
    const dispatch = useDispatch();
    const cartItem = useSelector((state)=> state.cart);

    const addCart = () =>{
      dispatch(addToCart("shirt"))
    }

    const deleteCart = () =>{
      dispatch(deleteFromCart("shirt"))
    }
  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>    
  )
}
