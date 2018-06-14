## keen-tracking-adwords-example

Download this repository, then in the project folder run command

### Install

```
npm install
```

### Run

```
npm start
```

## Adwords URL Query String

Inside your Campaign, add custom parameter like "?ad_id=123" to your [Final URL](https://support.google.com/adwords/answer/6080568)


## Stream

You will see that your latest record is containing page.info.query_string
with values from the URL of the landing page

![alt text](https://github.com/keen/keen-tracking-adwords-example/raw/master/demo/img/screen1.png "")

## Explorer

* Analysis type: count
* Event Collection: pageviews
* Add filter:

![alt text](https://github.com/keen/keen-tracking-adwords-example/raw/master/demo/img/screen2.png "")

Run the query to see how many visitors are with ad_id=123
