<template>
  <v-container fluid fill-height class="ma-0 pa-0">
    <v-container
      fill-height
      fluid
      v-if="img == null"
      class="d-flex justify-center"
    >
      <Camera />
      <v-btn color="secondary" @click="onCapture"> Capture </v-btn>
    </v-container>
    <v-container fluid v-else class="d-flex justify-center">
      <v-img :src="img" alt="" />
      <v-btn color="secondary" @click="uploadPicture"> Upload </v-btn>
      <v-btn color="secondary" @click="img = null"> Try again </v-btn>
    </v-container>
  </v-container>
</template>

<script>
import Camera from '@/components/Camera.vue';
export default {
  components: {
    Camera,
  },
};
</script>

<style lang="scss" scoped></style>
