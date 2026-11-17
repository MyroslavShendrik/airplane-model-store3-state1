import React, { Component } from "react";
import Section from "@/components/Section/Section.jsx"; //! ванільний CSS

import PlanesList from "@/components/PlanesList/PlanesList.jsx"; //! ванільний CSS

import planes from "@/json/planes.json"; //! --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json
import helicopters from "@/json/helicopters.json";
import css from "./App.module.css"; //! CSS-модулі
//! Звичайний компонент
// export function AppFiltration1() {
//   return (
//     <>
//       <Section title="Магазин моделей літаків">
//         <PlanesList items={planes} />
//       </Section >
//         <Section title="Магазин моделей гелікоптерів">
//         <PlanesList items={helicopters} />
//       </Section >
//     </>
//   );
// };

//! Компонент-клас
export class AppFiltration1 extends Component {
  state = {
    category: "all",
  };
  render() {
    return (
      <>
      <div className={css.filterBox}>
        <button
        className={css.button}
        // onClick={()}
        >
          Всі
          </button>
        <button
        className={css.button}
        >
          Літаки
          </button>
        <button
        className={css.button}
        >
          Вертольоти
          </button>
      </div>
        <Section title="Магазин моделей літаків!!!!!!!">
          <PlanesList items={planes} />
        </Section>
        <Section title="Магазин моделей гелікоптерів">
          <PlanesList items={helicopters} />
        </Section>
      </>
    );
  }
}
