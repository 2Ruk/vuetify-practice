<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        class="pt-4"
        color="grey lighten-3"
        mini-variant
    >
        <v-badge
            v-for="n in 6"
            :key="n"
            :size="46"
            class="d-block text-center mx-auto mb-9"
            bordered
            bottom
            color="deep-purple accent-4"
            dot
            offset-x="10"
            offset-y="10"
        >
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-avatar>
        </v-badge>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: true
  }),
});
</script>
