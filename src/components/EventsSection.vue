<template>
  <div class="mx-4">
    <h2>Events Section</h2>
    <article class="d-flex align-items-center">
      <h5>Events Arguments</h5>
      <MyButton class="p-1 m-2" @increase-by="(n) => (count += n)" />
      <p class="p-1 m-2">Result: {{ count }}</p>
    </article>
    <article>
      <h5>Event Validation</h5>
      <form class="d-block">
        <label class="p-2">
          User name:
          <input type="text" v-model="username" />
        </label>
        <label class="p-2">
          Password:
          <input type="type" v-model="password" />
        </label>
        <input
          type="submit"
          value="Log In"
          class="btn btn-primary p-2"
          v-on:@submit.prevent="submitForm"
        />
      </form>
    </article>
    <article class="d-block align-items-center">
      <h5>Evens using with v-model</h5>
      <custom-input
        v-model:first-name="firstName"
        v-model:last-name="lastName"
      />
      <p class="m-2">Full name: {{ firstName }} {{ lastName }}</p>
    </article>
    <article>
      <h5>Handling v-model modifiers</h5>
      This input capitalizes everything you enter:
      <my-component v-model.capitalize="myText" />
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyButton from "./MyButton.vue";
import CustomInput from "./CustomInput.vue";
import MyComponent from "./MyComponent.vue";

export default defineComponent({
  components: {
    MyButton,
    CustomInput,
    MyComponent,
  },
  data() {
    return {
      count: 0,
      username: "",
      password: "",
      firstName: "James",
      lastName: "Smith",
      myText: "",
    };
  },
  emits: {
    // No validation
    click: null,

    // Validate submit event
    submit: ({ username, password }) => {
      if (username && password) {
        return true;
      } else {
        console.warn("Invalid submit event payload!");
        return false;
      }
    },
  },
  methods: {
    submitForm(username: string, password: string) {
      this.$emit("submit", { username, password });
    },
  },
});
</script>

<style scoped></style>
