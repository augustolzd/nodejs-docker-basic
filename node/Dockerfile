# Pulling from Node 8 LTS
FROM node:8

ENV TIMEZONE America/Mexico_City

# Make the /src directory
RUN mkdir /src

# Install PM2 globally
RUN npm install pm2@latest -g

# Working directory
WORKDIR /src

# Add the package.json
ADD package.json /src/package.json

# Update the main system
RUN apt-get update -y

# Change the Timezone
RUN cp /usr/share/zoneinfo/Mexico/General /etc/localtime && echo America/Mexico_City > /etc/timezone

# Update the PM2
RUN pm2 update

# Install node dependencies
RUN npm install

# Expose the port 8000
EXPOSE 8000

# Run the app with forever
CMD pm2-docker process.json
