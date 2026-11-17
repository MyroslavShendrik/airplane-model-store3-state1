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
    title: ""
  };

// handleCategoryChange = (category) =>{
//   this.setState({category})
// }
allFiltration= () => {
  console.log("Клік в кнопку All");
  this.setState({category: "all",
    title: "Магазин моделей літальних апаратів"

  }

  )
}
planeFiltration = () => {
  console.log("Клік в кнопку Літаки");
  this.setState({
    category: "planes",
    title:"Магазин моделей літаків"
  })
}
helicopterFiltration =  () => {
  console.log("Клік в кнопку Вертольоти");
  this.setState(
    {category: "helicopters",
      title: "Магазин моделей вертольотів"
    }
  )
}
  render() {
    const {category, title} = this.state;
    console.log("category:",category);
    const allAircrafts = [...planes, ...helicopters]
    const filteredAircraft = 
      category === "all"
      ? allAircrafts
      : category === "planes"
      ? planes
      : helicopters
    
    return (
      <>
      <div className={css.filterBox}>
        <button
        className={css.button}
        onClick={this.allFiltration}
        >
          Всі
          </button>
        <button
        className={css.button}
        onClick={this.planeFiltration}
        >
          Літаки
          </button>
        <button
        className={css.button}
        onClick={this.helicopterFiltration}
        >
          Вертольоти
          </button>
      </div>
        <Section title={title}>
          <PlanesList items={filteredAircraft} />
        </Section>
        {/* <Section title="Магазин моделей гелікоптерів">
          <PlanesList items={helicopters} />
        </Section> */}
      </>
    );
  }
}
