import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper'
import { BoxBorder } from './Base'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <BoxBorder>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="bet-swiper"
      >
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/1.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/2.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/3.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/4.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/5.jpg')} /></SwiperSlide>
        <SwiperSlide><Box component="img" alt='slider' src={require('../assets/img/slider/6.jpg')} /></SwiperSlide>
      </Swiper>
    </BoxBorder>
  );
}

export default Slider;
