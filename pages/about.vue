<template>
  <div class="container">
    <RecycleScroller :items="items" :item-size="50" class="virtual-list">
      <template #default="{ item, index }">
        <div class="item" :key="index">
          {{ item }}
        </div>
      </template>
    </RecycleScroller>

    <div ref="target" class="target"></div>
    <div class="loading-indicator" v-if="!allLoaded">Loading more items...</div>
  </div>
</template>

<script setup>
import { RecycleScroller } from "vue3-virtual-scroller";

import { useIntersectionObserver } from "@vueuse/core";
import { vIntersectionObserver } from "@vueuse/components";

const items = ref([]);
const allLoaded = ref(false);
const page = ref(1);
const pageSize = 20;

const target = ref(null);

// Initial data fetch
fetchMoreData(page.value, pageSize);

// Intersection Observer setup to detect when to load more items
const loadMore = (isIntersecting) => {
  fetchMoreData(page.value, pageSize);
};

function fetchMoreData(currentPage, limit) {
  // Simulate an API call
  setTimeout(() => {
    const newItems = Array.from(
      { length: limit },
      (_, i) => `Item ${(currentPage - 1) * limit + i + 1}`
    );

    if (newItems.length < pageSize) {
      allLoaded.value = true;
    }

    items.value.push(...newItems);
    page.value++;
  }, 1000); // Simulated API delay
}

onMounted(() => {
  fetchMoreData();

  if (target.value) {
    useIntersectionObserver(
      target,
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );
  }
});
</script>

<style scoped>
.container {
  height: 600px;
  overflow: auto;
  border: 1px solid #ccc;
}

.virtual-list {
  height: 100%;
}

.item {
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.loading-indicator {
  text-align: center;
  padding: 20px;
  font-style: italic;
}
</style>
