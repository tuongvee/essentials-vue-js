<template>
  <article class="d-flex align-items-center">
    <label class="p-2"
      >First Name:
      <input
        type="text"
        :value="firstName"
        @input="$emit('update:firstName', $event.target.value)"
      />
    </label>
    <label class="p-2"
      >Last Name:
      <input
        type="text"
        :value="lastName"
        @input="$emit('update:lastName', $event.target.value)"
      />
    </label>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    firstName: String,
    lastName: String,
  },
  emits: ["update:firstName", "update:lastName"],
});
</script>
