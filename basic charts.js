function scatter_1(data){
      Plotly.newPlot('1', data);
}




function scatter_2(){
    var trace1 = {
        x: [1, 2, 3, 4, 5],
        y: [1, 6, 3, 6, 1],
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
        marker: { size: 12 }
      };
      
      var trace2 = {
        x: [1.5, 2.5, 3.5, 4.5, 5.5],
        y: [4, 1, 7, 1, 4],
        mode: 'markers',
        type: 'scatter',
        name: 'Team B',
        text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
        marker: { size: 12 }
      };
      
      var data = [ trace1, trace2 ];
      
      var layout = {
        xaxis: {
          range: [ 0.75, 5.25 ]
        },
        yaxis: {
          range: [0, 8]
        },
        title:'Data Labels Hover'
      };
      
      Plotly.newPlot('2', data, layout);
      
}


function scatter_3(){
    var trace1 = {
        x: [1, 2, 3, 4, 5],
        y: [1, 6, 3, 6, 1],
        mode: 'markers+text',
        type: 'scatter',
        name: 'Team A',
        text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
        textposition: 'top center',
        textfont: {
          family:  'Raleway, sans-serif'
        },
        marker: { size: 12 }
      };
      
      var trace2 = {
        x: [1.5, 2.5, 3.5, 4.5, 5.5],
        y: [4, 1, 7, 1, 4],
        mode: 'markers+text',
        type: 'scatter',
        name: 'Team B',
        text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
        textfont : {
          family:'Times New Roman'
        },
        textposition: 'bottom center',
        marker: { size: 12 }
      };
      
      var data = [ trace1, trace2 ];
      
      var layout = {
        xaxis: {
          range: [ 0.75, 5.25 ]
        },
        yaxis: {
          range: [0, 8]
        },
        legend: {
          y: 0.5,
          yref: 'paper',
          font: {
            family: 'Arial, sans-serif',
            size: 20,
            color: 'grey',
          }
        },
        title:'Data Labels on the Plot'
      };
      
      Plotly.newPlot('3', data, layout);
}




function scatter_4(){
    var trace1 = {
        y: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        mode: 'markers',
        marker: {
          size: 40,
          color: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
        }
    };
      
    var data = [trace1];
    
    var layout = {
        title: 'Scatter Plot with a Color Dimension'
    };
    
    Plotly.newPlot('4', data, layout);
}
    

function scatter_5(){
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
      };
      
      var trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter'
      };
      
      var data = [trace1, trace2];
      
      Plotly.newPlot('5', data);
}

function scatter_6(){
    var trace1 = {
        x: [52698, 43117],
        y: [53, 31],
        mode: 'markers',
        name: 'North America',
        text: ['United States', 'Canada'],
        marker: {
          color: 'rgb(164, 194, 244)',
          size: 12,
          line: {
            color: 'white',
            width: 0.5
          }
        },
        type: 'scatter'
      };
      
      var trace2 = {
        x: [39317, 37236, 35650, 30066, 29570, 27159, 23557, 21046, 18007],
        y: [33, 20, 13, 19, 27, 19, 49, 44, 38],
        mode: 'markers',
        name: 'Europe',
        text: ['Germany', 'Britain', 'France', 'Spain', 'Italy', 'Czech Rep.', 'Greece', 'Poland'],
        marker: {
          color: 'rgb(255, 217, 102)',
          size: 12
        },
        type: 'scatter'
      };
      
      var trace3 = {
        x: [42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899],
        y: [23, 42, 54, 89, 14, 99, 93, 70],
        mode: 'markers',
        name: 'Asia/Pacific',
        text: ['Australia', 'Japan', 'South Korea', 'Malaysia', 'China', 'Indonesia', 'Philippines', 'India'],
        marker: {
          color: 'rgb(234, 153, 153)',
          size: 12
        },
        type: 'scatter'
      };
      
      var trace4 = {
        x: [19097, 18601, 15595, 13546, 12026, 7434, 5419],
        y: [43, 47, 56, 80, 86, 93, 80],
        mode: 'markers',
        name: 'Latin America',
        text: ['Chile', 'Argentina', 'Mexico', 'Venezuela', 'Venezuela', 'El Salvador', 'Bolivia'],
        marker: {
          color: 'rgb(142, 124, 195)',
          size: 12
        },
        type: 'scatter'
      };
      
      var data = [trace1, trace2, trace3, trace4];
      
      var layout = {
        title: 'Quarter 1 Growth',
        xaxis: {
          title: 'GDP per Capita',
          showgrid: false,
          zeroline: false
        },
        yaxis: {
          title: 'Percent',
          showline: false
        }
      };
      
      Plotly.newPlot('6', data, layout);
}

