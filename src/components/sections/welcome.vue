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
    },
  },
};
</script>

<style scoped>
/* Estilo general */
.welcome {
  background-image: url('/back2.jpg'); /* Asegúrate de que sea la ruta correcta */
  background-size: cover;

  background-repeat: no-repeat;
  padding: 50px 20px;
  text-align: center;
  color: white;
  height: 85vh; /* Para que ocupe toda la altura de la pantalla */
}

.welcome-content {
  max-width: 800px;
  margin: 100px auto; /* Mayor margen superior */
  background: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
  padding: 40px; /* Más padding para darle más altura */
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
  padding: 12px 24px;
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

/* Estilo para dispositivos medianos */
@media (max-width: 768px) {
  .welcome {
    padding: 60px 20px;
  }

  .welcome-content {
    margin: 100px auto 0; /* Más margen superior */
    padding: 30px;
  }

  h1 {
    font-size: 30px;
  }

  p {
    font-size: 16px;
  }

  button {
    font-size: 14px;
    padding: 10px 20px;
  }
}

/* Estilo para dispositivos pequeños */
@media (max-width: 480px) {
  .welcome {
    padding: 40px 15px;
  }

  .welcome-content {
    margin: 120px auto 0; /* Más margen superior */
    padding: 30px; /* Aumentar padding para mayor altura */
  }

  h1 {
    font-size: 28px; /* Aumentar tamaño en móvil */
  }

  p {
    font-size: 16px; /* Aumentar tamaño de texto */
  }

  button {
    font-size: 14px; /* Aumentar tamaño del botón */
    padding: 12px 24px;
  }
}
</style>
