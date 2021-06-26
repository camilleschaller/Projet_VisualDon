import bb from 'billboard.js'
import dataGraph1 from '../data/graph1/annee.json'

// graph1

bb.generate({
  data: {
    json: {
      ['Nombre de films par années']: dataGraph1.map(({ count }) => count),
    },
    type: 'bar',
  },
  axis: {
    x: {
      type: 'category',
      categories: dataGraph1.map(({Released_Year}) => Released_Year),
    },
    y: {
      label: {
          text: "Nombre de films",
          position: "outer-middle"
      }
    },
  },
  color: {
    pattern: [
        'rgb(82, 55, 30)',
        '#2b6f2d',
        '#398a89',
        '#d13800'

    ],
  },

  bar: {
    radius: {
        ratio: 0.1
    }
  },
  bindto: "#graph1",
})