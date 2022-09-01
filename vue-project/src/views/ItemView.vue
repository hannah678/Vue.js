<template>
    <div>
        <!-- <p>{{ fetchedItem.title }}</p>
        <p>{{ fetchedItem.time_ago }}</p>
        <p>{{ fetchedItem.content }}/></p> -->
        <section>
            <!-- 질문 상세 정보 -->
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link v-bind:to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
                </div>
            </div>
            <div class="time">
                {{ fetchedItem.time_ago}}
            </div>
            
        </section>
        <section class="content">
            <!-- 질문 댓글 -->
            <h2>{{ fetchedItem.title }}</h2>
            <div v-html="fetchedItem.content"></div>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default{ 
    computed:{
        ...mapGetters(['fetchedItem']),
    },
    created(){
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>
<style scoped>
    div{text-align:left}
    .user-container{display:flex; align-items:center}
    .fa-user{padding:10px 5px 10px 20px;}
    .time{padding-left: 20px;}
    .content{padding: 0 20px;}
</style>