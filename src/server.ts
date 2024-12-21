import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import { IncomingMessage, Server, ServerResponse } from 'http';

let server: Server<typeof IncomingMessage, typeof ServerResponse>;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

process.on('unhandledRejection', () => {
    console.log('unhandleRejection is deleted, shutting down....');
    if (Server) {
        server.close(() => {
            process.exit(1);
        });
    }
});

process.on('uncaughtException', () => {
    console.log('uncaughtException is deleted, shutting down....');
    process.exit(1);
});

main();