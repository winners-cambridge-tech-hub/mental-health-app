<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  min-height: 100vh;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
}
body {
  margin: 0;
  padding: 0;
}
.logo {
  width: 50px;
}
.header {
  color: #fff;
  background: #000;
  padding: 1rem 0;
}
.sidebar {
  display: flex;
  flex-direction: column;
  /* width: calc(2rem + 42px); */
  width: 150px;
  min-height: 100vh;
  overflow: hidden;
  background: #4d295c;
  z-index: 99;
}
.logo {
  margin: 0 auto;
}

h2 {
  text-transform: uppercase;
  color: #ccc;
  text-align: left;
  padding: 10px;
  margin-bottom: 10px;
}

.mt-10 {
  margin-top: 10px;
}

li {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
}

li a {
  color: #efefef;
  display: block;
}

.fas {
  width: 20px;
}

li:hover {
  color: #ffffff;
  background-color: #594f8d;
}

.socialmedia {
  bottom: 0;
  position: absolute;
  color: #000;
}
.socialmedia > i {
  padding: 0 7px;
}
.main {
  background-color: #fff;
  overflow: hidden;
  width: 100vw;
}
.main a {
  float: left;
  color: #f2f2f2;
  padding: 14px 16px;
  font-size: 17px;
  margin: 5px;
  text-decoration: none;
}
.main a:hover {
  background-color: #ddd;
  color: #333;
}
.home {
  display: flex;
}
.category-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  position: relative;
  margin: 20px auto;
}

.category-container .card {
  width: 97%;
  height: 180px;
  background: #fff;
  box-shadow: 0 9px 17px -6px rgba(0, 0, 0, 0.2);
  margin: auto;
  justify-content: center;
  transition: all 400ms ease;
  border-radius: 15px;
  overflow: hidden;
}

.category-container .card .title {
  background-image: linear-gradient(
    to right,
    rgb(87, 84, 84, 0.2),
    rgb(252, 240, 240, 0.2)
  );
  padding: 14px 40px;
  line-height: 1;
  margin: 20px 0 10px 15px;
  width: 100%;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  right: 32px;
  object-fit: cover;
  bottom: 20px;
  color: #d34444;
  font-size: 15px;
}

.category-container .card:hover {
  transform: scale(1.03);
}

.category-container .card a {
  width: 100%;
  height: 150px;
  text-decoration: none;
  color: #14213d;
  display: flex;
  flex-direction: column;
}

.category-container .card .category {
  display: flex;
  width: 100%;
  border-bottom: 2px solid rgb(213, 210, 210);
  gap: 10px;
  height: 70px;
}

.category-container .card .category .headline {
  position: relative;
  bottom: 25px;
  width: 60%;
  margin: 10px 15px;
  line-height: 1.2;
}

.category-container .card .category .headline p {
  padding-top: 10px;
}

.category-container .card img {
  width: 40%;
  height: 110px;
  position: relative;
  bottom: 55px;
  right: 10px;
  overflow: hidden;
  border-radius: 10px;
}

.category-container .card .info {
  display: flex;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  padding: 10px;
  position: relative;
  align-items: center;
}

.category-container .card .info .elipsis {
  font-weight: 900;
  padding-right: 10px;
}

.category-container .card .info .time-stamp {
  padding-left: 10px;
  display: flex;
  gap: 10px;
}
</style>
