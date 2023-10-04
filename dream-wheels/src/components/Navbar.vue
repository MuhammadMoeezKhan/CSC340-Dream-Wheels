<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <!-- Brand Logo -->
        <a class="navbar-brand" href="/">
          <img src="@/assets/images/logo.png" alt="Dream Wheels Logo" class="logo" />
          Dream Wheels
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="toggleInventory">Inventory</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Inventory Component (Conditional Rendering) -->
    <div v-if="showInventory">
      <Inventory />
    </div>
  </div>
</template>

<script>
import Inventory from '../pages/Inventory.vue'

export default {
  name: 'Navbar',
  components: {
    Inventory, // Register the Inventory component
  },
  data() {
    return {
      showInventory: false,
    };
  },
  methods: {
    toggleInventory() { // Renamed the method to toggleInventory
      this.showInventory = !this.showInventory; // Toggle the value
    },
  },
};
</script>

<style scoped>
/* Custom Styles */
.logo {
  height: 40px; /* Adjust the logo height as needed */
  margin-right: 10px; /* Add spacing between the logo and text */
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-toggler {
  border: 1px solid #fff; /* Customize the mobile menu button */
}

.nav-link {
  color: #fff; /* Customize link color */
  margin: 0 10px; /* Add spacing between navigation links */
}

.nav-link:hover {
  text-decoration: underline; /* Add underline on hover */
}
</style>
