function updateTime() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("time").innerText = `${h}:${m}:${s} ${ampm}`;
    document.getElementById("date").innerText = now.toDateString();
}

setInterval(updateTime, 1000);
updateTime();
