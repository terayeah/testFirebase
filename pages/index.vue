<template>
<div class="scrollContainer">
  <Tutorial/>
  <Tutorial/>
  <Tutorial/>
</div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  mounted(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new this.locomotiveScroll({
      el: document.querySelector(".scrollContainer"),
      smooth: true
    }); 
  }
}
</script>
<style lang="scss">
</style>