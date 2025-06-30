// js/gut_microbiome_assessment.js
// date: 2025-06-26
// author: Honglie Zhang

const descriptionData = {
  overallDescription: `本部分评估狗狗肠道微生物群落的三个核心健康指标：<strong>菌群平衡</strong>、<strong>多样性</strong>和<strong>数量</strong>。这些相互关联的参数共同构成了狗狗肠道微生物组的基础特征，反映了肠道生态系统的整体健康状况。作为专业宠物肠道健康评估的标准指标，它们提供了量化的数据，以帮助了解狗狗消化系统的微生物环境。监测这些指标可以及早发现潜在问题，评估饮食调整的效果，并为个性化肠道健康管理提供依据。以下详细解析这三个指标的具体表现及其对狗狗健康的影响。`,
  overallMetricsSimplifiedDescription: {
    '肠道菌群平衡': `整体肠道生态稳定性`,
    '菌群多样性': `细菌种类丰富程度 (香浓多样性)`,
    '菌种数量': `检测到的肠道细菌总体数量`,
  },
  overallMetricsDetailedDescription: {
    '肠道菌群平衡': `狗狗作为肉食动物，其肠道菌群平衡对健康至关重要。良好的菌群平衡意味着乳酸菌、双歧杆菌等有益菌占据优势，能够抑制大肠杆菌等潜在致病菌的过度生长。平衡的菌群有助于狗狗消化肉类蛋白，减少肠胃不适，并预防腹泻和便秘等问题。`,
    '菌群多样性': ` 狗狗的肠道菌群多样性反映了不同种类微生物的丰富程度。尽管狗狗的肠道相对较短，但菌群多样性依然至关重要。研究表明，菌群多样性不足的狗狗更易患炎症性肠病（IBD）和过敏性肠综合征。多样化的菌群能够帮助分解不同类型的食物，提高微量营养素的吸收，同时加强肠道屏障功能。`,
    '菌种数量': `狗狗肠道菌种总数量对维持消化道健康非常重要。充足的菌群数量能够合成维生素K和部分B族维生素，生成短链脂肪酸滋养肠壁细胞，并通过竞争性排斥来预防有害菌的定植。`,
  }
};

const selectedGutMicrobiomeAssessmentItems = ['肠道菌群平衡', '菌群多样性', '菌种数量'];

function getValueStatus(itemValue, normalRange) {
  const value = parseFloat(itemValue);
  const [min, max] = normalRange.split('-').map(Number);
  return value < min ? '偏低' : value > max ? '偏高' : '正常';
}

function getProgressPercent(item, itemValue, normalRange) {

  const value = parseFloat(itemValue);
  const [_, max] = normalRange.split('-').map(Number);

  if (item === '菌种数量') {
    return (value / max)* 100;
  }
  return (value / 100) * 100;
}

function generateGutMicrobiomeAssessmentCardsHTML(gutMicrobiomeAssessmentData) {

  let cardsHTML = '';

  selectedGutMicrobiomeAssessmentItems.forEach(
    (item) => {
      const foundItem = gutMicrobiomeAssessmentData.find(data => data.name === item);
      const foundItemValue = foundItem?.value || 0;
      const foundItemNormalRange = foundItem?.['正常范围'] || '-';
      const foundItemStatus = getValueStatus(foundItemValue, foundItemNormalRange);
      const foundItemProgressPercent = getProgressPercent(item, foundItemValue, foundItemNormalRange);

      cardsHTML += `
        <!-- 卡片样式 -->
        <div class="bacteria-overall-metric-card p-4">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center">
              <div class="bacteria-overall-icon-container bg-green-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-green-600"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>
              </div>
              <div class="ml-3">
                <h3 class="font-semibold text-base text-gray-900">${item === '肠道菌群平衡' ? '菌群平衡' : item}</h3>
                <p class="text-xs text-gray-500">
                  ${descriptionData.overallMetricsSimplifiedDescription[item]} | 正常范围: ${foundItemNormalRange}
                </p>
              </div>
            </div>

            <div class="flex items-center">
              <span
                class="
                  text-3xl
                  font-bold
                  ${foundItemStatus === '正常'
                    ? 'text-green-600'
                    : 'text-red-600'}">
                ${foundItemValue}
              </span>
            </div>
          </div>

          <!-- 进度条 -->
          <div class="mb-4 relative">
            <div class="range-indicator">
                <div class="
                  range-bar
                  ${foundItemStatus === '正常'
                  ? 'bg-green-500'
                  : 'bg-red-500'}"
                  style="left: 0; width: ${foundItemProgressPercent}%;">
                </div>
                <div class="current-value ${foundItemStatus === '正常' ? 'bg-green-500' : 'bg-red-500'}" style="left: ${foundItemProgressPercent}%;"></div>
              </div>
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>极低</span>
              <span>偏低</span>
              <span>中等</span>
              <span>丰富</span>
            </div>
          </div>

          <!-- 解析内容 -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-3 rounded-md">
              <div>
                <h4 class="text-sm font-medium text-gray-800 mb-2">
                  <i class="fas fa-book mr-2" style="color: #3b82f6;"></i>解释说明
                </h4>
                <p class="text-xs text-gray-600 leading-relaxed">
                  ${descriptionData.overallMetricsDetailedDescription[item]}
                </p>
              </div>
            </div>
            <div class="bg-gray-50 p-3 rounded-md">
              <h4 class="text-sm font-medium text-gray-800 mb-2">
                <i class="fas fa-search mr-2 text-blue-500"></i>关键发现
              </h4>
              <ul class="text-xs space-y-1 text-gray-600">
                <li class="flex items-start">
                  <span class="w-1 h-1 bg-yellow-500 rounded-full mt-1.5 mr-1.5 flex-shrink-0"></span>
                  <span>虽处于正常范围内，但整体偏低，显示出菌群的多样性偏低。</span>
                </li>
                <li class="flex items-start">
                  <span class="w-1 h-1 bg-yellow-500 rounded-full mt-1.5 mr-1.5 flex-shrink-0"></span>
                  <span>较低的多样性可能增加肠道炎症和IBD的风险，影响营养物质的有效吸收。</span>
                </li>
                <li class="flex items-start">
                  <span class="w-1 h-1 bg-yellow-500 rounded-full mt-1.5 mr-1.5 flex-shrink-0"></span>
                  <span>菌群单一化可能导致免疫系统过度反应，从而影响狗狗的整体健康。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      `;



    }

  )

  return cardsHTML;
}

