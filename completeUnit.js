const fetch = require('node-fetch');
const unitArr = require('./unit.json');
const delay = require('delay');
require('dotenv').config();

const baseUrl = 'https://docs.microsoft.com/api/progress/units/'

// Put your bearer token here
const token = process.env.TOKEN

async function main() {

  const completeUnit = async () => {

    for (const unit of unitArr) {
      try {
        const res = await fetch(`${baseUrl}/${unit}`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${token}` },
        })
        const result = await res.json()
        await delay(1000);
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  await completeUnit()

}

main()
