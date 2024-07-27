# Use the official Node.js image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if you use TypeScript or other build steps)
RUN npm run build

# Expose the port the app will run on
EXPOSE 4000

# Define the command to run the application
CMD ["node", "dist/server.js"]
