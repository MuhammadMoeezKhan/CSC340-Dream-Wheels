<template>
    <header>
      <!-- Introduction Section -->
      <section class="intro-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Welcome to Dream Wheels</h1>
              <p>Your Destination for Premium Vehicles</p>
              <a href="/inventory" class="btn btn-primary">View Inventory</a>
            </div>
            <div class="col-md-6">
              <img
                src= "../assets/images/logo.png"
                alt="Featured Vehicle"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Promotional Content -->
      <section class="promo-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Exclusive Offers</h2>
              <p>Explore our latest promotions and discounts.</p>
              <a href="/offers" class="btn btn-secondary">View Offers</a>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Brief Description -->
      <section class="description-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>About Dream Wheels</h2>
              <p>
                Dream Wheels is your premier destination for luxury and
                high-performance vehicles. With a commitment to quality and
                excellence, we offer a curated selection of the finest
                automobiles.
              </p>
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
  .intro-section {
    background-color: #f8f8f8;
    padding: 100px 0;
  }
  
  .intro-section h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .intro-section p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  .promo-section {
    background-color: #fff;
    padding: 80px 0;
  }
  
  .promo-section h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .description-section {
    background-color: #f8f8f8;
    padding: 80px 0;
  }
  
  .description-section h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .description-section p {
    font-size: 18px;
  }
  </style>
  