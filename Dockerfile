# 使用多阶段构建
# 第一阶段：构建阶段
FROM node:18-alpine AS build

WORKDIR /app

# 复制 package.json 和 package-lock.json 并安装依赖
COPY package*.json ./
RUN npm install

# 复制源代码并构建
COPY . .
RUN npm run build

# 第二阶段：生产阶段
FROM node:18-alpine

WORKDIR /app

# 复制构建阶段的构建结果到生产阶段
COPY --from=build /app/.next /app/.next
COPY --from=build /app/package*.json ./

# 安装仅生产环境所需的依赖
RUN npm install --production

# 启动应用
CMD ["npm", "start"]
