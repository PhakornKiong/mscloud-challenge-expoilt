const fetch = require('node-fetch');
const write = require('write');

const baseAPI = "https://docs.microsoft.com/api/learn/catalog"

async function main() {
  fetch(baseAPI)
    .then(res => res.json())
    .then((json) => {
      console.log(json);
      write.sync('list.json', JSON.stringify(json), { newline: true })
    });
}

main()