import FirstStep from "./FirstStep";
import WorkerSecondStep from "./WorkerSecondStep";
import WorkerThirdStep from "./WorkerThirdStep";
import WorkerFourthStep from "./WorkerFourthStep";
import { useState } from "react";
export default function Register() {
  const [currentForm, setCurrentForm] = useState(1);

  function showStep(stepNum) {
    switch (stepNum) {
      case 1:
        return <FirstStep />;
      case 2:
        return <WorkerSecondStep />;
      case 3:
        return <WorkerThirdStep />;
      case 4:
        return <WorkerFourthStep />;
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <form className="mt-24 flex justify-center">
          {showStep(currentForm)}
        </form>
      </div>
      <button onClick={() => setCurrentForm((curr) => curr + 1)}>Submit</button>
    </>
  );
}
