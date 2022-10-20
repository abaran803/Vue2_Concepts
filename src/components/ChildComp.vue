<template>
    <div>
        This is the child of {{parentName}}
    </div>
</template>

<script>
export default {
    props: {
        parentName: String
    }
}
</script>