import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

type PageState = {}
type PageProps = {}

class Page extends Component<PageProps, PageState> {
  config: Config = {
    navigationBarTitleText: '测试02'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="template_container">
        <Text>测试02</Text>
        <Button
          onClick={() =>
            Taro.switchTab({
              url: '/pages/test01/index'
            })
          }
        >
          {' '}
          点我返回
        </Button>
      </View>
    )
  }
}

export default Page as ComponentClass
