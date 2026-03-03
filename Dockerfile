# Dockerfile ultra-rápido: solo servimos la carpeta dist ya construida
FROM nginx:stable-alpine

# Copiamos la carpeta dist local (ya generada en mi entorno) directamente a nginx 
# Así tu servidor NO tiene que descargar node_modules ni ocupar espacio en el build
COPY dist /usr/share/nginx/html

# Copiamos la configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
