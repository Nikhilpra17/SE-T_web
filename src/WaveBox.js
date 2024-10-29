import React from "react";

const WaveBox = ({ mainColor = "lightblue", smallColor = "darkblue" }) => {
  const styles = {
    mainBox: {
      width: "300px",
      height: "150px",
      backgroundColor: mainColor,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    smallBox: {
      width: "100px",
      height: "50px",
      backgroundColor: smallColor,
      position: "absolute",
    },
    topLeftBox: {
      top: 0,
      left: 0,
      borderRadius: "0% 10% 50% 20%",
    },
    bottomRightBox: {
      bottom: 0,
      right: 0,
      borderTopLeftRadius: "80px 40px",
    },
  };

  return (
    <div style={styles.mainBox}>
      <div style={{ ...styles.smallBox, ...styles.topLeftBox }}></div>

      <div style={{ ...styles.smallBox, ...styles.bottomRightBox }}></div>
    </div>
  );
};

export default WaveBox;
