const list = require('./list.json');
const write = require('write');

const listOfLearningPathID = []

list.learningPaths.forEach((path) => {
  listOfLearningPathID.push(path.uid)
})

write.sync('path.json', JSON.stringify(listOfLearningPathID), { newline: true })