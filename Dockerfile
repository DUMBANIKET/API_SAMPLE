# Use an official Node.js runtime as the base image
FROM node:10-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Make port 3000 available to the world outside the container
EXPOSE 3000

# Define the command to run the application
CMD [ "node", "index.js" ]
~                                 
