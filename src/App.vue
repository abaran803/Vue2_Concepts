<template>
  <div id="app">
    <NavBar :loadComponents="loadComponents" />
    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive>
  </div>
</template>

<script>
import LearningScriptPartVue from './components/LearningScriptPart.vue';
import VueAnatomy from './components/VueAnatomy.vue';
import NavBar from './components/NavBar.vue';
import HelloWorld from './components/HelloWorld.vue'
import LearningScriptPart from './components/LearningScriptPart.vue';

export default {
  name: 'App',
  components: {
    VueAnatomy,
    LearningScriptPartVue,
    NavBar,
    HelloWorld,
    LearningScriptPart
  },
  data() {
    return {
      currentComponent: "HelloWorld"
    }
  },
  methods: {
    loadComponents(componentName) {
      this.currentComponent = componentName;
      console.log(this.currentComponent);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
