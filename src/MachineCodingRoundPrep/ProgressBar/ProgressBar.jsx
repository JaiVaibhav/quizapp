import React, { useEffect, useState } from "react";
import style from "./ProgressBar.module.css";
function ProgressBarView({ progress = 0 }) {
  return (
    <div className={style.container}>
      <div>Progress Bar</div>
      <div className={style.progressBar}>
        <span>{progress.toFixed()}%</span>
        <div style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = progress;
    const id = setInterval(() => {
      if (p < 100) {
        p++;
        setProgress(p);
      } else {
        clearInterval(id);
      }
    }, 200);
  }, []);
  return <ProgressBarView progress={progress} />;
}

export default ProgressBar;
