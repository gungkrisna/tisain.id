import React, { useRef } from 'react';
import Slider from 'react-slick';
import { TestimonialCard } from './TestimonialCard';
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import styled from 'styled-components';

const testimonialData = [
  {
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimcFho9outQp_x7W4Drev6gidmipogzAGvI44lsI0548s3kU9fI9hwnkYT0trXoacQuSmpbpnf8ifus6BbhQ4V5PoLQ7ftODqhgEUSgnSmsljW52rwnu2gV19QE-jImTATDc7zhZleyFLVL0csdmi3yBXtjR15-C24CLW4do-XeIdIBfgWS9kRUL0OVA/s800/new-jeans-apple-collaboration.png',
    name: 'Hanni',
    testimony: 'Stay in the middle.',
    company: 'NewJeans',
    stars: 5,
  },
  {
    image: 'https://pbs.twimg.com/profile_images/1461426655046606860/PzlSk4fZ_400x400.jpg',
    name: 'Jim Cramer',
    testimony: 'Tisain have a great potential to be the next big thing in the world of presentation.',
    company: 'CNBC',
    stars: 5,
  },
  {
    image: 'https://www.thenationalnews.com/resizer/HZsQhKohpbPPB1LYkdL8zG1jXsw=/arc-photo-thenational/eu-central-1-prod/public/Q4STEJUGSJ3BLNJS5YXPOZBTII.jpg',
    name: 'Satoshi Nakamoto',
    testimony: "Don't trust. Verify.",
    company: 'Bitcoin',
    stars: 2,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/230px-Albert_Einstein_Head.jpg',
    name: 'Albert Einstein',
    testimony: 'Imagination is more important than knowledge.',
    company: 'Theory of Relativity',
    stars: 5,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mariecurie.jpg/594px-Mariecurie.jpg',
    name: 'Marie Curie',
    testimony: 'I was taught that the way of progress is neither swift nor easy.',
    company: 'Radioactivity',
    stars: 4,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Steve_Jobs_WWDC07.jpg/640px-Steve_Jobs_WWDC07.jpg',
    name: 'Steve Jobs',
    testimony: 'Design is not just what it looks like and feels like. Design is how it works.',
    company: 'Apple',
    stars: 5,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg',
    name: 'Grace Hopper',
    testimony: 'The most dangerous phrase in the language is, "We\'ve always done it this way."',
    company: 'COBOL Programming Language',
    stars: 4,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/300px-Elon_Musk_2015.jpg',
    name: 'Harry Bōlz',
    testimony: "Now I'm going to buy Tisain and delete it haha",
    company: 'SpaceX',
    stars: 3.5,
  },
];

const StyledChevronLeft = styled(BsChevronLeft)``;

const StyledChevronRight = styled(BsChevronRight)``;


const settings = {
  dots: true,
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  centerPadding: "0px",
  speed: 500,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 778,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
};

export const TestimonialSection = () => {
  const slider = useRef<Slider>(null);

  return (
    <section id="section-testimonial" className="bg-background h-auto">
      <div className="max-w-[120rem] mx-auto grid py-[calc(2_*_var(--navigation-height))] px-8 xl:px-0">
        <h2 className="font-raleway text-zinc bg-clip-text bg-gradient-to-r from-[rgb(94,159,206)] to-black text-5xl leading-tight text-center mt-3">Testimoni</h2>
        <p className="font-regular text-gray-600 text-center text-xl pt-2">
          Kepuasan klien merupakan prioritas kami, lihat bagaimana tanggapan mereka mengenai Tisain.
        </p>
        <div className="relative">
          <StyledChevronLeft
            size={30}
            className="cursor-pointer hidden lg:block absolute z-10 top-[50%] text-gray-500 hover:text-black transition-colors duration-300"
            onClick={() => slider?.current?.slickPrev()}
          />
          <div className="relative max-w-[80vw] xl:max-w-[108rem] mx-auto">
            <Slider ref={slider} className="absolute min-w-[0] z-[1]" {...settings}>
              {testimonialData.map((testimonial, index) => (
                <TestimonialCard key={index}
                  {...testimonial}
                  className={
                    index === Math.floor(testimonialData.length / 2) ? "slick-center" : ""
                  }
                />
              ))}
            </Slider>
            <div className="absolute top-[7.5rem] right-[0.7rem] hidden lg:block">
              <Image src="/images/vector/dots.png" alt="dots" width="100" height="100" />
            </div>
          </div>
          <StyledChevronRight
            size={30}
            className="cursor-pointer hidden lg:block absolute z-10 top-[50%] right-0 text-gray-500 hover:text-black transition-colors duration-300"
            onClick={() => slider?.current?.slickNext()}
          />
        </div>
      </div>
    </section>
  );
};
