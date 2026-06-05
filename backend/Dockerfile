FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN npm install

# Copy source code
COPY src ./src

# Expose port (default from .env or 3000)
EXPOSE 3000

# Use non‑root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Start the server
CMD ["npm", "start"]
