<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-light mb-5">
        <div class="container-fluid">
            <div style="background: url('https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg') center center/cover; width: 30px; height: 30px;" class="mx-3"></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <div :class="{'nav-link': true, 'active': navVal === 'HelloWorld'}" @click="changePage('HelloWorld')">Dashboard</div>
                    </li>
                    <li class="nav-item">
                        <div :class="{'nav-link': true, 'active': navVal === 'VueAnatomy'}" @click="changePage('VueAnatomy')">VueAnatomy</div>
                    </li>
                    <li class="nav-item">
                        <div :class="{'nav-link': true, 'active': navVal === 'LearningScriptPart'}" @click="changePage('LearningScriptPart')">LearningScriptPart</div>
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
        position: sticky !important;
        top: 0;
    }
</style>