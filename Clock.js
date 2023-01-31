"use strict"
let sec_counter = 1, min_counter = 1, hour_counter = 1
setInterval(function () {
    const hours = document.querySelector(".hours"), minutes = document.querySelector(".minutes"), seconds = document.querySelector(".seconds")
    const date = new Date()
    const hours_now = ((date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) + date.getMinutes() / 60) * 360 / 12
        , mins_now = ((date.getMinutes() + date.getSeconds() / 60) * 360) / 60,
        secs_now = (date.getSeconds() * 360) / 60
    if (hours_now % 360 == 0) hour_counter++
    if (mins_now % 360 == 0) min_counter++
    if (secs_now % 360 == 0) sec_counter++
    hours.style.transform = `rotate(${hours_now + hour_counter * 360}deg)`
    minutes.style.transform = `rotate(${mins_now + min_counter * 360}deg)`
    seconds.style.transform = `rotate(${secs_now + sec_counter * 360}deg)`


}, 1000)