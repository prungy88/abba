<<<<<<< HEAD
// 'use strict';
//
// require('./lib/test-env.js');
//
// const mongoose = require('mongoose');
// const request = require('superagent');
// const expect = require('chai').expect;
//
// const server = require('../server.js');
// const serverControl = require('./lib/server-control.js');
//
// const residenceMock = require('./lib/residence-mock.js');
// const cleanUpDatabase = require('./lib/clean-up-mock.js');
//
// mongoose.Promise = Promise;
//
// const url = `http://localhost:${process.env.PORT}`;
//
// describe('testing residence routes', function() {
//   before(done => serverControl.serverUp(server, done));
//   after(done => serverControl.serverDown(server, done));
//   describe('testing POST /api/profile/:id/residence', function() {
//     describe('with valid body', function() {
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });``
//       it('should return a token', (done) => {
//         request.post(`${url}/api/profile/:id/residence`)
//         .send({
//           dateBuilt: new Date(),
//           sqft: 300,
//           type: 'apartment',
//           street: '100 first street',
//           city: 'seattle',
//           state: 'WA',
//           zip: '12345',
//           address: '100 first street, seattle, WA 12345',
//         })
//         .end((err, res) => {
//           if (err) return done(err);
//           expect(res.status).to.equal(200);
//           expect(!!res.text).to.equal(true);
//           done();
//         });
//       });
//     }); //end of valid body
//
//     describe('with invalid body', function() {
//       it('should return a 400 bad request', (done) => {
//         request.post(`${url}/api/profile/:id/residence`)
//         .send('nope')
//         .set('Character-Type', 'application/json')
//         .end((err, res) => {
//           expect(res.status).to.equal(400);
//           done();
//         });
//       });
//     }); //end of invalid body
//
//     describe('with no body', function() {
//       it('should return a 400 bad request', (done) => {
//         request.post(`${url}/api/profile/:id/residence`)
//         .send()
//         .set('Character-Type', 'application/json')
//         .end((err, res) => {
//           expect(res.status).to.equal(400);
//           done();
//         });
//       });
//     }); //end of no body
//
//     describe('with duplicate address', function() {
//       before(done => residenceMock.call(this, done));
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });
//       it('should return a 409 error', (done) => {
//         request.post(`${url}/api/profile/:id/residence`)
//         .send({
//           dateBuilt: this.exampleResidence.dateBuilt,
//           sqft: this.exampleResidence.sqft,
//           type: this.exampleResidence.type,
//           street: this.exampleResidence.street,
//           city: this.exampleResidence.city,
//           state: this.exampleResidence.state,
//           zip: this.exampleResidence.zip,
//           address: this.exampleResidence.address,
//         })
//         .end((err, res) => {
//           expect(res.status).to.equal(409);
//           expect(res.text).to.equal('ConflictError');
//           done();
//         });
//       });
//     }); //end of duplicate email
//
//     describe('with no street', function(){
//       before(done => residenceMock.call(this, done));
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });
//       it ('should return a 400 error', (done) => {
//         request.post(`${url}/api/profile/:id/residence`)
//         .send({
//           dateBuilt: this.exampleResidence.dateBuilt,
//           sqft: this.exampleResidence.sqft,
//           type: this.exampleResidence.type,
//           city: this.exampleResidence.city,
//           state: this.exampleResidence.state,
//           zip: this.exampleResidence.zip,
//           address: this.exampleResidence.address,
//         })
//         .end((err, res) => {
//           expect(res.status).to.equal(400);
//           done();
//         });
//       });
//     }); //end of with no street
//
//     describe('with no type', function(){
//       before(done => residenceMock.call(this, done));
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });
//       it ('should return a 400 error', (done) => {
//         request.post(`${url}/api/profile/:id/residence`)
//         .send({
//           dateBuilt: this.exampleResidence.dateBuilt,
//           sqft: this.exampleResidence.sqft,
//           street: this.exampleResidence.street,
//           city: this.exampleResidence.city,
//           state: this.exampleResidence.state,
//           zip: this.exampleResidence.zip,
//           address: this.exampleResidence.address,
//         })
//         .end((err, res) => {
//           expect(res.status).to.equal(400);
//           done();
//         });
//       });
//     }); //end of with no type
//
//     describe('with no city', function(){
//       before(done => residenceMock.call(this, done));
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });
//       it ('should return a 400 error', (done) => {
//         request.post(`${url}/api/profile/:id/residence`)
//         .send({
//           dateBuilt: this.exampleResidence.dateBuilt,
//           sqft: this.exampleResidence.sqft,
//           type: this.exampleResidence.type,
//           street: this.exampleResidence.street,
//           state: this.exampleResidence.state,
//           zip: this.exampleResidence.zip,
//           address: this.exampleResidence.address,
//         })
//         .end((err, res) => {
//           expect(res.status).to.equal(400);
//           done();
//         });
//       });
//     }); //end of with no city
//
//     describe('with no state', function(){
//       before(done => residenceMock.call(this, done));
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });
//       it ('should return a 400 error', (done) => {
//         request.post(`${url}/api/profile/:id/residence`)
//         .send({
//           dateBuilt: this.exampleResidence.dateBuilt,
//           sqft: this.exampleResidence.sqft,
//           type: this.exampleResidence.type,
//           street: this.exampleResidence.street,
//           city: this.exampleResidence.city,
//           zip: this.exampleResidence.zip,
//           address: this.exampleResidence.address,
//         })
//         .end((err, res) => {
//           expect(res.status).to.equal(400);
//           done();
//         });
//       });
//     }); //end of with no state
//
//     describe('with no zip', function(){
//       before(done => residenceMock.call(this, done));
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });
//       it ('should return a 400 error', (done) => {
//         request.post(`${url}/api/profile/:id/residence`)
//         .send({
//           dateBuilt: this.exampleResidence.dateBuilt,
//           sqft: this.exampleResidence.sqft,
//           type: this.exampleResidence.type,
//           street: this.exampleResidence.street,
//           city: this.exampleResidence.city,
//           state: this.exampleResidence.state,
//           address: this.exampleResidence.address,
//         })
//         .end((err, res) => {
//           expect(res.status).to.equal(400);
//           done();
//         });
//       });
//     }); //end of with no zip
//
//     describe('with no sqft', function(){
//       before(done => residenceMock.call(this, done));
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });
//       it ('should return a 400 error', (done) => {
//         request.post(`${url}/api/profile/:id/residence`)
//         .send({
//           dateBuilt: this.exampleResidence.dateBuilt,
//           type: this.exampleResidence.type,
//           street: this.exampleResidence.street,
//           city: this.exampleResidence.city,
//           state: this.exampleResidence.state,
//           zip: this.exampleResidence.zip,
//           address: this.exampleResidence.address,
//         })
//         .end((err, res) => {
//           expect(res.status).to.equal(400);
//           done();
//         });
//       });
//     }); //end of with no sqft
//   }); //end of POST tests
//
//   describe('testing GET /api/profile/:id/residence/:id', function() {
//     //with valid password and auth?
//     describe('with valid ID and auth', function() {
//       before(done => residenceMock.call(this, done));
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });
//       it('should return a residence', (done) => {
//         request.get(`${url}/api/profile/:id/residence/:id`)
//         .end((err, res) => {
//           if (err) return done(err);
//           console.log('res.text is ', res.text);
//           expect(res.status).to.equal(200);
//           expect(!!res.text).to.equal(true);
//           done();
//         });
//       });
//     }); //end of with valid ID and auth
//     describe('with an invalid password and valid email', function() {
//       before(done => residenceMock.call(this, done));
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });
//       it('should return a 401 not authorized', (done) => {
//         request.get(`${url}/api/profile/:id/residence/:id`)
//         .auth(this.tempUser.email, 'wrongpass')
//         .end((err, res) => {
//           expect(res.status).to.equal(401);
//           done();
//         });
//       });
//     });//end of with invalid password and valid email
//     describe('with a valid password and invalid email', function() {
//       before(done => residenceMock.call(this,done));
//       after(done => {
//         cleanUpDatabase();
//         done();
//       });
//     });
//     it('should return a 401 bad request', (done) => {
//       request.get(`${url}/api/profile/:id/residence/:id`)
//       .auth('wrong@test.com', this.tempPassword)
//       .end((err, res) => {
//         expect(res.status).to.equal(401);
//         done();
//       });
//     });
//   }); //end of GET tests
// });
=======
'use strict';

