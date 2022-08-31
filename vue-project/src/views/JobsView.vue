<template>
<div>
    <div v-for="job in jobs">{{ job.title }}</div>
</div>
</template>
<script>
import axios from 'axios'
import { fetchJobsList } from '../api'

export default{ 
    data(){
        return{
            jobs: []
        }
    },
    created(){
        fetchJobsList()
        .then(response => {
            console.log(this);
            console.log(response);
            this.jobs = response.data;
        })
        .catch(error => console.log(error))
    }
}
</script>