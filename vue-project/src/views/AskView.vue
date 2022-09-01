<template>
<div>
    <div v-for="item in fetchedAsk">{{ item.title }}</div>
</div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default{ 
    computed: {
        //1.
        ...mapGetters([
            'fetchedAsk'
        ])

        //2.
        // ...mapGetters({
        //     fetchedAsk: 'fetchedAsk'
        // })

        //3.
        // ...mapState({
        //     fetchedAsk: state => state.ask
        // })

        //4.
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