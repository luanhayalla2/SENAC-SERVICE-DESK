FROM nginx:alpine

# Copy the frontend files to the Nginx html directory
COPY public/ /usr/share/nginx/html/public/
COPY src/ /usr/share/nginx/html/src/

# Assuming there is an index.html at the root of frontend or inside src
# For a standard static structure, if index.html is in src:
# COPY src/index.html /usr/share/nginx/html/index.html
# Or adjust according to your final entrypoint location.
COPY src/index.html /usr/share/nginx/html/index.html 

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
