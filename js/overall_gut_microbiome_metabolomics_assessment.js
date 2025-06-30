// js/overall_gut_microbiome_metabolomics_assessment.js
// date: 2025-06-30
// author: Honglie Zhang

const CONFIG = {
  overallDescription: '本肠道健康评估通过检测肠道微⽣物代谢产物，运⽤⽣物信息学和⼈⼯智能算法将菌群代谢物组成转化为多维功能性指标。 这些菌群代谢物（如短链脂肪酸）能够精确反映肠道微⽣物的活性与代谢功能，直接呈现肠道炎症状态、营养物质转化效率、屏障完整性等关键健康参数，为个性化的肠道调理和健康管理提供更直接、更客观的科学依据'
};

const selectedGutMicrobiomeMetabolomicsData = {
  '短链脂肪酸': ['乙酸', '丙酸', '丁酸'],
  '生物活性物质': [],
  '气体': [],
  '毒素': []
}

const selectedGutMicrobiomeMetabolomicsDataDescriptions = {
  '短链脂肪酸': {
    simplifiedDescription: '重要能量来源，促进肠道健康，增强免疫功能，维护肠道屏障的完整性',
    detailedDescription: '短链脂肪酸是狗狗饮食中不可或缺的营养成分，对健康至关重要。它们是肠道微生物的代谢产物，主要由膳食纤维发酵产生，支持肠道细胞的能量需求和生长。短链脂肪酸还可促进肠道健康，增强肠道屏障功能，降低炎症反应，从而提高免疫系统的抗病能力。同时，它们对维持健康的消化系统和促进营养吸收至关重要。确保狗狗摄入充足的短链脂肪酸，有助于维持其整体健康和活力，同时降低肠道疾病的风险，因此评估短链脂肪酸的水平及其对狗狗健康的影响显得尤为重要'
  },
  '生物活性物质': '',
  '气体': '',
  '毒素': ''
}

function getValueStatus(itemValue, normalRange){
  const value = parseFloat(itemValue);
  const [min, max] = normalRange.split('-').map(Number);
  return value < min ? '缺乏' : value > max ? '过量' : '正常';
}

function getOverallGutMicrobiomeMetabolomicsAssessmentDataStatistics(
  GutMicrobiomeMetabolomicsData,
  category = null // 新增参数：指定分类名，null表示统计所有分类
) {
  let numberOfNormalGutMicrobiomeMetabolomicsData = 0;
  let numberOfTotalGutMicrobiomeMetabolomicsData = 0;

  // 根据category参数决定要处理的数据
  let dataToProcess;

  if (category && selectedGutMicrobiomeMetabolomicsData[category]) {
    // 如果指定了分类且该分类存在，只处理该分类
    dataToProcess = { [category]: selectedGutMicrobiomeMetabolomicsData[category] };
  } else if (category) {
    // 如果指定了分类但该分类不存在，返回空结果
    console.warn(`分类 "${category}" 不存在`);
    return [0, 0];
  } else {
    // 如果没有指定分类，处理所有分类
    dataToProcess = selectedGutMicrobiomeMetabolomicsData;
  }

  // 遍历要处理的数据
  Object.values(dataToProcess).forEach(categoryArray => {
    // 遍历每个分类中的具体项目
    categoryArray.forEach(element => {
      numberOfTotalGutMicrobiomeMetabolomicsData += 1;

      const foundItem = GutMicrobiomeMetabolomicsData.find(data => data.name === element);
      const foundItemValue = foundItem?.value || 0;
      const foundItemNormalRange = foundItem?.['正常范围'] || '-';
      const foundItemStatus = getValueStatus(foundItemValue, foundItemNormalRange);

      if (foundItemStatus === '正常') {
        numberOfNormalGutMicrobiomeMetabolomicsData += 1;
      }
    });
  });

  return [
    numberOfNormalGutMicrobiomeMetabolomicsData,
    numberOfTotalGutMicrobiomeMetabolomicsData
  ];
}

