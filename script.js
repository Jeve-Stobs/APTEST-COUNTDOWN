var acountDownDate = new Date(
    "May 10, 2021 8:30:00".replace(/-/g, "/")
  ).getTime(),
  amyfunc = setInterval(function () {
    var a = new Date().getTime(),
      b = acountDownDate - a,
      c = Math.floor(b / 864e5),
      d = Math.floor((b % 864e5) / 36e5),
      e = Math.floor((b % 36e5) / 6e4),
      f = Math.floor((b % 6e4) / 1e3);
    Math.floor(b / 10);
    (document.getElementById("adays").innerHTML = c + "d "),
      (document.getElementById("ahours").innerHTML = d + "h "),
      (document.getElementById("amins").innerHTML = e + "m "),
      (document.getElementById("asecs").innerHTML = f + "s "),
      0 > b &&
        (clearInterval(myfunc),
        (document.getElementById("adays").innerHTML = ""),
        (document.getElementById("ahours").innerHTML = ""),
        (document.getElementById("amins").innerHTML = ""),
        (document.getElementById("asecs").innerHTML = ""),
        (document.getElementById("aend").innerHTML =
          "It's christmas! Go get your presents! :D"));
  }, 10);
