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
  typeSelected: "professional",
  careers: [
    {
      title: "Técnico em Informática",
      period: "2014 a 2016",
      type: "academic",
      company: "IFNMG",
      companyLogo: "ifnmg.png",
      position: 1,
    },
    {
      title: "Bacharelado em Ciência da Computação",
      period: "2017 a 2025",
      type: "academic",
      company: "UESB",
      companyLogo: "uesb.png",
      position: 0,
    },
    {
      title: "Desenvolvedor Fullstack",
      period: "ago 2020 a ago 2021",
      type: "professional",
      company: "Mercadótica Franquias",
      companyLogo: "mercadotica.jpg",
      position: 4,
    },
    {
      title: "Desenvolvedor Frontend",
      period: "ago 2021 a out 2021",
      type: "professional",
      company: "FWC Tecnologia",
      companyLogo: "fwc.jpg",
      position: 3,
    },
    {
      title: "Desenvolvedor Frontend",
      period: "nov 2021 a mar 2022",
      type: "professional",
      company: "Órulo",
      companyLogo: "orulo.jpg",
      position: 2,
    },
    {
      title: "Desenvolvedor Frontend",
      period: "mar 2022 a abr 2023",
      type: "professional",
      company: "Vetta Tecnologia",
      companyLogo: "vetta.jpg",
      position: 1,
    },
    {
      title: "Campus Party BA - Salvador",
      period: "2018",
      type: "event",
      companyLogo: "campus-party.png",
      company: "Campus Party",
      position: 3,
    },
    {
      title: "SECOMP - UESB",
      period: "2018",
      company: "UESB",
      type: "event",
      companyLogo: "secomp.png",
      position: 2,
    },
    {
      title: "SECOMP - UESB",
      period: "2019",
      company: "UESB",
      type: "event",
      companyLogo: "secomp.png",
      position: 1,
    },
    {
      title: "Campus Party BR - São Paulo",
      period: "2023",
      type: "event",
      company: "Campus Party",
      companyLogo: "campus-party.png",
      position: 0,
    },
    {
      title: "Introdução a Javascript",
      period: "mai 2019",
      company: "Udemy",
      type: "course",
      companyLogo: "udemy.png",
      position: 3,
    },
    {
      title: "Introdução ao Python",
      period: "mai 2019",
      company: "Udemy",
      type: "course",
      companyLogo: "udemy.png",
      position: 2,
    },
    {
      title: "React Native",
      period: "mai 2019 a jun 2019",
      company: "Udemy",
      type: "course",
      companyLogo: "udemy.png",
      position: 2,
    },
    {
      title: "Semana Omnistack",
      period: "mar 2020",
      company: "Rockeatseat",
      type: "course",
      companyLogo: "rockeatseat.png",
      position: 1,
    },
    {
      title: "Design Patterns",
      period: "ago 2023",
      company: "Udemy",
      type: "course",
      companyLogo: "udemy.png",
      position: 0,
    },
    {
      title: "Desenvolvedor Frontend",
      period: "out 2023 até hoje",
      company: "King House",
      type: "professional",
      companyLogo: "king-house.png",
      position: 0,
    },
  ],
  setCareers: (careers) => set({ careers }),
  setTypeSelected: (type) => set({ typeSelected: type }),
}))

export default useCareer
