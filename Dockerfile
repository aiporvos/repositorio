# Etapa de construcción
FROM node:20-alpine AS build

WORKDIR /app

# Borramos caché de npm anterior y aseguramos un entorno limpio
RUN npm cache clean --force

# Copiamos solo los archivos de dependencias
COPY package*.json ./

# Instalamos usando ci (Clean Install) para mayor consistencia en builds de Docker
# o npm install con banderas de seguridad si ci falla
RUN npm install --legacy-peer-deps

# Copiamos el resto de los archivos
COPY . .

# Compilamos la aplicación 
# (el comando build ya corre tsc y vite build)
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine

# Copiamos solo los archivos compilados resultantes
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos la configuración de Nginx para SPAs
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
