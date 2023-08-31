* dependencies:
- yarn add react-native-reanimated -> babel plugin: plugins: ['react-native-reanimated/plugin'],
- yarn add react-native-gesture-handler
- npx pod-install (only on MacOS)


TODO:
- fix elevation so opacity doesn't give this bright inner effect - commented out shadow for now as a fix
- fix so that you can swipe instantly after the next card
- make a new view on the card, so it has 2 sections
- fix small white border when swiping on cards
- implement card stack or not?
- Tapping on a card, shows info
- on back card use PanGestureHandler so you can scroll down if the description is more than the card.