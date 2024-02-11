import * as path from 'path'
import * as chalk from 'chalk'
import { copyDirectory } from '../utils/copy'


export const InitHandler = async (projectName: string) => {
  console.log(projectName)
  if(!projectName || projectName.length === 0) {
    throw new Error('Project name is required')
  }
  console.log(`Initializing ${projectName}...`)
  const templateDirectory = path.join(__dirname, '..', '..', 'templates', 'base')
  const destinationDirectory = path.join(process.cwd(), projectName)
  await copyDirectory(templateDirectory, destinationDirectory)
  const nextSteps = [
    `cd ${projectName}`,
    "npm install",
    "Update LLM Model Config in src/index.ts",
    "Run 'palico-cli dev' to start a local server"
  ]
  console.log(chalk.green('Project initialized!'))
  console.log(chalk.blue('Next Steps:'))
  nextSteps.forEach((step, index) => {
    console.log(chalk.blue(`${index + 1}. ${step}`))
  })
}