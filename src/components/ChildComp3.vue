<template>
    <div>
        Click the button below to see the child component name <br>
        <button type="submit" class="btn btn-secondary" @click="showChild('ChildComp3')">Show Child</button>
    </div>
</template>

<script>
export default {
    methods: {
        showChild(cName) {
            this.$emit('hitChild', cName);
        }
    }
}
</script>