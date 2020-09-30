<template>
  <v-app>
      <v-app-bar
        app
        color="secondary"
        dark
      >
        <v-container>
        <div class="d-flex align-center">

          <v-chip>test</v-chip>
        </div>

        <v-spacer></v-spacer>
      </v-container>
      </v-app-bar>


    <v-main>
      <HelloWorld/>
    </v-main>

  </v-app>
</template>

<script>
import axios from 'axios';
import HelloWorld from './components/HelloWorld';
import shopRepository from './repositories/shopRepository'
import shopService from './sevices/shopService.js'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    user: {}
  }),

  methods:  {
  },
  mounted () {
    shopService.initialize()
  }
};
</script>

<style lang="scss">
    @import './assets/styles/custom.scss';
</style>
