<template>
  <div class="container">
    <h2 class="title">Virtual List of Posts</h2>
    <RecycleScroller
      :items="posts"
      :item-size="70"
      key-field="id"
      class="virtual-list"
    >
      <template #default="{ item, index }">
        <div class="post-item" :key="item.id">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
          <small>Post #{{ index + 1 }}</small>
        </div>
      </template>
    </RecycleScroller>
  </div>
</template>

<script setup>
import { RecycleScroller } from "vue3-virtual-scroller";

const posts = ref([]);

const fetchPosts = async () => {
  // Simulating API call
  posts.value = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    title: `Post Title ${i + 1}`,
    content: `This is the content of post ${
      i + 1
    }. Virtual scrolling ensures only a small portion of posts is rendered at a time.`,
  }));
};

onMounted(fetchPosts);
</script>

<style scoped>
.virtual-list {
  height: 600px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
