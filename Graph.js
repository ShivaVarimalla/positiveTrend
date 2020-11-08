import React from 'react'
import { View,Text,Dimensions} from 'react-native'
import {
    LineChart
  } from "react-native-chart-kit";
const Graph =({})=>(
    <LineChart
    data={{
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
      datasets: [
        {
          data: [
            1,
            0,
            1,
            0,
            0,
            1,
            1
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#ff8000",
      backgroundGradientFrom: "#ff8000",
      backgroundGradientTo: "#ff8000",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#aaff00"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
)
export default Graph;