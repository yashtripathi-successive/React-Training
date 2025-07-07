import React from "react";
import UseClipboard from "./UseClipboard";


function UseClipboardChecking() {
  const text ="hey bro"
  const {isCopied,copytext} =  UseClipboard(text)
  return (  

    <div>

     <button onClick={copytext}>{isCopied?"text copied":"text not copied"}</button>

    </div>
  );
}

export default UseClipboardChecking;