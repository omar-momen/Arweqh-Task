<template>
  <div class="post-list">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
    <template v-if="loading">
      <div v-for="i in 5" :key="i">
        <PostSkelton />
      </div>
    </template>
    <div
      v-if="!hasMore"
      class="text-center text-gray-600 dark:text-gray-400 mt-4"
    >
      No more posts
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  posts: {
    id: number;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
  }[];
  loading: boolean;
  hasMore: boolean;
}>();
</script>
