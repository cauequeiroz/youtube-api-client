import { expect } from 'chai';
import YoutubeAPI from '../src/main';

describe('Main', () => {

  describe('Smoke Tests', () => {

    it('should create an instance of YoutubeAPI', () => {
      const youtube = new YoutubeAPI({ apiKey: 'foo' });
      expect(youtube).to.be.an.instanceof(YoutubeAPI);
    });

    it('should have a method `getSearchResultsFor`', () => {
      const youtube = new YoutubeAPI({ apiKey: 'foo' });
      expect(youtube.getSearchResultsFor).to.exist;
    });

    it('should recieve an `apiKey`', () => {
      const youtube = new YoutubeAPI({ apiKey: 'foo' });
      expect(youtube.apiKey).to.be.equal('foo');
    });

    it('should throw an error when there is no `apiKey`', () => {
      expect(() => new YoutubeAPI()).to.throw('You need to pass an `apiKey` to the class constructor.');
    });

  });

});
