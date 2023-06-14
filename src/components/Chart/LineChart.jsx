import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data =[
    {
      "id": "japan",
      "color": "hsl(207, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 125
        },
        {
          "x": "helicopter",
          "y": 206
        },
        {
          "x": "boat",
          "y": 131
        },
        {
          "x": "train",
          "y": 108
        },
        {
          "x": "subway",
          "y": 245
        },
        {
          "x": "bus",
          "y": 248
        },
        {
          "x": "car",
          "y": 127
        },
        {
          "x": "moto",
          "y": 95
        },
        {
          "x": "bicycle",
          "y": 229
        },
        {
          "x": "horse",
          "y": 2
        },
        {
          "x": "skateboard",
          "y": 277
        },
        {
          "x": "others",
          "y": 202
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(16, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 111
        },
        {
          "x": "helicopter",
          "y": 272
        },
        {
          "x": "boat",
          "y": 93
        },
        {
          "x": "train",
          "y": 168
        },
        {
          "x": "subway",
          "y": 282
        },
        {
          "x": "bus",
          "y": 4
        },
        {
          "x": "car",
          "y": 48
        },
        {
          "x": "moto",
          "y": 236
        },
        {
          "x": "bicycle",
          "y": 7
        },
        {
          "x": "horse",
          "y": 95
        },
        {
          "x": "skateboard",
          "y": 97
        },
        {
          "x": "others",
          "y": 53
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(38, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 121
        },
        {
          "x": "helicopter",
          "y": 298
        },
        {
          "x": "boat",
          "y": 11
        },
        {
          "x": "train",
          "y": 77
        },
        {
          "x": "subway",
          "y": 67
        },
        {
          "x": "bus",
          "y": 108
        },
        {
          "x": "car",
          "y": 167
        },
        {
          "x": "moto",
          "y": 296
        },
        {
          "x": "bicycle",
          "y": 39
        },
        {
          "x": "horse",
          "y": 151
        },
        {
          "x": "skateboard",
          "y": 86
        },
        {
          "x": "others",
          "y": 107
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(137, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 57
        },
        {
          "x": "helicopter",
          "y": 225
        },
        {
          "x": "boat",
          "y": 155
        },
        {
          "x": "train",
          "y": 116
        },
        {
          "x": "subway",
          "y": 145
        },
        {
          "x": "bus",
          "y": 291
        },
        {
          "x": "car",
          "y": 146
        },
        {
          "x": "moto",
          "y": 244
        },
        {
          "x": "bicycle",
          "y": 210
        },
        {
          "x": "horse",
          "y": 267
        },
        {
          "x": "skateboard",
          "y": 49
        },
        {
          "x": "others",
          "y": 52
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(174, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 149
        },
        {
          "x": "helicopter",
          "y": 257
        },
        {
          "x": "boat",
          "y": 13
        },
        {
          "x": "train",
          "y": 187
        },
        {
          "x": "subway",
          "y": 106
        },
        {
          "x": "bus",
          "y": 79
        },
        {
          "x": "car",
          "y": 203
        },
        {
          "x": "moto",
          "y": 210
        },
        {
          "x": "bicycle",
          "y": 25
        },
        {
          "x": "horse",
          "y": 250
        },
        {
          "x": "skateboard",
          "y": 244
        },
        {
          "x": "others",
          "y": 1
        }
      ]
    }
  ];

const LineChart = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default LineChart;