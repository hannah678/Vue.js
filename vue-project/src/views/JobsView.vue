<template>
<div>
    <div v-for="job in this.$store.state.jobs">{{ job.title }}</div>
</div>
</template>
<script>
import { fetchJobsList } from '../api'

export default{ 
    data(){
        return{
            jobs: []
        }
    },
    created(){
        this.$store.dispatch('FETCH_JOBS');

        // fetchJobsList()
        // .then(response => {
        //     console.log(this);
        //     console.log(response);
        //     this.jobs = response.data;
        // })
        // .catch(error => console.log(error))
    }
}
</script>