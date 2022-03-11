<template>
  <v-row dense>
    <v-col cols="12">
      <v-card
          color="#385F73"
          dark
      >
        <v-card-title class="text-h5">
          RANDOM
        </v-card-title>

        <v-card-subtitle>
          랜덤으로 음식이 선택 됩니다!
        </v-card-subtitle>

        <v-card-actions>
          <v-btn text>
            음식 추천!! GO!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card
          color="#952175"
          dark
      >
        <v-card-title class="text-h5">
          SELECT
        </v-card-title>

        <v-card-subtitle>
          수동으로 음식이 선택 됩니다!
        </v-card-subtitle>

        <v-card-actions>
          <v-btn text>
            음식 추천!! GO!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>




  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class SelectMenu extends Vue {

}


</script>

<style scoped>

</style>