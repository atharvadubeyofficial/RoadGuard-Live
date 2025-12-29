import React, { useState } from "react";

function PermissionScreen({ onPermissionComplete }) {
  const [locationGranted, setLocationGranted] = useState(false);
  const [notificationGranted, setNotificationGranted] = useState(false);

  // 📍 LOCATION PERMISSION
  const requestLocationPermission = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported ❌");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location:", position.coords);
        localStorage.setItem("locationPermission", "granted");
        setLocationGranted(true);
        alert("Location Permission Granted 📍");
      },
      (error) => {
        alert("Location Permission Denied ❌");
        console.error(error);
      }
    );
  };

  // 🔔 NOTIFICATION PERMISSION
  const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
      alert("Notifications not supported ❌");
      return;
    }

    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      localStorage.setItem("notificationPermission", "granted");
      setNotificationGranted(true);
      alert("Notification Permission Granted 🔔");
    } else {
      alert("Notification Permission Denied ❌");
    }
  };

  // 📳 VIBRATION TEST
  const triggerVibration = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate([300, 150, 300, 150, 600]);
      alert("Vibration Triggered 📳");
    } else {
      alert("Vibration not supported ❌");
    }
  };

  // ➡️ CONTINUE TO DASHBOARD
  const handleContinue = () => {
    if (!locationGranted) {
      alert("Location permission required 🚨");
      return;
    }

    onPermissionComplete(); // Dashboard open
  };

  return (
    <div style={styles.container}>
      <h2>Permissions Required</h2>
      <p style={styles.subText}>
        For safety, tracking & real-time alerts
      </p>

      <button style={styles.button} onClick={requestLocationPermission}>
        Allow Location 📍
      </button>

      <button style={styles.button} onClick={requestNotificationPermission}>
        Allow Notifications 🔔
      </button>

      <button style={styles.button} onClick={triggerVibration}>
        Test Vibration 📳
      </button>

      <button style={styles.continueButton} onClick={handleContinue}>
        Continue ➡️
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#020617",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "14px",
    padding: "20px",
    textAlign: "center"
  },
  subText: {
    fontSize: "13px",
    opacity: 0.8,
    marginBottom: "10px"
  },
  button: {
    width: "260px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer"
  },
  continueButton: {
    width: "260px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#16a34a",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
    marginTop: "10px"
  }
};

export default PermissionScreen;