function generateOverallGutMicrobiomeMetabolomicsAssessmentCardsHTML(
  GutMicrobiomeMetabolomicsData
) {
  let overallGutMicrobiomeMetabolomicsAssessmentItemCardHTML = '';
  Object.keys(selectedGutMicrobiomeMetabolomicsDataDescriptions).forEach(
    (category) => {
      const [
        numberOfNormalCategoricalGutMicrobiomeMetabolomicsData,
        numberOfTotalCategoricalGutMicrobiomeMetabolomicsData
      ] = getOverallGutMicrobiomeMetabolomicsAssessmentDataStatistics(
        GutMicrobiomeMetabolomicsData,
        category
      );

      overallGutMicrobiomeMetabolomicsAssessmentItemCardHTML += `
        <div class="bg-transparent border border-1 border-gray-200 rounded-lg p-4 mb-4">
          <div class="flex items-center justify-between mb-2">
            <div>
              <div class="flex items-center">
                <h3 class="font-semibold text-xl text-gray-900 mr-2">
                  ${category}
                </h3>
              </div>
              <p class="text-sm text-gray-500 mt-1">
                ${selectedGutMicrobiomeMetabolomicsDataDescriptions[category].simplifiedDescription}
              </p>
            </div>

            <div class="flex items-baseline">
              <span class="text-3xl font-bold text-green-600">
                ${numberOfNormalCategoricalGutMicrobiomeMetabolomicsData}
              </span>
              <span class="text-sm font-medium text-gray-500 ml-1 mt-4">
                / ${numberOfTotalCategoricalGutMicrobiomeMetabolomicsData}项正常
              </span>
            </div>
          </div>

          <div class="bg-gray-50 rounded-2xl p-4 mt-4 leading-relaxed text-gray-500" style="font-size: 13px;">
            <i class="fas fa-dog" style="color: #002FA7; margin-right: 4px;"></i>
            ${selectedGutMicrobiomeMetabolomicsDataDescriptions[category].detailedDescription}
          </div>
        </div>
      `;
    }
  );
  return overallGutMicrobiomeMetabolomicsAssessmentItemCardHTML;
}


function generateOverallGutMicrobiomeMetabolomicsAssessmentHTML(GutMicrobiomeMetabolomicsData) {
  let overallGutMicrobiomeMetabolomicsAssessmentHTML = '';
  const [
    numberOfNormalGutMicrobiomeMetabolomicsData,
    numberOfTotalGutMicrobiomeMetabolomicsData
  ] = getOverallGutMicrobiomeMetabolomicsAssessmentDataStatistics(
    GutMicrobiomeMetabolomicsData,
    null
  );
  overallGutMicrobiomeMetabolomicsAssessmentHTML += `
    <header class="flex gap-2 mb-2 pt-6 page-break">
      <!-- 左侧蓝色容器 (约68%) -->
      <div
        class="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-6 flex items-center w-[80%] rounded-2xl">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">
            菌群代谢物评估
          </h1>
          <p class="text-sm opacity-80 mt-1">
            Gut Microbiota Metabolite Assessment
          </p>
        </div>
      </div>

      <!-- 右侧灰色容器 (约29%) -->
      <div class="bg-slate-100 p-4 flex items-center justify-center w-[20%] rounded-2xl">
        <div class="flex items-baseline">
          <span class="font-bold text-green-700" style="font-size: 50px">
            ${numberOfNormalGutMicrobiomeMetabolomicsData}
          </span>
          <span class="text-lg text-slate-500 ml-1">
            /${numberOfTotalGutMicrobiomeMetabolomicsData}
          </span>
        </div>
      </div>
    </header>

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
    ${generateOverallGutMicrobiomeMetabolomicsAssessmentCardsHTML(GutMicrobiomeMetabolomicsData)}
  `;
  return overallGutMicrobiomeMetabolomicsAssessmentHTML;
}

function loadOverallGutMicrobiomeMetabolomicsAssessmentHTML(SampleData) {
  // 生成肠道评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "intestinalAssessment" 的 div 中
  document.getElementById(
    'overall-gut-microbiome-metabolomics-assessment'
  ).innerHTML = generateOverallGutMicrobiomeMetabolomicsAssessmentHTML(SampleData['营养']);
}

export {loadOverallGutMicrobiomeMetabolomicsAssessmentHTML};
