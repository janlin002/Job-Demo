.PHONY: build
build-war:
	-rm eb.war
	-docker image rm -f sunny-bank
	docker build -t sunny-bank .
	CON=$$(docker run -td sunny-bank cat) && \
		docker cp $$CON:/opt/jboss/wildfly/standalone/deployments/eb.war ./eb.war && \
		docker rm -f $$CON