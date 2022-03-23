<template>
  <div class="home">
    <home-page section="Essentials Vue JS" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePage from "@/components/HomePage.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HomePage,
  },
});
</script>
