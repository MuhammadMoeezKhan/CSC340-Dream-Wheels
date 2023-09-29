<template>
    <header>
    <!-- Video Section -->
    <section class="video-section">
      <video autoplay muted loop id="header-video">
        <source
          src="@/assets/videos/Rolls-Royce-Ghost.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section> 
  
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  /* Custom Styles */
  header {
    position: relative;
    overflow: hidden;
  }
  
  .video-section {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  
  #header-video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  
  .container {
    position: relative;
    z-index: 1;
  }
  
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  </style>
  