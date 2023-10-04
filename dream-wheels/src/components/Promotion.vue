<!-- Template -->
<template>
  <div class="component-container">
    <!-- Image Container -->
    <div class="image-container">
      <!-- Overlay Text -->
      <div class="overlay-text" v-if="!showVideo">
        <h1 class="great-vibes-heading">Rolls-Royce Boat Tail</h1>
        <p class="sub-header">A Symphony of Bespoke Luxury</p>
        <button class="discover-button" @click="playVideo">Discover</button>
      </div>
      <!-- Video Container -->
      <div class="video-overlay" v-if="showVideo">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qcEmHLKX2_w"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <button class="close-video-button" @click="closeVideo">Close Video</button>
      </div>
      <!-- Image -->
      <div class="image-wrapper">
        <img alt="Rolls Royce Boattail" src="../assets/images/Rolls-Royce-Boat-Tail.jpg">
      </div>
    </div>
  </div>
</template>

<script>
// Script
export default {
  data() {
    return {
      showVideo: false,
    };
  },
  methods: {
    playVideo() {
      this.showVideo = true;
    },
    closeVideo() {
      this.showVideo = false;
    },
  },
};
</script>

<style scoped>
  /* Styling */
  /* Font Import */
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

  /* Container Styles */
  .component-container {
    text-align: center;
    position: relative;
  }

  /* Image Container Styles */
  .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Image Styles */
  .image-container img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }

  .image-container:hover img {
    transform: scale(1.1);
  }

  /* Overlay Text Styles */
  .overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    z-index: 1; /* Ensure the overlay text is above the image */
  }

  /* Great Vibes Heading Styles */
  .great-vibes-heading {
    font-family: 'Great Vibes', cursive;
    font-size: 60px;
    margin: 0;
  }

  /* Sub-header Styles */
  .sub-header {
    font-size: 24px;
    color: #bfbfbf;
    margin-top: 10px;
  }

  /* Discover Button Styles */
  .discover-button {
    font-family: 'Your Elegant Font', sans-serif;
    background-color: #000;
    color: #fff;
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .discover-button:hover {
    background-color: #333;
  }

  /* Video Overlay Styles */
  .video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2; /* Ensure the video overlay is above the image and text */
  }

  /* Close Video Button Styles */
  .close-video-button {
    font-family: 'Your Elegant Font', sans-serif;
    background-color: #fff;
    color: #000;
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin-top: 20px;
  }

  .close-video-button:hover {
    background-color: #ddd;
  }

  /* Video Styles */
  iframe {
    width: 80%;
    height: 60vh;
    max-width: 800px;
    margin: 20px auto;
    display: block;
  }
</style>
