<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Heade />
  <div>
    <RouterView />
  </div>
  <Foote />
</template>

<script>
import Heade from './components/Header.vue';
import Foote from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    // MonComposant
    Heade,
    Foote,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
