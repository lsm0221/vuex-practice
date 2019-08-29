<template>
  <div id="app">
    <!-- mutations -->
    <button @click="decrementCountAsync({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCountAsync">+</button>

    <hr />
    <p>{{completedTodos}}</p>
    <button @click="fetchDataAsync">FetchData</button>
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

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
  ]),
  methods: mapActions([
    "incrementCountAsync",
    "decrementCountAsync",
    "fetchDataAsync"
  ])
  // methods: {
  //   incrementCount() {
  //     // 触发actions dispatch 异步处理 分发
  //     this.$store.dispatch("incrementCountAsync");
  //   },
  //   decrementCount(n) {
  //     this.$store.dispatch("decrementCountAsync", n);
  //   },
  //   fetchData() {
  //     // 触发actions
  //     this.$store.dispatch("fetchDataAsync");
  //   }
  // }
};
</script>

<style>
</style>
