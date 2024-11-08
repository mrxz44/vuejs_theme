<template>
  <div class="home-page">
    <h1>Welcome to the Home Page</h1>
    <VTMenu /> <!-- Example of using an existing theme component -->
  </div>
</template>

<script>
import VTMenu from '../core/components/VTMenu.vue';

export default {
  name: 'HomePage',
  components: {
    VTMenu,
  },
};
</script>

<style scoped>
.home-page {
  padding: 20px;
}
</style>
