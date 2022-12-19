<template>
  <div class="sidebar">
    <img class="logo" alt="Vue logo" src="../assets/logo.png" />

    <h2>Apple News</h2>
    <ul>
      <li>
        <router-link to="/"><i class="fas fa-home"> </i>Today</router-link>
      </li>
      <li>
        <router-link to="/"
          ><i class="fas fa-address-card"> </i>Better Living</router-link
        >
      </li>
      <li>
        <router-link to="/"
          ><i class="fas fa-address-card"></i>Health Spotlight</router-link
        >
      </li>
      <li>
        <router-link to="/"
          ><i class="fas fa-address-card"></i>Portfolio</router-link
        >
      </li>
    </ul>

    <h2 class="mt-10">Categories</h2>
    <ul>
      <li>
        <router-link to="/"
          ><i class="fas fa-project-diagram"></i>Politics</router-link
        >
      </li>
      <li>
        <router-link to="/health"
          ><i class="fas fa-project-diagram"></i> Health</router-link
        >
      </li>
      <li>
        <router-link to="/"
          ><i class="fas fa-project-diagram"></i>Business</router-link
        >
      </li>
      <li>
        <router-link to="/"
          ><i class="fas fa-project-diagram"></i>Technology</router-link
        >
      </li>
      <li>
        <router-link to="/"
          ><i class="fas fa-address-book"> </i>Entertainment</router-link
        >
      </li>
      <li>
        <router-link to="/"><i class="fas fa-map-pin"></i>Food</router-link>
      </li>
    </ul>

    <div class="socialmedia">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style>
</style>
