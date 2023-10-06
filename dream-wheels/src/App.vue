<template>
  <div>
    <Navbar />
    <Header />
    <Promotion />
    <!-- <MoreInformation /> -->
    <Inventory :cars="carsList" />
    <About />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import Promotion from './components/Promotion.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue'
import Inventory from './components/Inventory.vue';

import db from '../firebase/init.js'
import { col, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { onSnapshot, collection } from 'firebase/firestore'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Promotion,
    Footer,
    About,
    Inventory
  },
  data() {
    return {
      carsList: []
    };
  },
  mounted() {
    onSnapshot(collection(db, 'cars'), (querySnapshot) => {
      const carsArray = [];
      querySnapshot.forEach((doc) => {
        const car = {
          id: doc.id,
          name: doc.data().name,
          image: doc.data().image,
          description: doc.data().description,
          price: doc.data().price,
          link: doc.data().link
        };
        carsArray.push(car);
      });
      this.carsList = carsArray;
    });
  },
  data() {
    return {
      carsList: []
    };
  },
  mounted() {
    onSnapshot(collection(db, 'cars'), (querySnapshot) => {
      const carsArray = [];
      querySnapshot.forEach((doc) => {
        const car = {
          id: doc.id,
          name: doc.data().name,
          image: doc.data().image,
          description: doc.data().description,
          price: doc.data().price,
          link: doc.data().link
        };
        carsArray.push(car);
      });
      this.carsList = carsArray;
    });
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