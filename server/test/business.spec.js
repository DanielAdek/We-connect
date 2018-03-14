import app from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import expect from 'chai';
import assert from 'chai';

chai.use(chaiHttp);
const request = chai.request(app);
const should = chai.should();

describe('/Test all routes on business', () => {
    describe.only('/PUT route create business', () => {
        it('should update a business and return 200 status code', (done) => {
            request
                .put('/api/v1/business/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql('business profile succesfully updated')
                    done();
                });
        });

        it('should not update business and return 404 status code', (done) => {
            request
                .put('/api/v1/business/90')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.equal('404 business not found');
                    done();
                });
        })
    })

    describe.only('/DELETE route destroy business', () => {
        it('should delete a business and return 200 status code', (done) => {
            request
                .delete('/api/v1/business/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.eql('successfully deleted')
                    done();
                });
        });

        it('should return 404 page not found and 404 status code', (done) => {
            request
                .delete('/api/v1/business/90')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        })
    })
})