function scatter_7(){
    var trace1 = {
        x: [1, 2, 3, 4, 5],
        y: [1, 3, 2, 3, 1],
        mode: 'lines+markers',
        name: 'linear',
        line: {shape: 'linear'},
        type: 'scatter'
      };
      
      var trace2 = {
        x: [1, 2, 3, 4, 5],
        y: [6, 8, 7, 8, 6],
        mode: 'lines+markers',
        name: 'spline',
        text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],
        line: {shape: 'spline'},
        type: 'scatter'
      };
      
      var trace3 = {
        x: [1, 2, 3, 4, 5],
        y: [11, 13, 12, 13, 11],
        mode: 'lines+markers',
        name: 'vhv',
        line: {shape: 'vhv'},
        type: 'scatter'
      };
      
      var trace4 = {
        x: [1, 2, 3, 4, 5],
        y: [16, 18, 17, 18, 16],
        mode: 'lines+markers',
        name: 'hvh',
        line: {shape: 'hvh'},
        type: 'scatter'
      };
      
      var trace5 = {
        x: [1, 2, 3, 4, 5],
        y: [21, 23, 22, 23, 21],
        mode: 'lines+markers',
        name: 'vh',
        line: {shape: 'vh'},
        type: 'scatter'
      };
      
      var trace6 = {
        x: [1, 2, 3, 4, 5],
        y: [26, 28, 27, 28, 26],
        mode: 'lines+markers',
        name: 'hv',
        line: {shape: 'hv'},
        type: 'scatter'
      };
      
      var data = [trace1, trace2, trace3, trace4, trace5, trace6];
      
      var layout = {
        legend: {
          y: 0.5,
          traceorder: 'reversed',
          font: {size: 16},
          yref: 'paper'
        }};
      
      Plotly.newPlot('7', data, layout);

}

function scatter_8(){
    var trace1 = {
        x: [1, 2, 3, 4, 5],
        y: [1, 3, 2, 3, 1],
        mode: 'lines',
        name: 'Solid',
        line: {
          dash: 'solid',
          width: 4
        }
      };
      
      var trace2 = {
        x: [1, 2, 3, 4, 5],
        y: [6, 8, 7, 8, 6],
        mode: 'lines',
        name: 'dashdot',
        line: {
          dash: 'dashdot',
          width: 4
        }
      };
      
      var trace3 = {
        x: [1, 2, 3, 4, 5],
        y: [11, 13, 12, 13, 11],
        mode: 'lines',
        name: 'Solid',
        line: {
          dash: 'solid',
          width: 4
        }
      };
      
      var trace4 = {
        x: [1, 2, 3, 4, 5],
        y: [16, 18, 17, 18, 16],
        mode: 'lines',
        name: 'dot',
        line: {
          dash: 'dot',
          width: 4
        }
      };
      
      var data = [trace1, trace2, trace3, trace4];
      
      var layout = {
        title: 'Line Dash',
        xaxis: {
          range: [0.75, 5.25],
          autorange: false
        },
        yaxis: {
          range: [0, 18.5],
          autorange: false
        },
        legend: {
          y: 0.5,
          traceorder: 'reversed',
          font: {
            size: 16
          }
        }
      };
      
      Plotly.newPlot('8', data, layout);
}

