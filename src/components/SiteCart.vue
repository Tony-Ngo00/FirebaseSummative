<script setup>
import { useStore } from '../store/index.js'
const store = useStore();

</script>

<template>
  <div class="cartBox" v-for="movie in Array.from(store.cart.values())">
    <p>Movie Title: {{ movie.title }}</p>
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`"/>
    <button @click="store.removeFromCart(movie.id)">Remove</button>
  </div>
</template>

<style scoped>

:root {
    background-color:rgb(0, 0, 0);
  }
.cartBox {
  background-color:rgba(53, 52, 52, 0.856);
  margin-bottom: 20px;
  font-weight: bold;
  text-align: left;
  color: rgb(202, 26, 26);
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
img {
  width: 250px;
  height: 400px;
}
</style>