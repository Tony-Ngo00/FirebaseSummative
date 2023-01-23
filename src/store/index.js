import { firestore } from "../firebase/index";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("store", {
  state: () => {
    return {
      movies: [],
      cart: new Map(),
    };
  },
  actions: {
    async populateFirestore() {
      const genres = new Map([
        [28, "Action"],
        [10751, "Family"],
        [878, "Science Fiction"],
        [12, "Adventure"],
        [14, "Fantasy"],
      ]);

      genres.forEach(async (value, key) => {
        let data = (
          await axios.get("https://api.themoviedb.org/3/discover/movie", {
            params: {
              api_key: "09a6e007d7a19baca792f4031cd63246",
              with_genres: key,
              include_adult: false,
            },
          })
        ).data.results;
        data = data.map((movie) => {
          return {
            id: movie.id,
            image: movie.poster_path,
          };
        });
        await setDoc(doc(firestore, "Genre", value), { data });
      });
    },
    async getMovies(genre) {
      this.movies = (await getDoc(doc(firestore, "Genre", genre))).data().data;
    },
    addToCart(id, data) {
      this.cart.set(id, data);
    },
    /* removeFromCart(id) {
      console.log(this.cart);
      this.cart.delete(id);
      this.cart.forEach((element) => {
        console.log(element);
      })
    }, */
    removeFromCart(id) {
      const index = this.indexOf.cart(id);
        if (index !== -1) {
          this.cart.splice(index, 1);
        };
    },
  },
});
