import { Request, Response, Router } from 'express'
import crud from '../../utils/crud'

const router = Router()
crud(router)('trip')

export default router