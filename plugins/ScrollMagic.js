import Vue from 'vue';
import * as ScrollMagic from 'scrollmagic';
import gsap from "gsap";
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
//import 'imports-loader?imports=scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
import { TweenMax, TimelineMax, TimelineLite } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugins";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax, TimelineLite);
ScrollMagicPluginIndicator(ScrollMagic);


//ScrollMagicPluginGsap(ScrollMagic, gsap);

Object.defineProperty(Vue.prototype, '$scrollmagic', { value: ScrollMagic });
