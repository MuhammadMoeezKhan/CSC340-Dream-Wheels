<template>
    <div id="contact" class="container">
      <h2 class="contact-heading">Join Our Newsletter</h2>
      <form @submit.prevent="addUser" class="mb-4">
        <div class="input-group">
          <div class="input-wrapper">
            <input class="form-control" v-model="name" placeholder="Enter Name..." type="text">
          </div>
          <div class="input-wrapper">
            <input class="form-control" v-model="email" placeholder="Enter Email..." type="text">
          </div>
          <div class="button-wrapper">
            <button type="submit" class="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <style scoped>
  .contact-heading {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 40px;
  }
  
  .text-center {
    font-size: 1.65rem;
    margin-bottom: 20px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column; /* Vertical alignment */
    align-items: center; /* Center horizontally */
  }
  
  .input-wrapper,
  .button-wrapper {
    margin-bottom: 10px; /* Adjust as needed for spacing */
    width: 100%;
    display: flex;
  }
  
  .input-wrapper {
    flex-grow: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  .button-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: center; /* Center button horizontally */
  }
  
  .btn-primary {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .btn-primary:hover {
    background-color: #007bff;
  }
  
  .btn {
    margin-top: 10px;
    font-size: 1.15rem;
    cursor: pointer;
    border-radius: 25px;
  }
  </style>  