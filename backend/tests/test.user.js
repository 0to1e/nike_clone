// backend/tests/user.test.js

import request from 'supertest';
import express from 'express';
import userRoute from '../routes/user.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use("/api/v1/user", userRoute);

describe('User API', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('should create a new user', async () => {
        const res = await request(app).post('/api/v1/user/register').send({
            first_name: 'John',
            last_name: 'Doe',
            user_name: 'johndoe',
            email: 'john.doe@example.com',
            password: 'Password@123'
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toBe('User created successfully');
    });

    it('should return 409 if username or email exists', async () => {
        await request(app).post('/api/v1/user/register').send({
            first_name: 'Jane',
            last_name: 'Doe',
            user_name: 'johndoe', // existing username
            email: 'jane.doe@example.com',
            password: 'Password@123'
        });
        const res = await request(app).post('/api/v1/user/register').send({
            first_name: 'Jane',
            last_name: 'Doe',
            user_name: 'johndoe',
            email: 'john.doe@example.com', // existing email
            password: 'Password@123'
        });
        expect(res.statusCode).toEqual(409);
        expect(res.body.message).toBe('Username or email already exists.');
    });
});
