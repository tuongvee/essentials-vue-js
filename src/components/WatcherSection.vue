<template>
  <div class="question-section">
    <h2>{{ section }}</h2>
    <p>
      Ask a yes/no question:
      <input v-model="question" class="input-field" :ref="(el) => {}" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WatcherSection",
  props: {
    section: String,
  },
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
    };
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion: string) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
    },
  },
  methods: {
    async getAnswer() {
      this.answer = "Thinking...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer;
      } catch (error) {
        this.answer = "Error! Could not reach the API. " + error;
      }
    },
  },
});
</script>

<style scoped>
.question-section {
  display: block;
  align-items: center;
  padding: 5px;
  margin: 10px 10px;
}
</style>
