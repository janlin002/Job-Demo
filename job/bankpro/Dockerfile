# TODO: Add nginx
# # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# FROM node:12.16.3 as build-stage
# WORKDIR /app
# COPY package*.json /app/
# COPY yarn.lock /app/
# RUN yarn
# COPY ./ /app/
# RUN yarn build-stg
# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# COPY --from=build-stage /app/dist/ /usr/share/nginx/html
# # Copy the default nginx.conf
# COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

FROM node:12.16.3 as frontend
WORKDIR /frontend
COPY package*.json /frontend/
COPY yarn.lock /frontend/
RUN yarn
COPY ./ /frontend/
RUN yarn build:sunnybank-test

FROM maven:3.6.3-jdk-11 as backend
WORKDIR /backend
COPY demo .
RUN mkdir -p src/main/webapp
COPY --from=frontend /frontend/dist src/main/webapp
RUN mvn -T 1C clean verify

FROM jboss/wildfly
COPY --from=backend /backend/target/sunnyBank-0.0.1-SNAPSHOT.war /opt/jboss/wildfly/standalone/deployments/eb.war
RUN /opt/jboss/wildfly/bin/add-user.sh admin welcome1 --silent
CMD ["/opt/jboss/wildfly/bin/standalone.sh", "-b", "0.0.0.0", "-bmanagement", "0.0.0.0"]
