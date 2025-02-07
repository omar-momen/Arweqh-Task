<template>
  <NuxtLink
    class="shrink-0 block"
    :to="localePath('/')"
    aria-label="go-to-home-page"
  >
    <NuxtImg
      width="190"
      height="32"
      src="/images/logo/logo-light.png"
      alt="site Logo"
      v-bind="$attrs"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
defineOptions({
  inheritAttrs: false,
});
</script>
