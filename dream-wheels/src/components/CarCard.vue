<template>
    <div class="car-card">
      <div class="car-image">
        <img :src="image" :alt="name" />
      </div>
      <div class="car-details">
        <h2 class="car-name">{{ name }}</h2>
        <p class="car-description">{{ description }}</p>
        <p class="car-price">${{ price }}</p>
        <a :href="link" class="btn btn-primary">Learn More</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarCard',
    props: {
      name: String,
      image: String,
      description: String,
      price: Number,
      link: String
    }
  }
  </script>
  
  <style scoped>
  .car-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
    background-color: #fff;
    max-width: 300px; /* Adjust the card's maximum width as needed */
    margin: 20px;
  }
  
  .car-image img {
    max-width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .car-details {
    text-align: center;
    padding: 16px;
  }
  
  .car-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .car-description {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
  
  .car-price {
    font-size: 1.4rem;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 8px;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>
  