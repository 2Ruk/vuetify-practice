<template>
  <v-card
      max-width="400"
      class="mx-auto"
  >
    <MainHeader/>
    <v-container>
      <!-- #TODO : 컴포넌트화 예정 -->
      <SelectMenu @selectMenu="selectMenu"/>
      <br>


      <v-img  height="400" :src="url"></v-img>
<!--      <v-parallax  height="400" :src="url"></v-parallax>-->
      <br>
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
  private url = 'https://cdn.vuetifyjs.com/images/parallax/material.jpg';
  selectMenu(select: SELECT): void {
    switch (select) {
      case SELECT.RANDOM: {
        this.url = 'https://cdn.vuetifyjs.com/images/parallax/material.jpg'
        console.log('random 입니당')
        break;
      }
      case SELECT.CATEGORY: {
        this.url = 'https://wallpaperaccess.com/full/271681.jpg'
        console.log('카테고리 입니당')
        break;
      }
      default:
        console.log('a');
    }
  }
}
</script>
