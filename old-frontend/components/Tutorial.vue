<!-- Please remove this file from your project -->
<template>
  <div>
    <h1>Posts</h1>
    <ul v-if="posts && posts.length">
      <li v-for="post in posts" :key="post.title">
        {{ post.title }} - {{ post.content }}
      </li>
    </ul>
    <p v-else>No posts found.</p>
  </div>
</template>

<script>
import { getPosts } from '@/services/service';

export default {
  name: 'Tutorial',
  data() {
    return {
      posts: []
    };
  },
  async created() {
    try {
      this.posts = await getPosts(this.$axios);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  },
};
</script>
