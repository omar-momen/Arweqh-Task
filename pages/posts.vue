<script setup>
const posts = ref([]);
const page = ref(1);
const hasMore = ref(true);
const loading = ref(false);
const target = ref(null);
let observer = null;

const fetchPosts = async () => {
  if (!hasMore.value || loading.value) return;
  loading.value = true;

  try {
    const { data } = await useDollarFetch(`posts?page=${page.value}`);
    const fetchedPosts = data.value.data;
    if (fetchedPosts?.length) {
      posts.value.push(...fetchedPosts);
      page.value++;
    } else {
      hasMore.value = false;
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  loading.value = false;
};

onMounted(() => {
  fetchPosts();
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      fetchPosts();
    }
  });
  if (target.value) observer.observe(target.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div class="max-w-2xl mx-auto p-4">
    <h1 class="text-center text-5xl mb-8">Posts</h1>
    <PostList :posts="posts" :loading="loading" :hasMore="hasMore" />

    <div ref="target" class="h-1"></div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Posts",
});
</script>
