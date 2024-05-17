const countto = "1 Jan 2025";

const c = setInterval(() => {
    let enddate = new Date(countto);
    let currentdate = new Date();  // Use the actual current date and time
    
    // Calculate the difference in seconds
    let totalSeconds = (enddate - currentdate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log("End Date:", enddate);
    console.log("Current Date:", currentdate); 
    console.log("Total Seconds:", totalSeconds);
    console.log("Days:", days);
    console.log("Hours:", hours);
    console.log("Minutes:", minutes);
    console.log("Seconds:", seconds);

    let countdays = document.querySelector('.days');
    let counttimes = document.querySelector('.times');

  
        countdays.innerHTML =  'Days : ' + days;
        counttimes.innerHTML =  "Time : " + `${setFormat(hours)} : ${setFormat(
                minutes
              )} : ${setFormat(seconds)}`;
   
    if (totalSeconds <= 0) {
        clearInterval(c);
        if (countdays) {
            countdays.textContent = "Happy New Year You All";
        }
    }
}, 1000);

const setFormat = (t) => {
    return t < 10 ? `0${t}` : t;
  };

