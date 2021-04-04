# INACTIVE

This project is inactive, out of date, and should not be used.

It was probably working, once. But that was many versions of dependencies previous to current, among other issues.

## hello-fbui-world

Hello world for firebaseUI, using LitElement web component.

This is a dumbed-down approach to stuffing FirebaseUI into a web
component

Firebase and FirebaseUI are each in the global namespace, in this
particular implementation, thus visibile from within any web component.
The advantage is simplicity, the disadvantage is obviously a lack of
encapsulation.
  
To deploy onto your own firebase instance:

- swap your config in the index.html
- swap your instance in .firebaserc
- with Polymer CLI 'polymer build' from public directory
- with Firebase CLI 'firebase deploy' from root directory
- enable or remove specific logins such as Facebook on your firebase console
- enable or remove specific logins such as Facebook in their respective platform
