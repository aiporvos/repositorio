# Etapa de construcción
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos solo los archivos de dependencias para aprovechar la caché de capas de Docker
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos del proyecto
COPY . .

# Compilamos la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine

# Copiamos los archivos estáticos generados al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos nuestra configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
