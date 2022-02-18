<template>
  <div class="blog">
    <ul>
      <li class="title" v-for="post in posts" :key="post.sys.id">{{ post.fields.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array
  },
  mounted(){
  },
};
</script>
<style lang="scss" scoped>
.blog{
  min-height: 100vh;
}
.title{
  font-size: 50px;
  color: black;
}
</style>