const request = require('supertest');
const TOKEN = '';
const GORESTPATH = `https://gorest.co.in/public/v2/users?access-token=${TOKEN}`;

describe('API Tests with SuperTest', () => {
    let userId;

    it('should create a test user for deletion', async () => {
        const newUser = {
            name: 'Test User for Deletion',
            email: `testuser${Date.now()}@example.com`,
            gender: 'male',
            status: 'active'
        };

        const createResponse = await request(GORESTPATH)
            .post('')
            .send(newUser);

        console.log('res status:', createResponse.status);
        console.log('res body:', createResponse.body);

        expect(createResponse.status).toBe(201);

        if (createResponse.body && createResponse.body.id) {
            userId = createResponse.body.id;
            console.log('user id: ', userId);
        } else {
            console.error('net');
        }
    });

    it('should delete a user by ID', async () => {
        if (userId) {
            const deleteResponse = await request('https://gorest.co.in/public/v2')
                .delete(`/users/${userId}`)
                .set('Authorization', AUTH_TOKEN);

            console.log('del res status:', deleteResponse.status);
            console.log('del res body:', deleteResponse.body);

            expect(deleteResponse.status).toBe(204);
        } else {
            console.log('no user');
        }
    });

});
