<template>
    <header>
      <!-- Video Section -->
      <section class="video-section">
        <video autoplay muted loop id="header-video">
          <source
            src="https://www.youtube.com/watch?v=_JP0fl3S1uU&pp=ygUgcm9sbHMgcm95Y2Ugd2hpdGUgdmlkZW8gYWVzdGhlaWM%3D"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
  
      <!-- Information Section -->
      <section class="info-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Welcome to Dream Wheels</h1>
              <p>Your Destination for Premium Vehicles</p>
              <a href="/inventory" class="btn btn-primary">View Inventory</a>
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/images/logo.png" 
                alt="Rolls-Royce"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
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
  
  .info-section {
    background-color: #f8f8f8; /* Background color for the information section */
    padding: 100px 0;
    color: #333; /* Text color for the information section */
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
  