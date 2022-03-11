<template>
  <v-app id="inspire">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";

@Component({

})
export default class App extends Vue{
  drawer = false;
}

// export default Vue.extend({
//   name: 'App',
//
//   data: () => ({
//     drawer: true
//   }),
// });
</script>
