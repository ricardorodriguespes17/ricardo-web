type CareerType = {
  title: string
  description?: string
  period: string
  type: CareerTypes
  company?: string
}

type CareerTypes = "academic" | "course" | "event" | "professional"
