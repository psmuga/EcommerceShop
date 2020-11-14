import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Piotr',
        email: 'piotr@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Marcin',
        email: 'marcin@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;
