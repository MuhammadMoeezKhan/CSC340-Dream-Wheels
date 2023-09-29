<template>
    <div class="car-card">
      <img :src="image" :alt="name" class="car-image" />
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
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }
  
  .car-card:hover {
    transform: translateY(-5px);
  }
  
  .car-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .car-details {
    margin-top: 16px;
  }
  
  .car-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .car-description {
    font-size: 1.2rem;
    margin-bottom: 8px;
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
  