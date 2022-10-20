<template>
    <div>
        This is the parent of {{childName}}
        <ChildComp2 :updateChildName="updateChildName" />
    </div>
</template>

<script>
import ChildComp2 from './ChildComp2.vue';
export default {
    data() {
        return {
            childName: ""
        };
    },
    methods: {
        updateChildName(cName) {
            this.childName = cName;
        }
    },
    components: { ChildComp2 }
}
</script>