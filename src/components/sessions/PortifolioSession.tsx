"use client"

import { useEffect, useState } from "react"
import { TbExternalLink } from "react-icons/tb"
import RepoItems from "../common/RepoItems"
import BaseSession from "../layout/BaseSession"
import Button from "../ui/Button"
import { getGithubRepositories, getGithubUser } from "@/services/github"
import { GithubUserType } from "@/@types/GithubUserType"
import { RepositoryType } from "@/@types/RepositoryType"

const githubUsername = "ricardorodriguespes17"

const PortifolioSession = () => {
  const [userData, setUserData] = useState<GithubUserType>()
  const [repositories, setRepositories] = useState<RepositoryType[]>([])

  useEffect(() => {
    const loadData = async () => {
      const response = await getGithubUser({ username: githubUsername })
      setUserData(response.data)
    }

    const loadRepositories = async () => {
      const response = await getGithubRepositories({ username: githubUsername })
      setRepositories(response.data)
    }

    loadData()
    loadRepositories()
  }, [])

  if (!userData) {
    return <></>
  }

  return (
    <BaseSession>
      <h2 className="mb-4">Portifólio</h2>

      <div className="flex w-full gap-4">
        <img
          src="https://avatars.githubusercontent.com/u/39037180?v=4"
          alt="Foto do perfil do Github de Ricardo"
          className="w-20 aspect-square rounded-full"
        />

        <div className="flex flex-col w-[350px]">
          <h4>{userData?.name}</h4>
          <p className="text-sm text-gray-80 dark:text-gray-30">
            {userData?.bio}
          </p>
        </div>

        <div className="flex flex-col text-sm text-gray-80  dark:text-gray-30">
          <label>{repositories.length} repositórios públicos</label>
        </div>
      </div>

      <RepoItems repositories={repositories} />

      <div className="w-full flex justify-between items-center">
        <p className="text-sm">
          Integrado com a API do <strong>Github</strong>
        </p>
        <Button
          variant="plain"
          size="xs"
          target="_blank"
          href={`https://github.com/${githubUsername}`}
        >
          Ver mais
          <TbExternalLink />
        </Button>
      </div>
    </BaseSession>
  )
}

export default PortifolioSession
