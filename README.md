* dependencies:
- yarn add react-native-reanimated -> babel plugin: plugins: ['react-native-reanimated/plugin'],
- yarn add react-native-gesture-handler
- yarn add react-native-vector-icons
- yarn add expo-asset
- npx pod-install (only on MacOS)


_____________________________________



TODO:
- fix so that you can swipe instantly after the next card ?
- implement card stack or not?
- on back card use PanGestureHandler, so you can scroll down if the description is more than the card.
- refactor components into smaller components
- CF: Loading spinner when loading the swipe screen
- CB: cant click back if your clicking at the same area as the labels.
- Instead of like and nope labels in top left and right corner, could be a short animation right after you swipe the current card before the next card shows, which says ur answer
- CB: Make animations

- Design adjustment


KINDA DONE: 
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

* CardBack
* /Week 2
- CB: Make Info Icon Button
- CB: Tapping on "i" icon, shows info on the backside
- CB: Tapping on card-back goes back to front card

