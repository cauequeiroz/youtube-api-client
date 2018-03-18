# Youtube API Client

[![Build Status](https://travis-ci.org/cauequeiroz/youtube-api-client.svg?branch=master)](https://travis-ci.org/cauequeiroz/youtube-api-client) [![Coverage Status](https://coveralls.io/repos/github/cauequeiroz/youtube-api-client/badge.svg?branch=master)](https://coveralls.io/github/cauequeiroz/youtube-api-client?branch=master)

A simple client to work with the [Youtube API](https://developers.google.com/youtube/v3/getting-started).

## Installation

```sh
$ npm install youtube-api-client --save
```

## How to use

### ES6

```js
import YoutubeAPI from 'youtube-api-client';

const youtube = new YoutubeAPI({
  apiKey: 'YOUR_TOKEN_HERE'
});

youtube.getSearchResultsFor('Five Finger Death Punch');
```

### CommonJS

```js
const youtube = require('youtube-api-client');

const youtube = new YoutubeAPI({
  apiKey: 'YOUR_TOKEN_HERE'
});

youtube.getSearchResultsFor('Asking Alexandria');
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="youtube-api-client.js"></script>

<!-- to import minified version -->
<script src="youtube-api-client.min.js"></script>
```

After that the library will be available to the Global as `YoutubeAPI`. Follow an example:

```js

const youtube = new YoutubeAPI({
  apiKey: 'YOUR_TOKEN_HERE'
});

youtube.getSearchResultsFor('Angra');
```

## Methods

> Follow the methods that the library provides.

### getSearchResultsFor(query)

> Search for youtube videos with provided query.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
youtube.getSearchResultsFor('Pink Floyd')
  .then(result => {
    // do what you want with the result
  });
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/cauequeiroz/youtube-api-client/tags).

## Authors

| ![Caue Queiroz](https://avatars3.githubusercontent.com/u/8504348?s=150&u=cdaab7905b8964a3d2005bb67c09ad5bbd7f213b&v=4)|
|:---------------------:|
|  [Caue Queiroz](https://github.com/cauequeiroz/)   |

See also the list of [contributors](https://github.com/cauequeiroz/youtube-api-client/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
