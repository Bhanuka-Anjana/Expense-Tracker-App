import React from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { ThirdPartySignIn } from "../services/authentication";

export default function ThirdPartySignIns() {
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <GoogleLogin 
        clientId={process.env.REACT_APP_CLIENT_ID}
        onSuccess={r=>ThirdPartySignIn(dispatch,r.tokenId)}
        onFailure={e=>console.log("Google login error",e)}
      />
    </div>
  );
}
