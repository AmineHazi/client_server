const express = require('express');
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

const db = require('./models');

const bookRouter = require('./routes/book');
app.use("/book", bookRouter);

db.sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log("Server listening on port 5000...");
    });
});