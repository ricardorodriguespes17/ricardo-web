import { create } from "zustand"

type State = {
  careers: CareerType[]
  typeSelected: CareerTypes
}

type Actions = {
  setCareers: (careers: CareerType[]) => void
  setTypeSelected: (type: CareerTypes) => void
}

const useCareer = create<State & Actions>()((set, get) => ({
  typeSelected: "academic",
  careers: [
    {
      title: "Técnico em Informática",
      period: "2014 a 2016",
      type: "academic",
      company: "UESB",
    },
    {
      title: "Bacharelado em Ciência da Computação",
      period: "2017 a 2025",
      type: "academic",
      company: "IFNMG",
    },
    {
      title: "Desenvolvedor Fullstack",
      period: "ago 2020 a ago 2021",
      type: "professional",
      company: "Mercadótica Franquias",
    },
    {
      title: "Desenvolvedor Frontend",
      period: "ago 2021 a out 2021",
      type: "professional",
      company: "FWC Tecnologia",
    },
    {
      title: "Desenvolvedor Frontend",
      period: "nov 2021 a mar 2022",
      type: "professional",
      company: "Órulo",
    },
    {
      title: "Desenvolvedor Frontend",
      period: "mar 2022 a abr 2023",
      type: "professional",
      company: "Vetta Tecnologia",
    },
    {
      title: "Desenvolvedor Freelancer Fullstack",
      period: "set 2022 até hoje",
      type: "professional",
    },
    {
      title: "Campus Party BA",
      period: "2018",
      type: "event",
    },
    {
      title: "Semana da Computação - UESB",
      period: "2018",
      company: "UESB",
      type: "event",
    },
    {
      title: "Semana da Computação - UESB",
      period: "2019",
      company: "UESB",
      type: "event",
    },
    {
      title: "Campus Party BR",
      period: "2023",
      type: "event",
    },
    {
      title: "Introdução a Javascript",
      period: "mai 2019",
      company: "Udemy",
      type: "course",
    },
    {
      title: "Introdução ao Python",
      period: "mai 2019",
      company: "Udemy",
      type: "course",
    },
    {
      title: "React Native",
      period: "mai 2019 a jun 2019",
      company: "Udemy",
      type: "course",
    },
  ],
  setCareers: (careers) => set({ careers }),
  setTypeSelected: (type) => set({ typeSelected: type }),
}))

export default useCareer