function scatter_9(){
        var xData = [
            [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
            [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
            [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
            [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013]
          ];
          
          var yData = [
            [74, 82, 80, 74, 73, 72, 74, 70, 70, 66, 66, 69],
            [45, 42, 50, 46, 36, 36, 34, 35, 32, 31, 31, 28],
            [13, 14, 20, 24, 20, 24, 24, 40, 35, 41, 43, 50],
            [18, 21, 18, 21, 16, 14, 13, 18, 17, 16, 19, 23]
          ];
          
          var colors = ['rgba(67,67,67,1)', 'rgba(115,115,115,1)', 'rgba(49,130,189, 1)',
            'rgba(189,189,189,1)'
          ];
          
          var lineSize = [2, 2, 4, 2];
          
          var labels = ['Television', 'Newspaper', 'Internet', 'Radio'];
          
          var data = [];
          
          for ( var i = 0 ; i < xData.length ; i++ ) {
            var result = {
              x: xData[i],
              y: yData[i],
              type: 'scatter',
              mode: 'lines',
              line: {
                color: colors[i],
                width: lineSize[i]
              }
            };
            var result2 = {
              x: [xData[i][0], xData[i][11]],
              y: [yData[i][0], yData[i][11]],
              type: 'scatter',
              mode: 'markers',
              marker: {
                color: colors[i],
                size: 12
              }
            };
            data.push(result, result2);
          }
          
          var layout = {
            showlegend: false,
            height: 600,
            width: 600,
            xaxis: {
              showline: true,
              showgrid: false,
              showticklabels: true,
              linecolor: 'rgb(204,204,204)',
              linewidth: 2,
              autotick: false,
              ticks: 'outside',
              tickcolor: 'rgb(204,204,204)',
              tickwidth: 2,
              ticklen: 5,
              tickfont: {
                family: 'Arial',
                size: 12,
                color: 'rgb(82, 82, 82)'
              }
            },
            yaxis: {
              showgrid: false,
              zeroline: false,
              showline: false,
              showticklabels: false
            },
            autosize: false,
            margin: {
              autoexpand: false,
              l: 100,
              r: 20,
              t: 100
            },
            annotations: [
              {
                xref: 'paper',
                yref: 'paper',
                x: 0.0,
                y: 1.05,
                xanchor: 'left',
                yanchor: 'bottom',
                text: 'Main Source for News',
                font:{
                  family: 'Arial',
                  size: 30,
                  color: 'rgb(37,37,37)'
                },
                showarrow: false
              },
              {
                xref: 'paper',
                yref: 'paper',
                x: 0.5,
                y: -0.1,
                xanchor: 'center',
                yanchor: 'top',
                text: 'Source: Pew Research Center & Storytelling with data',
                showarrow: false,
                font: {
                  family: 'Arial',
                  size: 12,
                  color: 'rgb(150,150,150)'
                }
              }
            ]
          };
          
          for( var i = 0 ; i < xData.length ; i++ ) {
            var result = {
              xref: 'paper',
              x: 0.05,
              y: yData[i][0],
              xanchor: 'right',
              yanchor: 'middle',
              text: labels[i] + ' ' + yData[i][0] +'%',
              showarrow: false,
              font: {
                family: 'Arial',
                size: 16,
                color: 'black'
              }
            };
            var result2 = {
              xref: 'paper',
              x: 0.95,
              y: yData[i][11],
              xanchor: 'left',
              yanchor: 'middle',
              text: yData[i][11] +'%',
              font: {
                family: 'Arial',
                size: 16,
                color: 'black'
              },
              showarrow: false
            };
          
            layout.annotations.push(result, result2);
          }
          
          Plotly.newPlot('9', data, layout);
    }

function scatter_10(){
    var data = [
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [20, 14, 23],
          type: 'bar'
        }
      ];
      
      Plotly.newPlot('10', data);
}

function scatter_11(){
    var trace1 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar'
      };
      
      var trace2 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar'
      };
      
      var data = [trace1, trace2];
      
      var layout = {barmode: 'group'};
      
      Plotly.newPlot('11', data, layout);
}

function scatter_12(){
    var trace1 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar'
      };
      
      var trace2 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar'
      };
      
      var data = [trace1, trace2];
      
      var layout = {barmode: 'stack'};
      
      Plotly.newPlot('12', data, layout);
}

