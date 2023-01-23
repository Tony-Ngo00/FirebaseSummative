<script setup>
import axios from "axios";
import { ref } from "vue";
import SiteModal from "../components/SiteModal.vue";
import { useStore } from "../store/index.js";

const store = useStore();
const genre = ref(28);
const criteria = ref("");
const searchResults = ref([]);
const page = ref(1);
const totalPages = ref(0);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};
const closeModal = () => {
  showModal.value = false;
};
const getGenres = async () => {
  searchResults.value = [];
  criteria.value = "";
  await store.getMovies(genre.value);
};
const search = async (direction) => {
  page.value += direction;
  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "09a6e007d7a19baca792f4031cd63246",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;
  totalPages.value = data.total_pages;
  searchResults.value = data.results.map((movie) => {
    return {
      id: movie.id,
      image: movie.poster_path,
    };
  });
};
</script>

<template>
  <div class="buycontainer">
    <div class="searchcontainer">
      <h1>Search for Movies</h1>
      <input type="search" v-model="criteria" placeholder="Search" @keydown.enter="search(0)" />
      <select v-model="genre" placeholder="Country" @change="getGenres()">
        <option value="" disabled selected>Select your option</option>
        <option value="Action">Action</option>
        <option value="Family">Family</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Adventure">Adventure</option>
        <option value="Fantasy">Fantasy</option>
      </select>
      <RouterLink to="/cart" custom v-slot="{ navigate }">
        <button class="cart" @click="navigate" role="link">Cart</button>
      </RouterLink>
    </div>
    <div class="purchase-container">
      <template v-if="searchResults.length">
        <img v-for="movie in searchResults" :id="movie.id" @click="openModal(movie.id)"
          :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
      </template>
      <template v-else>
        <img class=".Movieposter" v-for="movie in store.movies" :id="movie.id" @click="openModal(movie.id)"
          :src="`https://image.tmdb.org/t/p/w500${movie.image}`" />
      </template>
      <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
    </div>
    <template v-if="searchResults.length">
      <div class="navigation">
        <button class="pageturn" v-show="page > 1" @click="search(-1)">Previous</button>
        <h1>{{ `Page ${page} of ${totalPages}` }}</h1>
        <button class="pageturn" v-show="page < totalPages" @click="search(1)">
          Next
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(202, 26, 26);
}

input, select {
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  color: rgb(202, 26, 26);
  background-color: rgb(54, 52, 52);
  border-color: rgba(39, 39, 39, 0.76);
  border-width: 3px;
}

button {
  width: 80px;
  margin-right: 0px;
  padding-right: 0px;
  font-size: 18px;
  color: rgb(202, 26, 26);
  background-color: rgb(54, 52, 52);
  border-color: rgba(71, 70, 70, 0.76);
  border-width: 3px;
}

.buycontainer {
  height: auto;
  margin-bottom: 20px;
}

.searchcontainer {
  width: auto;
  border-style: solid;
  border-width: 4px;
  border-radius: 10px;
  border-color: rgba(179, 22, 22, 0.61);
  background-color: rgba(53, 52, 52, 0.856);
  margin: 15px;
  padding: 20px;
}


.purchase-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

img {
  width: 250px;
  height: 400px;
  border-radius: 40px;
  border-width: 4px;
  border-style:dotted;
  border-color: rgb(202, 26, 26);
}

.navigation {
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  border-style: solid;
  border-width: 4px;
  border-radius: 10px;
  background-color: rgba(53, 52, 52, 0.856);
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 15%;
  margin-right: 15%;
  padding: 20px;
}

.pageturn {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 30px;
}
</style>
