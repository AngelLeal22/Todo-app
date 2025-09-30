const PAGE_URL = process.env.NODE_ENV === "production"
//aqui va un link de render
? "https://todo-app-sxnl.onrender.com"
: "http://localhost:3000";

const MONGO_URI = process.env.NODE_ENV === "production"
//aqui va un link de render
? process.env.MONGO_URI_PROD
: process.env.MONGO_URI_TEST


module.exports = {PAGE_URL, MONGO_URI}