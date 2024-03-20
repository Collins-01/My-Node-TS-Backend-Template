import App from "./app";
import DB from "./database";
import * as dotenv from 'dotenv'

const bootstrap = async (includeDB: boolean) => {
    dotenv.config();

    const PORT = process.env.PORT || 5000;

    if (includeDB) {
        // logger.info("Starting server with Database connection.................");
        const db = new DB();
        await db.connect().then((_) => {
            console.log(`Database connected sucessfully`);
        });
        const app = new App().getApp();
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } else {
        // logger.info("Starting server without Database connection...............");
        const app = new App().getApp();
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    }
};

bootstrap(true);