"use client"

import { useEffect, useState } from "react"
import { RiImageCircleFill } from "react-icons/ri"

type Props = {
  companyLogo?: string
}

const CareerItemLogo = (props: Props) => {
  const [logo, setLogo] = useState<string | undefined>()

  useEffect(() => {
    if (props.companyLogo) {
      setLogo(`/assets/logos/${props.companyLogo}`)
    } else {
      setLogo(undefined)
    }
  }, [props.companyLogo])

  return (
    <div className="min-w-16 max-w-16 aspect-square h-fit rounded-md flex items-center justify-center">
      {logo ? (
        <img
          className="w-full rounded-md"
          src={logo}
          alt={props.companyLogo}
          onError={() => setLogo(undefined)}
        />
      ) : (
        <RiImageCircleFill size={70} />
      )}
    </div>
  )
}

export default CareerItemLogo
