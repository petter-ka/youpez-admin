import {TableModel, TableItem, TableHeaderItem} from "carbon-components-angular"

export const getDummyModel = () => {
  const model = new TableModel()
  model.header = [
    new TableHeaderItem({
      data: "Name"
    }),
    new TableHeaderItem({
      data: "Country",
      className: "my-class"
    }),
    new TableHeaderItem({
      data: "Goals",
      className: "my-class",
      style: {
        width: '50px',
        justifyContent: 'center',
      },
    })
  ]
  model.data = [
    [new TableItem({data: "Adeel Mercer"}), new TableItem({data: "Mexico"}), new TableItem({data: "2"}),],
    [new TableItem({data: "Geraint Witt"}), new TableItem({data: "Czech Republic"}), new TableItem({data: "2"}),],
    [new TableItem({data: "Leyton Walmsley"}), new TableItem({data: "Netherlands"}), new TableItem({data: "4"}),],
    [new TableItem({data: "Raja Rivera"}), new TableItem({data: "Pakistan"}), new TableItem({data: "6"}),],
    [new TableItem({data: "Kaia Merritt"}), new TableItem({data: "Mozambique"}), new TableItem({data: "7"}),],
    [new TableItem({data: "Phoenix Best"}), new TableItem({data: "French Polynesia"}), new TableItem({data: "1"}),],
    [new TableItem({data: "Luke Davenport"}), new TableItem({data: "Uruguay"}), new TableItem({data: "2"}),],
    [new TableItem({data: "Gene Davidson"}), new TableItem({data: "Kyrgyzstan"}), new TableItem({data: "3"}),],
    [new TableItem({data: "Olivia-Rose Mullins"}), new TableItem({data: "Uganda"}), new TableItem({data: "6"}),],
    [new TableItem({data: "Missy Beasley"}), new TableItem({data: "Bahrain"}), new TableItem({data: "7"}),],
    [new TableItem({data: "Lorenzo Faulkner"}), new TableItem({data: "Nigeria"}), new TableItem({data: "9"}),],
    [new TableItem({data: "Rita Compton"}), new TableItem({data: "Brazil"}), new TableItem({data: "5"}),],
    [new TableItem({data: "Timur Plummer"}), new TableItem({data: "Tonga"}), new TableItem({data: "6"}),],
    [new TableItem({data: "Khadeejah Juarez"}), new TableItem({data: "Cuba"}), new TableItem({data: "7"}),]
  ]
  return model
}
