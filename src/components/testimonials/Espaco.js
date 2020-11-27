import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; 
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as ArrowLeftIcon } from "../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default () => {

  const testimonials = [
    {
      imageSrc:
        "https://i.ibb.co/jhw3sht/DSC-4914.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/grt4s1x/DSC-4915.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/CwdtjJr/DSC-4916.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/XjKK7QY/DSC-4917.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/hLwwQjn/DSC-4918.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/fqQv6zV/DSC-4920.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/Dbjfsx5/DSC-4921.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/qD5pfq6/DSC-4922.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/0nZTRwC/DSC-4923.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/R684HZs/DSC-4924.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/dWK2M7S/DSC-4925.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/VvWQ3k4/DSC-4940.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/wC4m1QV/DSC-4942.jpg"
    },
    {
      imageSrc:
        "https://i.ibb.co/tHQV65C/DSC-4943.jpg"
    },

    {
      imageSrc:
        "https://i.ibb.co/3rC9n8P/DSC-4944.jpg"
    },

    {
      imageSrc:
        "https://i.ibb.co/Yp198C1/DSC-4947.jpg"
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Espaço</HeadingTitle>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <ImageContainer>
                  <img src={testimonial.imageSrc} alt={testimonial.customerName} />
                </ImageContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
