import { useState } from "react";

const useUserStatus = () => {
  // useState using statusState to represent state, and setStatusState to set that specific state
  const [statusState, setStatus] = useState("");

  // returning the state and the status object which will be used the capture the value from the form.
  return {
    statusState,
    status: {
      value: statusState,
      onChange: (e) => setStatus(e.target.value),
    },
  };
};
export default useUserStatus;
