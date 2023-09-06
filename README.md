* dependencies:
- yarn add react-native-reanimated -> babel plugin: plugins: ['react-native-reanimated/plugin'],
- yarn add react-native-gesture-handler
- yarn add react-native-vector-icons


_____________________________________



TODO:

%TOMORROW%
- CB: Can't tap back if you are clicking at the same area as the like and nope labels.
- CB: On back card use PanGestureHandler, so you can scroll down if the description is more than the card.
- CF: Loading spinner when loading the swipe screen


- CF: Fix so that you can swipe instantly after the next card ?
- Refactoring and splitting components into smaller ones. (SwipeLogic specifically)
- Design adjustment



MAYBES?:
- Shadow on Cards?
- Card Stack Effect?



KINDA DONE / WIP: 
- fix elevation so opacity doesn't give this bright inner effect when swiping - commented out elevation in styles for now as a fix. Find a fix for shadows on android.


DONE: 
* Overall
- Split Card component into smaller components, CardFront, CardBack.

* CardFront
/Week 2
- CF: Swipe function
- CF: Swipe animations
- CF: Swipe dummy-data implemented
- CF: Make a new view on the card, so it has 2 sections
- CF: Put icons on subheaders
- CF: Implement text at the bottom of section 1 - subheaders on card
/Week 3
- CF: Flickering between current card and next card
- CF: Make so the nope and like labels appears a little later when panning
- CF: Implement center icon
- CF: Press on Icon Button makes Card Flip Animation

* CardBack
* /Week 2
- CB: Make Info Icon Button
- CB: Tapping on "i" icon, shows info on the backside
- CB: Tapping anywhere on CardBack goes back to FrontCard with Flip Animation

