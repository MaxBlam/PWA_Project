<template>
  <v-container fill-height fluid class="d-flex align-start">
    <v-container
      v-if="img == null"
      class="d-flex justify-start flex-column align-center"
    >
      <v-easy-camera v-model="img" fullscreen="true"></v-easy-camera>
      <v-btn color="secondary" @click="onCapture" class="ma-3"> Capture </v-btn>
    </v-container>
    <v-container v-else class="d-flex justify-start flex-column align-center">
      <v-img :src="img" alt="" class="camera" contain></v-img>
      <v-btn color="secondary" @click="uploadPicture" class="ma-2">
        Upload
      </v-btn>
      <v-btn color="secondary" @click="restartCam" class="ma-2">
        Try again
      </v-btn>
    </v-container>
  </v-container>
</template>

<script>
import EasyCamera from 'easy-vue-camera';

//inside your vue options api
export default {
  components: {
    'v-easy-camera': EasyCamera,
  },
  data: () => ({
    img: null,
  }),
};
</script>
