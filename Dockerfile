#################
## Build stage ##
#################
FROM node:12-alpine as builder

# Correct timezone
ENV TZ 'Europe/Kiev'

# dev, stg, prod
ARG mode

# Set the work directory
RUN mkdir -p /app
WORKDIR /app

# Add our package.json and install before adding our application files
COPY package.json ./
COPY package-lock.json ./

# Install all dependencies
RUN npm install
# Convert dependencies to Ivy-compatible
RUN ./node_modules/.bin/ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points

# Copy application files
COPY . .

# Build
RUN npm run build:$mode

# Copy entry file
COPY pm2-main.json ./dist


#################
### Run stage ###
#################
FROM node:12-alpine

# Set the work directory
RUN mkdir -p /app
WORKDIR /app

# Copy dist from previous stage
COPY --from=builder /app/dist ./dist

# Install pm2 so we can run our application
RUN npm install -g pm2

EXPOSE 3000

CMD ["pm2-runtime", "dist/pm2-main.json"]
