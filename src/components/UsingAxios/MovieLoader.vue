<template>
    <div>
        <input class="form-control w-25 m-auto" type="text" placeholder="Enter Movie Name and Press Enter" @keyup.enter="LoadMovie" v-model="query">
        {{status}}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            query: '',
            status: null
        }
    },
    methods: {
        LoadMovie() {
            this.status = "loading";
            axios.get('https://api.tvmaze.com/search/shows?q=' + this.query)
            .then(response => {
                if(response.status !== 200) {
                    throw new Error("Some error happened")
                }
                this.status = "success";
                console.log(this.status, response);
            })
            .catch(err => {
                this.status = "error";
                console.log(err.message);
            })
        }
    }
}
</script>