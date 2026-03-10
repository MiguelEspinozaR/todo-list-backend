# Usamos una versión ligera de Node.js sobre Linux Alpine
FROM node:20-alpine

# Creamos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de configuración de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto donde correrá Express
EXPOSE 3000

# Comando para desarrollo (usando nodemon)
CMD ["npm", "run", "dev"]