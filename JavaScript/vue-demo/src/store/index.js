import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

/**
 * 应用层级状态的定义
 */
const state = {
  itemNum: 1, // 第几题
  answerIDList: [], // 答案集合
  questionList: [
    {
      question_id: 1,
      question_name: '藏族人民的主食是()？',
      question_answer_list: [
        {
          answer_id: 1,
          answer_name: '馒头',
          is_standard_answer: false
        },
        {
          answer_id: 2,
          answer_name: '米饭',
          is_standard_answer: false
        },
        {
          answer_id: 3,
          answer_name: '糌粑',
          is_standard_answer: true
        },
        {
          answer_id: 4,
          answer_name: '粽子',
          is_standard_answer: false
        }
      ]
    },
    {
      question_id: 2,
      question_name: '我国东北三省是指()?',
      question_answer_list: [
        {
          answer_id: 5,
          answer_name: '河北省、山东省、湖北省',
          is_standard_answer: false
        },
        {
          answer_id: 6,
          answer_name: '湖北省、广西壮族自治区、山东省',
          is_standard_answer: false
        },
        {
          answer_id: 7,
          answer_name: '黑龙江省、吉林省、辽宁省',
          is_standard_answer: true
        },
        {
          answer_id: 8,
          answer_name: '吉林省、辽宁省、内蒙古自治区',
          is_standard_answer: false
        }
      ]
    },
    {
      question_id: 3,
      question_name: '广州的别称是()?',
      question_answer_list: [
        {
          answer_id: 9,
          answer_name: '榕城',
          is_standard_answer: false
        },
        {
          answer_id: 10,
          answer_name: '春城',
          is_standard_answer: false
        },
        {
          answer_id: 11,
          answer_name: '羊城',
          is_standard_answer: true
        },
        {
          answer_id: 12,
          answer_name: '雾都',
          is_standard_answer: false
        }
      ]
    },
    {
      question_id: 4,
      question_name: '北京的传统民居是()?',
      question_answer_list: [
        {
          answer_id: 13,
          answer_name: '土坯房',
          is_standard_answer: false
        },
        {
          answer_id: 14,
          answer_name: '窑洞',
          is_standard_answer: false
        },
        {
          answer_id: 15,
          answer_name: '四合院',
          is_standard_answer: true
        },
        {
          answer_id: 16,
          answer_name: '吊脚楼',
          is_standard_answer: false
        }
      ]
    },
    {
      question_id: 5,
      question_name: '世界使用人数最多的语言是？',
      question_answer_list: [
        {
          answer_id: 17,
          answer_name: '英语',
          is_standard_answer: false
        },
        {
          answer_id: 18,
          answer_name: '汉语',
          is_standard_answer: true
        },
        {
          answer_id: 19,
          answer_name: '拉丁语',
          is_standard_answer: false
        },
        {
          answer_id: 20,
          answer_name: '阿拉伯语',
          is_standard_answer: false
        }
      ]
    }
  ]
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
