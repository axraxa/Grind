const locationBtn = document.querySelector(".location");
//alertbox
const alertBox = document.querySelector(".alert");
const text = `In order to search for your location you need to enable location permision and reload your website!`;
const upperCased = (txt) => {
    return String(txt).split(" ").map(text => text.charAt(0).toUpperCase() + text.slice(1)).join(" ");
}
alertBox.innerText = upperCased(text);

window.onload = () => {
    //location
    navigator.geolocation.getCurrentPosition(position => {
        locationBtn.href = `https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},300m/data=!3m1!1e3`;
    });

    if (locationBtn.href.length != 0) {
        locationBtn.onclick == "";
    }
}

//displays alert when location is disabled.
function check() {
    if (locationBtn.href.length == 0) {
        alertBox.style.top = "40px";
    }
}