/**
 * action是用来提交mutations的，并且可以异步操作。
 */
import type from './mutations-type'

export default {
  submitAnswer ({ commit, state }, id) {
    // 记录下当前选择的问题答案
    commit(type.RECORD_ITEM_ANSWER, id)
    // 如果不是最后一个，获取下一题目
    if (state.itemNum < state.questionList.length) {
      commit(type.NEXT_QUESTION, 1)
    }
  },
  initData ({ commit }) {
    commit(type.INIT_QUESTION)
  }
}
