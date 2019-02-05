<template>
  <div id="app">
    <v-app>
      <v-toolbar color="teal" dark fixed app>
        <v-toolbar-title class="white--text">
          <p class="tool-bar-p font-weight-bold headline text-xs-center">
            vue-template
          </p>
        </v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <img alt="Vue logo" src="./assets/logo.png">
          <router-view ></router-view>
        </v-container>
      </v-content>
      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>&copy; <a href="https://u-maz.net">umaz</a></div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
