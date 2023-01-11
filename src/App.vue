<template>
  <div id="app">
    <Calculadora/>
  </div>
</template>

<script>
import Calculadora from './components/Calculadora/index.vue';
export default {
  name: 'App',
  components: {
    Calculadora,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #000000;
  width: 1360px;
  height: 680px;
  justify-content: center;
  align-items: center;
  display: flex;
  
}
</style>