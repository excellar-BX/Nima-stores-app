import bcrypt from 'bcryptjs'

const users = [
    {
        name: "admin",
        email: " excellenceay33@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: "User",
        email: " excellenceay49@gmail.com",
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users 