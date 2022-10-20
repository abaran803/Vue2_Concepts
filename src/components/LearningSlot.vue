<template>
    <div>
        <SlotChild>
        <template v-slot:s1>
            <h1>Heading</h1>
        </template>
        <template v-slot:s2>
            <h2>Sub-Heading</h2>
        </template>
        <template v-slot:s3>
            <p>Description of Component</p>
        </template>
        </SlotChild>
    </div>
</template>

<script>
import SlotChild from './SlotChild.vue';
export default {
    components: { SlotChild }
}
</script>