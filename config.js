module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://127.0.0.1:27017/task-manager',
    SECRET_TOKEN: 'secretKey1234##4321#!'
}