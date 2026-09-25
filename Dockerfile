
# Build Stage
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies based on package-lock.json
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

# Generate Prisma Client & Build Typescript code
RUN npx prisma generate
COPY . . 
RUN npm run build 

# Production Stage
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Install production dependencies only
COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./
RUN npm ci --omit=dev && npx prisma generate
 
COPY --from=builder /app/dist ./dist 

USER node
CMD ["node","dist/main.js"]