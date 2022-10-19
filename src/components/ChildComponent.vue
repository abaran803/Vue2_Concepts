<template>
    <div class="childComp">
        This is the {{elementType}} component
    </div>
</template>

<style>
    .childComp {
        width: fit-content;
        margin: 10px auto;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.546);
        color: white;
        font-weight: 600;
    }
</style>

<script>
export default {
    // Date from the Parent
    props: {
        elementType: String
    }
}
</script>