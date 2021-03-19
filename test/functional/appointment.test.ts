import supertest from 'supertest';

describe('Appointment funcntional tests', () => {
    it('Should return a Appointment with mambers', async () => {
        const { body, status } = await supertest(app).get('/appointment');
        expect(status).toBe(200);
        
    });
});