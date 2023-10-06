<template>
  <div id="inventory">
  <h1 class="inventory-title">Car Catalog</h1>
  <div class="car-catalog">
    <div class="car-card-container">
      <CarCard
        name="Ghost"
        image="https://i.pinimg.com/originals/8d/1f/80/8d1f807192f03bc85b03d74893e69c09.png"
        description="Sleek, modern, and luxurious."
        price="24000"
        link="https://www.rolls-roycemotorcars.com/en_US/showroom/ghost.html"
      />
      <CarCard
        name="Phantom"
        image="https://edgecast-img.yahoo.net/mysterio/api/CAD240D2760C9B09B47A04E680552A2FFC5FE86565F2EA780AA863605CCAEB02/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC80RRC041A021001.jpg"
        description="Latest, advacned tech, and fast."
        price="32000"
        link="https://www.rolls-roycemotorcars.com/en_US/showroom/phantom.html"
      />
      <CarCard
        name="Dawn"
        image="https://c4.wallpaperflare.com/wallpaper/32/90/506/2017-rolls-royce-dawn-wallpaper-preview.jpg"
        description="Minimalistic, low-body, and shiny."
        price="47000"
        link="https://www.rolls-roycemotorcars.com/en_US/showroom/spectre.html"
      />
      <CarCard
        name="Wraith"
        image="https://vehicle-images.driveway.com/t_dw_iso/108865/64f2398291a43a9962927a64-ISOLATED.jpg"
        description="Swift, light, and spacious."
        price="71000"
        link="https://www.rolls-roycemotorcars.com/en_US/showroom/cullinan.html"
      />
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
};
</script>

<style>

.inventory-title{
  margin-top:35px;
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
  /* Additional styling for CarCard components */
}

/* Optional styling for CarCard components */
.CarCard {
  /* Add any specific styles for your CarCard components here */
  border: 2px solid #ccc;
  padding: 10px;
}
</style>