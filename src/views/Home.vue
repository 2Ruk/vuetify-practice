<template>
  <v-card
      max-width="400"
      class="mx-auto"
  >
    <MainHeader/>

    <v-container>
      <SelectMenu/>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MainHeader from "@/components/main/main-header.vue";
import SelectMenu from "@/components/main/content/select-menu.vue";

@Component({
  components: {
    SelectMenu,
    MainHeader
  },
})
export default class Home extends Vue {
  items = [
    {
      color: '#952175',
      src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
      title: '수동',
      artist: '수동으로 카테고리에서 선택합니다!',
    },
  ]


}
</script>
