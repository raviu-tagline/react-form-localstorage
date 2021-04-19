import React from "react";

export const validateName = new RegExp('[^0-9]+$')
export const validateMobile = new RegExp('(\\+\\d{1,3}[- ]?)?\\d{10}$')
export const validateEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')