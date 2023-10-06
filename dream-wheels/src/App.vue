<template>
  <div>
    <Navbar />
    <Header />
    <Promotion />
    <!-- <MoreInformation /> -->
    <InventoryVue/>
    <About />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import MoreInformation from './components/MoreInformation.vue';
import Promotion from './components/Promotion.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue'
import InventoryVue from './components/Inventory.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    MoreInformation,
    Promotion,
    Footer,
    About,
    InventoryVue
  },
};
</script>

<style>
/* src/assets/css/app.css */
@import '~@fortawesome/fontawesome-free/css/all.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>