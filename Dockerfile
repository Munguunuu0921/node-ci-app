# Албан ёсны Node.js image-ээс эхэлнэ
FROM node:18

# Ажиллах санг тохируулах
WORKDIR /app

# package.json хуулах
COPY package*.json ./

# Хамаарлууд суулгах
RUN npm install

# Үлдсэн бүх файлуудыг хуулах
COPY . .

# App ажиллах портыг нээх
EXPOSE 3001

# App-г ажиллуулах command
CMD ["npm", "start"]
