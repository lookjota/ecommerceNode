import Redis from "ioredis"
import dotenv from "dotenv"

dotenv.config()

export const client = new Redis(process.env.UPSTASH_REDIS_URL);
client.on("connect", () => {
  console.log("Connected to Redis successfully!");
});

client.on("error", (err) => {
  console.error("Redis connection error:", err);
});
// key-value store
// await client.set('foo', 'bar');


