import { app } from "./app.js";
import { connectDB } from "./db/database.js";

connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Ok Server listening on ${"http://localhost:4000"}`)
})