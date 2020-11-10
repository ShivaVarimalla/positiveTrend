import React from 'react'
import { View,Text,Dimensions} from 'react-native'
import {
    LineChart
  } from "react-native-chart-kit";
const Graph =({ scores})=>(
    <LineChart
    data={{
      labels: ["Sun","Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
      datasets: [
        {
          data:  scores
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{

      backgroundColor: "#ece4f2",
      backgroundGradientFrom: "#ece4f2",
      backgroundGradientTo: "#ece4f2",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#b561ff"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
)
export default Graph;