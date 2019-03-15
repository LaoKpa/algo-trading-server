import { Sequelize } from 'sequelize-typescript'

import UserExchanges from './models/userexchanges'


const env = process.env.NODE_ENV || 'development'
const config = require('./config.json')[env]


// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
//   })
//   .forEach(file => {
//     const model = sequelize['import'](path.join(__dirname, file))
//     db[model.name] = model
//   })

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db)
//   }
// })



export const init = () => {
  console.log('init database')

  const sequelize = new Sequelize(config)
  sequelize.addModels([UserExchanges])
  // sequelize.import('./models/userexchanges')

  return sequelize
}