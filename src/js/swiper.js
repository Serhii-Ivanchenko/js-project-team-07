import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation, Keyboard]);

export function initSwiper(containerSelector, options) {
  return new Swiper(containerSelector, options);
}
