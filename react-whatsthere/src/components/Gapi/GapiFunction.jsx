import { useEffect } from "react";
import { gapi } from "gapi-script";

export default function GapiFunction () {

  const clientId = "632068121299-unggfu717fg5kklshvbmn1kl6s6nl9ue.apps.googleusercontent.com"

  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  })

};