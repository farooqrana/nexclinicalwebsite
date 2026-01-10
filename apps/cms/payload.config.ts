import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Pages } from './collections/Pages'
import { Branding } from './collections/Branding'
import { Images } from './collections/Images'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const mockModuleLoader = async () => {
  return {}
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Pages, Branding, Images],
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: {
    defaultIDType: 'uuid',
    mongoURL:
      process.env.DATABASE_URI ||
      'mongodb://localhost:27017/nexclinical-cms',
  },
  plugins: [],
  async onInit(payload) {
    payload.logger.info('Payload CMS initialized')
  },
})
