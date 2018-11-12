import { html, LitElement } from "@polymer/lit-element/lit-element.js";

class HelloWorld extends LitElement {
  render() {
    return html`
      <link
        type="text/css"
        rel="stylesheet"
        href="https://cdn.firebase.com/libs/firebaseui/3.4.1/firebaseui.css"
      />
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello <em> ${this.prop1}</em>!</h2>
      <p>
        <small>
          Logins shown are not functional unless also enabled on Firebase and in
          some cases, their respective platforms.</small
        >
      </p>
      <div id="firebaseui-auth-container"></div>
      <p>
        This is a dumbed-down approach to stuffing FirebaseUI into a web
        component
      </p>
      <p>
        Firebase and FirebaseUI are each in the global namespace, in this
        particular implementation, thus visibile from within any web component.
        The advantage is simplicity, the disadvantage is obviously a lack of
        encapsulation.
      </p>
      <p>To deploy onto your own firebase instance:</p>
      <ul>
        <li>swap your config in the index.html</li>
        <li>swap your instance in .firebaserc</li>
        <li>with Polymer CLI 'polymer build' from public directory</li>
        <li>with Firebase CLI 'firebase deploy' from root directory</li>
        <li>
          enable or remove specific logins such as Facebook on your firebase
          console
        </li>
        <li>
          enable or remove specific logins such as Facebook in their respective
          platform
        </li>
      </ul>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.prop1 = "World";
  }

  updated() {
    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      tosUrl: "https://google.com", //fixme
      privacyPolicyUrl: function() {
        window.location.assign("https://google.com"); //fixme
      }
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start(
      this.shadowRoot.querySelector("#firebaseui-auth-container"),
      uiConfig
    );
  }
}

window.customElements.define("hello-world", HelloWorld);
