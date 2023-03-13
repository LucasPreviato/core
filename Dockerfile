FROM node:lts-alpine

RUN apt install bash -y

RUN mkdir -p /home/node/backend/core

WORKDIR /home/node/backend/core

CMD ["/.docker/start.sh"]