function scatter_13(){
    var trace1 = {
        x: ['Liam', 'Sophie', 'Jacob', 'Mia', 'William', 'Olivia'],
        y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
        type: 'bar',
        text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
        marker: {
          color: 'rgb(142,124,195)'
        }
      };
      
      var data = [trace1];
      
      var layout = {
        title: 'Number of Graphs Made this Week',
        font:{
          family: 'Raleway, sans-serif'
        },
        showlegend: false,
        xaxis: {
          tickangle: -45
        },
        yaxis: {
          zeroline: false,
          gridwidth: 2
        },
        bargap :0.05
      };
      
      Plotly.newPlot('13', data, layout);
}

function scatter_14(){
    var xValue = ['Product A', 'Product B', 'Product C'];

    var yValue = [20, 14, 23];
    
    var trace1 = {
      x: xValue,
      y: yValue,
      type: 'bar',
      text: yValue.map(String),
      textposition: 'auto',
      hoverinfo: 'none',
      marker: {
        color: 'rgb(158,202,225)',
        opacity: 0.6,
        line: {
          color: 'rgb(8,48,107)',
          width: 1.5
        }
      }
    };
    
    var data = [trace1];
    
    var layout = {
      title: 'January 2013 Sales Report',
      barmode: 'stack'
    };
    
    Plotly.newPlot('14', data, layout);
}

function scatter_15(){
    var xValue = ['Product A', 'Product B', 'Product C'];

    var yValue = [20, 14, 23];
    var yValue2 = [24, 16, 20];
    
    var trace1 = {
      x: xValue,
      y: yValue,
      type: 'bar',
      text: yValue.map(String),
      textposition: 'auto',
      hoverinfo: 'none',
      opacity: 0.5,
      marker: {
        color: 'rgb(158,202,225)',
        line: {
          color: 'rgb(8,48,107)',
          width: 1.5
        }
      }
    };
    
    var trace2 = {
      x: xValue,
      y: yValue2,
      type: 'bar',
      text: yValue2.map(String),
      textposition: 'auto',
      hoverinfo: 'none',
      marker: {
        color: 'rgba(58,200,225,.5)',
        line: {
          color: 'rgb(8,48,107)',
          width: 1.5
        }
      }
    };
    
    var data = [trace1,trace2];
    
    var layout = {
      title: 'January 2013 Sales Report'
    };
    
    Plotly.newPlot('15', data, layout);
}

function scatter_16(){
    var trace1 = {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
        type: 'bar',
        name: 'Primary Product',
        marker: {
          color: 'rgb(49,130,189)',
          opacity: 0.7,
        }
      };
      
      var trace2 = {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
        type: 'bar',
        name: 'Secondary Product',
        marker: {
          color: 'rgb(204,204,204)',
          opacity: 0.5
        }
      };
      
      var data = [trace1, trace2];
      
      var layout = {
        title: '2013 Sales Report',
        xaxis: {
          tickangle: -45
        },
        barmode: 'group'
      };
      
      Plotly.newPlot('16', data, layout);
}

function scatter_17(){
    var trace1 = {
        x: ['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E'],
        y: [20, 14, 23, 25, 22],
        marker:{
          color: ['rgba(204,204,204,1)', 'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)']
        },
        type: 'bar'
      };
      
      var data = [trace1];
      
      var layout = {
        title: 'Least Used Feature'
      };
      
      Plotly.newPlot('17', data, layout);
}

function scatter_18(){
    var trace0 = {
        type: 'bar',
        x: [1, 2, 3, 5.5, 10],
        y: [10, 8, 6, 4, 2],
        width: [0.8, 0.8, 0.8, 3.5, 4]
      }
      
      var data = [trace0]
      
      Plotly.newPlot('18', data);
}

function scatter_19(){
    var data = [
        {
          type: 'bar',
          x: ['2016','2017','2018'],
          y: [500,600,700],
          base: [-500,-600,-700],
          hovertemplate: '%{base}',
          marker: {
            color: 'red'
          },
          name: 'expenses'
        },
        {
          type: 'bar',
          x: ['2016','2017','2018'],
          y: [300,400,700],
          base: 0,
          marker: {
            color: 'blue'
          },
          name: 'revenue'
        }]
      
      Plotly.newPlot('19', data);
}

