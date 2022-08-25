<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else-if="!error">Loading...</div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
// component imports
import PostList from '../components/PostList.vue'

export default {
  name: 'HomeComp',
  components: { PostList },
  setup() { 
  const { posts, error,load } = getPosts()
  load()
  return{ posts, error }
  },
}
</script>