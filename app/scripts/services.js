angular.module('betterplaceServices', ['ngResource'])
  .factory('Projects', function($resource) {
    return $resource('http://www.betterplace.org/de/api_v4/projects.json', {}, {
      query: {method:'GET', params: {}, isArray:false}
    })
  })
  .factory('Project', function($resource){
    return $resource('http://www.betterplace.org/de/api_v4/projects/:id.json', {}, {
      query: {method:'GET', params: {}, isArray:false}
    })
  })
  .factory('Tweet', function($resource){
    return $resource('http://localhost\\:9000/tweet.json', { }, {
      submit: { method:'POST', params: {} }
    })
  });
