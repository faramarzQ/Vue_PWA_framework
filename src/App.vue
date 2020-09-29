<template>
  <v-app>
      <v-app-bar
        app
        color="secondary"
        dark
      >
        <v-container>
        <div class="d-flex align-center">

          <v-btn
            v-on:click="increment()"
            color="primary"
            elevation="2"
          >کلیک کنید</v-btn>

          <v-chip>{{count}}</v-chip>
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
import HelloWorld from './components/HelloWorld';
// import axios from 'axios';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),

  methods:  {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.shops.name);

    }
  },
  computed: {
    count() {
      return this.$store.getters.getCountPlut
    }
  }
};
</script>
