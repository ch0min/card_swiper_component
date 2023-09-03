* dependencies:
- yarn add react-native-reanimated -> babel plugin: plugins: ['react-native-reanimated/plugin'],
- yarn add react-native-gesture-handler
- yarn add react-native-vector-icons
- npx pod-install (only on MacOS)


_____________________________________



TODO:
- fix so that you can swipe instantly after the next card
- implement card stack or not?
- on back card use PanGestureHandler, so you can scroll down if the description is more than the card.
- implement icon in the middle?
- refactor components into smaller components
- flickering last card after swipe

- Design adjustment


KINDA DONE: 
- fix elevation so opacity doesn't give this bright inner effect when swiping - commented out elevation in styles for now as a fix
- make so the nope and like appears a little later when panning ( might be fixed with new images, changed the hiddenTranslateX / 2 and put damping on withSpring effect. )




DONE: 
- CF Swipe function
- CF Swipe animations
- CF Swipe dummy-data implemented
- CF: Make a new view on the card, so it has 2 sections
- CB: Make Info Icon Button
- CB: Tapping on "i" icon, shows info on the backside
- CF: Implement text at the bottom of section 1 - subheaders on card
- CB: Tapping on card-back goes back to front card
- CF: Put icons on subheaders
