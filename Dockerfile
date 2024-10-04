# Build Stage
FROM node:20.17.0-alpine3.20@sha256:2d07db07a2df6830718ae2a47db6fedce6745f5bcd174c398f2acdda90a11c03 AS umbrel-httpsizer-builder

# Create app directory
WORKDIR /app

# Copy 'package-lock.json' and 'package.json'
COPY package-lock.json package.json ./

# Install dependencies
RUN npm install

# Copy project files and folders to the current working directory (i.e. '/app')
COPY . .

# Final image
FROM node:20.17.0-alpine3.20@sha256:2d07db07a2df6830718ae2a47db6fedce6745f5bcd174c398f2acdda90a11c03 AS umbrel-httpsizer

#Add required dependencies for entrypoint
RUN apk add --no-cache bash openssl su-exec

#Add yq for yaml processing
COPY --from=mikefarah/yq:4.44.3@sha256:5b3d851bf28b04ef902fee86305f4dd7e063919c1cafedab2042adb16221c025 /usr/bin/yq /usr/bin/yq

# Copy built code from build stage to '/app' directory
COPY --from=umbrel-httpsizer-builder /app /app

# Change directory to '/app'
WORKDIR /app

CMD [ "node", "./bin/www" ]