<template>
  <v-card
      max-width="400"
      class="mx-auto"
  >
    <MainHeader/>
    <v-container>
      <SelectMenu @selectMenu="selectMenu"/>
      <br>
      <v-parallax height="430" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MainHeader from "@/components/main/main-header.vue";
import SelectMenu from "@/components/main/content/select-menu.vue";
import {SELECT} from "@/enum/common";

@Component({
  components: {
    SelectMenu,
    MainHeader
  },
})
export default class Home extends Vue {

  selectMenu(select: SELECT): void {

    switch (select) {
      case SELECT.RANDOM: {
        console.log('random 입니당')
        break;
      }
      case SELECT.CATEGORY: {
        console.log('카테고리 입니당')
        break;
      }
      default:
        console.log('a');
    }
  }
}
</script>
