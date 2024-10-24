<template >
    <nav class="navbar">
      <div class="container">
        <div class="logo">Tu Tienda</div>
        <div class="menu-toggle" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ul :class="['nav-links', { 'active': isMenuOpen }]">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Carrito</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script >
  export default {
    name: 'Navbar',
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #fff;
    padding: 10px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  
  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .bar {
    height: 3px;
    width: 25px;
    background-color: #333;
    margin: 3px 0;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    margin: 0 15px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: #007bff;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }
  
    .nav-links {
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      display: none;
    }
  
    .nav-links.active {
      display: flex;
    }
  
    .nav-links li {
      margin: 10px 0;
      text-align: center;
    }
  }
  </style>
  