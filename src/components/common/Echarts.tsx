import { useRef, useEffect } from "react";
import * as echarts from 'echarts'

interface IpProps {
  option: Object
  onHoverChange?: Function
  onClickChange?: Function
  chartId: string
}

export default (props: IpProps) => {
  const { chartId = 'chartDom', option, onHoverChange = () => { }, onClickChange = () => { } } = props
  const chartIns = useRef<any>(null)

  /**
   * resize  方法  
   */
  const resizeAll = () => {
    chartIns.current.resize()
  }

  /**
   * 初始化图表组件
   */
  useEffect(() => {
    console.log('你好======');

    const element = document.getElementById(chartId) as HTMLElement

    setTimeout(() => {
      chartIns.current = echarts.init(element)

      chartIns.current.on('click', (params: any) => {
        onClickChange(params)
      })
      //区域之外的一根都可以触发
      chartIns.current.getZr().on('click', (params: any) => {
        onClickChange(params)
      })
      chartIns.current.on('mousemove', (params: any) => {
        onHoverChange(params)
      })

      window.removeEventListener('resize', resizeAll)
      if (chartIns.current) {
        window.addEventListener('resize', resizeAll)
        chartIns.current.setOption(option, true)
      }

    }, 20);

  }, [])

  /**
   * option 发生改变  
   */
  useEffect(() => {
    window.removeEventListener('resize', resizeAll)
    if (chartIns.current) {
      window.addEventListener('resize', resizeAll)
      chartIns.current.setOption(option)
    }
  }, [option])

  return (
    <div style={{ width: '100%', height: '100%' }} id={chartId} />
  )
}
