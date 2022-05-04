function waterfall_01(){
    var data = [
        {
            name: "2018",
            type: "waterfall",
            orientation: "v",
            measure: [
                "relative",
                "relative",
                "total",
                "relative",
                "relative",
                "total"
            ],
            x: [
                "Sales",
                "Consulting",
                "Net revenue",
                "Purchases",
                "Other expenses",
                "Profit before tax"
            ],
            textposition: "outside",
            text: [
                "+60",
                "+80",
                "",
                "-40",
                "-20",
                "Total"
            ],          
            y: [
                60,
                80,
                0,
                -40,
                -20,
                0
            ],
            connector: {
              line: {
                color: "rgb(63, 63, 63)"
              }
            },
        }
    ];
 layout = {
        title: {
            text: "Profit and loss statement 2018"
        },
        xaxis: {
            type: "category"
        },
        yaxis: {
            type: "linear"
        },
        autosize: true,
        showlegend: true
    };
Plotly.newPlot('1', data, layout);
}

function waterfall_02(){
    var gd = document.getElementById('myDiv');
var data = [
    {
      type: "waterfall",
      x: [
        ["2016", "2017", "2017", "2017", "2017", "2018", "2018", "2018", "2018"],
        ["initial", "q1", "q2", "q3", "total", "q1", "q2", "q3", "total" ]
      ],
      measure: ["absolute", "relative", "relative", "relative", "total", "relative", "relative", "relative", "total"],
      y: [10, 20, 30, -10, null, 10, 20, -40, null],
      base: 300,
    decreasing: { marker: { color: "Maroon" , line:{color : "red", width :2}}},
    increasing: { marker: { color: "Teal"} },
    totals: { marker: { color: "deep sky blue", line:{color:'blue',width:3}} }
    }];
var layout = {title: {
            text: "Profit and loss statement"
        },
    waterfallgap : 0.3,
    xaxis: {
      title: "",
      tickfont: {size: 15},
      ticks: "outside"
    }
  }
Plotly.newPlot('2', data, layout);
}

function speed(){
    var data = [
        {
          type: "indicator",
          value: 200,
          delta: { reference: 160 },
          gauge: { axis: { visible: false, range: [0, 250] } },
          domain: { row: 0, column: 0 }
        },
        {
          type: "indicator",
          value: 120,
          gauge: {
            shape: "bullet",
            axis: {
              visible: false,
              range: [-200, 200]
            }
          },
          domain: { x: [0.1, 0.5], y: [0.15, 0.35] }
        },
        {
          type: "indicator",
          mode: "number+delta",
          value: 300,
          domain: { row: 0, column: 1 }
        },
        { type: "indicator", mode: "delta", value: 40, domain: { row: 1, column: 1 } }
      ];
      
      var layout = {
        width: 600,
        height: 400,
        margin: { t: 25, b: 25, l: 25, r: 25 },
        grid: { rows: 2, columns: 2, pattern: "independent" },
        template: {
          data: {
            indicator: [
              {
                title: { text: "Speed" },
                mode: "number+delta+gauge",
                delta: { reference: 90 }
              }
            ]
          }
        }
      };
      
      Plotly.newPlot('3', data, layout);  
      
}

function indicator(){
    var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: 450,
          title: { text: "Speed" },
          type: "indicator",
          mode: "gauge+number",
          delta: { reference: 400 },
          gauge: { axis: { range: [null, 500] } }
        }
      ];
      
      var layout = { width: 600, height: 400 };
      Plotly.newPlot('4', data, layout);
        
      
}

function bullet(){
    var data = [
        {
          type: "indicator",
          mode: "number+gauge+delta",
          gauge: { shape: "bullet" },
          delta: { reference: 300 },
          value: 220,
          domain: { x: [0, 1], y: [0, 1] },
          title: { text: "Profit" }
        }
      ];
      
      var layout = { width: 600, height: 250 };
      Plotly.newPlot('5', data, layout);
      
}

function indicator2(){
            var data = [
        {
            type: "indicator",
            mode: "number+delta",
            value: 492,
            delta: { reference: 512, valueformat: ".0f" },
            ticker: { showticker: true },
            vmax: 500,
            domain: { y: [0, 1], x: [0.25, 0.75] },
            title: { text: "Users online" }
        },
        {
            y: [325, 324, 405, 400, 424, 404, 417, 432, 419, 394, 410, 426, 413, 419, 404, 408, 401, 377, 368, 361, 356, 359, 375, 397, 394, 418, 437, 450, 430, 442, 424, 443, 420, 418, 423, 423, 426, 440, 437, 436, 447, 460, 478, 472, 450, 456, 436, 418, 429, 412, 429, 442, 464, 447, 434, 457, 474, 480, 499, 497, 480, 502, 512, 492]
        }
        ];

        var layout = { width: 600, height: 450, xaxis: { range: [0, 62] } };
    Plotly.newPlot('6', data, layout);
}

