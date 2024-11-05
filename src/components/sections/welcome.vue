<template>
   <section class="welcome">
     <div class="welcome-content">
       <h1>¡Bienvenido a Tu Tienda!</h1>
       <p>
         Descubre una amplia variedad de productos de alta calidad y disfruta de la mejor experiencia de compra en línea.
       </p>
       <button @click="exploreProducts">Explorar Productos</button>
     </div>
   </section>
 </template>
 
 <script>
 export default {
   methods: {
     exploreProducts() {
       this.$router.push({ name: 'Products' }); // Cambia 'Products' por el nombre de tu ruta de productos
     }
   }
 };
 </script>
 
 <style scoped>
 .welcome {
   background-color: #f8f9fa;
   padding: 50px 20px;
   text-align: center;
 }
 
 .welcome-content {
   max-width: 800px;
   margin:200px auto 0;
 }
 
 h1 {
   font-size: 36px;
   color: #333;
   margin-bottom: 20px;
 }
 
 p {
   font-size: 18px;
   color: #555;
   margin-bottom: 30px;
 }
 
 button {
   padding: 10px 20px;
   font-size: 16px;
   color: #fff;
   background-color: #007bff;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: background-color 0.3s ease;
 }
 
 button:hover {
   background-color: #0056b3;
 }
 </style>
 