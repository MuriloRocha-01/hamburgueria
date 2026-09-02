import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;

if (!baseURL) {
  console.warn(
    "⚠️ EXPO_PUBLIC_API_URL não definida no .env — configure o IP do back-end."
  );
}

export const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(`API Error Status: ${error.response.status} -`, error.response.data);
    } else if (error.request) {
      console.error('API Error Sem resposta do servidor. O Back-end está rodando? URL:', baseURL);
    } else {
      console.error('API  Erro ao configurar a requisição:', error.message);
    }

    return Promise.reject(error);
  }
);