require('./lib/test-env.js');

const mongoose = require('mongoose');
const request = require('superagent');
const expect = require('chai').expect;

const server = require('../server.js');
const serverControl = require('./lib/server-control.js');

const userMock = require('./lib/user-mock.js');
const profileMock = require('./lib/profile-mock.js');
const residenceMock = require('./lib/residence-mock.js');
const cleanUpDatabase = require('./lib/clean-up-mock.js');

mongoose.Promise = Promise;

const url = `http://localhost:${process.env.PORT}`;

describe('testing residence routes', function() {
  before(done => serverControl.serverUp(server, done));
  after(done => serverControl.serverDown(server, done));
  afterEach(done => cleanUpDatabase(done));
  describe('testing POST /api/profile/:profileid/residence', function() {
    describe('with valid body', function() {
      before(done => profileMock.call(this, done));
      it('should return a residence', (done) => {
        console.log('this.tempToken', this.tempToken);
        console.log('this.tempProfile!!!!!!', this.tempProfile);

        request.post(`${url}/api/profile/${this.tempProfile._id}/residence`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .send({
          dateBuilt: new Date(),
          sqft: '300',
          type: 'apartment',
          street: '100 first street',
          city: 'seattle',
          state: 'WA',
          zip: '12345',
          address: '100 first street, seattle, WA 12345',
        })
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          done();
        });
      });
    }); //end of valid body

    describe('with invalid body', function() {
      before(done => profileMock.call(this, done));

      it('should return a 400 bad request', (done) => {
        request.post(`${url}/api/profile/${this.tempProfile._id}/residence`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .send('nope')
        .set('Character-Type', 'application/json')
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
      });
    }); //end of invalid body

    describe('with no body', function() {
      before(done => profileMock.call(this, done));

      it('should return a 400 bad request', (done) => {
        request.post(`${url}/api/profile/${this.tempProfile._id}/residence`)
        .send()
        .set('Character-Type', 'application/json')
        .set({Authorization: `Bearer ${this.tempToken}`})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
      });
    }); //end of no body

    describe('with duplicate address', function() {
      // before(done => profileMock.call(this, done));
      before(done => residenceMock.call(this, done));

      it('should return a 409 error', (done) => {
        request.post(`${url}/api/profile/${this.tempProfile._id}/residence`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .send({
          dateBuilt: this.tempResidence.dateBuilt,
          sqft: this.tempResidence.sqft,
          type: this.tempResidence.type,
          street: this.tempResidence.street,
          city: this.tempResidence.city,
          state: this.tempResidence.state,
          zip: this.tempResidence.zip,
          address: this.tempResidence.address,
        })
        .end((err, res) => {
          expect(res.status).to.equal(409);
          expect(res.text).to.equal('ConflictError');
          done();
        });
      });
    }); //end of duplicate email

    describe('with no street', function(){
      before(done => residenceMock.call(this, done));

      it ('should return a 400 error', (done) => {
        request.post(`${url}/api/profile/${this.tempProfile._id}/residence`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .send({
          dateBuilt: this.tempResidence.dateBuilt,
          sqft: this.tempResidence.sqft,
          type: this.tempResidence.type,
          city: this.tempResidence.city,
          state: this.tempResidence.state,
          zip: this.tempResidence.zip,
          address: this.tempResidence.address,
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
      });
    }); //end of with no street

    describe('with no type', function(){
      before(done => residenceMock.call(this, done));

      it ('should return a 400 error', (done) => {
        request.post(`${url}/api/profile/${this.tempProfile._id}/residence`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .send({
          dateBuilt: this.tempResidence.dateBuilt,
          sqft: this.tempResidence.sqft,
          street: this.tempResidence.street,
          city: this.tempResidence.city,
          state: this.tempResidence.state,
          zip: this.tempResidence.zip,
          address: this.tempResidence.address,
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
      });
    }); //end of with no type

    describe('with no city', function(){
      before(done => residenceMock.call(this, done));

      it ('should return a 400 error', (done) => {
        request.post(`${url}/api/profile/${this.tempProfile._id}/residence`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .send({
          dateBuilt: this.tempResidence.dateBuilt,
          sqft: this.tempResidence.sqft,
          type: this.tempResidence.type,
          street: this.tempResidence.street,
          state: this.tempResidence.state,
          zip: this.tempResidence.zip,
          address: this.tempResidence.address,
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
      });
    }); //end of with no city

    describe('with no state', function(){
      before(done => residenceMock.call(this, done));

      it ('should return a 400 error', (done) => {
        request.post(`${url}/api/profile/${this.tempProfile._id}/residence`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .send({
          dateBuilt: this.tempResidence.dateBuilt,
          sqft: this.tempResidence.sqft,
          type: this.tempResidence.type,
          street: this.tempResidence.street,
          city: this.tempResidence.city,
          zip: this.tempResidence.zip,
          address: this.tempResidence.address,
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
      });
    }); //end of with no state

    describe('with no zip', function(){
      before(done => residenceMock.call(this, done));

      it ('should return a 400 error', (done) => {
        request.post(`${url}/api/profile/${this.tempProfile._id}/residence`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .send({
          dateBuilt: this.tempResidence.dateBuilt,
          sqft: this.tempResidence.sqft,
          type: this.tempResidence.type,
          street: this.tempResidence.street,
          city: this.tempResidence.city,
          state: this.tempResidence.state,
          address: this.tempResidence.address,
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
      });
    }); //end of with no zip

    describe('with no sqft', function(){
      before(done => residenceMock.call(this, done));

      it ('should return a 400 error', (done) => {
        request.post(`${url}/api/profile/${this.tempProfile._id}/residence`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .send({
          dateBuilt: this.tempResidence.dateBuilt,
          type: this.tempResidence.type,
          street: this.tempResidence.street,
          city: this.tempResidence.city,
          state: this.tempResidence.state,
          zip: this.tempResidence.zip,
          address: this.tempResidence.address,
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
      });
    }); //end of with no sqft
  }); //end of POST tests

  describe('testing GET /api/profile/:id/residence/:id', function() {
    //with valid password and auth?
    describe('with valid ID', function() {
      before(done => residenceMock.call(this, done));
      it('should return a residenceID', (done) => {
        request.get(`${url}/api/profile/${this.tempProfile._id}/residence/${this.tempResidence._id}`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          let date = new Date(res.body.dateBuilt).toString();
          expect(date).to.not.equal('Invalid Date');
          expect(res.body.sqft).to.equal(this.tempResidence.sqft);
          expect(res.body.type).to.equal(this.tempResidence.type);
          expect(res.body.street).to.equal(this.tempResidence.street);
          expect(res.body.city).to.equal(this.tempResidence.city);
          expect(res.body.state).to.equal(this.tempResidence.state);
          expect(res.body.zip).to.equal(this.tempResidence.zip);
          expect(res.body.address).to.equal(this.tempResidence.address);
          done();
        });
      });
    }); //end of GET with valid residenceID

    describe('with an invalid residenceID', function() {
      before(done => residenceMock.call(this, done));
      it('should return a 400 not found', (done) => {
        request.get(`${url}/api/profile/${this.tempProfile._id}/residence/:wrongid`)
        .set({Authorization: `Bearer ${this.tempToken}`})
        .end((err, res) => {
          //may be a false positive. Error handling in residence get router sends 400 error if anything goes wrong with Residence.findById
          expect(res.status).to.equal(400);
          done();
        });
      });
    });//end of GET with invalid residenceID

    describe('with valid token and id', function(){
      before(done => residenceMock.call(this, done));
      it('should return a residence', done => {
        request.get(`${url}/api/profile/${this.tempProfile._id}/residence/${this.tempResidence._id}`)
        .set({
          Authorization: `Bearer ${this.tempToken}`,
        })
        .end((err, res) => {
          if (err) return done(err);
          let date = new Date(res.body.dateBuilt).toString();
          expect(date).to.not.equal('Invalid Date');
          expect(res.body.sqft).to.equal(this.tempResidence.sqft);
          expect(res.body.type).to.equal(this.tempResidence.type);
          expect(res.body.street).to.equal(this.tempResidence.street);
          expect(res.body.city).to.equal(this.tempResidence.city);
          expect(res.body.state).to.equal(this.tempResidence.state);
          expect(res.body.zip).to.equal(this.tempResidence.zip);
          expect(res.body.address).to.equal(this.tempResidence.address);
          expect(res.body.userID).to.equal(this.tempUser._id.toString());

          expect(res.status).to.equal(200);
          done();
        });
      });
    });

    describe('with invalid token', function(){
      before(done => residenceMock.call(this, done));
      it('should return a 401 with bad token', done => {
        request.get(`${url}/api/profile/${this.tempProfile._id}/residence/${this.tempResidence._id}`)
        .set({
          Authorization: 'Bearer ',
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.text).to.equal('UnauthorizedError');
          done();
        });
      });
    });

    describe('with invalid Bearer auth', function(){
      before(done => residenceMock.call(this, done));
      it('should return a 401 error with invalid Bearer', done => {
        request.get(`${url}/api/profile/${this.tempProfile._id}/residence/${this.tempResidence._id}`)
        .set({ Authorization: 'bad request' })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.text).to.equal('UnauthorizedError');
          done();
        });
      });
    });

    describe('with no Authorization header', function(){
      before(done => residenceMock.call(this, done));
      it('should return a 400 error with no Authorization header', done => {
        request.get(`${url}/api/profile/${this.tempProfile._id}/residence/${this.tempResidence._id}`)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.text).to.equal('BadRequestError');
          done();
        });
      });
    });

    describe('with invalid id', function(){
      before(done => residenceMock.call(this, done));
      it('should return a 400 error with invalid ID', done => {
        request.get(`${url}/api/profile/${this.tempProfile._id}/residence/invalid`)
        .set({
          Authorization: `Bearer ${this.tempToken}`,
        })
        .end((err, res) => {
          //were actually getting a 404
          expect(res.status).to.equal(400);
          expect(res.text).to.equal('BadRequestError');
          done();
        });
      });
    });
  }); //end of GET tests

  // describe('testing DELETE /api/profile/:id/residence/:id', function(){
  //
  //   describe('with valid token and ids', function(){
  //     before(done => residenceMock.call(this, done));
  //
  //     it('should respond with status 204', done => {
  //       request.delete(`${url}/api/profile/${this.tempProfile._id}/residence/${this.tempResidence._id}`)
  //       .set({Authorization: `Bearer ${this.tempToken}`})
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res.status).to.equal(204);
  //         done();
  //       });
  //     });
  //   });
  //   describe('with invalid token', function(){
  //     before(done => residenceMock.call(this, done));
  //     it('should respond with status 401', done => {
  //       request.delete(`${url}/api/profile/${this.tempProfile._id}/pic/${this.tempResidence._id}`)
  //       .set({Authorization: `Bearer ${this.tempToken}bad`})
  //       .end((err, res) => {
  //         expect(res.status).to.equal(401);
  //         expect(res.text).to.equal('UnauthorizedError');
  //         done();
  //       });
  //     });
  //   });
  //
  //   describe('no auth header', function(){
  //     before(done => residenceMock.call(this, done));
  //     it('should respond with status 400', done => {
  //       request.delete(`${url}/api/profile/${this.tempProfile._id}/pic/${this.tempResidence._id}`)
  //       .end((err, res) => {
  //         expect(res.status).to.equal(400);
  //         expect(res.text).to.equal('BadRequestError');
  //         done();
  //       });
  //     });
  //   });
  //
  //   describe('with no bearer auth', function(){
  //     before(done => residenceMock.call(this, done));
  //     it('should respond with status 400', done => {
  //       request.delete(`${url}/api/profile/${this.tempProfile._id}/pic/${this.tempResidence._id}`)
  //       .set({Authorization: 'lul this is bad}'})
  //       .end((err, res) => {
  //         expect(res.status).to.equal(400);
  //         expect(res.text).to.equal('BadRequestError');
  //         done();
  //       });
  //     });
  //   });
  //
  //   describe('with invalid profileID', function(){
  //     before(done => residenceMock.call(this, done));
  //     it('should respond with status 400', done => {
  //       request.delete(`${url}/api/profile/${this.tempProfile._id}bad/pic/${this.tempResidence._id}`)
  //       .set({Authorization: `Bearer ${this.tempToken}`})
  //       .end((err, res) => {
  //         expect(res.status).to.equal(400);
  //         expect(res.text).to.equal('BadRequestError');
  //         done();
  //       });
  //     });
  //   });
  //
  //   describe('with invalid residenceID', function(){
  //     before(done => residenceMock.call(this, done));
  //     it('should respond with status 404', done => {
  //       request.delete(`${url}/api/profile/${this.tempProfile._id}/pic/${this.tempResidence._id}bad`)
  //       .set({Authorization: `Bearer ${this.tempToken}`})
  //       .end((err, res) => {
  //         expect(res.status).to.equal(404);
  //         expect(res.text).to.equal('NotFoundError');
  //         done();
  //       });
  //     });
  //   });
  // });
});
>>>>>>> f8ca0d2100ccc72ddaebec1e2fbe2f664fae4de5
