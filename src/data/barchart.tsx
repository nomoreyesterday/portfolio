import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area, Line, LabelList } from 'recharts';

const data = [
  {
    name: 'HTML',
    value: 80,
    grade: ''
  },
  {
    name: 'CSS',
    value: 80,
    grade: ''
  },
  {
    name: 'Javascript',
    value: 60,
    grade: ''
  },
  {
    name: 'ReactJS',
    value: 70,
    grade: ''
  },
  {
    name: 'NodeJS',
    value: 60,
    grade: ''
  },
  {
    name: 'SQL',
    value: 60,
    grade: ''
  },
  {
    name: 'MongoDB',
    value: 60,
    grade: ''
  },
  {
    name: 'Python',
    value: 70,
    grade: ''
  },
  {
    name: 'Excel Macro',
    value: 80,
    grade: ''
  },
  {
    name: 'Adobe Photoshop',
    value: 80,
    grade: ''
  },
  {
    name: 'Adobe Illustrator',
    value: 70,
    grade: ''
  },
  {
    name: 'Adobe Premier',
    value: 80,
    grade: ''
  },
];

function gradeData(dataArray:any) {
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i].value >= 80) {
        dataArray[i].grade = 'A';
      } else if (dataArray[i].value >= 70) {
        dataArray[i].grade = 'B';
      } else if (dataArray[i].value >= 60) {
        dataArray[i].grade = 'C';
      } else {
        dataArray[i].grade = 'D';
      }
    }
    return dataArray;
  }

const renderCustomizedLabel = (props:any) => {
    const { x, y, width, height, value } = props;
    const radius = 10;
    return (
      <g>
        <circle cy={y + height / 2} cx={x - radius} r={radius} fill="#8884d8" />
        <text y={y + height / 2} x={x - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
          {value.split(' ')[1]}
        </text>
      </g>
    );
};

export default class ChartBar extends PureComponent {
    tickFormatter = (value: string, index: number) => {
        const limit = 10; // put your maximum character
        if (value.length < limit) return value;
        return `${value.substring(0, limit)}...`;
    };
    duration = 1000
    render() {
        const updatedData = gradeData(data)
        return (
        <ResponsiveContainer width="100%" height="100%" > 
            <ComposedChart 
            layout="vertical"
            //   width={50}
            //   height={50}
            data={data}
            margin={{
                top: 10,
                right: 10,
                bottom: 10,
                left: 50,
            }}
              barGap="0%"
            >
            {/* <XAxis dataKey="name" label={{ value: "Pages", position: "insideBottomRight", dy: 10}} /> */}
            {/* <YAxis label={{ value: "index", position: "insideLeft", angle: -90,   dy: -10}} /> */}
            {/* <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3"/> */}
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
            {/* <Bar dataKey="value" barSize={20} fill="#1E90FF" fill="#8884d8" minPointSize={5}/> */}
            {/* <LabelList dataKey="grade" position="insideLeft"/> */}
            {/* <Line dataKey="uv" stroke="#ff7300" /> */}
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" interval={0} />
            <Bar dataKey="value" barSize={20} fill="#edf0f1" radius={3} animationDuration={this.duration} fillOpacity={0.6} >
            <LabelList dataKey="grade" position="insideRight" offset={-20}/>
            </Bar>
            </ComposedChart>
        </ResponsiveContainer>
        );
    }
}
