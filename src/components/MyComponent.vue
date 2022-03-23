<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({}),
    },
  },
  emits: ["update:modelValue"],
  methods: {
    emitValue(e: any) {
      let value = e.target.value;

      // if(this.modelModifiers.capitalize)
      if (this.modelModifiers) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit("update:modelValue", value);
    },
  },
});
</script>
