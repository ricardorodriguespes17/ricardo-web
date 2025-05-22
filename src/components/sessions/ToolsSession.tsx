import { SiNextdotjs, SiNodedotjs, SiTypescript } from "react-icons/si"
import BaseSession from "../layout/BaseSession"
import Button from "../ui/Button"
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { LiaGitAlt } from "react-icons/lia"
import data from "@/data"

const ToolsSession = () => {
  return (
    <BaseSession>
      <h2 className="mb-6">{data.tools.title}</h2>

      <div className="flex flex-wrap gap-4">
        <Button size="sm" href="https://nextjs.org/">
          <SiNextdotjs />
          NextJS
        </Button>
        <Button size="sm" href="https://react.dev/">
          <RiReactjsLine />
          ReactJS
        </Button>
        <Button size="sm" href="https://www.typescriptlang.org/">
          <SiTypescript />
          Typescript
        </Button>
        <Button size="sm" href="https://tailwindcss.com/">
          <RiTailwindCssFill />
          Tailwind CSS
        </Button>
        <Button size="sm" href="https://zustand-demo.pmnd.rs/">
          Zustand
        </Button>
        <Button size="sm" href="https://react-icons.github.io/react-icons/">
          React Icons
        </Button>
        <Button size="sm" href="https://nodejs.org/">
          <SiNodedotjs />
          NodeJS
        </Button>
        <Button size="sm" href="https://git-scm.com/">
          <LiaGitAlt />
          Git
        </Button>
      </div>
    </BaseSession>
  )
}

export default ToolsSession
