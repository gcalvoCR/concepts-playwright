FROM mcr.microsoft.com/playwright:v1.10.0-focal

COPY [".", "/usr/src/"]

WORKDIR /usr/src/

RUN npm install

CMD ["npm", "test"]