function scatter_20(){
    var trace1 = {
        x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y: [219, 146, 112, 127, 124, 180, 236, 207, 236, 263, 350, 430, 474, 526, 488, 537, 500, 439],
        name: 'Rest of world',
        marker: {color: 'rgb(55, 83, 109)'},
        type: 'bar'
      };
      
      var trace2 = {
        x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y: [16, 13, 10, 11, 28, 37, 43, 55, 56, 88, 105, 156, 270, 299, 340, 403, 549, 499],
        name: 'China',
        marker: {color: 'rgb(26, 118, 255)'},
        type: 'bar'
      };
      
      var data = [trace1, trace2];
      
      var layout = {
        title: 'US Export of Plastic Scrap',
        xaxis: {tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
          }},
        yaxis: {
          title: 'USD (millions)',
          titlefont: {
            size: 16,
            color: 'rgb(107, 107, 107)'
          },
          tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
          }
        },
        legend: {
          x: 0,
          y: 1.0,
          bgcolor: 'rgba(255, 255, 255, 0)',
          bordercolor: 'rgba(255, 255, 255, 0)'
        },
        barmode: 'group',
        bargap: 0.15,
        bargroupgap: 0.1
      };
      
      Plotly.newPlot('20', data, layout);
}

function scatter_21(){
        
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [1, 4, 9, 16],
        name: 'Trace1',
        type: 'bar'
      };
      var trace2 = {
        x: [1, 2, 3, 4],
        y: [6, -8, -4.5, 8],
        name: 'Trace2',
        type: 'bar'
      };
      var trace3 = {
        x: [1, 2, 3, 4],
        y: [-15, -3, 4.5, -8],
        name: 'Trace3',
        type: 'bar'
       }
      
       var trace4 = {
        x: [1, 2, 3, 4],
        y: [-1, 3, -3, -4],
        name: 'Trace4',
        type: 'bar'
       }
      
      var data = [trace1, trace2, trace3, trace4];
      var layout = {
        xaxis: {title: 'X axis'},
        yaxis: {title: 'Y axis'},
        barmode: 'relative',
        title: 'Relative Barmode'
      };
      
      Plotly.newPlot('21', data, layout);
      
}

function scatter_22(){
    var data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
      
      Plotly.newPlot('22', data, layout);
}

function scatter_23(){
    var allLabels = ['1st', '2nd', '3rd', '4th', '5th'];

    var allValues = [
      [38, 27, 18, 10, 7],
      [28, 26, 21, 15, 10],
      [38, 19, 16, 14, 13],
      [31, 24, 19, 18, 8]
    ];
    
    var ultimateColors = [
      ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
      ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
      ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
      ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
    ];
    
    var data = [{
      values: allValues[0],
      labels: allLabels,
      type: 'pie',
      name: 'Starry Night',
      marker: {
        colors: ultimateColors[0]
      },
      domain: {
        row: 0,
        column: 0
      },
      hoverinfo: 'label+percent+name',
      textinfo: 'none'
    },{
      values: allValues[1],
      labels: allLabels,
      type: 'pie',
      name: 'Sunflowers',
      marker: {
        colors: ultimateColors[1]
      },
      domain: {
        row: 1,
        column: 0
      },
      hoverinfo: 'label+percent+name',
      textinfo: 'none'
    },{
      values: allValues[2],
      labels: allLabels,
      type: 'pie',
      name: 'Irises',
      marker: {
        colors: ultimateColors[2]
      },
      domain: {
        row: 0,
        column: 1
      },
      hoverinfo: 'label+percent+name',
      textinfo: 'none'
    },{
      values: allValues[3],
      labels: allLabels,
      type: 'pie',
      name: 'The Night Cafe',
      marker: {
        colors: ultimateColors[3]
      },
      domain: {
        x: [0.52,1],
        y: [0, 0.48]
      },
      hoverinfo: 'label+percent+name',
      textinfo: 'none'
    }];
    
    var layout = {
      height: 400,
      width: 500,
      grid: {rows: 2, columns: 2}
    };
    
    Plotly.newPlot('23', data, layout);
}
function scatter_24(){
  var data = [{
    values: [16, 15, 12, 6, 5, 4, 42],
    labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
    domain: {column: 0},
    name: 'GHG Emissions',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie'
  },{
    values: [27, 11, 25, 8, 1, 3, 25],
    labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
    text: 'CO2',
    textposition: 'inside',
    domain: {column: 1},
    name: 'CO2 Emissions',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie'
  }];
  
  var layout = {
    title: 'Global Emissions 1990-2011',
    annotations: [
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: 'GHG',
        x: 0.17,
        y: 0.5
      },
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: 'CO2',
        x: 0.82,
        y: 0.5
      }
    ],
    height: 400,
    width: 600,
    showlegend: false,
    grid: {rows: 1, columns: 2}
  };
  
  Plotly.newPlot('24', data, layout);
  
}

