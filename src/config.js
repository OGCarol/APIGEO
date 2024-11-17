import {config}from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST || 'bjpb5oxiaomrjjlczank-mysql.services.clever-cloud.com'
export const BD_DATABASE=process.env.BD_DATABASE|| 'bjpb5oxiaomrjjlczank'
export const DB_USER=process.env.DB_USER|| 'ukjoxdzv2ppy1qma'
export const DB_PASSWORD=process.env.DB_PASSWORD||'pFs2hbWFGhWwEysLKKWp'
export const DB_PORT=process.env.DB_PORT|| 3306
export const PORT= process.env.PORT|| 3000