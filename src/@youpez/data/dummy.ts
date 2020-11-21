import {TableModel, TableItem, TableHeaderItem} from "carbon-components-angular"
import {AvatarGenerator} from 'random-avatar-generator'
import {uniqueNamesGenerator, names, Config, countries,} from 'unique-names-generator'
import {getUniqueId} from "../components/app-tasks/app-tasks.component"

const generator = new AvatarGenerator()
const config: Config = {
  dictionaries: [countries]
}
const configName: Config = {
  dictionaries: [names]
}
const getDaysArray = function (s, e) {
  let a = []
  for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
    a.push(new Date(d))
  }
  return a
}

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const getDummyModel = () => {
  const model = new TableModel()
  model.header = [
    new TableHeaderItem({
      data: "Name",
      className: "items-center font-bold"
    }),
    new TableHeaderItem({
      data: "Country",
      className: "items-center"
    }),
    new TableHeaderItem({
      data: "Proficiency",
      className: "items-center",
    }),
    new TableHeaderItem({
      data: "Total",
      className: "items-center",
    }),
    new TableHeaderItem({
      data: "Status",
      className: "items-center",
    })
  ]
  model.data = [
    [new TableItem({data: "Adeel Mercer"}), new TableItem({data: "Mexico"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "221"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Geraint Witt"}), new TableItem({data: "Czech Republic"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "20"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Leyton Walmsley"}), new TableItem({data: "Netherlands"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "450"}), new TableItem({data: "0"}),],
    [new TableItem({data: "Raja Rivera"}), new TableItem({data: "Pakistan"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "1200"}), new TableItem({data: "0"}),],
    [new TableItem({data: "Kaia Merritt"}), new TableItem({data: "Mozambique"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "560"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Phoenix Best"}), new TableItem({data: "French Polynesia"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "100"}), new TableItem({data: "0"}),],
    [new TableItem({data: "Luke Davenport"}), new TableItem({data: "Uruguay"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "345"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Gene Davidson"}), new TableItem({data: "Kyrgyzstan"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "100"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Olivia Mullins"}), new TableItem({data: "Uganda"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "10"}), new TableItem({data: "0"}),],
    [new TableItem({data: "Missy Beasley"}), new TableItem({data: "Bahrain"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "560"}), new TableItem({data: "0"}),],
    [new TableItem({data: "Lorenzo Faulkner"}), new TableItem({data: "Nigeria"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "122"}), new TableItem({data: "0"}),],
    [new TableItem({data: "Rita Compton"}), new TableItem({data: "Brazil"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "240"}), new TableItem({data: "0"}),],
    [new TableItem({data: "Timur Plummer"}), new TableItem({data: "Tonga"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "100"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Khadeejah Juarez"}), new TableItem({data: "Cuba"}), new TableItem({data: getRandomArbitrary(0, 100)}), new TableItem({data: "330"}), new TableItem({data: "1"}),]
  ]
  return model
}

export const getDummyData = (rows = 100) => {
  return Array.from({length: rows}).map(() => {
    return {
      id: getUniqueId(2),
      avatar: generator.generateRandomAvatar(),
      total: getRandomArbitrary(500, 2500),
      registered: getRandomArbitrary(0, 1),
      name: uniqueNamesGenerator(configName),
      country: uniqueNamesGenerator(config),
      proficiency: getRandomArbitrary(0, 100),
    }
  })
}
