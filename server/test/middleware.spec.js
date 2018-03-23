import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const request = chai.request(app);
const { should } = chai;
should();

describe('Test all GET routes in middleware', () => {
  describe('/GET route middleware', () => {
    it('should return all business with status code 200', (done) => {
      request
        .get('/api/v1/businesses')
        .end((req, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('allBusinesses');
          res.body.allBusinesses.should.be.an('array');
        });
      done();
    });
  });

  describe('/GET route', () => {
    it('should return all business in specification with status code 200', (done) => {
      request
        .get('/api/v1/businesses?location=island')
        .end((req, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('business');
          res.body.business.should.be.an('array');
        });
      done();
    });

    it('should not return any business in a wrong specification with status code 404', (done) => {
      request
        .get('/api/v1/businesses?location=ondo')
        .end((req, res) => {
          res.should.have.status(404);
          res.body.should.have.property('message');
          res.body.message.should.be.equal('No businesses found at your specification');
        });
      done();
    });
  });

  describe('/GET route', () => {
    it('should return all business in specification with status code 200', (done) => {
      request
        .get('/api/v1/businesses?category=repair')
        .end((req, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('business');
          res.body.business.should.be.an('array');
        });
      done();
    });

    it('should not return any business in a wrong specification with status code 404', (done) => {
      request
        .get('/api/v1/businesses?category=ilaje')
        .end((req, res) => {
          res.should.have.status(404);
          res.body.should.have.property('message');
          res.body.message.should.be.equal('No businesses found at your specification');
        });
      done();
    });
  });
});
