// js/overall_health_metrics_analysis.js
// date: 2025-06-26
// author: Honglie Zhang

// overall_health_metrics_analysis.js

const descriptionData = {
  overallDescription: `本报告通过肠道菌群检测数据，运用生物信息学和人工智能算法将微生物组成转化为两个重要健康指标：<strong>健康总分</strong>和<strong>肠道年龄</strong>。这些指标可以反映菌群微生态结构对肠道炎症、代谢、屏障功能等方面的潜在影响，为个性化的肠道调理和健康管理提供科学依据。`,
  overallMetricsDescription: {
    healthScoreDescription: `健康总分是一个综合评分，反映了狗狗整体健康状况的各个方面。该评分结合了肠道功能健康、菌群多样性与平衡程度，以及相关症状表现。通过分析肠道微生物群的功能和结构，健康总分可以反应狗狗在营养吸收、免疫支持和疾病预防等方面的能力。`,
    gutAgeDescription: `肠道年龄是指个体肠道微生物群的整体健康状况与生理年龄之间的关系。肠道微生物的平衡与多样性对维持免疫功能、营养吸收以及整体健康至关重要。了解肠道年龄可以帮助我们采取必要的措施来优化狗狗的饮食和生活方式。`,
  },
};

function generateOverallHealthMetricsAnalysisHTML(overallHealthMetricsData) {

  let overallHealthMetricsHTML = '';

  const overallHealthScoreItem = overallHealthMetricsData.find(item => item.name === '健康总分');
  const overallHealthScore = overallHealthScoreItem?.value || '-';
  const gutAgeItem = overallHealthMetricsData.find(item => item.name === '肠道年龄');
  const gutAge = gutAgeItem?.value || '-';

  overallHealthMetricsHTML += `
    <h2 class="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pt-4 pb-2 page-break">
      宏观健康指标解读
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
            <p class="text-gray-600" style="font-size: 13px">
              ${descriptionData.overallDescription}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="bg-transparent p-0 rounded-lg">
        <h2 class="text-lg font-bold mb-2 ml-1 flex items-center justify-between text-gray-600">
          健康总分
          <div class="bg-yellow-400 rounded-lg px-3 py-1 text-sm text-white">
            ${overallHealthScore}分
          </div>
        </h2>
        <div class="bg-gray-50 p-2 rounded-lg mb-4">
          <p class="text-gray-600" style="font-size: 13px;">
            ${descriptionData.overallMetricsDescription.healthScoreDescription}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-2 mt-4">
          <div class="flex justify-between items-center mb-1 bg-green-100 px-4 py-2 rounded-lg">
            <strong class="text-green-600">优秀</strong>
            <span class="text-green-600 font-bold">80-100分</span>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-500" style="font-size: 13px;">
              <i class="fas fa-dog" style="font-size: 13px; color: #2F855A; margin-right: 2px;"></i>
              健康状况优秀，犬只在多个方面表现出色。肠道功能良好，微生物群体平衡且多样，有助于有效的营养吸收和强健的免疫系统。
            </p>
          </div>

          <div class="flex justify-between items-center mb-1 bg-orange-100 px-4 py-2 rounded-lg">
            <strong class="text-orange-600">良好</strong>
            <span class="text-orange-600 font-bold">60-79分</span>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-600" style="font-size: 13px;">
              <i class="fas fa-dog" style="font-size: 14px; color: #C05621; margin-right: 2px;"></i>
              健康状况良好，犬只精力充沛，通常适应环境和活动。虽然大部分指标表现良好，但仍有提升空间，如改进饮食习惯或增加运动量等。
            </p>
          </div>

          <div class="flex justify-between items-center mb-1 bg-yellow-100 px-4 py-2 rounded-lg">
            <strong class="text-yellow-600">一般</strong>
            <span class="text-yellow-600 font-bold">40-59分</span>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-700" style="font-size: 13px;">
              <i class="fas fa-dog" style="font-size: 14px; color: #D69E2E; margin-right: 2px;"></i>
              健康状况一般，可能存在一些潜在的健康问题，包括肠道微生态失衡或营养摄入不足等。建议定期监测健康状况，进行适当的饮食/运动调整。
            </p>
          </div>

          <div class="flex justify-between items-center mb-1 bg-red-100 px-4 py-2 rounded-lg mt-2">
            <strong class="text-red-600">较差</strong>
            <span class="text-red-600 font-bold">0-39分</span>
          </div>
          <div class="bg-gray-50 px-4 pt-4 pb-4 rounded-lg">
            <p class="text-gray-700" style="font-size: 13px;">
              <i class="fas fa-dog" style="font-size: 14px; color: #C53030; margin-right: 2px;"></i>
              健康状况较差，可能表明存在严重的肠道问题、营养不良或其他潜在疾病等。应立即采取干预措施，并咨询兽医进行详细检查和诊断。
            </p>
          </div>
        </div>
      </div>

      <div class="bg-transparent p-0 rounded-lg">
        <h2 class="text-lg font-bold mb-2 ml-1 flex items-center justify-between text-gray-600">
          肠道年龄
          <div class="bg-blue-600 rounded-lg px-3 py-1 text-sm text-white">
            ${gutAge}岁
          </div>
        </h2>
        <div class="bg-gray-50 p-2 rounded-lg mb-4">
          <p class="text-gray-600" style="font-size: 13px;">
            ${descriptionData.overallMetricsDescription.gutAgeDescription}
          </p>
        </div>
        <div class="grid grid-cols-1 gap-2 mt-4">
          <div class="flex justify-between items-center mb-1 bg-blue-100 px-4 py-2 rounded-lg">
            <strong class="text-blue-500">幼犬</strong>
            <span><strong>0-1岁</strong></span>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-500" style="font-size: 13px;">
              <i class="fas fa-dog text-blue-500" style="font-size: 13px; margin-right: 2px;"></i>
              幼犬时期是生长发育的关键，其肠道健康对免疫系统和营养吸收至关重要。
            </p>
            <div style="border-top: 1px solid gray; margin: 10px 0;"></div>
            <p class="text-gray-500" style="font-size: 13px;">
              若肠道年龄显著滞后与真实年龄，提示幼犬可能存在营养不良或免疫未发育完善，应及时干预。
            </p>
          </div>
          <div class="flex justify-between items-center mb-1 bg-blue-200 px-4 py-2 rounded-lg">
            <strong class="text-blue-700">青年犬</strong>
            <span><strong>1-6岁</strong></span>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-600" style="font-size: 13px;">
              <i class="fas fa-dog text-blue-700" style="font-size: 14px; margin-right: 2px;"></i>
              此阶段犬只精力充沛，健康饮食和生活方式尤为重要。
            </p>
            <div style="border-top: 1px solid gray; margin: 10px 0;"></div>
            <p class="text-gray-600" style="font-size: 13px;">
              若肠道年龄显著大于或小于真实年龄，可能提示犬只肠道微生态的稳定性和多样性受到不同程度的破坏。这种情况可能与消化不良或肥胖等问题有关，需关注其饮食和运动。
            </p>
          </div>

          <div class="flex justify-between items-center mb-1 bg-blue-300 px-4 py-2 rounded-lg">
            <strong class="text-blue-900">成年犬/老年犬</strong>
            <span><strong>6岁+</strong></span>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-gray-700" style="font-size: 13px;">
              <i class="fas fa-dog text-blue-900" style="font-size: 14px; margin-right: 2px;"></i>
              肠道的健康对老年犬狗维持免疫力和预防老年疾病至关重要。
            </p>
            <div style="border-top: 1px solid gray; margin: 10px 0;"></div>
            <p class="text-gray-700" style="font-size: 13px;">
              若肠道年龄明显大于真实年龄，可能表明早期衰老和代谢问题，应关注兽医检查和营养补充。
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  return overallHealthMetricsHTML;
}

function loadOverallHealthMetricsAnalysisHTML(sampleData) {
  // 生成整体健康指标评估评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "overall_health_metrics" 的 div 中
  document.getElementById('overall_health_metrics').innerHTML = generateOverallHealthMetricsAnalysisHTML(sampleData['总分']);
}

export {loadOverallHealthMetricsAnalysisHTML};
