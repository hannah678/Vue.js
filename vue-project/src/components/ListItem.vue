<template>
<div>
    <ul>
        <li v-for="item in listItems" class="post">
            <!-- 포인트 영역 -->
            <div class="points">
                {{item.points || 0 }}
            </div>
            <!-- 기타 정보 영역 -->
            <div>
                <!-- 타이틀 영역 -->
                <p class="news-title">
                    <!-- template v-if 적용 -->
                    <template v-if="item.domain">
                        <a v-bind:href="item.url">{{ item.title }}</a>
                    </template>
                    <template v-else>
                        <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
                    </template>
                </p>
                <small>
                    {{ item.time_ago }} by 
                    <!-- v-if 바로 적용 -->
                    <router-link 
                    v-if="item.user"
                    v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                    <a :href="item.url" v-else>
                        {{ item.domain }}
                    </a>
                </small>
            </div>
        </li>
    </ul>
</div>
</template>
<script>

export default{ 
    created(){
        const name = this.$route.name;
        var actionName = '';

        if(name === 'news'){
            actionName ='FETCH_NEWS';
        }else if(name === 'ask'){
            actionName ='FETCH_ASK';
        }else if(name === 'jobs'){
            actionName ='FETCH_JOBS';
        }

        this.$store.dispatch(actionName);
    },
    computed:{
        listItems(){
            const name = this.$route.name;

            if(name === 'news'){
                return this.$store.state.news;
            }else if(name === 'ask'){
                return this.$store.state.ask;
            }else if(name === 'jobs'){
                return this.$store.state.jobs;
            }
        }
    }    
}
</script>
<style scoped>
    .news-list{
        margin:0;
        padding:0;
    }
    .post{
        list-style:none;
        display:flex;
        align-items:center;
        border-bottom:1px solid #eee;
    }
    .points{
        width:80px;
        height:60px;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#42b883;
    }
    .news-title{
        margin:0;
    }
    .link-text{
        color:#828282;
    }
</style>