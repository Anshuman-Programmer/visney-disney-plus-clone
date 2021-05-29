import React from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Imgslider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <div>
            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img src="/images/slider-badging.jpg" alt="images"/>
                    </a>
                </Wrap>
                
                <Wrap>
                    <a>
                        <img src="/images/slider-badag.jpg" alt="images"/>
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src="/images/slider-scale.jpg" alt="images"/>
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src="/images/slider-scales.jpg" alt="images"/>
                    </a>
                </Wrap>

            </Carousel>
        </div>
    )
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      display: none;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
    border-radius: 5px;
    position: relative;

    
    a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img {
        width: 100%;
        height: 100%;
        }

        &:hover{
            background-color: rgb(249 249 249 / 60%);
            transition-duration: 300ms
        }

    }
`

export default Imgslider
