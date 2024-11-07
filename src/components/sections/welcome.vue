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
      this.$router.push({ name: 'Products' });
    }
  }
};
</script>

<style scoped>
.welcome {
  background-image: url('../../assets/img/backgroiund.jpg'); /* Ruta de la imagen de fondo */
  background-size: cover;
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  padding: 50px 20px;
  text-align: center;
  color: white; /* Cambia el color del texto para mayor visibilidad */
}

.welcome-content {
  max-width: 800px;
  margin: 200px auto 0;
  background: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para mejor contraste */
  padding: 20px;
  border-radius: 10px;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
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
