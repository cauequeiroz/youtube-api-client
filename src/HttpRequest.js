export default class HttpRequest {
  static to(url) {
    return fetch(url).then(result => result.json());
  }
}
