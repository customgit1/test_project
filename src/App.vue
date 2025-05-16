<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img
        src="/vite.svg" class="logo"
        alt="Vite logo"
      >
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
</script>

<style scoped lang="scss">
.logo {
  will-change: filter;
  padding: 1px 2px 4px 77px;
  height: 6em !important;
  transition: filter 300ms;
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
