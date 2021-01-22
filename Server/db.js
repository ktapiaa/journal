const Sequelize = require('sequelize');

//Option 1: Passing parameters separately
const sequelize = new Sequelize('journal-walkthrough', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function(){
    console.log('Connected to journal-walkthrough postgres database.');
},
function(err) {
    console.log(err);
}
);

module.exports = sequelize;
