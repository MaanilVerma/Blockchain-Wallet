<template>
  <main>
    <h2>Post List</h2>
    <ul>
      <li v-for="post in posts" :key="post.title">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { getPosts } from '../services/service';

export default defineComponent({
  setup() {
    const posts = ref([]);

    onMounted(async () => {
      try {
        posts.value = await getPosts();
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    });

    return { posts };
  }
});
</script>
