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
      company: "IFNMG",
      companyLogo: "ifnmg.png",
    },
    {
      title: "Bacharelado em Ciência da Computação",
      period: "2017 a 2025",
      type: "academic",
      company: "UESB",
      companyLogo: "uesb.png",
    },
    {
      title: "Desenvolvedor Fullstack",
      period: "ago 2020 a ago 2021",
      type: "professional",
      company: "Mercadótica Franquias",
      companyLogo: "mercadotica.jpg",
    },
    {
      title: "Desenvolvedor Frontend",
      period: "ago 2021 a out 2021",
      type: "professional",
      company: "FWC Tecnologia",
      companyLogo: "fwc.jpg",
    },
    {
      title: "Desenvolvedor Frontend",
      period: "nov 2021 a mar 2022",
      type: "professional",
      company: "Órulo",
      companyLogo: "orulo.jpg",
    },
    {
      title: "Desenvolvedor Frontend",
      period: "mar 2022 a abr 2023",
      type: "professional",
      company: "Vetta Tecnologia",
      companyLogo: "vetta.jpg",
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
      companyLogo: "campus-party.png",
    },
    {
      title: "Semana da Computação - UESB",
      period: "2018",
      company: "UESB",
      type: "event",
      companyLogo: "secomp.png",
    },
    {
      title: "Semana da Computação - UESB",
      period: "2019",
      company: "UESB",
      type: "event",
      companyLogo: "secomp.png",
    },
    {
      title: "Campus Party BR",
      period: "2023",
      type: "event",
      companyLogo: "campus-party.png",
    },
    {
      title: "Introdução a Javascript",
      period: "mai 2019",
      company: "Udemy",
      type: "course",
      companyLogo: "udemy.png",
    },
    {
      title: "Introdução ao Python",
      period: "mai 2019",
      company: "Udemy",
      type: "course",
      companyLogo: "udemy.png",
    },
    {
      title: "React Native",
      period: "mai 2019 a jun 2019",
      company: "Udemy",
      type: "course",
      companyLogo: "udemy.png",
    },
    {
      title: "Semana Omnistack",
      period: "mar 2020",
      company: "Rockeatseat",
      type: "course",
      companyLogo: "rockeatseat.png",
    },
    {
      title: "Design Patterns",
      period: "ago 2023",
      company: "Udemy",
      type: "course",
      companyLogo: "udemy.png",
    },
  ],
  setCareers: (careers) => set({ careers }),
  setTypeSelected: (type) => set({ typeSelected: type }),
}))

export default useCareer
