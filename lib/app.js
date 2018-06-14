import KeenTracking from 'keen-tracking';

const client = new KeenTracking({
  projectId: 'YOUR_PROJECT_ID',
  writeKey: 'YOUR_WRITE_KEY'
});

client.extendEvents(() => {
  return {
    page: {
      title: document.title,
      url: document.location.href
    },
    keen: {
      addons: [
        {
          name: 'keen:url_parser',
          input: {
            url: 'page.url'
          },
          output: 'page.info'
        }
      ]
    }
  }
});

client.recordEvent('pageviews', {
  // you can put any additional data here
}, function(err, res){
    if (err) {
      console.log('err', err);
    }
});
