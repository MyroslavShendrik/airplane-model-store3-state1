import Section from '@/components/Section/Section.jsx' //! ванільний CSS

import PlanesList from '@/components/PlanesList/PlanesList.jsx'; //! ванільний CSS

import planes from '@/json/planes.json'; //! --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json
import helicopters from '@/json/helicopters.json'

export function AppFiltration1() {
  return (
    <>
      <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >
        <Section title="Магазин моделей гелікоптерів">
        <PlanesList items={helicopters} />
      </Section >
    </>
  );
};
