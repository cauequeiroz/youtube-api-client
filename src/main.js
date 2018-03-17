import HttpRequest from './HttpRequest';

export default class YoutubeAPI {
  constructor(options) {
    if (options === undefined || options.apiKey === undefined) {
      throw new Error('You need to pass an `apiKey` to the class constructor.');
    }

    this.apiKey = options.apiKey;
    this.apiUrl = 'https://www.googleapis.com/youtube/v3';
  }

  getSearchResultsFor(query) {
    const result = HttpRequest.to(`${this.apiUrl}/search?part=snippet&key=${this.apiKey}&q=${query}`);

    return result;
  }
}
