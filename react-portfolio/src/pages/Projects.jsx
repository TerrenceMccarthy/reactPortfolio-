import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const CarouselData = [
  { id: 1, title: 'Texas Sports Blog', imageUrl: '../blogImage.jpg', link: 'https://github.com/Tmysterz/blogPost' },
  { id: 2, title: 'Social API', imageUrl: '../socialAPI.jpg', link: 'https://github.com/Tmysterz/socialAPI' },
  { id: 3, title: 'Work Scheduler', imageUrl: '../workSchedule.png', link: 'https://github.com/Tmysterz/work-Schedule-Attemp-Two' },
  // Add more images as needed
];

const ImageCarousel = () => {
  return (
    <Container>
      <Carousel>
        {CarouselData.map(data => (
          <Carousel.Item key={data.id}>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'black' }} // Remove underline and set text color
            >
              <img
                className="d-block w-100"
                src={data.imageUrl}
                alt={data.title}
                style={{ objectFit: 'cover', height: '800px' }}
              />
              <Carousel.Caption style={{color: 'white'}}>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ImageCarousel;