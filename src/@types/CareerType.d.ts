type CareerType = {
  title: string
  description?: string
  period: string
  type: CareerTypes
  company?: string
  companyLogo?: string
  position: number
}

type CareerTypes = "academic" | "course" | "event" | "professional"
