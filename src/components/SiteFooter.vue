<script setup></script>

<template>
  <div class="footerContainer">
    <h1 class="info">NOTflix</h1>
    <div class="text">
      <table>
        <td>
          <p>Owner: Tony Ngo</p>
          <p>Email: ngotony00@gmail.com</p>
          <p>Phone Number: 111-222-3333</p>
        </td>
        <td>
          <p>Location: 2621 Midland Ave, Scarborough, ON M1S 1R8</p>
          <p>Business Description: NOTflix a movie sale website is dedicated to providing and ensuring quality movies to
            our clients.</p>
        </td>
      </table>
    </div>
  </div>
</template>

<style scoped>
.footerContainer {
  position: absolute;
  background-color: rgba(48, 48, 48, 0.151);
  padding: 5px;
  border-radius: 20%;
  border-width: 4px;
  border-style: solid;
  border-color: rgb(202, 26, 26);
}

.info {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: rgb(202, 26, 26);
  border-width: 4px;
  padding: 3px;
  text-align: center;
}

table {
  border-collapse: separate;
  border-spacing: 30px;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  width: 700px;
}

p {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
  margin-left: 5px;
  color: rgb(202, 26, 26);
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
