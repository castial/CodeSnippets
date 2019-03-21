/**
 * mutations是用来存放数据逻辑处理的，改变state里面的数据。
 */
import type from './mutations-type'

export default {
  // 进入下一题
  [type.NEXT_QUESTION] (state, num) {
    state.itemNum += num
  },
  [type.RECORD_ITEM_ANSWER] (state, id) {
    state.answerIDList.push(id)
  },
  [type.RECORD_ANSWER_TIME] (state) {
    state.timer = setInterval(() => {
      state.expendTime++
    }, 1000)
  },
  [type.INIT_QUESTION] (state) {
    state.itemNum = 1
    state.answerIDList = []
    state.expendTime = 0
  }
}