function generateGutMicrobiomeAssessmentHTML(gutMicrobiomeAssessmentData) {
  let gutMicrobiomeAssessmentHTML = '';
  const gutMicrobiomeAssessmentCardsHTML = generateGutMicrobiomeAssessmentCardsHTML(gutMicrobiomeAssessmentData);

  const gutMicrobiomeBalance = gutMicrobiomeAssessmentData.find(item => item.name === '肠道菌群平衡');
  const gutMicrobiomeBalanceScore = gutMicrobiomeBalance?.value || 0;
  const gutMicrobiomeDiversity = gutMicrobiomeAssessmentData.find(item => item.name === '菌群多样性');
  const gutMicrobiomeDiversityScore = gutMicrobiomeDiversity?.value || 0;
  const gutMicrobiomeAbundance = gutMicrobiomeAssessmentData.find(item => item.name === '菌种数量');
  const gutMicrobiomeAbundanceScore = gutMicrobiomeAbundance?.value || 0;

  gutMicrobiomeAssessmentHTML += `
    <h2 class="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pt-4 pb-2 page-break">
      菌群评估 (整体指标)
    </h2>

    <div class="bg-blue-50 p-4 rounded-lg">

      <div>
        <div class="flex items-center">
          <div class="bg-indigo-100 p-2 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          </div>
          <div>
            <p class="text-gray-600" style="font-size: 12px">
              本部分评估狗狗肠道微生物群落的三个核心健康指标：<strong>菌群平衡</strong>、<strong>多样性</strong>和<strong>数量</strong>。这些相互关联的参数共同构成了狗狗肠道微生物组的基础特征，反映了肠道生态系统的整体健康状况。作为专业宠物肠道健康评估的标准指标，它们提供了量化的数据，以帮助了解狗狗消化系统的微生物环境。监测这些指标可以及早发现潜在问题，评估饮食调整的效果，并为个性化肠道健康管理提供依据。以下详细解析这三个指标的具体表现及其对狗狗健康的影响。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 指标概览 -->
    <div class="my-4">
      <!--        <h2 class="text-base font-semibold text-gray-800 mb-3">肠道菌群关键指标</h2>-->

      <div class="grid grid-cols-3 gap-4">
        <!-- 指标卡片 - 菌群平衡 -->
        <div class="p-2 bg-gray-50 rounded-md">
          <div class="flex items-center justify-between">
            <span class="text-xs font-medium text-gray-600">菌群平衡</span>
            <span class="text-sm font-bold text-green-600">25%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2 my-1.5">
            <div class="bg-green-500 h-2 rounded-full" style="width: 25%"></div>
          </div>
          <div class="text-xs text-green-600 font-medium">正常略偏低</div>
        </div>

        <!-- 指标卡片 - 菌群多样性 -->
        <div class="p-2 bg-gray-50 rounded-md">
          <div class="flex items-center justify-between">
            <span class="text-xs font-medium text-gray-600">菌群多样性</span>
            <span class="text-sm font-bold text-green-600">28%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2 my-1.5">
            <div class="bg-green-500 h-2 rounded-full" style="width: 28%"></div>
          </div>
          <div class="text-xs text-green-600 font-medium">正常略偏低</div>
        </div>

        <!-- 指标卡片 - 菌种数量 -->
        <div class="p-2 bg-gray-50 rounded-md">
          <div class="flex items-center justify-between">
            <span class="text-xs font-medium text-gray-600">菌种数量</span>
            <span class="text-sm font-bold text-green-600">10.8%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2 my-1.5">
            <div class="bg-green-500 h-2 rounded-full" style="width: 10.8%"></div>
          </div>
          <div class="text-xs text-green-600 font-medium">正常略偏低</div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 mb-4">
      ${gutMicrobiomeAssessmentCardsHTML}
    </div>
  `;

  return gutMicrobiomeAssessmentHTML;

}

function loadGutMicrobiomeAssessment(sampleData) {
  // 生成肠道评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "intestinalAssessment" 的 div 中
  document.getElementById('gut_microbiome_assessment').innerHTML = generateGutMicrobiomeAssessmentHTML(sampleData['肠道评估']);
}

export {loadGutMicrobiomeAssessment};
