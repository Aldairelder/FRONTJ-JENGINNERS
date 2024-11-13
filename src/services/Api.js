import axios from 'axios';

axios.get('http://localhost:8080/api/productos')
    .then(response => {
        // Reemplaza las URLs de las imágenes agregando el prefijo adecuado
        const productosConImagenes = response.data.map(producto => {
            // Ajusta la URL de la imagen con el prefijo correcto
            producto.imagen = `http://localhost:8080/images/${producto.imagen}`;
            return producto;
        });

        console.log("Datos obtenidos:", productosConImagenes);
        // Aquí puedes hacer algo más con los productos, como almacenarlos en el estado o pasarlos a un componente.
    })
    .catch(error => {
        console.error("Hubo un error:", error);
    });
