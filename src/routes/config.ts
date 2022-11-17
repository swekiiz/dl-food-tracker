import { RouteRole } from 'types/enums'
import { Routes } from 'types/route'

export const ROUTES_CONFIG: Routes = [
  {
    path: '/',
    role: RouteRole.NOT_AUTH,
  },
]
