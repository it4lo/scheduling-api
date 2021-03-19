describe('Appointment funcntional tests', () => {
    it('Should return a Appointment with mambers', async () => {
        const { body, status } = await global.testRequest.get('/appointment');
        expect(status).toBe(200);
        expect(body).toEqual([{ nome: "Italo" }]);
    });
});