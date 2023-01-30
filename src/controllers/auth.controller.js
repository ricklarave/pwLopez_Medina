import user from '../models/User'

export const singUp = async(req, res) => {
    const {username, email, password, roles} = req.body;
    
    const userFound = User.find({email})

    const newUser = new User({
        username,
        email,
        password: User.encryptPassword(password)
    })
    
    await newUser.save();

    res.json('signup')
}

export const singin = async(req, res) => {
    res.json('signin')
}



