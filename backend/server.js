import dotenv from "dotenv";
import app from "./app.js";
import { dbconnect } from "./utils/dbconnect.js";

dotenv.config();

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
const PORT = process.env.PORT || 3000;

async function main() {
    try {
        await dbconnect.$connect();
        console.log("Database connected");
        const server = app.listen(PORT, () => {
            console.log("Server is running");
            console.log(`Server running on port http://localhost:${PORT}`);
        });

        // HANDLE GRACEFUL SHUTDOWN
        const signals = ["SIGTERM", "SIGINT"];
        for (const signal of signals) {
            process.on(signal, async () => {
                console.log(`Received ${signal}, shutting down...`);
                await dbconnect.$disconnect();
                server.close();
                process.exit(0);
            });
        }
    } catch (error) {
        console.error(error);
        await dbconnect.$disconnect();
        process.exit(1);
    }
}

main();
