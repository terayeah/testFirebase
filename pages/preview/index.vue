<template>
<div class="scrollContainer">
  <!-- <Tutorial/>
  <Tutorial/>
  <Tutorial/> -->
  <Blog :posts="posts" />
</div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createClient } from '~/plugins/contentful.js';
const client = createClient(true);

export default {
  data(){
    return {
      posts: []
    }
  },
  // asyncData({ env }) {
  //   return Promise.all([
  //     client.getEntries({
  //       'content_type': env.CTF_BLOG_TYPE_ID,
  //       order: '-sys.createdAt',
  //     }),
  //   ])
  //   .then(([posts]) => {
  //     return {
  //       posts: posts.items,
  //     };
  //   })
  //   .catch(console.error);
  // },
  created(){
    return Promise.all([
      client.getEntries({
        'content_type': 'blog',
        order: '-sys.createdAt',
      }),
    ])
    .then(([posts]) => {
      this.posts = posts.items;
    })
    .catch(console.error);
  },
  mounted(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new this.locomotiveScroll({
      el: document.querySelector(".scrollContainer"),
      smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".scrollContainer", {
        scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) :    locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
      }
    );


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

  }
}
</script>
<style lang="scss">
</style>