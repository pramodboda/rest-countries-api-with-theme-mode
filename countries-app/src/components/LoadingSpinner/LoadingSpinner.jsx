import { MutatingDots } from "react-loader-spinner";
import { LoadingSpinnerWrapper } from "./LoadingSpinner.styled";

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerWrapper>
      <MutatingDots
        height="100"
        width="100"
        color="#ba68c8"
        secondaryColor="#6a1b9a"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoadingSpinnerWrapper>
  );
};

export default LoadingSpinner;
