import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
    {
          "country": "AD",
          "hot dog": 193,
          "hot dogColor": "hsl(192, 70%, 50%)",
          "burger": 199,
          "burgerColor": "hsl(180, 70%, 50%)",
          "sandwich": 47,
          "sandwichColor": "hsl(59, 70%, 50%)",
          "kebab": 89,
          "kebabColor": "hsl(284, 70%, 50%)",
          "fries": 116,
          "friesColor": "hsl(332, 70%, 50%)",
          "donut": 145,
          "donutColor": "hsl(323, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 180,
          "hot dogColor": "hsl(87, 70%, 50%)",
          "burger": 93,
          "burgerColor": "hsl(323, 70%, 50%)",
          "sandwich": 169,
          "sandwichColor": "hsl(202, 70%, 50%)",
          "kebab": 74,
          "kebabColor": "hsl(72, 70%, 50%)",
          "fries": 123,
          "friesColor": "hsl(60, 70%, 50%)",
          "donut": 180,
          "donutColor": "hsl(177, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 19,
          "hot dogColor": "hsl(66, 70%, 50%)",
          "burger": 95,
          "burgerColor": "hsl(329, 70%, 50%)",
          "sandwich": 128,
          "sandwichColor": "hsl(177, 70%, 50%)",
          "kebab": 10,
          "kebabColor": "hsl(48, 70%, 50%)",
          "fries": 185,
          "friesColor": "hsl(56, 70%, 50%)",
          "donut": 172,
          "donutColor": "hsl(332, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 84,
          "hot dogColor": "hsl(273, 70%, 50%)",
          "burger": 21,
          "burgerColor": "hsl(55, 70%, 50%)",
          "sandwich": 44,
          "sandwichColor": "hsl(113, 70%, 50%)",
          "kebab": 72,
          "kebabColor": "hsl(87, 70%, 50%)",
          "fries": 24,
          "friesColor": "hsl(208, 70%, 50%)",
          "donut": 188,
          "donutColor": "hsl(166, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 155,
          "hot dogColor": "hsl(211, 70%, 50%)",
          "burger": 29,
          "burgerColor": "hsl(168, 70%, 50%)",
          "sandwich": 130,
          "sandwichColor": "hsl(34, 70%, 50%)",
          "kebab": 116,
          "kebabColor": "hsl(5, 70%, 50%)",
          "fries": 96,
          "friesColor": "hsl(253, 70%, 50%)",
          "donut": 129,
          "donutColor": "hsl(305, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 38,
          "hot dogColor": "hsl(68, 70%, 50%)",
          "burger": 77,
          "burgerColor": "hsl(128, 70%, 50%)",
          "sandwich": 90,
          "sandwichColor": "hsl(206, 70%, 50%)",
          "kebab": 2,
          "kebabColor": "hsl(210, 70%, 50%)",
          "fries": 89,
          "friesColor": "hsl(96, 70%, 50%)",
          "donut": 25,
          "donutColor": "hsl(13, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 73,
          "hot dogColor": "hsl(168, 70%, 50%)",
          "burger": 153,
          "burgerColor": "hsl(275, 70%, 50%)",
          "sandwich": 112,
          "sandwichColor": "hsl(138, 70%, 50%)",
          "kebab": 100,
          "kebabColor": "hsl(135, 70%, 50%)",
          "fries": 102,
          "friesColor": "hsl(258, 70%, 50%)",
          "donut": 90,
          "donutColor": "hsl(162, 70%, 50%)"
        }
    ];


const ChartTest = () => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.2}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#053935',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#12eedc',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor="black"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={13}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'top-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)

export default ChartTest;