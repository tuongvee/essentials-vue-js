<template>
  <div class="watcher"><watcher-section section="Watcher Section" /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WatcherSection from "@/components/WatcherSection.vue"; // @ is an alias to /src

export default defineComponent({
  name: "WatcherView",
  components: {
    WatcherSection,
  },
});
</script>
