<template>
<div>
    <!-- <div v-for="user in this.$store.state.news">{{ user.title }}</div> -->
    <p v-for="item in this.$store.state.news">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <br/><small>
            {{ item.time_ago }} by 
            <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
            <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
        <hr/>
    </p>
</div>
</template>
<script>
import {fetchNewsList} from '../api/index.js';

export default{ 
    data(){
        return{
            users:[ ]
        }
    },
    created(){
        this.$store.dispatch('FETCH_NEWS');
        // var vm = this;
        // fetchNewsList()
        //     .then(function(response){
        //         console.log(response);
        //         vm.users = response.data;
        //     })
        //     .catch(error => console.log(error))
    }    
}
</script>