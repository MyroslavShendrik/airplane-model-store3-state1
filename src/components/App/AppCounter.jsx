import React, { Component } from "react";
// import css from "./App.module.css";
import { Counter } from "@/components/Counter/Counter.jsx";

//! Звичайний компонент
export function AppCounter() {
  return (
    <>
      <Counter />

      {/* //! Початковий стан лічильника з props */}
      <Counter initialValue={10} />

    </>
  );
}