function indicator3(){
  var data = [
    {
      type: "indicator",
      mode: "number+delta",
      value: 400,
      number: { prefix: "$" },
      delta: { position: "top", reference: 320 },
      domain: { x: [0, 1], y: [0, 1] }
    }
  ];
  
  var layout = {
    paper_bgcolor: "lightgray",
    width: 600,
    height: 200,
    margin: { t: 0, b: 0, l: 0, r: 0 }
  };
  
  Plotly.newPlot('7', data, layout);
}

function waterfall3(){
  var gd = document.getElementById('myDiv');
  var data = [
      {
        type: "waterfall",
        x: [
          ["2016", "2017", "2017", "2017", "2017", "2018", "2018", "2018", "2018"],
          ["initial", "q1", "q2", "q3", "total", "q1", "q2", "q3", "total" ]
        ],
        measure: ["absolute", "relative", "relative", "relative", "total", "relative", "relative", "relative", "total"],
        y: [1, 2, 3, -1, null, 1, 2, -4, null],
        base: 1000
      },
      {
        type: "waterfall",
        x: [
          ["2016", "2017", "2017", "2017", "2017", "2018", "2018", "2018", "2018"],
          ["initial", "q1", "q2", "q3", "total", "q1", "q2", "q3", "total" ]
        ],
        measure: ["absolute", "relative", "relative", "relative", "total", "relative", "relative", "relative", "total"],
        y: [1.1, 2.2, 3.3, -1.1, null, 1.1, 2.2, -4.4, null],
        base: 1000
      }
    ];
  var layout = {
      waterfallgroupgap : 0.5,
      xaxis: {
        title: "MULTI-CATEGORY",
        tickfont: {size: 16},
        ticks: "outside"
      }
    }
  Plotly.newPlot('8', data, layout);
}

function waterfall4(){
  var gd = document.getElementById('myDiv');
  var data = [
          {
              name: "2018",
              type: "waterfall",
              orientation: "h",
              measure: [
                  "relative",
                  "relative",
                  "relative",
                  "relative",
                  "total",
                  "relative",
                  "relative",
                  "relative",
                  "relative",
                  "total",
                  "relative",
                  "relative",
                  "total",
                  "relative",
                  "total"
              ],
              y: [
                  "Sales",
                  "Consulting",
                  "Maintenance",
                  "Other revenue",
                  "Net revenue",
                  "Purchases",
                  "Material expenses",
                  "Personnel expenses",
                  "Other expenses",
                  "Operating profit",
                  "Investment income",
                  "Financial income",
                  "Profit before tax",
                  "Income tax (15%)",
                  "Profit after tax"
              ],
              x: [
                  375,
                  128,
                  78,
                  27,
                  null,
                  -327,
                  -12,
                  -78,
                  -12,
                  null,
                  32,
                  89,
                  null,
                  -45,
                  null
              ],
              connector: {
                  mode: "between",
                  line: {
                      width: 4,
                      color: "rgb(0, 0, 0)",
                      dash: 0
                  }
              }
          }
      ];
  var layout = {title: {
              text: "Profit and loss statement 2018<br>waterfall chart displaying positive and negative"
          },
          yaxis: {
              type: "category",
              autorange: "reversed"
          },
          xaxis: {
              type: "linear"
          },
          margin: { l: 150 },
          showlegend: true
      }
  Plotly.newPlot('9', data, layout);
}

