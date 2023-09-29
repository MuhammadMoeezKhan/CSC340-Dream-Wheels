<template>
    <div>
      <h1>Car Catalog</h1>
      <CarCard
        name="Car Name"
        image="/path-to-image.jpg"
        description="Car Description"
        price="50000"
        link="/car-details"
      />
    </div>
  </template>
  
  <script>
  import CarCard from '../components/CarCard.vue'
  
  export default {
    name: 'CarCatalog',
    components: {
      CarCard, // Register the CarCard component
    },
  };
  </script>
  