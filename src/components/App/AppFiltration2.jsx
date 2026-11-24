import React, { Component } from "react";
import Section from "@/components/Section/Section.jsx"; //! ванільний CSS

import PlanesList from "@/components/PlanesList/PlanesList.jsx"; //! ванільний CSS

import planes from "@/json/planes.json"; //! --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json
import helicopters from "@/json/helicopters.json";
import aircrafts from "@/json/aircrafts.json";

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
export class AppFiltration2 extends Component {
  state = {
    isPlanes: false,
    isHelicopters: false,
    bgColorSection: "white",
  };

  allFiltration = () => {
    console.log("Клік в кнопку All");
    this.setState({
      isPlanes: true,
      isHelicopters: true,
      bgColorSection: "green",
    });
  };

  planeFiltration = () => {
    console.log("Клік в кнопку Літаки");
    this.setState({
      isPlanes: true,
      isHelicopters: false,
      bgColorSection: "yellow",
    });
  };

  helicopterFiltration = () => {
    console.log("Клік в кнопку Вертольоти");
    this.setState({
      isPlanes: false,
      isHelicopters: true,
      bgColorSection: "lightblue",
    });
  };

  render() {
    const {
      isPlanes,
      isHelicopters,
      isAll,
      bgColorSection
    } = this.state;

    console.log("-------------------------------------------")
    console.log("isPlanes:", isPlanes);
    console.log("isHelicopters:", isHelicopters);
    console.log("isAll:",isAll);
    console.log("bgColorSection:", bgColorSection);
    console.log("-------------------------------------------")

    return (
      <>
        {/* //! Filtration */}
        <div className={css.filterBox}>
          <button className={css.button} onClick={this.allFiltration}>
            Всі
          </button>
          <button className={css.button} onClick={this.planeFiltration}>
            Літаки
          </button>
          <button className={css.button} onClick={this.helicopterFiltration}>
            Вертольоти
          </button>
        </div>
        {/* //! список літальних апаратів */}
        <Section
          isOn={isPlanes}
          title="Магазин моделей літаків"
          bgColor={bgColorSection}
        >
          <PlanesList items={planes}
          />
        </Section>
        <Section
          isOn={isHelicopters}
          title="Магазин моделей гелікоптерів"
          bgColor={bgColorSection}
        >
          <PlanesList items={helicopters}
          />
        </Section>
      </>
    );
  }
}