function scatter_25(){
  var data = [{
    type: "pie",
    values: [2, 3, 4, 4],
    labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
  }]
  
  var layout = {
    height: 400,
    width: 400,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
    }
  
  Plotly.newPlot('25', data, layout)

}

function scatter_26(){
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: 'markers',
    marker: {
      size: [40, 60, 80, 100]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('26', data, layout);
}

function scatter_27(){
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      opacity: [1, 0.8, 0.6, 0.4],
      size: [40, 60, 80, 100]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Marker Size and Color',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('27', data, layout);
}

function scatter_28(){
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      size: [40, 60, 80, 100]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Bubble Chart Hover Text',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('28', data, layout);
}

function scatter_29(){
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
    mode: 'markers',
    marker: {
      size: [400, 600, 800, 1000],
      sizemode: 'area'
    }
  };
  
  var trace2 = {
    x: [1, 2, 3, 4],
    y: [14, 15, 16, 17],
    text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
    mode: 'markers',
    marker: {
      size: [400, 600, 800, 1000],
      //setting 'sizeref' to lower than 1 decreases the rendered size
      sizeref: 2,
      sizemode: 'area'
    }
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [20, 21, 22, 23],
    text: ['A</br>size: 40</br>sixeref: 2', 'B</br>size: 60</br>sixeref: 2', 'C</br>size: 80</br>sixeref: 2', 'D</br>size: 100</br>sixeref: 2'],
    mode: 'markers',
    marker: {
      size: [400, 600, 800, 1000],
      //setting 'sizeref' to less than 1, increases the rendered marker sizes
      sizeref: 0.2,
      sizemode: 'area'
    }
  };
  
  // sizeref using above forumla
  var desired_maximum_marker_size = 40;
  var size = [400, 600, 800, 1000];
  var trace4 = {
    x: [1, 2, 3, 4],
    y: [26, 27, 28, 29],
    text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
    mode: 'markers',
    marker: {
      size: size,
      //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
      sizeref: 2.0 * Math.max(...size) / (desired_maximum_marker_size**2),
      sizemode: 'area'
    }
  };
  
  var data = [trace1, trace2, trace3, trace4];
  
  var layout = {
    title: 'Bubble Chart Size Scaling',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('29', data, layout);
}







function onData(json) {
  debugger;
  console.log(json)
}


document.addEventListener('DOMContentLoaded', function(){
  // fetch('/charts/chart1.json')
  //   .then( response => response.json())
  //   .then( json => {
      
    // });
    



    scatter_1();
    scatter_2();
    scatter_3();
    scatter_4();
    scatter_5();
    scatter_6();
    scatter_7();
    scatter_8();
    //scatter_9();
    scatter_10();
    scatter_11();
    scatter_12();
    scatter_13();
    scatter_14();
    scatter_15();
    scatter_16();
    scatter_17();
    scatter_18();
    scatter_19();
    scatter_20();
    scatter_21();
    scatter_22();
    scatter_23();
    scatter_24();
    scatter_25();
    scatter_26();
    scatter_27();
    scatter_28();
    scatter_29();
    scatter_30();
    scatter_31();
    scatter_32();
    scatter_33();
    scatter_34();

})