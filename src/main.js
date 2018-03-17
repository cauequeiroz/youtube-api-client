export default class YoutubeAPI {
  constructor(options) {
    if (options === undefined || options.apiKey === undefined) {
      throw new Error('You need to pass an `apiKey` to the class constructor.');
    }

    this.apiKey = options.apiKey;
  }

  getSearchResultsFor() {}
}
