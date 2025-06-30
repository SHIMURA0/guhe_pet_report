// js/overall_vitamin_evaluation.js
// date: 2025-06-30
// author: Honglie Zhang

const CONFIG = {
  overallDescription: '维⽣素与肠道菌群的互作是狗狗肠道微⽣态健康的重要组成部分，是评估狗狗消化系统功能的关键指标。通过检测狗狗肠道菌群对维⽣素的合成能⼒和代谢模式，可以早期识别微⽣态失衡状态，预防营养吸收障碍，指导益⽣菌和益⽣元的补充，为狗狗量身定制个性化的肠道健康⽅案',
  overallSimplifiedVitaminsDescription: {
    '维生素A': '⽀持视⼒健康和免疫系统功能，维持⽪肤和黏膜健康',
    '维生素D': '促进钙吸收、⻣骼健康，调节免疫系统和细胞⽣⻓',
    '维生素E': '强效抗氧化剂，促进胶原蛋⽩形成，增强免疫系统功能',
    '维生素K': '抗氧化剂，保护细胞免受⾃由基损伤',
    '维生素C': '参与⾎液凝固过程和⻣骼代谢',
    '维生素B1': '帮助碳⽔化合物转化为能量，⽀持神经系统功能',
    '维生素B2': '辅助能量产⽣，维持细胞⽣⻓和功能',
    '维生素B6': '参与蛋⽩质代谢和红细胞⽣成',
    '维生素B9': '⽀持细胞分裂和DNA合成，对⽣⻓发育⾄关重要',
    '维生素B12': '参与红细胞形成，维持神经系统健康和DNA合成',
  },
  vitaminsLetters: {
    '维生素A': 'A',
    '维生素D': 'D',
    '维生素E': 'E',
    '维生素K': 'K',
    '维生素C': 'C',
    '维生素B1': 'B1',
    '维生素B2': 'B2',
    '维生素B6': 'B6',
    '维生素B9': 'B9',
    '维生素B12': 'B12'
  },
  vitaminsColor: {
    '维生素A': {
      backgroundColor: '#ffe4e6',
      textColor: '#e11d48'
    },
    '维生素D': {
      backgroundColor: '#fef3c7',
      textColor: '#d97706'
    },
    '维生素E': {
      backgroundColor: '#ffedd5',
      textColor: '#ea580c'
    },
    '维生素K': {
      backgroundColor: '#dcfce7',
      textColor: '#16a34a'
    },
    '维生素C': {
      backgroundColor: '#f3e8ff',
      textColor: '#9333ea'
    },
    '维生素B1': {
      backgroundColor: '#BBDEFB',
      textColor: '#0D47A1'
    },
    '维生素B2': {
      backgroundColor: '#BBDEFB',
      textColor: '#0D47A1'
    },
    '维生素B6': {
      backgroundColor: '#BBDEFB',
      textColor: '#0D47A1'
    },
    '维生素B9': {
      backgroundColor: '#BBDEFB',
      textColor: '#0D47A1'
    },
    '维生素B12': {
      backgroundColor: '#BBDEFB',
      textColor: '#0D47A1'
    }
  }
};

const selectedNonBVitamins = [
  '维生素A',
  '维生素D',
  '维生素E',
  '维生素K',
  '维生素C'
];

const selectedBVitamins = [
  '维生素B1',
  '维生素B2',
  '维生素B6',
  '维生素B9',
  '维生素B12'
];

function getValueStatus(itemValue, normalRange){
  const value = parseFloat(itemValue);
  const [min, max] = normalRange.split('-').map(Number);
  return value < min ? '缺乏' : value > max ? '过量' : '正常';
}

