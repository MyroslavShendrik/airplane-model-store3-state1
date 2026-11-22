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
    isPlanes: false,
    isHelicopters: false,
  };

  allFiltration = () => {
    console.log("Клік в кнопку All");
    this.setState({
      isPlanes: true,
      isHelicopters: true,
    });
  };

  planeFiltration = () => {
    console.log("Клік в кнопку Літаки");
    this.setState({
      isPlanes: true,
      isHelicopters: false,
    });
  };

  helicopterFiltration = () => {
    console.log("Клік в кнопку Вертольоти");
    this.setState({
      isPlanes: false,
      isHelicopters: true,
    });
  };

  changeBackgroundColor = () => {
    const { isPlanes, isHelicopters } = this.state;
    if (isPlanes && isHelicopters) {
      return "green";
    }
    if (isPlanes) {
      return "yellow";
    }
    if (isHelicopters) {
      return "lightblue";
    }
  };
  render() {
    const { isPlanes, isHelicopters } = this.state;
    console.log("isPlanes:", isPlanes);
    console.log("isHelicopters:", isHelicopters);

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
          bgColor={this.changeBackgroundColor()}
        >
          <PlanesList items={planes} />
        </Section>
        <Section
          isOn={isHelicopters}
          title="Магазин моделей гелікоптерів"
          bgColor={this.changeBackgroundColor()}
        >
          <PlanesList items={helicopters} />
        </Section>
      </>
    );
  }
}
