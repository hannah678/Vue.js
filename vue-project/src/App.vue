<template>
  <nav>
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </nav>
  <transition name="fade">
    <router-view/>
  </transition>
  
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
a{
  text-decoration: none;
  color:#34495e;
}
a:hover{
  color:#30b77a;
  text-decoration: underline;
}
a.router-link-exact-active{
  text-decoration: underline;
}
nav {
  padding: 30px;
  background-color: #2c3e50;
  font-size:20px;
  color: #aaa;

}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #85f4c2;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
