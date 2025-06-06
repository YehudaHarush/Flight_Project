# Use official Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port React dev server uses
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
