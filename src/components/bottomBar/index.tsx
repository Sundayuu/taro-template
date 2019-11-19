import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import './index.scss'
import { View } from '@tarojs/components'
type PropsType = {
  currentTab: number
}
const tabArr = [
  {
    title: '心动',
    image: '/assets/images/icon/heart.png',
    pageUrl: '/pages/index/index',
    selectedImage: '/assets/images/icon/selected_heart.png'
  },
  {
    title: '我的',
    image: '/assets/images/icon/mine.png',
    pageUrl: '/pages/test01/index',
    selectedImage: '/assets/images/icon/selected_mine.png'
  }
]

function Bottom({ currentTab }: PropsType) {
  const handleClick = e => {
    if (e === currentTab) return
    Taro.switchTab({
      url: tabArr[e].pageUrl
    })
  }
  return (
    <View>
      <AtTabBar
        fixed
        selectedColor={'#cc1818'}
        tabList={tabArr}
        onClick={handleClick}
        current={currentTab}
      />
    </View>
  )
}

export default Bottom
