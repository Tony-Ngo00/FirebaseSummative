<script setup>
const props = defineProps(["login"]);
</script>

<template>
  <div class="header-container">
    <h1>NOTflix</h1>
    <RouterLink to="/login" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">Login</button>
    </RouterLink>
    <RouterLink to="/register" custom v-slot="{ navigate }">
      <button id="loginButton" @click="navigate" role="link">Register</button>
    </RouterLink>
  </div>
  <div class="spaceBox"></div>
</template>

<style scoped>
.spaceBox {
  height: 110px;
}

.header-container {
  position: absolute;
  margin: 0px;
  background-color: rgba(48, 48, 48, 0.151);
  border-bottom-style: solid;
  border-right-style: solid;
  padding-bottom: 4px;
  border-radius: 10%;
  border-width: 4px;
  border-style: solid;
  border-color: rgb(202, 26, 26);
}

h1 {
  color: rgb(202, 26, 26);
  font-weight: bold;
  text-align: left;
  font-size: 50px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

button {
  width: 100px;
  margin-right: 0px;
  padding-right: 0px;
  font-size: 20px;
  color: rgb(202, 26, 26);
  background-color: rgb(54, 52, 52);
  border-color: rgba(71, 70, 70, 0.76);
  border-width: 3px;
}
</style>
