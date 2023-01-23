<script setup></script>

<template>
  <div class="accountcontainer">
    <div class="infocontainer">
      <p>
        Click on the Register button to create a new account. Click on the Login button if
        you already have an account.
      </p>
    </div>
    <div class="logincontainer">
      <h1>Login</h1>
      <RouterLink to="/Login" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">Login</button>
      </RouterLink>
    </div>
    <div class="registercontainer">
      <h1>Register</h1>
      <RouterLink to="/Register" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">Register</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.accountcontainer {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 600px;
  width: 800px;
  border-style: solid;
  border-width: 4px;
  background-color: deepskyblue;
}

.infocontainer {
  margin: 20px;
  padding: 5px;
  background-color: yellow;
  border-style: solid;
  border-width: 4px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  border-radius: 10px;
}

h1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: Arial, Helvetica, sans-serif;
}

.logincontainer {
  display: grid;
  margin-top: 50px;
  padding-top: 20px;
  grid-template-columns: repeat(2, 1fr);
  height: 30%;
}

.registercontainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  width: 30%;
}
</style>