function generateNonBVitaminsEvaluationHTML(NonBVitaminsEvaluationData) {
  let nonBVitaminsEvaluationCardHTML = '';
  selectedNonBVitamins.forEach(
    (element) =>{
      const foundItem = NonBVitaminsEvaluationData.find(data => data.name === element);
      const foundItemValue = foundItem?.value || 0;
      const foundItemNormalRange = foundItem?.['正常范围'] || '-';
      const foundItemStatus = getValueStatus(foundItemValue, foundItemNormalRange);
      nonBVitaminsEvaluationCardHTML += `
        <div
          style="
            display: flex;
            align-items: center;
            margin-bottom: 8px;">
          <div
            style="
              width: 2.5rem;
              height: 2.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: ${CONFIG.vitaminsColor[element].backgroundColor};
              margin-right: 0.75rem;
              flex-shrink: 0;
              border-radius: 0.5rem;">
            <span style="font-size: 1.25rem; font-weight: 700; color: ${CONFIG.vitaminsColor[element].textColor};">
              ${CONFIG.vitaminsLetters[element]}
            </span>
          </div>
          <div
            style="flex-grow: 1;
            margin-right: 12px;">
            <h3
              style="
                font-size:14px;
                font-weight: 600;
                color: #1f2937;
                margin: 0 0 2px 0;">
              ${element}
            </h3>
            <p
              style="
                font-size:12px;
                margin: 0;
                font-style: italic;
                color: #9ca3af;">
              ${CONFIG.overallSimplifiedVitaminsDescription[element]}
            </p>
          </div>
          <div
            style="
              ${foundItemStatus === '正常' ? 'background-color: #d1fae5' : 'background-color: #fee2e2'};
              padding: 6px 12px;
              border-radius: 8px;">
            <span
              style="
                ${foundItemStatus === '正常' ? 'color: #059669' : 'color: #b91c1c'};
                font-size: 0.875rem;
                font-weight: 500;">
              <strong>${foundItemStatus}</strong>
            </span>
          </div>
        </div>
      `;
    }
  )
  return nonBVitaminsEvaluationCardHTML;
}

function generateBVitaminsEvaluationHTML(BVitaminsEvaluationData) {
  let BVitaminsEvaluationCardHTML = '';
  selectedBVitamins.forEach(
    (element) =>{
      const foundItem = BVitaminsEvaluationData.find(data => data.name === element);
      const foundItemValue = foundItem?.value || 0;
      const foundItemNormalRange = foundItem?.['正常范围'] || '-';
      const foundItemStatus = getValueStatus(foundItemValue, foundItemNormalRange);
      BVitaminsEvaluationCardHTML += `
        <div
          style="
            display: flex;
            align-items: center;
            margin-bottom: 8px;">
          <div
            style="
              width: 2.5rem;
              height: 2.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: ${CONFIG.vitaminsColor[element].backgroundColor};
              margin-right: 0.75rem;
              flex-shrink: 0;
              border-radius: 0.5rem;">
            <span style="font-size: 1.25rem; font-weight: 700; color: ${CONFIG.vitaminsColor[element].textColor};">
              ${CONFIG.vitaminsLetters[element]}
            </span>
          </div>
          <div
            style="flex-grow: 1;
            margin-right: 12px;">
            <h3
              style="
                font-size:14px;
                font-weight: 600;
                color: #1f2937;
                margin: 0 0 2px 0;">
              ${element}
            </h3>
            <p
              style="
                font-size:12px;
                margin: 0;
                font-style: italic;
                color: #9ca3af;">
              ${CONFIG.overallSimplifiedVitaminsDescription[element]}
            </p>
          </div>
          <div
            style="
              ${foundItemStatus === '正常' ? 'background-color: #d1fae5' : 'background-color: #fee2e2'};
              padding: 6px 12px;
              border-radius: 8px;">
            <span
              style="
                ${foundItemStatus === '正常' ? 'color: #059669' : 'color: #b91c1c'};
                font-size: 0.875rem;
                font-weight: 500;">
              <strong>${foundItemStatus}</strong>
            </span>
          </div>
        </div>
      `;
    }
  )
  return BVitaminsEvaluationCardHTML;
}

