<template>
  <div class="default-layout">
    <TheNavbar />
    <div class="pages-container">
      <slot />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="postcss" scoped>
.pages-container {
  padding-top: calc(var(--navbar-height) + 2rem);
}
</style>
