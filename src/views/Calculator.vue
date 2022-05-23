<template>
  <div class="container">
    <div class="border">
      <h1>{{ titolo }}</h1>
      <div class="d-flex flex-column">
        <div>
          <button @click="addActivity">Invia</button>
          <input type="text" name="testo" v-model="inputText" />
        </div>
      </div>
      <div>
        <ul class="list-unstyled">
          <li
            class="text-start"
            v-for="(singleActivity, indice) in activities"
            :key="indice"
          >
            {{ singleActivity.activity }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titolo: "To Do List",
      inputText: "",
      activities: [
        { activity: "Fare la spesa" },
        { activity: "Fare i compiti" },
        { activity: "Fare il portfolio" },
      ],
    };
  },
  methods: {
    addActivity() {
      this.activities.push({
        activity: this.inputText,
      });
      this.inputText = ""
    },
  },
};
</script>

<style>
</style>