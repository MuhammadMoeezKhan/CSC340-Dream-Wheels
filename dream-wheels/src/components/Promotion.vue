<template>
    <div class="component-container">
      <div class="header">
        <h1>Rolls-Royce Boat Tail</h1>
        <p class="sub-header">A Symphony of Bespoke Luxury</p>
      </div>
      <a href="https://www.rolls-roycemotorcars.com/en_US/home.html" target="_blank">
      <div class="image-container">
        <div class="image-wrapper">
          <img alt="Rolls Royce Boattail" src="../assets/images/Rolls-Royce-Boat-Tail.jpg">
        </div>
        <div class="overlay-text">
          <p class="elegant-paragraph">Indulge in the extraordinary allure of the Rolls-Royce Boat Tail, where opulence meets exclusivity. With only three in existence, this automotive masterpiece is a testament to unparalleled craftsmanship and timeless elegance. Own a piece of history that transcends the boundaries of luxury – where every detail is meticulously tailored to redefine automotive sophistication. #RollsRoyce #BoatTail #LuxuryRedefined</p>
        </div>
      </div>
    </a>
    </div>
  
</template>

<script>
export default {
  name: 'Promotion'
}
</script>

<style scoped>
/* Container styling */
.component-container {
  padding: 40px 400px;
  text-align: center;
}

/* Header styling */
.header {
  margin-bottom: 30px;
}

.header h1 {
  font-family: 'Your Elegant Font', sans-serif; /* Replace 'Your Elegant Font' with the desired font */
  font-size: 40px;
  margin: 0;
}

.sub-header {
  font-size: 18px;
  color: #777;
}

/* Image container styling */
.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 20px;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Image styling */
.image-container img {
  width: auto;
  max-width: 100%;
  max-height: 100%;
  display: block;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.image-container:hover img {
  transform: scale(1.1);
}

/* Description overlay styling */
.overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}

/* Elegant paragraph styling */
.overlay-text .elegant-paragraph {
  font-family: 'Your Elegant Font', sans-serif; /* Replace 'Your Elegant Font' with the desired font */
  font-size: 12px;
}
</style>
