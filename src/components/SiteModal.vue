<script setup>
import axios from "axios";
import { useStore } from "../store/index.js";

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
const store = useStore();

let info = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "779ebe30f392f779f18a739e5df2f414",
      include_adult: "false",
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>{{ info.title }}</h1>
        <table>
          <td class="left ">
            <img :src="`https://image.tmdb.org/t/p/w500${info.poster_path}`" />
          </td>
          <td class="right">
            <p>Release Date: {{ info.release_date }}</p>
            <p>Run Time: {{ info.runtime }} mins</p>
            <p>Average Vote: {{ info.vote_average }}</p>
            <p>Vote Count: {{ info.vote_count }}</p>
            <p class="overview">{{ info.overview }}</p>
          </td>
        </table>
        <button class="buyButton" @click="store.addToCart(props.id, {
          id: info.id,
          poster: info.poster_path,
          title: info.title
        })">Purchase</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

/* Change values to match screen at school */

.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.701);
  z-index: 3;
  
}
.modal-inner-container {
  margin-left: 24vw;
  margin-top: 180px;
  background-color: rgba(71, 70, 70, 0.76);
  width: 800px;
  height: 600px;
  color: rgb(202, 26, 26);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  border-width: 4px;
  border-style: double;
  border-color: rgb(202, 26, 26);
}
.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 70px;
  padding: 10px;
  border: none;
  background: rgba(0, 0, 0, 0);
  font-weight: bold;
  font-size: 2vw;
  color: rgb(202, 26, 26);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
}
.close-button, .buyButton:hover {
  cursor: pointer;
}
h1 {
  padding: 10px;
}
img {
  margin-left: 15px;
  width: 200px;
  aspect-ratio: 9/14;
}

.right {
  position: absolute;
  left: 600px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0);
}

.overview {
  margin-top: 10px;
}

.buyButton {
  position: absolute;
  margin-left: 500px;
  margin-top: -50px;
  width: 100px;
  margin-right: 0px;
  padding-right: 0px;
  font-size: 20px;
  color: rgb(202, 26, 26);
  background-color: rgba(71, 70, 70, 0.76);
  border-color: rgba(71, 70, 70, 0.76);
  border-width: 3px;
}

.close-button {
  left: 920px;
}
</style>
