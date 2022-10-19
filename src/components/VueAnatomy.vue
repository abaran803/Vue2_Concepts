<!-- Anatomy of vue is the parts that build a component -->
<!-- Which includes: Template, Script and Style -->

<!-- Template: Contains the HTML part of the Component, similar to JSX -->
<template>
    <!-- Must return only one root element -->
    <div class="container">
        <h2>Welcome to {{frameworkName}}</h2>
        <p>A complete framework for building frontend projects. A proper combination of React and Angular, that contains the good part of both. This is very light-weight framework. It has majorly three versions, Vue1, Vue2, Vue3. This project is using Vue3 version of vue</p>
    </div>
</template>

<!-- Script: Logical part of the Component -->
<script>
export default {
    data() {
        return {
            frameworkName: "Vue"
        }
    }
}
</script>

<!-- Style: CSS part of the component -->
<style>
    p {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
</style>