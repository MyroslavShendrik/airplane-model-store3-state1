import React, { Component } from "react";
import Section from "@/components/Section/Section.jsx"; //! ванільний CSS

import PlanesList from "@/components/PlanesList/PlanesList.jsx"; //! ванільний CSS

// import planes from "@/json/planes.json"; //! --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json
// import helicopters from "@/json/helicopters.json";
import aircrafts from "@/json/aircrafts.json";

import css from "./App.module.css"; //! CSS-модулі
const filters = {
  all: {
    label: "Всі",
    title: "Магазин моделей ліальних апаратів",
    bgColor: "green",
    types: null ,
  },
  planes:{
  label:"Літаки",
  title:"Магазин моделей літаків",
  bgColor:"yellow",
  types:["plane"],
},
helicopters:{
  label:"Вертольоти",
   title:"Магазин моделей гелікоптерів",
   bgColor:"lightblue",
   types: ["helicopter"],
}
}

//! Компонент-клас
export class AppFiltration3 extends Component {
  state = {
  filter:"all",
  };

 setFilter = (filter) => {
  console.log("Клік в кнопку:",filter);
  this.setState({filter})
 }

getVisibleItems = () => {
  const {types} = filters[this.state.filter];
  console.log("types:",types);
  return types
  ? aircrafts.filter((item) =>
    types.includes(item.aircraftType))
   : aircrafts ;
};


  render() {
const {filter} = this.state
const {title, bgColor} = filters[filter]
const visibleItems = this.getVisibleItems()
    console.log("-------------------------------------------")
console.log("filter:",filter)
console.log("title:",title)
console.log("bgColor:",bgColor)
console.log("visibleItems:",visibleItems)
    console.log("-------------------------------------------")

    return (
      <>
        {/* //! Filtration */}
<div className={css.filterBox}>
  {Object.entries(filters).map(([key , {label}]) => (
  <button
  key={key}
  className={css.button}
  onClick={() => this.setFilter(key)}
  >
    {label}
  </button>
))}
  </div>
        {/* //! список літальних апаратів */}
        <Section
          isOn={true}
          title={title}
          bgColor={bgColor}
        >
          <PlanesList items={visibleItems}
          />
        </Section>

        {/* <Section
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
        </Section> */}
      </>
    );
  }
}
