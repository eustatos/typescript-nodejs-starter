import { describe, it } from 'mocha';
import { expect, should } from 'chai';
import * as request from 'supertest';
import * as app from './app';

describe('Create app', () => {
    it('Should be create app', () => {
        should().exist(app);
    });
    it('should be type of function', () => {
        expect(app).to.be.a('function');
    });
});

describe('Init config from dotenv', () => {
    it('should be determined EXPECT_DOTENV', () => {
        expect(process.env.EXPECT_DOTENV).to.equal('success');
    })
})

describe('GET /', () => {
    it('status response should be 200', (done) => {
        request(app)
        .get('/')
        .expect(200, done);
    })
})