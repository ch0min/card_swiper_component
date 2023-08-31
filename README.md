* dependencies:
- yarn add react-native-reanimated -> babel plugin: plugins: ['react-native-reanimated/plugin'],
- yarn add react-native-gesture-handler
- npx pod-install (only on MacOS)


_____________________________________



TODO:
- fix so that you can swipe instantly after the next card
- implement card stack or not?
- on back card use PanGestureHandler, so you can scroll down if the description is more than the card.
- make so the nope and like appears a little later when panning
- implement icon in the middle?
- implement icons? (info icon)
- implement text at the bottom of section 1 - subheaders on card
- refactor components into smaller components
- put icons on subheaders front left and right



KINDA DONE: 
- fix elevation so opacity doesn't give this bright inner effect when swiping - commented out elevation in styles for now as a fix




DONE: 
- make a new view on the card, so it has 2 sections
- Tapping on a card, shows info on the backside
