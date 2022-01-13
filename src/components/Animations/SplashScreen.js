import React from "react";
import Lottie from "react-lottie";
import * as loadingAnimation from "src/assets/animations/four-dots-loading.json";

export default function SplashScreen() {
  const loadingAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="mt-32 md:mt-60">
        <Lottie options={loadingAnimationOptions} width={250} />
      </div>
    </div>
  );
}
