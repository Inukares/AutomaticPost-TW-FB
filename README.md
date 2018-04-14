# react-node-twitter-post

Demo application that shows how implement Twitter login with abilitiy of posting to feed, using React on frontend and Node.js/Express on backend that is implementing REST API.
App allows you to schedule the posting during time of the week, that has the highest traffic on twitter (according to: http://coschedule.com/blog/best-times-to-post-on-social-media/)

# Images describing how it works
![Initial state](https://s18.postimg.cc/4c0jqcii1/image.png "Never gonna give you up")
![Sign In/Login In verification](https://s18.postimg.cc/6gkwrfzk9/image.png "Never gonna let you down")
![Posting view](https://s18.postimg.cc/763p3sse1/image.png "Never gonna tell a lie")
![After post-adding view](https://s18.postimg.cc/v9ugs3qah/image.png "I thought nobody reads these descriptions lol")
![Succesfully added post](https://s18.postimg.cc/hsxi98nop/image.png "Or hurt you")


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
