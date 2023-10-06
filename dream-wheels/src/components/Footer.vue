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
              Email: mkhan_2024@depauw.edu
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
                <a href="#" class="text-light">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-light">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-light">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Copyright -->
        <div class="row mt-4">
          <div class="col text-center">
            <p>&copy; 2023 Dream Wheels. All rights reserved.</p>
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
  .footer {
    font-size: 14px;
  }
  
  .footer h4 {
    font-weight: bold;
  }
  
  .footer p {
    margin-bottom: 0;
  }
  
  .footer ul.list-inline {
    padding-left: 0;
  }
  
  .footer ul.list-inline li {
    display: inline-block;
    margin-right: 15px;
    font-size: 18px;
  }
  
  .footer a {
    text-decoration: none;
  }
  
  .footer a:hover {
    color: #fff;
  }
  
  .footer i {
    font-size: 24px;
  }
  </style>
  