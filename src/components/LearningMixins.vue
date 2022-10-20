<template>
    <div>
        <input type="number" v-model.number="v1" class="mb-2"><br>
        <!-- <input type="number" v-model.number="v2" class="mb-2"><br> -->
        <button type="submit" @click="addVal(v1)" class="mx-2 btn btn-primary">Add</button>
        <button type="submit" @click="subVal(v1)" class="mx-2 btn btn-secondary">Subtract</button>
        <button type="submit" @click="mulVal(v1)" class="mx-2 btn btn-success">Multiply</button>
        <button type="submit" @click="divVal(v1)" class="mx-2 btn btn-danger">Divide</button>
        <div>Result: {{currentVal}}</div>
    </div>
</template>

<script>
import CustomMixin from './mixins/CustomMixin.js';
export default {
    mixins: [CustomMixin]
}
</script>