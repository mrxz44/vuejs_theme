<template>
  <div class="about-page">
    <h1>Welcome to the About Page</h1>
    <VTMenu /> <!-- Example of using an existing theme component -->
  </div>
</template>

<script>
import VTMenu from '../core/components/VTMenu.vue';

export default {
  name: 'AboutPage',
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
