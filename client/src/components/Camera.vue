<template>
  <v-container fluid fill-height class="ma-0 pa-0">
    <WebCam
      v-if="img == null"
      ref="webcam"
      :device-id="deviceId"
      width="100%"
      @started="onStarted"
      @stopped="onStopped"
      @error="onError"
      @cameras="onCameras"
      @camera-change="onCameraChange"
    />
    <img :src="img" v-else alt="" />
    <v-btn color="secondary" @click="onCapture"> Capture </v-btn>
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
    onCameraChange() {},
  },
};
</script>

<style lang="scss" scoped></style>
