import { app } from './app.js';
import { database } from './database.js';

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});

database.raw('SHOW TABLES').then((result) => {
    console.log(result[1][0].name);
});