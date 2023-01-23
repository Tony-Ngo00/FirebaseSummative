<script setup>
import SiteHeader from "../components/SiteHeader.vue";
import SiteBuy from "../components/SiteBuy.vue";
import SiteFooter from "../components/SiteFooter.vue";

// await store.populateFirestore();
</script>

<template>
  <div>
    <SiteHeader />
    <SiteBuy />
    <SiteFooter />
  </div>
</template>

<style scoped>
:root {
  background-color: rgba(0, 0, 0, 0.856);
}
</style>
