<script setup>
import { ref } from "vue";
import router from "../router";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const passcheck = ref(false);
const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");

const registerUserByEmail = async () => {
  if (password1.value !== password2.value) {
    passcheck.value = true;
    return;
  } else {
    router.push("/purchase");
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
  } catch (error) {
    console.log(error);
  }
};

const registerUserByGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("./purchase");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="registercontainer">
    <div class="container2">
      <h2>Register by Google</h2>
      <button @click="registerUserByGoogle">Google</button>
    </div>
    <div class="container2">
      <h2>Register by email</h2>
      <form @submit.prevent="registerUserByEmail()">
        <input v-model="username" type="text" placeholder="username" />
        <input v-model="email" type="email" placeholder="email" />
        <input v-model="password1" type="password" placeholder="password" />
        <input v-model="password2" type="password" placeholder="re-enter password" />
        <input type="submit" value="Register" />
      </form>
      <div v-if="passcheck">
        <p>Passwords do not match</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  width: auto;
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

h2 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.registercontainer {
  min-height: 300px;
}

.container2 {
  padding: 10px;
  border-style: solid;
  border-width: 2px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: rgb(202, 26, 26);
}
</style>
