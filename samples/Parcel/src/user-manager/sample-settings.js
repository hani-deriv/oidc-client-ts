import { Log, UserManager, WebStorageStateStore} from "../../../../src";

Log.setLogger(console);
Log.setLevel(Log.INFO);

const url = window.location.origin + "/user-manager";

class LocalStorageStore {
    getItem(key) {
      return localStorage.getItem(key);
    }
  
    setItem(key, value) {
      localStorage.setItem(key, value);
    }
  
    removeItem(key) {
      localStorage.removeItem(key);
    }
  
    clear() {
      localStorage.clear();
    }
  }
  
  

export const settings = {
    authority: "https://qa77.deriv.dev",
    client_id: "77",
    redirect_uri: url + "/sample.html",
    post_logout_redirect_uri: url + "/sample.html",
    response_type: "code",
    scope: "openid email",

    response_mode: "query",

    popup_redirect_uri: url + "/sample-popup-signin.html",
    popup_post_logout_redirect_uri: url + "/sample-popup-signout.html",

    silent_redirect_uri: url + "/sample-silent.html",
    automaticSilentRenew: true,
    //silentRequestTimeout: 10000,
    userStore: new WebStorageStateStore({ store: new LocalStorageStore() }), // Specify the custom store here
    filterProtocolClaims: true
};

export {
    Log,
    UserManager
};
