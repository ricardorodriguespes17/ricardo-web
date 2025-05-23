"use client"

import { FiCopy } from "react-icons/fi"
import Button from "./Button"
import useAlert from "@/store/alertStore"

type Props = {
  text: string
}

const ButtonCopy = (props: Props) => {
  const { showAlert } = useAlert()

  const handleCopy = () => {
    navigator.clipboard
      .writeText(props.text)
      .then(() => {
        showAlert({
          content: "Texto copiado para a área de transferência!",
        })
      })
      .catch((err) => {
        console.error("Falha ao copiar o texto: ", err)
      })
  }

  return (
    <Button className="p-0" variant="plain" onClick={handleCopy}>
      <FiCopy />
    </Button>
  )
}

export default ButtonCopy
