<template>
<div>
    <div v-for="item in ask">{{ item.title }}</div>
</div>
</template>
<script>
import { mapState } from 'vuex';

export default{ 
    computed: {
        ...mapState({
            ask: state => state.ask
        })
        // ask(){
        //     return this.$store.state.ask;
        // }
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
        // fetchAskList()
        // .then(response => this.ask = response.data)
        // .catch(error => console.log(error));
    }
}
</script>