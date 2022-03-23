<template>
  <div class="slot">
    <slot-layout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </slot-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SlotLayout from "@/components/SlotLayout.vue"; // @ is an alias to /src

export default defineComponent({
  name: "SlotView",
  components: {
    SlotLayout,
  },
});
</script>
