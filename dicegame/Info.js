import React from "react";
export default function Info() {
  const [stopwatch, setStopwatch] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  return (
    <div className="info">
      <div className="rolls"></div>
      <div className="stopwatch"></div>
      <div className="duration"></div>
    </div>
  );
}
