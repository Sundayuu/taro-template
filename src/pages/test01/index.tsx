import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { BottomBar } from '@components'
import api from '@utils/request'
import './index.scss'

type PageState = {}
type PageProps = {}

class Page extends Component<PageProps, PageState> {
  config: Config = {
    navigationBarTitleText: '测试'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {
    const { data } = api.get('/personalized')
    console.log('测试api请求', data)
  }

  componentDidHide() {}

  render() {
    return (
      <View className="template_container">
        <Text>测试</Text>
        <Button
          onClick={() =>
            Taro.navigateTo({
              url: '/pages/test02/index'
            })
          }
        >
          {' '}
          点我跳转
        </Button>
        <BottomBar currentTab={1} />
      </View>
    )
  }
}

export default Page as ComponentClass
