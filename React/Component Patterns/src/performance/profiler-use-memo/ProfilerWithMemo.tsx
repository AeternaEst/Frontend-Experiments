import React, { useState } from "react";
import RenderPeople from "./RenderPeople";

const ProfilerWithMemo: React.FC = () => {
  const [message, setMessage] = useState("Hello World");

  return (
    <div className="profiler-with-memo">
      <React.Profiler
        id="ProfilerWithMemo"
        onRender={(
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime,
          interactions
        ) => {
          console.log("id", id);
          console.log("phase", phase);
          console.log("actualDuration", actualDuration);
          console.log("baseDuration", baseDuration);
          console.log("startTime", startTime);
          console.log("commitTime", commitTime);
          console.log("interactions", interactions);
        }}
      >
        <button type="button" onClick={() => setMessage("Hello People")}>
          Update Message
        </button>
        <RenderPeople message={message} />
      </React.Profiler>
    </div>
  );
};

export default ProfilerWithMemo;
