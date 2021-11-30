# islands-online
interactive web component of Islands

Brief and working document is here: https://docs.google.com/document/d/1iuR_rWDXz8wuZS_NqSuClYdEn74xCHqJdcWE3q06hL0/edit?usp=sharing

## Configuring
Animation duration can be adjusted via two separare constants in `src/screens/GameScreen.js`

On line 8, `ANIMATION_FADE_TIME` allows you to adjust the timing of the fade in and fade out animation of the creature.

On line 9, `ANIMATION_ON_SCREEN` allows you to adjust how long the creature remains on screen before animating out.

Additionally in `src/screens/GameScreen.js` for extending interactions:

On line 47, `onScreenTap` is a function that gets called on screen tap/click. Extend functionality in the body of this function.