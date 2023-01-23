<script setup>
import { ref } from "vue";
import router from "../router";
import { auth } from "../firebase/index";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const email = ref("");
const password = ref("");

const signInByGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("./purchase");
  } catch (error) {
    console.log(error);
  }
};

const signInWithEmail = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/purchase");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="usercontainer">
    <div class="container1">
      <h2>Login by Google</h2>
      <button @click="signInByGoogle()">Google</button>
    </div>
    <div class="container1">
      <h2>Login by Email</h2>
      <form @submit.prevent="signInWithEmail()">
        <input v-model="email" type="email" placeholder="email" /> <br />
        <input v-model="password" type="password" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.usercontainer {
  height: auto;
}

h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: rgb(202, 26, 26);
}

input {
  width: 100px;
  margin-right: 0px;
  padding-right: 0px;
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Sans';
  color: rgb(202, 26, 26);
  background-color: rgb(54, 52, 52);
  border-color: rgba(71, 70, 70, 0.76);
  border-width: 3px;
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

p {
  margin: 10px;
  background-color: yellow;
  border-style: solid;
  border-width: 4px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.logcontainer {
  width: 30%;
  height: 340px;
  border-style: solid;
  border-color: black;
  border-width: 4px;
  background-color: rgb(37, 37, 37);
}

h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin: 15px;
}

.enter {
  width: 30%;
}

.container1 {
  margin-right: 60%;
  padding: 20px;
  border-style: solid;
  border-width: 4px;
  background-color: rgb(49, 49, 49);
}
</style>
