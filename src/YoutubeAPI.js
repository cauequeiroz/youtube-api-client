import HttpRequest from './HttpRequest';

export default class YoutubeAPI {
  constructor({ apiKey }) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://www.googleapis.com/youtube/v3';
  }

  getSearchResultsFor(query) {
    const url = `${this.apiUrl}/search?part=snippet&key=${this.apiKey}&q=${query}`;

    const rawToVideo = raw => ({
      id: raw.id.videoId,
      title: raw.snippet.title,
      description: raw.snippet.description,
      thumbnail: raw.snippet.thumbnails.high.url
    });

    return HttpRequest
      .to(url)
      .then(result => result.items)
      .then(items => items.map(item => rawToVideo(item)))
      .then(videos => ({ videos }));
  }
}
