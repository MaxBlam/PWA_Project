<template>
  <v-container fluid fill-height class="ma-0 pa-0">
    <v-container fill-height fluid v-if="img == null" class="d-flex justify-center">
      <WebCam
        ref="webcam"
        :device-id="deviceId"
        @started="onStarted"
        @stopped="onStopped"
        @error="onError"
        @cameras="onCameras"
        @camera-change="onCameraChange"
      />
      <v-btn color="secondary" @click="onCapture"> Capture </v-btn>
    </v-container>
    <v-container fluid v-else class="d-flex justify-center">
      <img :src="img" alt="" />
      <v-btn color="secondary" @click="uploadPicture"> Upload </v-btn>
      <v-btn color="secondary" @click="img = null"> Try again </v-btn>
    </v-container>
  </v-container>
</template>

<script>
import { WebCam } from 'vue-web-cam';
export default {
  components: {
    WebCam,
  },
  data: () => ({
    deviceId: null,
    camera: null,
    devices: [],
    img: null,
  }),
  computed: {
    device: function () {
      return this.devices.find(n => n.deviceId === this.deviceId);
    },
  },
  watch: {
    camera: function (id) {
      this.deviceId = id;
    },
    devices: function () {
      // Once we have a list select the first one
      const [first, ...tail] = this.devices;
      console.log(...tail);
      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    },
  },
  methods: {
    onStarted() {},
    onStopped() {},
    onError() {},
    onCapture() {
      this.img = this.$refs.webcam.capture();
    },
    onCameras(cameras) {
      this.devices = cameras;
      console.log('On Cameras Event', cameras);
    },
    uploadPicture(){

    },
    onCameraChange() {},
  },
};
</script>

<style lang="scss" scoped></style>
