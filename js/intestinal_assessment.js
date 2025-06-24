// js/note.js
// date: 2025-06-24
// author: Honglie Zhang

// 目前不需要额外的 JavaScript 功能
// 可以在这里后续添加与模块交互的 JS 代码

// note.js

/**
 * 肠道评估模块所有的文本描述信息 包含肠道评估整体性描述和每一个具体指标的描述
 * @type {Object}
 * @property {string} intestinalAssessmentDescription - 本肠道整体评估通过肠道菌群检测数据，运用生物信息学和人工智能算法将微生物组成转化为六大功能性指标。这些指标可以反映菌群微生态结构对肠道炎症、代谢、屏障功能等方面的潜在影响，为个性化的肠道调理和健康管理提供科学依据。
 * @property {Object} intestinalItemDescription - 包含肠道功能性指标的描述信息
 * @property {string} intestinalItemDescription.inflammationDescription - 肠道炎症指标描述: 这一指标反映了狗狗肠道内的免疫反应状态。通过评估该水平，可以了解狗狗的肠道健康，识别潜在的消化系统问题。健康的肠道通常维持适度的炎症水平，以支持正常免疫功能。
 * @property {string} intestinalItemDescription.digestionDescription - 消化效率指标描述: 这一指标反映了狗狗对食物营养的吸收能力。评估消化效率有助于了解狗狗的消化健康，识别潜在的营养不良风险。良好的消化效率确保狗狗最大限度地利用食物中的营养成分，支持整体健康。
 * @property {string} intestinalItemDescription.barrierDescription - 肠道屏障指标描述: 这一指标反映了狗狗肠道对有害物质的防御能力。通过评估肠道屏障功能，可以了解狗狗的消化健康，识别潜在的感染风险。健康的肠道屏障能够有效阻止有害物质进入血液，维持整体健康。
 * @property {string} intestinalItemDescription.proteinDescription - 蛋白发酵指标描述: 这一指标反映了狗狗肠道内蛋白质的发酵过程。通过评估蛋白发酵，可以了解肠道内微生物活动，识别潜在的消化问题。适度的蛋白发酵对肠道健康有益，但过度则可能导致肠道产气增加，造成不适。
 * @property {string} intestinalItemDescription.gasDescription - 肠道产气指标描述: 这一指标反映了狗狗消化过程中气体的生成情况。通过评估肠道产气水平，可以了解狗狗的消化健康，识别潜在的不适或异常。适度的气体生成是正常的，但过量可能导致胀气和不适。
 * @property {string} intestinalItemDescription.metabolismDescription - 代谢健康指标描述: 这一指标反映了狗狗在能量转化和营养利用方面的能力。通过评估该指标，可以了解狗狗的代谢状态，识别潜在的代谢问题。良好的代谢健康确保狗狗有效利用营养，以支持其生理功能。
 */

const descriptionData = {
  intestinalAssessmentDescription: `本肠道整体评估通过肠道菌群检测数据，运用生物信息学和人工智能算法将微生物组成转化为六大
  功能性指标。这些指标可以反映菌群微生态结构对肠道炎症、代谢、屏障功能等方面的潜在影响,为个性化的肠道调理和健康管理提供科学依据`,
  intestinalItemDescription: {
    '肠道炎症': `这一指标反映了狗狗肠道内的免疫反应状态。通过评估该水平，可以了解狗狗的肠道健康，识别潜在的消
    化系统问题。健康的肠道通常维持适度的炎症水平，以支持正常免疫功能`,
    '消化效率': `这一指标反映了狗狗对食物营养的吸收能力。评估消化效率有助于了解狗狗的消化健康，识别潜在的营养不良
    风险。良好的消化效率确保狗狗最大限度地利用食物中的营养成分，支持整体健康`,
    '肠道屏障': `这一指标反映了狗狗肠道对有害物质的防御能力。通过评估肠道屏障功能，可以了解狗狗的消化健康，识别潜在
    的感染风险。健康的肠道屏障能够有效阻止有害物质进入血液，维持整体健康`,
    '蛋白发酵': `这一指标反映了狗狗肠道内蛋白质的发酵过程。通过评估蛋白发酵，可以了解肠道内微生物活动，识别潜在的消
    化问题。适度的蛋白发酵对肠道健康有益，但过度则可能导致肠道产气增加，造成不适`,
    '肠道产气': `这一指标反映了狗狗消化过程中气体的生成情况。通过评估肠道产气水平，可以了解狗狗的消化健康，识别潜在的不
    适或异常。适度的气体生成是正常的，但过量可能导致胀气和不适`,
    '代谢健康': `这一指标反映了狗狗在能量转化和营养利用方面的能力。通过评估该指标，可以了解狗狗的代谢状态，识别
    潜在的代谢问题。良好的代谢健康确保狗狗有效利用营养，以支持其生理功能`,
  }
};

/**
 * 描述肠道状态的 SVG 元素
 * @type {Object}
 * @property {string} normal - 正常状态的 SVG 表示，包括一个表示正常状态的绿色图标。
 * @property {string} abnormal - 不正常状态的 SVG 表示，包括一个表示不正常状态的红色图标。
 */
const intestinalStatusSVG = {
  normal: `
    <div class="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-emerald-400 to-teal-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    </div>
  `,
  abnormal: `
    <div class="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-rose-400 to-red-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
    </div>
  `,
};

