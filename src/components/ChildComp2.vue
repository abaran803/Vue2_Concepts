<template>
    <div>
        This is the child component
        {{updateChildName("ChildComp2")}}
    </div>
</template>

<script>
export default {
    props: {
        updateChildName: Function
    }
}
</script>