<template>
    <div>
        <div v-if="childName">Child Component: {{childName}}</div>
        <ChildComp3 @hitChild="updateChild($event)" />
    </div>
</template>

<script>
import ChildComp3 from './ChildComp3.vue';
export default {
    components: { ChildComp3 },
    data() {
        return {
            childName: ""
        }
    },
    methods: {
        updateChild(cName) {
            this.childName = cName;
        }
    }
}
</script>