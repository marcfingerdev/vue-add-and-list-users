<template>
<nav class="navbar navbar-expand-lg navbar navbar navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Add User</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/ListUsers">User List</router-link>
      </li>
    </ul>
  </div>
  <a class="navbar-brand" href="#">Vue - Marc Finger</a>
</nav>
  <router-view/>
</template>

<style>
   a.router-link-exact-active{
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  #app{
    text-align: center;
  }

  h1{
    padding:40px
  }
</style>
