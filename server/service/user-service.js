const UserModel = require('../modules/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error('Пользователь уже существует')
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()
        const user = await UserModel.create({email, password: hashPassword, activationLink})
        await mailService.sendActivationmail(email, activationLink)
    }
}

module.exports = new UserService();