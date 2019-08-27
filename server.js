const express = require('express');

const app = express();

app.use(express.json({ extended: true }));

app.get('/', (req, res) => {
  res.json('api running');
});

// define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/contact', require('./routes/api/contact'));
app.use('/api/transfer', require('./routes/api/transfer'));

const PORT = process.env.PORT || 1080;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
