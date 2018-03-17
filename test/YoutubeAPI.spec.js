import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import fetch from 'node-fetch';
import YoutubeAPI from '../src/YoutubeAPI';

/*  Initial setup
----------------------------------------------------------------------------------------- */

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = fetch;

/*  Tests :)
----------------------------------------------------------------------------------------- */

describe('YoutubeAPI', () => {

  describe('Smoke Tests', () => {

    let youtube;

    beforeEach(() => {
      youtube = new YoutubeAPI({ apiKey: 'foo' });
    });

    it('should create an instance of YoutubeAPI', () => {
      expect(youtube).to.be.an.instanceof(YoutubeAPI);
    });

    it('should recieve an `apiKey`', () => {
      expect(youtube.apiKey).to.be.equal('foo');
    });

    it('should throw an error when there is no `apiKey`', () => {
      expect(() => new YoutubeAPI()).to.throw('You need to pass an `apiKey` to the class constructor.');
    });

    it('should have a method `getSearchResultsFor`', () => {
      expect(youtube.getSearchResultsFor).to.exist;
    });

  });

  describe('getSearchResultsFor', () => {

    let stubedFetch;
    let promise;
    let youtube;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.returnsPromise();
      youtube = new YoutubeAPI({ apiKey: 'foo' });
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    it('should call the fetch function', () => {
      youtube.getSearchResultsFor();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the fetch function with the right url', () => {
      youtube.getSearchResultsFor('Paramore');
      expect(stubedFetch).to.have.been.calledWith('https://www.googleapis.com/youtube/v3/search?part=snippet&key=foo&q=Paramore');
    });

  });

});
