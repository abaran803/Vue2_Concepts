<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-light mb-5">
        <div class="container-fluid">
            <div style="background: url('https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg') center center/cover; width: 30px; height: 30px;"
                class="mx-3"></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mt-2" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-1">
                        <div :class="{'nav-link': true, 'active': navVal === 'HelloWorld'}"
                            @click="changePage('HelloWorld')">Home</div>
                    </li>
                    <li class="nav-item dropdown mx-1">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Basic
                        </a>
                        <ul class="dropdown-menu">
                            <li><div :class="{'dropdown-item': true, 'active': navVal === 'HelloWorld'}" @click="changePage('HelloWorld')">Home</div></li>
                            <li><div :class="{'dropdown-item': true, 'active': navVal === 'VueAnatomy'}" @click="changePage('VueAnatomy')">VueAnatomy</div></li>
                            <li><div :class="{'dropdown-item': true, 'active': navVal === 'LearningScriptPart'}" @click="changePage('LearningScriptPart')">LearningScriptPart</div></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown mx-1">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Intermediate
                        </a>
                        <ul class="dropdown-menu">
                            <li><div :class="{'dropdown-item': true, 'active': navVal === 'ParentToChildData'}" @click="changePage('ParentToChildData')">ParentToChildData</div></li>
                            <li><div :class="{'dropdown-item': true, 'active': navVal === 'ChildToParentDataUsingFunc'}" @click="changePage('ChildToParentDataUsingFunc')">ChildToParentDataUsingFunc</div></li>
                            <li><div :class="{'dropdown-item': true, 'active': navVal === 'LearningSlot'}" @click="changePage('LearningSlot')">LearningSlot</div></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown mx-1">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Advanced
                        </a>
                        <ul class="dropdown-menu">
                            <li><div :class="{'dropdown-item': true, 'active': navVal === 'ChildToParentDataUsingEmit'}" @click="changePage('ChildToParentDataUsingEmit')">ChildToParentDataUsingEmit</div></li>
                            <li><div :class="{'dropdown-item': true, 'active': navVal === 'LearningMixins'}" @click="changePage('LearningMixins')">LearningMixins</div></li>
                            <li><div :class="{'dropdown-item': true, 'active': navVal === 'LearningAxios'}" @click="changePage('LearningAxios')">LearningAxios</div></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown mx-1">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Minor Projects
                        </a>
                        <ul class="dropdown-menu">
                            <li><div :class="{'dropdown-item': true, 'active': navVal === 'MovieLoader'}" @click="changePage('MovieLoader')">Movie Loader</div></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        loadComponents: Function
    },
    data() {
        return {
            navVal: "HelloWorld"
        }
    },
    methods: {
        changePage(val) {
            this.navVal = val;
            this.loadComponents(this.navVal);
        }
    }
}
</script>

<style>
.nav-link {
    cursor: pointer;
}

nav {
    text-align: left;
    position: sticky !important;
    top: 0;
}
</style>