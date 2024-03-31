const app = require('./app');
const PORT = 3001;
const sequelize = require('./config/database');
const User = require('./models/user');

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced successfully');
}).catch(err => {
  console.error('Error syncing database:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});