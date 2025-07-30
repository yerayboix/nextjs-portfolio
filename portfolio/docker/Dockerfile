FROM node:22-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos de package para optimizar la cache de dependencias
COPY ../package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos de la aplicación
COPY ../ .

# Compila la aplicación para producción
RUN npm run build

# Expone el puerto de la aplicación
EXPOSE 3000

CMD ["npm", "run", "start"]