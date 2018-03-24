import moment from "moment";

const bestPostTimes = [
  moment("12:00am", "h:mma"),
  moment("3:00pm", "h:mma"),
  moment("5:00pm", "h:mma"),
  moment("6:00pm", "h:mma")
];

// best posting time on twitter is on wednesdays, so the 3rd day of the week

export const calculatePostTime = () => {
  const currentTime = moment();
  const nowDay = moment().day();
  let postTime = moment();

  console.log(postTime.format("DD-MM-YYYY, h:mm:ss"));
  if (nowDay === 3) {
    // check if it's past best times of the day to post. returns hours with mins
    // gotta change to set the day of the year as well, to return it properly
    postTime = bestPostTimes.find(time => {
      return currentTime.isBefore(time);
    });
  } else {
    let dayDiff = Math.abs(nowDay - 3);

    // both methods return day of the year, but dont return minutes. need to change it
    if (nowDay < 3) {
      postTime = postTime.add(dayDiff, "days");
    } else if (nowDay > 3) {
      postTime = postTime.add(10 - nowDay, "days");
    }
  }

  return postTime;
};
