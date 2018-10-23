# base image
FROM node:10.8-alpine

# working directory
WORKDIR /app

# set up volumes
VOLUME ["/app/data"]

# copy dependency lists
COPY package.json package-lock.json ./

# install dependencies
RUN npm install

# copy source files
COPY . ./

# build static assets
RUN npm run build

# add environment variables
ENV HOST=0.0.0.0
ENV PORT=80

# start application
CMD [ "npm", "start" ]
