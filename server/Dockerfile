FROM node:20-slim
WORKDIR /opt/sahiden
COPY . .
RUN npm install
ENV PORT=3000
CMD ["npm", "run", "dev"]