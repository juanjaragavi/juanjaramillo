FROM node
WORKDIR /app
ENV PORT 8080
ENV HOST 0.0.0.0
COPY . .
COPY package*.json ./
RUN npm install --only=production
RUN npm run build
CMD npm start