# Use the official Node.js image as the base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy all codde
COPY . .

# Install dependencies
RUN npm install


# Expose the port your app listens on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "index.js"]