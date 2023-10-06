<template>
  <footer class="bg-dark text-light py-5">
    <div class="container">
      <div class="row">
        <!-- Contact Information -->
        <div class="col-md-4">
          <h4>Contact Us</h4>
          <p>
            Dream Wheels Showroom<br />
            408 South Locust Street<br />
            Greencastle, IN 46135<br />
            Phone: (123) 456-7890<br />
            Email: mkhan_2024@depauw.edu <br>
            Email: hanantariq_2026@depauw.edu
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4">
          <h4>Quick Links</h4>
          <ul class="list-unstyled">
            <li><a href="https://www.rolls-roycemotorcars.com/en_US/home.html">Main Website</a></li>
            <li><a href="https://www.rolls-roycemotorcars.com/en_US/showroom/spectre.html">Inventory</a></li>
            <li><a href="https://www.linkedin.com/company/rolls-royce-motor-cars">Contact</a></li>
          </ul>
        </div>

        <!-- Social Media Links -->
        <div class="col-md-4">
          <h4>Connect with Us</h4>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/rollsroycemotorcars/" class="text-light">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://twitter.com/RollsRoyce?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="text-light">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.instagram.com/rollsroycecars/?hl=en" class="text-light">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Custom Styles */
footer {
  font-size: 14px;
  background-color: #000;
  color: #fff;
  padding: 40px 0;
}

h4 {
  font-weight: bold;
  color: #fff;
}

p {
  margin-bottom: 0;
}

ul.list-unstyled {
  padding-left: 0;
}

ul.list-unstyled li {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
}

a {
  text-decoration: none;
  color: #bbb;
}

a:hover {
  color: #fff;
}

i {
  font-size: 24px;
}
</style>