function candle(){
  var trace1 = {
  
    x: ['2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10', '2017-02-13', '2017-02-14', '2017-02-15'], 
    
    close: [116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25, 119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995, 133.289993, 135.020004, 135.509995], 
    
    decreasing: {line: {color: '#7F7F7F'}}, 
    
    high: [116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003, 119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002, 133.820007, 135.089996, 136.270004], 
    
    increasing: {line: {color: '#17BECF'}}, 
    
    line: {color: 'rgba(31,119,180,1)'}, 
    
    low: [115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998, 118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995], 
    
    open: [115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998, 118.900002, 119.110001, 118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007, 133.080002, 133.470001, 135.520004], 
    
    type: 'candlestick', 
    xaxis: 'x', 
    yaxis: 'y'
  };
  
  var data = [trace1];
  
  var layout = {
    dragmode: 'zoom', 
    margin: {
      r: 10, 
      t: 25, 
      b: 40, 
      l: 60
    }, 
    showlegend: false, 
    xaxis: {
      autorange: true, 
      domain: [0, 1], 
      range: ['2017-01-03 12:00', '2017-02-15 12:00'], 
      rangeslider: {range: ['2017-01-03 12:00', '2017-02-15 12:00']}, 
      title: 'Date', 
      type: 'date'
    }, 
    yaxis: {
      autorange: true, 
      domain: [0, 1], 
      range: [114.609999778, 137.410004222], 
      type: 'linear'
    }
  };
  
  Plotly.newPlot('10', data, layout);
}

function candle2(){
  var trace1 = {
  
    x: ['2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10'], 
    
    close: [120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995], 
    
    decreasing: {line: {color: '#7F7F7F'}}, 
    
    high: [120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002], 
    
    increasing: {line: {color: '#17BECF'}}, 
    
    line: {color: 'rgba(31,119,180,1)'}, 
    
    low: [118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003], 
    
    open: [118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007], 
    
    type: 'candlestick', 
    xaxis: 'x', 
    yaxis: 'y'
  };
  
  var data = [trace1];
  
  var layout = {
    dragmode: 'zoom', 
    margin: {
      r: 10, 
      t: 25, 
      b: 40, 
      l: 60
    }, 
    showlegend: false, 
    xaxis: {
      autorange: true, 
      rangeslider: {range: ['2017-01-17 12:00', '2017-02-10 12:00']}, 
      title: 'Date', 
      type: 'date'
    }, 
    yaxis: {
      autorange: true, 
      type: 'linear'
    },
    
    annotations: [
      {
        x: '2017-01-31',
        y: 0.9,
        xref: 'x',
        yref: 'paper',
        text: 'largest movement',
        font: {color: 'magenta'},
        showarrow: true,
        xanchor: 'right',
        ax: -20,
        ay: 0
      }
    ],
    
    shapes: [
        {
            type: 'rect',
            xref: 'x',
            yref: 'paper',
            x0: '2017-01-31',
            y0: 0,
            x1: '2017-02-01',
            y1: 1,
            fillcolor: '#d3d3d3',
            opacity: 0.2,
            line: {
                width: 0
            }
        }
      ]
  };
  
  Plotly.newPlot('11', data, layout);
}

function funnel(){
  var gd = document.getElementById('myDiv');
  var data = [{type: 'funnel', y: ["Website visit", "Downloads", "Potential customers", "Invoice sent", "Closed delas"], x: [13873, 10533, 5443, 2703, 908], hoverinfo: 'x+percent previous+percent initial'}];
  
  var layout = {margin: {l: 150}, width:600, height: 500}
  
  Plotly.newPlot('12', data, layout);
}

function funnel2(){
  var gd = document.getElementById('myDiv');

  var data = [{type: 'funnel',
               y: ["Sales person A", "Sales person B", "Sales person C", "Sales person D", "Sales person E"],
               x: [1200, 909.4, 600.6, 300, 80], textposition: "inside", textinfo: "value+percent initial",
               hoverinfo: 'percent total+x', opacity: 0.65, marker: {color: ["59D4E8", "DDB6C6", "A696C8", "67EACA", "94D2E6"],
               line: {"width": [4, 2, 2, 3, 1, 1], color: ["3E4E88", "606470", "3E4E88", "606470", "3E4E88"]}},
               connector: {line: {color: "royalblue", dash: "dot", width: 3}}}];
  
  var layout = {margin: {l: 100}, width: 600, height: 500}
  
  Plotly.newPlot('13', data, layout);
}

function funnel3(){
  var gd = document.getElementById('myDiv');
  var data = [{type: 'funnel', name: 'Montreal',
    y: ["Website visit", "Downloads", "Potential customers", "Requested price"],
    x: [120, 60, 30, 20],
    textinfo: "value+percent initial"},
    {
       type: 'funnel',name: 'Toronto',
      y: ["Website visit", "Downloads", "Potential customers", "Requested price", "invoice sent"],
      x: [100, 60, 40, 30, 20], textposition: "inside", textinfo: "value+percent previous"},
    {
      type: 'funnel',name: 'Vancouver',
      y: ["Website visit", "Downloads", "Potential customers", "Requested price", "invoice sent", "closed deals"],
      x: [90, 70, 50, 30, 10, 5], textposition: "outside", textinfo: "value+percent total"}];
  
  var layout = {margin: {l: 130, r: 0}, width: 600, funnelmode: "stack", showlegend: 'true'}
  
  Plotly.newPlot('14', data, layout);  
  
}

