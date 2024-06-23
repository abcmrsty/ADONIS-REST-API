'use strict'

const User = use('App/Models/User');
class UserController {
    async store({ request }){
        const { username, email, password } = request.all();
        console.log(email, password);
        const user = await User.create({
            email,
            password,
            username: email
        });
        return user;
    };
}

module.exports = UserController
