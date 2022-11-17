import { RouteRole } from 'types/enums'

export type Route = {
  path: string
  role: RouteRole
}

export type Routes = Route[]
