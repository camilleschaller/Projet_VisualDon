import bb from 'billboard.js'
const dataGraph1 = require("../data/graph1/annee.json")
const dataGraph2 = require("../data/graph2/data.json")
const dataGraph3 = require("../data/graph3/data.json")


// graph1

bb.generate({
  bindto: "#graph1",
  data: {
      type: "bar",
      json: {
          "Nombre de films par années": dataGraph1.map(({ count }) => count),
      }
  },
  axis: {
      x: {
          type: 'category',
          categories: dataGraph1.map(({ Released_Year }) => Released_Year),
      },
      y: {
          label: {
              text: "Nombre de films",
              position: "outer-middle"
          }
      },
  },

  bar: {
    width: {
      ratio: 0.4
    }
  },


})

//graph2

var chart = bb.generate({
    data: {
        json: {
            "Genre": dataGraph2.map(({ count }) => count),
        },
        type: "pie", 
        onclick: function (d, i) {
        console.log("onclick", d, i);
        },
        onover: function (d, i) {
        console.log("onover", d, i);
        },
        onout: function (d, i) {
        console.log("onout", d, i);
        }
    },
    bindto: "#graph2"
  });
  
  setTimeout(function() {
      chart.load({
        json: {
            "Genre": dataGraph2.map(({ Genre }) => Genre),
        },
      });
  }, 1000);

  //graph3
  
  bb.generate({
    bindto: "#graph3",
    data: {
        type: "bar",
        json: {
            "Durée des films": dataGraph3.map(({ Runtime }) => Runtime),
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: dataGraph3.map(({ Series_Title }) => Series_Title),
        },
        y: {
            label: {
                text: "Durée en minute",
                position: "outer-middle"
            }
        },
    },
    bar: {
      width: {
        ratio: 2
      }
    },
  
  })

//graph4
  
  bb.generate({
    bindto: "#graph4",
    data: {
        type: "bar",
        json: {
            "Notations par IMDb": dataGraph3.map(({ IMDB_Rating }) => IMDB_Rating),
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: dataGraph3.map(({ Series_Title }) => Series_Title),
        },
        y: {
            label: {
                text: "Notation de IMDb sur 10",
                position: "outer-middle"
            }
        },
    },
    bar: {
      width: {
        ratio: 2
      }
    },
  
  })

  //graph5
  
  bb.generate({
    bindto: "#graph4",
    data: {
        type: "bar",
        json: {
            "Recette des films": dataGraph3.map(({ Gross }) => Gross),
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: dataGraph3.map(({ Series_Title }) => Series_Title),
        },
        y: {
            label: {
                text: "Recette du film",
                position: "outer-middle"
            }
        },
    },
    bar: {
      width: {
        ratio: 2
      }
    },
  
  })
