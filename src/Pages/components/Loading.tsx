import Lottie from "react-lottie";
import animationData from "../../assets/loading.json";

const Loading: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={700}
      width={700}
      isStopped={false}
      isPaused={false}
    />
  );
};

export default Loading;
