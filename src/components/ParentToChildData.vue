<template>
    <div>
        <ChildComp parentName="ParentToChild" />
    </div>
</template>

<script>
import ChildComp from './ChildComp.vue';
export default {
    components: { ChildComp }
}
</script>