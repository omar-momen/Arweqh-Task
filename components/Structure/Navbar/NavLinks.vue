<template>
  <ul @click="emit('close')">
    <li v-for="link in links" :key="link.name">
      <NuxtLink v-if="link.path" :to="localePath(link.path)">
        {{ $t(`links.${link.name}`) }}
      </NuxtLink>
      <NuxtLink v-else>
        {{ $t(`links.${link.name}`) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);

const links = ref([
  { name: "home", path: "/" },
  { name: "about-us" },
  { name: "posts", path: "/posts" },
  { name: "become-partner" },
  { name: "teams" },
  { name: "bog" },
]);

const localePath = useLocalePath();
</script>

<style lang="postcss" scoped>
li {
  a {
    @apply font-medium text-base capitalize transition-all hover:text-primary;

    &.router-link-exact-active {
      @apply text-primary font-bold;
    }
  }
}
</style>
