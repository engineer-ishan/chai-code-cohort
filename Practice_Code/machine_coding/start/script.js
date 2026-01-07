setInterval(() => {
    let now = new Date();

    let ampm;
    let hour = now.getHours();
    if (hour >= 12) ampm = "PM";
    else ampm = "AM";
    hour = hour % 12 || 12;
    hour < 10 ? (hour = `0${hour}`) : hour;

    let min = now.getMinutes();
    min < 10 ? (min = `0${min}`) : min;
    let sec = now.getSeconds();
    sec < 10 ? (sec = `0${sec}`) : sec;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    let time = document.getElementById("time");
    time.innerText = `${hour}:${min}:${sec}:${ampm}`;

    let today = document.getElementById("date");
    today.innerText = now.toLocaleDateString(undefined, options)
}, 1000);