/**
 * 选定的肠道功能性指标项
 * @type {Array<string>}
 * @description 该数组包含与肠道健康相关的功能性指标名称，这些指标用于评估狗狗的肠道健康状况。
 * @example
 * const selectedIntestinalAssessmentItems = [
 *   '肠道炎症',
 *   '消化效率',
 *   '肠道屏障',
 *   '蛋白发酵',
 *   '肠道产气',
 *   '代谢健康'
 * ];
 */
const selectedIntestinalAssessmentItems = [
  '肠道炎症', '消化效率', '肠道屏障', '蛋白发酵', '肠道产气', '代谢健康'
];

/**
 * 判断指标值在正常范围内的状态
 * @param {string} itemValue - 当前指标值
 * @param {string} normalRange - 正常范围字符串，例如 "0-75"
 * @returns {string} - 返回 "正常"、"偏低" 或 "偏高"
 */
function getValueStatus(itemValue, normalRange) {
  // 将 itemValue 转换为数字
  const value = parseFloat(itemValue);

  // 将正常范围通过 "-" 分割为上下限
  const [min, max] = normalRange.split('-').map(Number);

  // 检查值并返回对应状态
  if (value < min) {
    return '偏低';
  } else if (value > max) {
    return '偏高';
  } else {
    return '正常';
  }
}


function getIntestinalAssessmentCards(intestinalAssessmentData) {
  let cardsHTML = '';

  // 遍历选定的肠道功能性指标项
  selectedIntestinalAssessmentItems.forEach((item) => {
      // 找到匹配的评估项
      const foundItem = intestinalAssessmentData.find(data => data.name === item);

      // 检查是否找到了该评估指标
      if (foundItem) {
        const itemValue = foundItem.value; // 从匹配的对象中获取 value
        const normalRange = foundItem['正常范围']; // 获取正常范围
        const indicatorDescription = descriptionData.intestinalItemDescription[item] || '';

        // 根据当前指标值和正常范围获取状态的 SVG
        const itemStatusSVG = getValueStatus(itemValue, normalRange) === '正常'
          ? intestinalStatusSVG.normal
          : intestinalStatusSVG.abnormal;

        // 获取健康状态
        const itemLevel = getValueStatus(itemValue, normalRange);
        // 使用三元表达式判断状态描述
        const itemStatusDescription = itemLevel === '正常'
          ? '正常水平'
          : itemLevel === '偏高'
            ? '偏高水平'
            : '偏低水平';

        cardsHTML += `
          <div class="card p-4">
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center">
                ${itemStatusSVG}
                <div class="ml-3">
                  <h2 class="text-base font-semibold">${item}</h2>
                  <p class="text-xs text-rose-500 font-medium">${itemStatusDescription}</p>
                </div>
              </div>
              <div class="text-right">
                <span class="text-xl font-bold text-red-500">${itemValue}</span>
                <p class="text-xs text-gray-500">参考范围：${normalRange}</p>
              </div>
            </div>

            <div class="mb-3">
              <div class="range-indicator">
                <div class="range-bar bg-red-500" style="left: 0; width: ${itemValue}%;"></div>
                <div class="current-value bg-red-500" style="left: ${itemValue}%;"></div>
              </div>
              <div class="flex justify-between text-xs text-gray-500 mt-1">
                <span>低</span>
                <span>高</span>
              </div>
            </div>

            <div class="text-xs text-gray-700 bg-gray-50 p-3 rounded-lg leading-relaxed">
              <p class="mb-1">${indicatorDescription}</p>
            </div>
          </div>
        `;
      }
    }
  );

  return cardsHTML; // 返回生成的 HTML 字符串
}


function generateIntestinalAssessmentHTML(reportData) {
  const intestinalAssessmentCarsHTML = getIntestinalAssessmentCards(reportData["肠道评估"]);

  return `
    <header class="flex gap-2 mb-4 pt-6 page-break">
      <!-- 左侧蓝色容器 (约80%) -->
      <div class="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6 flex items-center w-[80%] rounded-2xl">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">肠道评估</h1>
          <p class="text-sm opacity-80 mt-1">Assessment of Basic Gut Function</p>
        </div>
      </div>
      <!-- 右侧灰色容器 (约20%) -->
      <div class="bg-slate-100 p-4 flex items-center justify-center w-[20%] rounded-2xl">
        <div class="flex items-baseline">
          <span class="font-bold text-green-700" style="font-size: 50px">2</span>
          <span class="text-lg text-slate-500 ml-1">/6</span>
        </div>
      </div>
    </header>
    <div class="bg-blue-50 p-4 rounded-lg mb-4 mt-4">
        <div class="flex items-center">
          <div>
            <p class="text-gray-600" style="font-size: 13px">
              ${descriptionData.intestinalAssessmentDescription}
            </p>
          </div>
        </div>
    </div>

    <div class="mx-auto mt-2 p-4">
      <div class="grid grid-cols-2 gap-y-3 gap-x-2">
        ${intestinalAssessmentCarsHTML}
      </div>
    </div>
  `; // 返回生成的 HTML 字符串
}

function loadIntestinalAssessment(reportData) {
  // 生成肠道评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "intestinalAssessment" 的 div 中
  document.getElementById('intestinal_assessment').innerHTML = generateIntestinalAssessmentHTML(reportData);
}

// 导出函数以便在其他模块中使用
export {loadIntestinalAssessment};