function funnel4(){
  var gd = document.getElementById('myDiv');
  var data = [{type: 'funnelarea', values: [5, 4, 3, 2, 1], text: ["The 1st", "The 2nd", "The 3rd", "The 4th", "The 5th"],
        marker: {colors: ["59D4E8", "DDB6C6", "A696C8", "67EACA", "94D2E6"],
                  line: {color: ["3E4E88", "606470", "3E4E88", "606470", "3E4E88"], width: [2, 1, 5, 0, 3]}},
        textfont: {family: "Old Standard TT", size: 13, color: "black"}, opacity: 0.65}];
  
  var layout = {margin: {l: 200 , r: 200}, funnelmode: "stack", showlegend: 'True'}
  
  Plotly.newPlot('15', data, layout);  
}

function funnel5(){
  var gd = document.getElementById('myDiv');
  var data = [{type: 'funnelarea', scalegroup: "first", values: [500, 450, 340, 230, 220, 110],
      textinfo: "value", title: {position: "top center", text: "Sales for Sale Person A in U.S."},
      domain: {x: [0, 0.5], y: [0, 0.5]}},
  {
      type: 'funnelarea', scalegroup: "first", values: [600, 500, 400, 300, 200, 100], textinfo: "value",
      title: {position: "top center", text: "Sales of Sale Person B in Canada"},
      domain: {x: [0, 0.5], y: [0.55, 1]}},
  {
      type:'funnelarea', scalegroup: "second", values: [510, 480, 440, 330, 220, 100], textinfo: "value",
      title: {position: "top left", text: "Sales of Sale Person A in Canada"},
      domain: {x: [0.55, 1], y: [0, 0.5]}},
  {
    type: 'funnelarea', scalegroup: "second", values: [360, 250, 240, 130, 120, 60],
    textinfo: "value", title: {position: "top left", text: "Sales of Sale Person B in U.S."},
    domain: {x: [0.55, 1], y: [0.55, 1]}}];
  
  var layout = {width: 600,shapes: [
              {x0: 0, x1: 0.5, y0: 0, y1: 0.5},
              {x0: 0, x1: 0.5, y0: 0.55, y1: 1},
              {x0: 0.55, x1: 1, y0: 0, y1: 0.5},
              {x0: 0.55, x1: 1, y0: 0.55, y1: 1}]}
  
  Plotly.newPlot('16', data, layout);
}

function time(){
  var data = [
    {
      x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
      y: [1, 3, 6],
      type: 'scatter'
    }
  ];
  
  Plotly.newPlot('17', data);

}

function time1(){

  d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  
  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: 'AAPL High',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'AAPL.High'),
    line: {color: '#17BECF'}
  }
  
  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: 'AAPL Low',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'AAPL.Low'),
    line: {color: '#7F7F7F'}
  }
  
  var data = [trace1,trace2];
  
  var layout = {
    title: 'Basic Time Series',
  };
  
  Plotly.newPlot('18', data, layout);
  })
}

function time2(){
  d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  
  var trace1 = {
    type: "scatter",
    mode: "lines",
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'AAPL.High'),
    line: {color: '#17BECF'}
  }
  
  var trace2 = {
    type: "scatter",
    mode: "lines",
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'AAPL.Low'),
    line: {color: '#7F7F7F'}
  }
  
  var data = [trace1,trace2];
  
  var layout = {
    title: 'Custom Range',
    xaxis: {
      range: ['2016-07-01', '2016-12-31'],
      type: 'date'
    },
    yaxis: {
      autorange: true,
      range: [86.8700008333, 138.870004167],
      type: 'linear'
    }
  };
  
  Plotly.newPlot('19', data, layout);
  })
}

