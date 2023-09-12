import mobileNav_2 from './modules/mobile-nav_2.js';
mobileNav_2();

import $ from "jquery";
import "slick-carousel";

$(".carousel").slick({
    slidesToShow: 4,
    slidesToScroll:4,    
    variableWidth: true    
});