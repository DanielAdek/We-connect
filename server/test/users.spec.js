import app from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import expect from 'chai';
import assert from 'chai';

chai.use(chaiHttp);
const request = chai.request(app);
const should = chai.should();

describe('Test all users APIs', ()=> {
    describe('/POST route', ()=> {
        const new_user = {
            username:'john',
            email:'johndoe@example.com',
            password: 'chairate'
        };
        it('should return successfull with status 200', (done)=> {
            request
                .post('/api/v1/auth/signup')
                .send(new_user)
                .end((err, res)=>{
                    // expect(res.status()).to.be.equal(200);
                    res.should.have.status(201);
                    res.body.should.be.an('object');
                    res.body.should.have.property('user');
                    res.body.user.should.be.equal(`${username} is successfully created as a new user`);
                    done();
                });
        });

        it('should return bad request with 400 status code', (done)=>{
            request
                .post('/api/v1/auth/signup')
                .send()
                .end((err, res)=> {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('Input field cannot be empty');
                    res.body.should.have.property('err')
                    res.body.err.should.be.eql(true);
                    done()
                })
        })
    });
});