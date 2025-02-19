import { useEffect } from "react";

const TawkToComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://embed.tawk.to/67b55a95645c9a190bb88168/1ike6jmkn?lang=en"; // replace url
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToComponent;
