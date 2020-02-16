import React from "react";

interface IdentifyChromeProps {
  children: (isChromeBrowser: boolean) => React.ReactElement;
}

const IdentifyChrome: React.FunctionComponent<IdentifyChromeProps> = (
  props: IdentifyChromeProps
) => {
  const { children } = props;
  const isChromeBrowser = window.navigator.userAgent.indexOf("Chrome") !== -1;

  return children(isChromeBrowser);
};

export default IdentifyChrome;
