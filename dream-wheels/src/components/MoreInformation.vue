<template>
    <!-- Information Section -->
    <section class="info-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1>Welcome to Dream Wheels</h1>
            <p>Your Destination for Premium Vehicles</p>
            <router-link to="/inventory" class="btn btn-primary">View Inventory</router-link>
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
  </template>
  
  <script>
  export default {
    name: 'MoreInformation'
  }
  </script>
  
  <style scoped>
  .info-section {
    background-color: #f8f8f8;
    padding: 100px 0;
    color: #333;
    text-align: center;
  }
  
  .info-section h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .info-section p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .info-section .btn-primary {
    font-size: 1.2rem;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
  }
  
  .info-section .btn-primary:hover {
    background-color: #007bff;
  }
  
  .info-section img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }
  </style>
  