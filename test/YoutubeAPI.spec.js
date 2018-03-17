import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import fetch from 'node-fetch';

import YoutubeAPI from '../src/YoutubeAPI';
import rawJSON from '../mock/paramore';

/*  Initial setup
----------------------------------------------------------------------------------------- */

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = fetch;

/*  Tests :)
----------------------------------------------------------------------------------------- */

describe('YoutubeAPI', () => {

  let youtube;

  beforeEach(() => {
    youtube = new YoutubeAPI({ apiKey: 'foo' });
  });

  describe('Smoke Tests', () => {

    it('should create an instance of YoutubeAPI', () => {
      expect(youtube).to.be.an.instanceof(YoutubeAPI);
    });

    it('should recieve an `apiKey`', () => {
      expect(youtube.apiKey).to.be.equal('foo');
    });

    it('should throw an error when there is no `apiKey`', () => {
      expect(() => new YoutubeAPI()).to.throw("Cannot read property 'apiKey' of undefined");
    });

    it('should have a method `getSearchResultsFor`', () => {
      expect(youtube.getSearchResultsFor).to.exist;
    });

  });

  describe('getSearchResultsFor', () => {

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
      youtube.getSearchResultsFor();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the fetch function with the right url', () => {
      youtube.getSearchResultsFor('Paramore');
      expect(stubedFetch).to.have.been.calledWith('https://www.googleapis.com/youtube/v3/search?part=snippet&key=foo&q=Paramore');
    });

    it('should return a simple json from the raw json', () => {
      promise.resolves({ json: () => rawJSON });

      const finalJSON = {
        "videos": [
          {
            "id": "cW5ueE2vUm0",
            "title": "Paramore: Rose-Colored Boy [OFFICIAL VIDEO]",
            "description": "We're doing it LIVE! Get tickets to The After Laughter Summer Tour with Foster The People at http://paramore.net/tour Paramore's music video for 'Rose-Colored Boy' from the album, After Laughter...",
            "thumbnail": "https://i.ytimg.com/vi/cW5ueE2vUm0/hqdefault.jpg"
          },
          {
            "id": "AEB6ibtdPZc",
            "title": "Paramore: Hard Times [OFFICIAL VIDEO]",
            "description": "We're doing it LIVE! Get tickets to The After Laughter Summer Tour with Foster The People at http://paramore.net/tour Paramore's music video for 'Hard Times' from the album, After Laughter...",
            "thumbnail": "https://i.ytimg.com/vi/AEB6ibtdPZc/hqdefault.jpg"
          }
        ]
      };

      const request = youtube.getSearchResultsFor('Paramore');
      expect(request.resolveValue).to.be.eql(finalJSON);
    });

  });

});
