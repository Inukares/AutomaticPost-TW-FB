# react-node-twitter-post

Demo application that shows how implement Twitter login with abilitiy of posting to feed, using React on frontend and Node.js/Express on backend that is implementing REST API.
App allows you to schedule the posting during time of the week, that has the highest traffic on twitter (according to: http://coschedule.com/blog/best-times-to-post-on-social-media/)

# What you need to install

* [Node.js](https://nodejs.org/en/)
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [Gulp](http://gulpjs.com/)
* [MongoDB](https://www.mongodb.com/)

# How To Start Application?

* Start MongoDB - our application expects that there is `twitter-demo` database in MongoDB (`sudo mongod` for starting database on your localmachine)
* Put Twitter secret and key in [twitter.config.js](https://github.com/GenFirst/react-node-twitter-login/blob/master/backend/twitter.config.js) and
* Go to [frontend](https://github.com/GenFirst/react-node-twitter-login/tree/master/frontend) folder
  * `npm install`
  * `npm start`
* Go to [backend](https://github.com/GenFirst/react-node-twitter-login/tree/master/backend) folder
  * `npm install`
  * `gulp develop`
* Change `consumerKey` and `consumerSecret` in `twitterConfig.js` to make the application work.

# License

react-node-twitter-login is released under [MIT License](https://opensource.org/licenses/MIT).
