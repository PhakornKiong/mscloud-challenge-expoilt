const fetch = require('node-fetch');
const write = require('write');
const path = require('./path.json');
const baseUrl = 'https://docs.microsoft.com/api/hierarchy/paths/'

const listOfUnitPath = []

async function main() {

  const getUnitFromMS = async () => {
    return Promise.all(path.map(async (path) => {
      const res = await fetch(`${baseUrl}/${path}`)
      const result = await res.json()
      await result.modules.forEach(async (module) => {
        await module.units.forEach(async (unit) => {
          await listOfUnitPath.push(unit.uid)
        })
      })
    }))
  }

  await getUnitFromMS()

  write.sync('unit.json', JSON.stringify(listOfUnitPath), { newline: true })
}


main()