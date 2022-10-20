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
import ParentToChildData from './components/ParentToChildData.vue';
import ChildToParentDataUsingFunc from './components/ChildToParentDataUsingFunc.vue';
import LearningSlot from './components/LearningSlot.vue';
import ChildToParentDataUsingEmit from './components/ChildToParentDataUsingEmit.vue';
import LearningMixins from './components/LearningMixins.vue';
import LearningAxios from './components/LearningAxios.vue';
import MovieLoader from './components/UsingAxios/MovieLoader.vue';

export default {
  name: 'App',
  components: {
    VueAnatomy,
    LearningScriptPartVue,
    NavBar,
    HelloWorld,
    LearningScriptPart,
    ParentToChildData,
    ChildToParentDataUsingFunc,
    LearningSlot,
    ChildToParentDataUsingEmit,
    LearningMixins,
    LearningAxios,
    MovieLoader
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
