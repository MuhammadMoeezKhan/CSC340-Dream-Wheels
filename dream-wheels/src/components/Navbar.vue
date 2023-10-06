<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          Dream Wheels
        </a>

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

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" @click="scrollToComponent('home')">Home</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" @click="toggleInventory">Inventory</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="scrollToComponent('about')">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div v-if="showInventory">
      <Inventory />
    </div>
  </div>
</template>

<script>
import Inventory from '../pages/Inventory.vue';

export default {
  name: 'Navbar',
  components: {
    Inventory,
  },
  data() {
    return {
      showInventory: false,
    };
  },
  methods: {
    toggleInventory() {
      this.showInventory = !this.showInventory;
    },
    scrollToComponent(component) {
      // Scroll to the specified component
      const element = document.getElementById(component);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
/* Custom Styles */
.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-toggler {
  border: 1px solid #fff;
}

.nav-link {
  color: #fff;
  margin: 0 10px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
