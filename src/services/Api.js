import axios from 'axios';

const API_BASE_URL_PRODUCTOS = 'http://localhost:8080/api/productos'; // Base URL para la API de productos
const API_BASE_URL_CART = 'http://localhost:8080/api/cart'; // Base URL para la API del carrito
const IMAGE_BASE_URL = 'http://localhost:8080/images'; // Base URL para las imágenes

// Obtener todos los productos y ajustar las URLs de las imágenes
export const fetchProductos = async () => {
    try {
        const response = await axios.get(API_BASE_URL_PRODUCTOS);
        const productosConImagenes = response.data.map(producto => ({
            ...producto,
            imagen: `${IMAGE_BASE_URL}/${producto.imagen}`, // Ajusta la URL de la imagen
        }));
        return productosConImagenes;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
};

// Agregar un producto al carrito
export const addToCart = async (id, cantidad) => {
    try {
        const response = await axios.post(`${API_BASE_URL_CART}/add`, null, {
            params: { id, cantidad }, // Enviar los parámetros como query strings
        });
        return response.data; // Devuelve la respuesta con el carrito actualizado
    } catch (error) {
        console.error("Error al agregar el producto al carrito:", error);
        throw error;
    }
};

// Ver el carrito actual
export const viewCart = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL_CART}/view`);
        return response.data; // Devuelve el carrito completo
    } catch (error) {
        console.error("Error al obtener el carrito:", error);
        throw error;
    }
};

// Eliminar un producto del carrito
export const removeFromCart = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL_CART}/remove/${id}`);
        return response.data; // Devuelve el carrito actualizado
    } catch (error) {
        console.error("Error al eliminar el producto del carrito:", error);
        throw error;
    }
};

// Vaciar el carrito
export const clearCart = async () => {
    try {
        await axios.delete(`${API_BASE_URL_CART}/clear`);
        return; // No hay contenido en la respuesta (204 No Content)
    } catch (error) {
        console.error("Error al vaciar el carrito:", error);
        throw error;
    }
};
