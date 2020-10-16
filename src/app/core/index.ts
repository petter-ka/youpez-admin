export function getDefaultEchartsTheme() {
  const axisLine = {
    color: 'rgb(204, 214, 235)'
  }
  const axisTick = {
    color: 'rgb(204, 214, 235)'
  }
  const axisLabel = {
    color: '#666666'
  }
  const splitLine = {
    color: [
      'rgb(230, 230, 230)'
    ]
  }
  const defaultEmphasis = {
    shadowBlur: 10,
    shadowOffsetX: 0,
    'borderWidth': 0,
    'borderColor': 'transparent'
  }

  return {
    'color': [
      '#61a1ed',
      '#6be6c1',
      '#626c91',
      '#a0a7e6',
      '#c4ebad',
      '#96dee8'
    ],
    'backgroundColor': 'rgba(252,252,252,0)',
    'textStyle': {
      fontFamily:'sans-serif',
    },
    'title': {
      'textStyle': {
        'color': '#666666'
      },
      'subtextStyle': {
        'color': '#999999'
      }
    },
    'line': {
      'itemStyle': {
        'normal': {
          'borderWidth': '2'
        }
      },
      'lineStyle': {
        'normal': {
          'width': '3'
        }
      },
      'symbolSize': '8',
      'symbol': 'emptyCircle',
      'smooth': false
    },
    'radar': {
      'itemStyle': {
        'normal': {
          'borderWidth': '2'
        }
      },
      'lineStyle': {
        'normal': {
          'width': '3'
        }
      },
      'symbolSize': '8',
      'symbol': 'emptyCircle',
      'smooth': false
    },
    'bar': {
      'itemStyle': {
        'normal': {
          'barBorderWidth': 0,
          'barBorderColor': '#ccc'
        },
        'emphasis': {
          ...defaultEmphasis,
        }
      }
    },
    'pie': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#ccc'
        },
        'emphasis': {
          ...defaultEmphasis,
        }
      }
    },
    'scatter': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#ccc'
        },
        'emphasis': {
          ...defaultEmphasis,
        }
      }
    },
    'boxplot': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#ccc'
        },
        'emphasis': {
          ...defaultEmphasis,
        }
      }
    },
    'parallel': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#ccc'
        },
        'emphasis': {
          ...defaultEmphasis,
        }
      }
    },
    'sankey': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#ccc'
        },
        'emphasis': {
          ...defaultEmphasis,
        }
      }
    },
    'funnel': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#ccc'
        },
        'emphasis': {
          ...defaultEmphasis,
        }
      }
    },
    'gauge': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#ccc'
        },
        'emphasis': {
          ...defaultEmphasis,
        }
      }
    },
    'candlestick': {
      'itemStyle': {
        'normal': {
          'color': '#e6a0d2',
          'color0': 'transparent',
          'borderColor': '#e6a0d2',
          'borderColor0': '#3fb1e3',
          'borderWidth': '2'
        }
      }
    },
    'graph': {
      'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#ccc'
        }
      },
      'lineStyle': {
        'normal': {
          'width': '1',
          'color': '#666666'
        }
      },
      'symbolSize': '8',
      'symbol': 'emptyCircle',
      'smooth': false,
      'color': [
        '#3fb1e3',
        '#6be6c1',
        '#626c91',
        '#a0a7e6',
        '#c4ebad',
        '#96dee8'
      ],
      'label': {
        'normal': {
          'textStyle': {
            'color': '#ffffff'
          }
        }
      }
    },
    'map': {
      'itemStyle': {
        'normal': {
          'areaColor': '#eeeeee',
          'borderColor': '#aaaaaa',
          'borderWidth': 0.5
        },
        'emphasis': {
          ...defaultEmphasis,
        }
      },
      'label': {
        'normal': {
          'textStyle': {
            'color': '#ffffff'
          }
        },
        'emphasis': {
          'textStyle': {
            'color': 'rgb(63,177,227)'
          }
        }
      }
    },
    'geo': {
      'itemStyle': {
        'normal': {
          'areaColor': '#eeeeee',
          'borderColor': '#aaaaaa',
          'borderWidth': 0.5
        },
        'emphasis': {
          ...defaultEmphasis,
        }
      },
      'label': {
        'normal': {
          'textStyle': {
            'color': '#ffffff'
          }
        },
        'emphasis': {
          'textStyle': {
            'color': 'rgb(63,177,227)'
          }
        }
      }
    },
    'categoryAxis': {
      'axisLine': {
        'show': true,
        'lineStyle': {
          'color': axisLine.color
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': axisTick.color
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': axisLabel.color
        }
      },
      'splitLine': {
        'show': true,
        'lineStyle': {
          'color': splitLine.color
        }
      },
      'splitArea': {
        'show': false,
        'areaStyle': {
          'color': [
            'rgba(250,250,250,0.05)',
            'rgba(200,200,200,0.02)'
          ]
        }
      }
    },
    'valueAxis': {
      'axisLine': {
        'show': true,
        'lineStyle': {
          'color': axisLine.color
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': axisTick.color
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': axisLabel.color,
          'fontSize': 11
        }
      },
      'splitLine': {
        'show': true,
        'lineStyle': {
          'color': splitLine.color
        }
      },
      'splitArea': {
        'show': false,
        'areaStyle': {
          'color': [
            'rgba(250,250,250,0.05)',
            'rgba(200,200,200,0.02)'
          ]
        }
      }
    },
    'logAxis': {
      'axisLine': {
        'show': true,
        'lineStyle': {
          'color': axisLine.color
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': axisTick.color
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': axisLabel.color
        }
      },
      'splitLine': {
        'show': true,
        'lineStyle': {
          'color': splitLine.color
        }
      },
      'splitArea': {
        'show': false,
        'areaStyle': {
          'color': [
            'rgba(250,250,250,0.05)',
            'rgba(200,200,200,0.02)'
          ]
        }
      }
    },
    'timeAxis': {
      'axisLine': {
        'show': true,
        'lineStyle': {
          'color': axisLine.color
        }
      },
      'axisTick': {
        'show': true,
        'lineStyle': {
          'color': axisTick.color
        }
      },
      'axisLabel': {
        'show': true,
        'textStyle': {
          'color': axisLabel.color
        }
      },
      'splitLine': {
        'show': true,
        'lineStyle': {
          'color': splitLine.color
        }
      },
      'splitArea': {
        'show': false,
        'areaStyle': {
          'color': [
            'rgba(250,250,250,0.05)',
            'rgba(200,200,200,0.02)'
          ]
        }
      }
    },
    'toolbox': {
      'iconStyle': {
        'normal': {
          'borderColor': '#999999'
        },
        'emphasis': {
          'borderColor': '#666666'
        }
      }
    },
    'legend': {
      'textStyle': {
        'color': '#999999'
      }
    },
    'tooltip': {
      textStyle: {
        fontSize: 11
      },
      confine: false,
      appendToBody: true,
      padding: [5, 8],
      'axisPointer': {
        label: {
          backgroundColor: '#ccc',
          borderColor: '#aaa',
          borderWidth: 1,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          color: '#222'
        },
        'lineStyle': {
          'color': '#666666',
          'width': 1
        },
        'crossStyle': {
          'color': '#666666',
          'width': 1
        }
      }
    },
    'timeline': {
      'lineStyle': {
        'color': '#626c91',
        'width': 1
      },
      'itemStyle': {
        'normal': {
          'color': '#626c91',
          'borderWidth': 1
        },
        'emphasis': {
          'color': '#626c91'
        }
      },
      'controlStyle': {
        'normal': {
          'color': '#626c91',
          'borderColor': '#626c91',
          'borderWidth': 0.5
        },
        'emphasis': {
          'color': '#626c91',
          'borderColor': '#626c91',
          'borderWidth': 0.5
        }
      },
      'checkpointStyle': {
        'color': '#3fb1e3',
        'borderColor': 'rgba(63,177,227,0.15)'
      },
      'label': {
        'normal': {
          'textStyle': {
            'color': '#626c91'
          }
        },
        'emphasis': {
          'textStyle': {
            'color': '#626c91'
          }
        }
      }
    },
    'visualMap': {
      'color': [
        '#2a99c9',
        '#afe8ff'
      ]
    },
    'dataZoom': {
      'backgroundColor': 'rgba(255,255,255,0)',
      'dataBackgroundColor': 'rgba(222,222,222,1)',
      'fillerColor': 'rgb(222, 236, 255,0.25)',
      'handleColor': 'rgb(118,129,255)',
      'handleSize': '100%',
      'textStyle': {
        'color': '#999999'
      }
    },
    'markPoint': {
      'label': {
        'normal': {
          'textStyle': {
            'color': '#ffffff'
          }
        },
        'emphasis': {
          'textStyle': {
            'color': '#ffffff'
          }
        }
      }
    }
  }
}
