<template>
<div>
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
  }
}
</script>
