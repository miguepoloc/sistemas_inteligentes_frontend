# Establecer la imagen base
FROM node:16-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y yarn.lock al directorio de trabajo
COPY package.json yarn.lock ./

# Instalar las dependencias del proyecto
RUN yarn install --frozen-lockfile

# Copiar el resto del código de la aplicación al directorio de trabajo
COPY . .

# Construir la aplicación para producción
RUN yarn build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start"]
