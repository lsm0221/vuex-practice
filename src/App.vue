<template>
  <div id="app">
    <!-- getters -->
    <p>App.vue:{{count}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(3)}}</p>
    <!-- <p>App.vue:{{todos}}</p>
    <Count />-->
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Count
  },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ])
  // computed: {
  //   count() {
  //     return this.$store.getters.count;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  // }
};
</script>

<style>
</style>
