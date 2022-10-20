<template>
    <div>
        <button @click="getPost">Load Post</button>
        <ul type="none">
            <li v-for="e in posts" :key="e.id">{{e.title}}</li>
        </ul>
        {{errMsg}}
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "LearningAxios",
    data() {
        return {
            errMsg: '',
            posts: []
        }
    },
    methods: {
        getPost() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.posts = response.data)
            .catch(err => this.errMsg = err.message)
        }
    }
}
</script>