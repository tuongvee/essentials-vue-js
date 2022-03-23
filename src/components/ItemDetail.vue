<template>
  <article>
    <h4>{{ item.id }}</h4>
    <p>{{ item.label }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["item"],
});
</script>
