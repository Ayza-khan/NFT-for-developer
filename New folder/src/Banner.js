import Carousel from 'react-bootstrap/Carousel';
import img2 from "./image/img2.jpg"
function Banner() {
  return (
    <div className=' container p-4'>
    <h1 className='text-center'>Banners</h1>
    <Carousel className='mx-2'>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;