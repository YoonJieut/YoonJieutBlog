"use client";

import React from "react";

export default function StartMain() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        transform: "rotate(26.15deg)",
        transformOrigin: "0 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: 374,
          height: 403,
          background: "white",
          borderRadius: 7,
        }}
      />
      <div style={{ width: 301, height: 42, position: "relative" }}>
        <div
          style={{
            width: 234,
            height: 42,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
            borderRadius: 3,
          }}
        />
        <div
          style={{
            width: 42,
            height: 42,
            left: 259,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              left: 0,
              top: 0,
              position: "absolute",
              background: "#D9D9D9",
              borderRadius: 9999,
            }}
          />
          <div
            style={{
              width: 21,
              height: 21,
              left: 10,
              top: 11,
              position: "absolute",
              background: "#1C1C1C",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
