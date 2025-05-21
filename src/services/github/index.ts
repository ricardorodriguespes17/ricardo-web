import { GithubUserType } from "@/@types/GithubUserType"
import { githubApi } from "./api"
import { RepositoryType } from "@/@types/RepositoryType"

type Props = {
  username: string
}

export const getGithubUser = (data: Props) => {
  return githubApi.get<GithubUserType>(`/users/${data.username}`)
}

export const getGithubRepositories = (data: Props) => {
  return githubApi.get<RepositoryType[]>(`/users/${data.username}/repos`)
}
