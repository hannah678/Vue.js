<template>
<div>
    <!-- <div v-for="job in this.$store.state.jobs">
        {{ job.title }}
    </div> -->
    <p v-for="job in this.$store.state.jobs">
        <a :href="job.url">{{ job.title }}</a>
        <br/><small>{{ job.time_ago }}, {{ job.domain }}</small>
        <hr/>
    </p>
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