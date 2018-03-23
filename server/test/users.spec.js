import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const request = chai.request(app);
const { should } = chai;
should();

describe('Test all users APIs', () => {
  describe('/POST route', () => {
    const new_user = {
      username: 'john',
      email: 'johndoe@example.com',
      password: 'chairate'
    };
    it('should return successfull with status 200', (done) => {
      request
        .post('/api/v1/auth/signup')
        .send(new_user)
        .end((err, res) => {
          // expect(res.status()).to.be.equal(200);
          res.should.have.status(201);
          res.body.should.be.an('object');
          res.body.should.have.property('user');
          res.body.message.should.be.equal(`${new_user.username} is successfully created as a new user`);
          done();
        });
    });

    it('should return bad request with 400 status code', (done) => {
      request
        .post('/api/v1/auth/signup')
        .send({})
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
          res.body.message.should.be.equal('Input field cannot be empty');
          res.body.should.have.property('err');
          res.body.err.should.be.eql(true);
          done();
        });
    });
  });

  describe('/POST route login user', () => {
    it('should return welcome with username and 200 status code', (done) => {
      request
        .post('/api/v1/auth/login')
        .send({
          email: 'johndoe@example.com',
          password: 'chairate'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
          res.body.message.should.be.eql('Welcome john!');
          done();
        });
    });

    it('should return please sign up with 401 status code', (done) => {
      const notUser = {
        email: 'wrong',
        password: '419@gmail.com'
      };
      request
        .post('/api/v1/auth/login')
        .send(notUser)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('string');
          res.body.should.be.eql('please sign up');
        });
      done();
    });
  });

  describe('/POST route create user business', () => {
    const newUser = {
      phone: '08798797087',
      businessname: 'codehub',
      location: 'newYork',
      category: 'programming',
    };
    it('should create business and return 201 status code', (done) => {
      request
        .post('/api/v1/business')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
          res.body.message.should.be.eql('New Business Created Successfully');
          done();
        });
    });

    it('should not create business but return 401 status code', (done) => {
      request
        .post('/api/v1/business')
        .send({})
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('err');
          res.body.message.should.be.eql('All (*) fields cannot be empty');
          res.body.err.should.be.eql(true);
        });
      done();
    });
  });
});
