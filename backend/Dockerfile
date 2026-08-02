FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose API port
EXPOSE 3000

# Start server using tsx
CMD ["npm", "run", "dev"]
