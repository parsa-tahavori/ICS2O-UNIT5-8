// Copyright (c) 2022 Parsa Tahavori All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT5-8/sw.js", {
    scope: "/ICS2O-UNIT5-8/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const num1 = parseInt(document.getElementById("num1").value)
  const num2 = parseInt(document.getElementById("num2").value)

  let remainder = num1
  let count = 0

  if (num1 > 0 && num2 > 0) {
    
    while (remainder > num2 || remainder == num2) {
      remainder -= num2

      count++
    }
    document.getElementById("answer").innerHTML =
      num1 + " ÷ " + num2 + " = " + count + " R " + remainder
  }
  else {
    document.getElementById("answer").innerHTML =
      "please enter a POSITIVE integer that is NOT 0"
  }
}
