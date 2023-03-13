FROM node:lts-slim

RUN apt install bash

USER node

RUN mkdir -p /home/node/backend/core

WORKDIR /home/node/backend/core

CMD [".docker/start.sh"]