function time3(){
  d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }
  
  
  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: 'AAPL High',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'AAPL.High'),
    line: {color: '#17BECF'}
  }
  
  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: 'AAPL Low',
    x: unpack(rows, 'Date'),
    y: unpack(rows, 'AAPL.Low'),
    line: {color: '#7F7F7F'}
  }
  
  var data = [trace1,trace2];
  
  var layout = {
    title: 'Time Series with Rangeslider',
    xaxis: {
      autorange: true,
      range: ['2015-02-17', '2017-02-16'],
      rangeselector: {buttons: [
          {
            count: 1,
            label: '1m',
            step: 'month',
            stepmode: 'backward'
          },
          {
            count: 6,
            label: '6m',
            step: 'month',
            stepmode: 'backward'
          },
          {step: 'all'}
        ]},
      rangeslider: {range: ['2015-02-17', '2017-02-16']},
      type: 'date'
    },
    yaxis: {
      autorange: true,
      range: [86.8700008333, 138.870004167],
      type: 'linear'
    }
  };
  
  Plotly.newPlot('20', data, layout);
  })
}

function candle3(){
  d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(err, rows){

    function unpack(rows, key) {
      return rows.map(function(row) {
        return row[key];
      });
    }
    
    var trace = {
      x: unpack(rows, 'Date'),
      close: unpack(rows, 'AAPL.Close'),
      high: unpack(rows, 'AAPL.High'),
      low: unpack(rows, 'AAPL.Low'),
      open: unpack(rows, 'AAPL.Open'),
    
      // cutomise colors
      increasing: {line: {color: 'black'}},
      decreasing: {line: {color: 'red'}},
    
      type: 'candlestick',
      xaxis: 'x',
      yaxis: 'y'
    };
    
    var data = [trace];
    
    var layout = {
      dragmode: 'zoom',
      showlegend: false,
      xaxis: {
        rangeslider: {
         visible: false
       }
      }
    };
    
    Plotly.newPlot('21', data, layout);
    });

}

function candle4(){
  d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(err, rows){

    function unpack(rows, key) {
      return rows.map(function(row) {
        return row[key];
      });
    }
    
    var trace = {
      x: unpack(rows, 'Date'),
      close: unpack(rows, 'AAPL.Close'),
      high: unpack(rows, 'AAPL.High'),
      low: unpack(rows, 'AAPL.Low'),
      open: unpack(rows, 'AAPL.Open'),
    
      // cutomise colors
      increasing: {line: {color: 'black'}},
      decreasing: {line: {color: 'red'}},
    
      type: 'candlestick',
      xaxis: 'x',
      yaxis: 'y'
    };
    
    var data = [trace];
    
    var layout = {
      dragmode: 'zoom',
      showlegend: false,
      xaxis: {
        title: 'Date',
       range: ['2016-06-01 12:00', '2017-01-01 12:00']
      },
      yaxis: {
        autorange: true,
      }
    };
    
    Plotly.newPlot('22', data, layout);
    });
}

function candle5(){
  d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(err, rows){

    function unpack(rows, key) {
      return rows.map(function(row) {
        return row[key];
      });
    }
    
    var trace = {
      x: unpack(rows, 'Date'),
      close: unpack(rows, 'AAPL.Close'),
      high: unpack(rows, 'AAPL.High'),
      low: unpack(rows, 'AAPL.Low'),
      open: unpack(rows, 'AAPL.Open'),
    
      // cutomise colors
      increasing: {line: {color: 'black'}},
      decreasing: {line: {color: 'red'}},
    
      type: 'candlestick',
      xaxis: 'x',
      yaxis: 'y'
    };
    
    var data = [trace];
    
    var layout = {
      dragmode: 'zoom',
      showlegend: false,
      xaxis: {
        autorange: true,
        title: 'Date',
       rangeselector: {
            x: 0,
            y: 1.2,
            xanchor: 'left',
            font: {size:8},
            buttons: [{
                step: 'month',
                stepmode: 'backward',
                count: 1,
                label: '1 month'
            }, {
                step: 'month',
                stepmode: 'backward',
                count: 6,
                label: '6 months'
            }, {
                step: 'all',
                label: 'All dates'
            }]
          }
      },
      yaxis: {
        autorange: true,
      }
    };
    
    Plotly.newPlot('23', data, layout);
    });

}


// document.addEventListener('DOMContentLoaded', function(){
  // fetch('/charts/chart1.json')
  //   .then( response => response.json())
  //   .then( json => {
  //     waterfall_01();
  //     waterfall_02();
  //     waterfall3();
  //   });
    

document.addEventListener('DOMContentLoaded', function(){
    waterfall_01();
    waterfall_02();
    waterfall3();
    speed();
    indicator();
    bullet();
    indicator2();
    indicator3();
    waterfall4();
    candle();
    candle3();
    candle4();
    candle5();
    candle2();
    funnel();
    funnel2();
    funnel3();
    funnel4();
    funnel5();
    time();
    time1();
    time2();
    time3();
})//})