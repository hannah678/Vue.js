<template>
<div>
   <p>name : {{ userInfo.id }}</p>
   <p>karma : {{ userInfo.karma }}</p>
   <p>created : {{ userInfo.created }}</p>
</div>
</template>
<script>
//import axios from 'axios';
export default{ 
    computed:{
      userInfo(){
        return this.$store.state.user;
      }  
    },
    created(){
        const userName = this.$route.params.id;
        //axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);

        //변수를 파라미터로 전달(1개만 가능 > 여러개일 경우 객체로 감싸서 1개로 전달)
        this.$store.dispatch('FETCH_USER', userName); 
    }
}
</script>