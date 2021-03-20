import 'regenerator-runtime/runtime'
import * as faker from 'faker'
import { validateWorkspaceDto } from './workspace'
import { validateUuid } from './common'

function generateValidWorkSpace() {
  const name = faker.commerce.productName()
  return {
    name: faker.company.companyName(),
    description: faker.commerce.productDescription(),
    disease: {
      name,
      abbreviation: faker.hacker.abbreviation(),
      omimId: faker.helpers.slugify(name),
      causalGene: faker.lorem.word(),
      mutationImpact: faker.lorem.sentence(),
      proteinSize: faker.random.number(),
    },
  }
}
describe('Create Workspace Validation', () => {
  test('Valid workspace payload', () => {
    const workspace = generateValidWorkSpace()
    expect(() => validateWorkspaceDto(workspace)).not.toThrow()
  })

  test('InValid workspace name - very long', () => {
    const workspace = generateValidWorkSpace()
    workspace.name = faker.lorem.paragraph(300)
    expect(() => validateWorkspaceDto(workspace)).toThrow('invalid data')
  })
})
