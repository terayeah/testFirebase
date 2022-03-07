<template>
<div class="blog" v-if="isReady">
  <h1>{{blogItem.fields.title}}</h1>
</div>
</template>
<script>
import { createClient } from '~/plugins/contentful.js';
const client = createClient(true);

export default {
  data(){
    return {
      isReady: false,
      blogItem: null
    }
  },
  // asyncData ({env, params}) {
  //   return Promise.all([
  //     client.getEntries({
  //       'content_type': env.CTF_BLOG_TYPE_ID,
  //       order: '-sys.createdAt',
  //     })
  //   ]).then(([blog]) => {
  //     let filterd = blog.items.filter(function(element) {
  //       return (element.sys.id === params.id)
  //     });
  //     return {
  //       blogItem: filterd[0]
  //     }
  //   }).catch(console.error)
  // },
  created () {
    let id = this.$route.query.id;
    return Promise.all([
      client.getEntries({
        'content_type': 'blog',
        order: '-sys.createdAt',
      })
    ]).then(([blog]) => {
      let filterd = blog.items.filter(function(element) {
        return (element.sys.id === id)
      });
      this.blogItem = filterd[0];
      this.isReady = true;
    }).catch(console.error);
  },
}
</script>
<style lang="scss" scoped>

</style>