function generateOverallVitaminEvaluationHTML(vitaminsEvaluationData) {
  let overallVitaminEvaluationHTML = '';

  overallVitaminEvaluationHTML += `
    <h2 class="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pt-4 pb-2 page-break">
      维生素评估
    </h2>

    <div class="bg-blue-50 p-4 rounded-lg mb-4">

      <div>
        <div class="flex items-center">
          <div class="bg-indigo-100 p-2 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <div>
            <p class="text-gray-600 leading-relaxed" style="font-size: 13px">
              ${CONFIG.overallDescription}
            </p>
          </div>
        </div>
      </div>

    </div>

    <!-- 平分宽度的卡片容器 -->
    <div class="px-4 py-0 mt-6" style="display: flex; justify-content: space-between;">
      <!-- 总评估项 - 靠左对齐 -->
      <div
        style="width: calc(25% - 2px); background: white; border-radius: 12px; display: flex; align-items: center; justify-content: flex-start;">
        <div
          style="width: 42px; height: 42px; border-radius: 8px; background-color: #e0f2fe; display: flex; align-items: center; justify-content: center; margin-right: 12px; flex-shrink: 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
            <line x1="16" y1="8" x2="2" y2="22"></line>
            <line x1="17.5" y1="15" x2="9" y2="15"></line>
          </svg>
        </div>
        <div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 2px;">评估数量</div>
          <div style="font-size: 20px; font-weight: 700; color: #4b5563; line-height: 1.2;">10</div>
        </div>
      </div>

      <!-- 正常项 - 居中对齐 -->
      <div
        style="width: calc(25% - 2px); background: white; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
        <div
          style="width: 42px; height: 42px; border-radius: 8px; background-color: #dcfce7; display: flex; align-items: center; justify-content: center; margin-right: 12px; flex-shrink: 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 2px;">正常水平</div>
          <div style="font-size: 20px; font-weight: 700; color: #16a34a; line-height: 1.2;">9</div>
        </div>
      </div>

      <!-- 偏高项 - 居中对齐 -->
      <div
        style="width: calc(25% - 2px); background: white; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
        <div
          style="width: 42px; height: 42px; border-radius: 8px; background-color: #e9d5ff; display: flex; align-items: center; justify-content: center; margin-right: 12px; flex-shrink: 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="#6b46c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
        <div>
          <div style="font-size: 12px; color: #6b46c1; margin-bottom: 2px;">偏高水平</div>
          <div style="font-size: 20px; font-weight: 700; color: #6b46c1; line-height: 1.2;">0</div>
        </div>
      </div>

      <!-- 偏低项 - 靠右对齐 -->
      <div
        style="width: calc(25% - 2px); background: white; border-radius: 12px; display: flex; align-items: center; justify-content: flex-end;">
        <div
          style="width: 42px; height: 42px; border-radius: 8px; background-color: #fee2e2; display: flex; align-items: center; justify-content: center; margin-right: 12px; flex-shrink: 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 2px;">偏低水平</div>
          <div style="font-size: 20px; font-weight: 700; color: #dc2626; line-height: 1.2;">1</div>
        </div>
      </div>
    </div>

    <div class="mt-6">

      <h2
        class="mt-4"
        style="
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin-top: 12px;
          margin-bottom: 12px;
          padding-left: 8px;
          border-left: 10px solid #6366f1;">
        非B族维生素
        <i class="fas fa-sort-amount-down text-gray-400 ml-2" style="font-size: 14px;">按对狗狗重要性递减排序</i>
      </h2>
      <div class="bg-gray-50 mb-2" style="padding: 1rem; border-radius: 0.5rem;">
        ${generateNonBVitaminsEvaluationHTML(vitaminsEvaluationData)}
      </div>

      <div class="mt-6">
        <!-- 必需B族维生素 -->
        <h2
          style="
            font-size: 16px;
            font-weight: 600;
            color: #111827;
            margin-top: 12px;
            margin-bottom: 12px;
            padding-left: 8px;
            border-left: 10px solid #6366f1;">
          B族维生素</h2>
        <div class="bg-gray-50 mt-4" style="padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
          ${generateBVitaminsEvaluationHTML(vitaminsEvaluationData)}
        </div>
      </div>

    </div>
  `;

  return overallVitaminEvaluationHTML;
}

function loadOverallVitaminEvaluationHTML(sampleData) {
  // 生成肠道评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "intestinalAssessment" 的 div 中
  document.getElementById('overall-vitamin-evaluation').innerHTML = generateOverallVitaminEvaluationHTML(sampleData['营养']);
}

export {loadOverallVitaminEvaluationHTML};
