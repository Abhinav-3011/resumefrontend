import {useEffect} from 'react'
import Nav from '../nav/Nav'
import Carousel from 'react-bootstrap/Carousel';
import "./home.css"
const Home = () => {
  const bs2 = new URL("https://images.squarespace-cdn.com/content/v1/638476bc795c4e5410b55317/f30c8a20-edd5-4712-a12b-2ab77e578be3/Web+banner.jpg?format=1500w", import.meta.url);
  const bs3 = new URL("https://images.squarespace-cdn.com/content/v1/638476bc795c4e5410b55317/9dad7c13-0ad1-46fe-bdbd-c05f7cd287d6/web+banner_karnataka+bank-17.jpg?format=1500w", import.meta.url);
  const bs1 = new URL("https://images.squarespace-cdn.com/content/v1/638476bc795c4e5410b55317/43402e31-de5a-48f2-9170-f0dcb7a7b96c/Placements.png?format=2500whttps://images.squarespace-cdn.com/content/v1/638476bc795c4e5410b55317/43402e31-de5a-48f2-9170-f0dcb7a7b96c/Placements.png?format=2500w", import.meta.url);
  useEffect(() =>
  {
    
},[])
  return (
    
    <>
      <Nav />
      <section className='main_block'>
      <Carousel style={{width:"100vw"}}>
      <Carousel.Item interval={1500}>
      <img src={bs1} alt="" srcset="" style={{width:"100vw", height:"50%"}} />
      
      </Carousel.Item>
      <Carousel.Item interval={1500} className="image_main">
        <img src={bs2} alt="" srcset=""  style={{width:"100vw"}} />
      
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img src={bs3} alt="" srcset=""  style={{width:"100vw"}} />
    
      </Carousel.Item>
    </Carousel>
      </section>
      <div className='marque_main_block'>
       <marquee behavior="" direction=""> hiii</marquee>
      </div>


      <section className='Nacc'>
      
      </section>
    </>
  )
}

export default Home