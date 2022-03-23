<template>
  <div class="events"><events-section /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventsSection from "@/components/EventsSection.vue"; // @ is an alias to /src

export default defineComponent({
  name: "EventsView",
  components: {
    EventsSection,
  },
});
</script>
