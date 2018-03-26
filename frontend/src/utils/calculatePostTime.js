import moment from "moment";
// best posting time on twitter is on wednesdays, so the 3rd day of the week

const bestPostTimes = [
  moment("12:00am", "h:mma"),
  moment("3:00pm", "h:mma"),
  moment("5:00pm", "h:mma"),
  moment("6:00pm", "h:mma")
];

// set default post time to 5 o'clock. Add post next week if it's too late to post on wednesday
const setMomentDate = (mmt, addDays = false) => {
  mmt.seconds(0);
  mmt.minutes(0);
  mmt.hours(5);
  addDays ? mmt.add(7, "days") : null;
  return mmt;
};

export const format = mmt => moment(mmt).format("DD-MM-YYYY, h:mm:ss");

export const calculatePostTime = () => {
  const currentTime = moment();
  const nowDay = moment().day();
  let postTime = moment();
  if (nowDay === 3) {
    // need to check if it's past the best times of the day to post
    let dateToPost = bestPostTimes.find(time => {
      return currentTime.isBefore(time);
    });
    // if it is too late, simply send post next week
    if (!moment.isMoment(dateToPost)) {
      postTime = setMomentDate(postTime, true);
    } else {
      postTime = dateToPost;
    }
  } else {
    let dayDiff = Math.abs(nowDay - 3);
    // both methods return day of the year, but dont return minutes. need to change it
    if (nowDay < 3) {
      postTime = postTime.add(dayDiff, "days");
      setMomentDate(postTime);
    } else if (nowDay > 3) {
      postTime = postTime.add(10 - nowDay, "days");
      setMomentDate(postTime);
    }
  }
  return postTime.toDate();
};
