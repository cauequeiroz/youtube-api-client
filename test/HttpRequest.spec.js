import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import fetch from 'node-fetch';
import HttpRequest from '../src/HttpRequest';

/*  Initial setup
----------------------------------------------------------------------------------------- */

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = fetch;

/*  Tests :)
----------------------------------------------------------------------------------------- */

describe('HttpRequest', () => {

  describe('Smoke Tests', () => {

    it('should use HttpRequest as a static class', () => {
      expect(HttpRequest).to.exist;
    });

    it('should have a method `to`', () => {
      expect(HttpRequest.to).to.exist;
    });

  });

  describe('request', () => {

    let stubedFetch;
    let promise;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    it('should call the fetch function', () => {
      HttpRequest.to();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the fetch function with the right url', () => {
      HttpRequest.to('http://foo.bar/');
      expect(stubedFetch).to.have.been.calledWith('http://foo.bar/');
    });

    it('should return a json from Promise', () => {
      const expectedResult = {
        foo: 'bar'
      };

      promise.resolves({ json: () => expectedResult });

      const request = HttpRequest.to('http://foo.bar/');
      expect(request.resolveValue).to.be.eql({ foo: 'bar' });
    })
  });

});
