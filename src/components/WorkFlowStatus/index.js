import styles from "./index.module.scss";

const StatusIcon = () => {
  return (
    <svg
      width="12"
      height="18"
      viewBox="0 0 12 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9C6 10.6569 4.65685 12 3 12C1.34315 12 0 10.6569 0 9C0 7.34315 1.34315 6 3 6C4.65685 6 6 7.34315 6 9Z" />
    </svg>
  );
};

export default function WorkFlowStatus({ status }) {
  const colors = {
    inProgress: "#007AFF",
    inTesting: "#FF9500",
    finished: "#34C759",
    comingSoon: "#8E8E93",
  };

  const inPrgress = {
    borderColor: colors.inProgress,
    color: colors.inProgress,
    fill: colors.inProgress,
  };
  const inTesting = {
    borderColor: colors.inTesting,
    color: colors.inTesting,
    fill: colors.inTesting,
  };
  const finished = {
    borderColor: colors.finished,
    color: colors.finished,
    fill: colors.finished,
  };
  const comingSoon = {
    borderColor: colors.comingSoon,
    color: colors.comingSoon,
    fill: colors.comingSoon,
  };

  return (
    <div className={`${styles.flowBadge}`}>
      {(() => {
        switch (status) {
          case "In Progress":
            return (
              <span style={inPrgress}>
                <StatusIcon /> {status}
              </span>
            );
          case "In Testing":
            return (
              <span style={inTesting}>
                <StatusIcon /> {status}
              </span>
            );
          case "Finished":
            return (
              <span style={finished}>
                <StatusIcon /> {status}
              </span>
            );
          case "Coming Soon":
            return (
              <span style={comingSoon}>
                <StatusIcon /> {status}
              </span>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
