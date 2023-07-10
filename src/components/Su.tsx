import { useState, useMemo, useEffect } from 'react'
import Echarts from '../components/common/Echarts'
export default function Su() {
    const [data, setDate] = useState(makeRandomData())
    const option2 = useMemo(() => {
        return {
            series: [
                {
                    type: 'pie',
                    radius: [0, '50%'],
                    data
                }
            ]
        }
    }, [data])
    const option1 = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {

        },
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    }

    function makeRandomData() {
        return [
            {
                value: Math.random(),
                name: 'A'
            },
            {
                value: Math.random(),
                name: 'B'
            },
            {
                value: Math.random(),
                name: 'C'
            }
        ];
    };
    useEffect(() => {
        setInterval(() => {
            setDate(makeRandomData())
        }, 2000);
    }, [])
    return (
        <>
            <div style={{ width: '800px', height: '500px' }}>
                <Echarts chartId='su' option={option1} onClickChange={(params: any) => { console.log(22222, params) }} />
            </div>
            <div style={{ width: '300px', height: '300px' }}>
                <Echarts chartId='cheng' option={option2} onClickChange={(params: any) => { console.log(22222, params) }} />
            </div>
        </>
    )
}
