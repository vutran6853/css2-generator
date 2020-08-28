<template>
  <nav id="nav-container">
    <h1 v-on:click='handleRouteToHome'>CSS Generator Tool</h1>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  data: function () {
    return {
      state: {

      }
    }
  },
  methods: {
    handleRouteToHome() {
      this.$router.push({
        path: '/'
      })
    }
  },
  setup() {

  }
})
</script>

<style>

#nav-container {
  background-color: #e7e7e7;
  width: 95%;
  margin: auto;
  padding: 1rem;
  box-shadow: 2px 5px #f8f8f8;
  color: rebeccapurple;
}
#nav-container > h1 {
  font-weight: 400;
}
</style>