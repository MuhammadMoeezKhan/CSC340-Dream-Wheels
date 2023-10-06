<template>
  <div>
    <h1 class="inventory-title">Car Catalog</h1>
    <div class="car-catalog">
      <div class="car-card-container">
        <div v-for="car in cars" :key="car.id" class="card mb-3 shadow">
          <CarCard
            :name=car.name
            :image=car.image
            :description=car.description
            :price=car.price
            :link=car.link
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarCard from './CarCard.vue';

export default {
  name: 'Inventory',
  components: {
    CarCard,
  },
  props: {
    cars: Array,
  },
};
</script>

<style>
.inventory-title {
  margin-top: 35px;
}

.car-catalog {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.car-card-container {
  display: flex;
  flex-direction: row; /* Align cards horizontally */
  gap: 16px;
  justify-content: center;
}

/* Optional styling for CarCard components */
.card {
  border: 2px solid #ccc;
  padding: 10px;
}
</style>
