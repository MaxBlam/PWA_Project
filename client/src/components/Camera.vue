<template>
  <v-container fluid>
    a
    <WebCam
      ref="webcam"
      :device-id="deviceId"
      width="100%"
      @started="onStarted"
      @stopped="onStopped"
      @error="onError"
      @cameras="onCameras"
      @camera-change="onCameraChange"
    />
  </v-container>
</template>

<script>
import { WebCam } from 'vue-web-cam';
export default {
  components: {
    WebCam,
  },
  data: () => ({
    deviceId: '0',
  }),
  methods: {
    onStarted() {},
    onStopped() {},
    onError() {},
    onCameras() {},
    onCameraChange() {},
  },
};
</script>

<style lang="scss" scoped></style>
