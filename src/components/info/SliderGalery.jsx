'use client'

import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";

export default function SliderGalery() {
  var settings = {
    dots:false,
    adaptiveHeight:true,
    infinite:false,
    swipe:true,
    arrows:false,
    slidesToShow: 2.1,
  };

  return (
    <Box overflow='hidden'>
      <Slider {...settings}>
            {
            Array.from({ length: 6 }, (_, id) => (
            <Box key={id}>
              <Image
                  boxSize='100px'
                  width={{ base: 130, sm: 160, md: 180}}
                  objectFit='cover'
                  borderRadius={10}
                  src='https://d33byq9npfy6u9.cloudfront.net/2/2016/11/003-DSC_4012print.jpg'
                  alt='Default Photo'
              />
            </Box>
            )) 
          }
      </Slider>
    </Box>
  )
}

