import { UserManager, settings } from "./sample-settings";

const mgr = new UserManager(settings);

removeUser();

function removeUser() {
    mgr.removeUser().then(function() {
        log("user removed");
    }).catch(function(err) {
        console.error(err);
        log(err);
    });
}

alert("front-channel logout done");