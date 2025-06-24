// js/api.js
// date: 2025-06-24
// author: Honglie Zhang


// 全局变量用于存储报告数据
/**
 * @type {Object}
 * @property {string} code - 返回的状态码，例如"200"
 * @property {string} msg - 返回的信息，例如"成功返回样品数据"
 * @property {SampleInfo} sampleinfo - 样品信息对象
 * @property {Score[]} 总分 - 健康评分数组
 */

/**
 * 样品信息对象
 * @typedef {Object} SampleInfo
 * @property {string} sampleid - 样品ID
 * @property {string} sampleusername - 样品用户名
 * @property {string} sex - 性别
 * @property {string} age - 年龄
 * @property {string} comment - 附加的详细信息（包括品种、病史等）
 * @property {string} binddate - 绑定日期
 * @property {string} samplestatus - 样品状态
 * @property {string} reportdate - 报告生成日期
 * @property {string} receivedate - 样品接收日期
 * @property {string} experimentdate - 实验日期
 */

/**
 * 健康评分对象
 * @typedef {Object} Score
 * @property {string} name - 评分名称，例如"健康总分"
 * @property {number} value - 评分值
 * @property {string} type - 评分类型
 * @property {string} url - 评分的 URL 路径
 * @property {string} desc - 评分描述
 */

/**
 * 从指定的 API 获取数据
 *
 * @param {string} sampleId - 样本ID，用于请求特定客户的报告数据
 * @returns {Promise<Object>} - 返回获取到的 API 数据
 * @throws {Error} - 如果请求失败，将抛出错误
 */
async function fetchData(sampleId) {
  const apiUrl = `https://www.guhejk.com/API/dogAPI2025.php?sampleid=${sampleId}`;

  try {
    // 发起 API 请求
    const response = await fetch(apiUrl);

    // 检查响应是否成功
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // 返回获取的数据
    return await response.json();
  } catch (error) {
    console.error('获取数据时出错:', error);
    throw error;
  }
}

// 导出函数
export { fetchData };
