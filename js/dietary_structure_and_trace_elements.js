// js/dietary_structure_and_trace_elements.js
// date: 2025-06-30
// author: Honglie Zhang

const CONFIG = {
  overallDescription: '饮食结构及微量元素的评估在狗狗的健康管理中具有重要意义。通过分析蛋白质、碳水化合物、膳食纤维、脂肪以及微量元素（如锌和铁）的水平，可以全面了解狗狗的营养状况。这些指标的平衡与优化能够确保狗狗获得足够的能量、维持良好的消化健康、支持免疫功能，并促进各类生理过程',
  overallMetricsSimplifiedDescription: {
    '蛋白质': '重要结构与功能蛋⽩来源，维持肠道屏障健康',
    '脂肪': '必需脂肪酸和能量的来源',
    '铁': '有助于红⾎球⽣成和优化氧⽓运输',
    '锌': '增强免疫系统功能与促进伤⼝愈合',
    '碳水化合物': '身体能量的重要来源',
    '纤维': '有助于消化与维持肠道健康 '
  },
  overallMetricsDetailedDescription: {
    '蛋白质': '蛋⽩质是狗狗饮⻝中必需的营养成分，对健康⾄关重要。它是组织的主要构建块，⽀持肌⾁、⽪肤和器官的⽣⻓与修复。蛋⽩质还增强免疫系统，合成抗体和酶，帮助抵御感染。同时，它提供能量并维护健康的⽑发和肌⾁质量。确保狗狗摄⼊⾜够的优质蛋⽩质，有助于维持全⾯健康和活⼒',
    '脂肪': '脂肪对于狗狗的健康同样⾄关重要。它们是优质的能量来源，能够为狗狗提供⾜够的热量以⽀持⽇常活动。此外，脂肪是许多重要营养素的载体，帮助吸收和利⽤脂溶性维⽣素（如维⽣素A、D、E和K）。健康的脂肪还⽀持狗狗的⽪肤健康和⽑发光泽，减少⽪肤过敏和炎症的⻛险',
    '铁': '铁是狗狗必需的微量元素，对其健康⾄关重要。它主要参与⾎红蛋⽩的合成，帮助运输氧⽓到全身各组织，⽀持能量代谢。同时，铁也是免疫系统正常运作的重要成分，缺乏铁可能导致贫⾎、疲劳和免疫⼒下降。此外，铁在细胞呼吸和合成酶的过程中发挥重要作⽤。确保狗狗摄⼊⾜够的铁，有助于维持健康的⾎液功能和整体活⼒',
    '锌': '锌是狗狗必需的微量元素，对其健康起着重要作⽤。⾸先，锌参与多种酶的合成，促进新陈代谢和免疫功能，帮助抵御感染。其次，它对⽪肤和⽑发健康⾄关重要，缺锌可能导致⽪肤炎、⽑发稀疏和⽣⻓缓慢。此外，锌在伤⼝愈合、神经系统功能和细胞分裂中也扮演重要⻆⾊。确保狗狗摄⼊⾜够的锌，有助于维持其全⾯健康和活⼒',
    '碳水化合物': '碳⽔化合物是狗狗饮⻝的重要能量来源，⽀持⽇常活动和⽣理功能。它们还促进消化健康，提供饱腹感，并有助于调节⾎糖⽔平。确保狗狗摄⼊适量的优质碳⽔化合物，有助于维持活⼒和整体健康',
    '纤维': '膳⻝纤维是狗狗饮⻝中重要的成分，能促进消化、改善肠道健康并预防便秘。它还帮助调节⾎糖，控制体重，并提供饱腹感。某些纤维还具有益⽣元作⽤，增强免疫功能。确保狗狗摄⼊⾜够的膳⻝纤维，有助于维持整体健康和良好的消化系统',
  },
  overallAbnormalityExplanation: {
    '蛋白质': {
      '缺乏': '肌肉量减少、体重下降、毛发稀疏暗淡、免疫功能下降易生病、伤口愈合缓慢、幼犬生长发育迟缓。长期缺乏会导致营养不良和器官功能衰退',
      '过量': '增加肾脏和肝脏代谢负担、可能引起消化不良和腹泻、导致体重增加和肥胖、影响其他营养素的平衡吸收。老年犬尤其需要控制蛋白质摄入量'
    },
    '脂肪': {
      '缺乏': '脂肪的摄入缺乏会导致皮肤干燥脱屑、毛发粗糙无光泽、必需脂肪酸缺乏症、能量供给不足导致活力下降、免疫力降低、皮肤屏障功能受损易过敏',
      '过量': '脂肪的摄入过量会导致导致肥胖和相关疾病（关节炎、心血管疾病）、增加胰腺炎风险、消化系统负担加重、可能引起脂肪性腹泻和呕吐'
    },
    '铁': {
      '缺乏': '缺铁性贫血、疲劳嗜睡、运动耐力下降、免疫功能受损、食欲不振、毛发颜色变淡、牙龈和舌头苍白。严重时影响心脏功能',
      '过量': '铁中毒症状包括呕吐腹泻、肝脏损伤、心律不齐、严重时可危及生命。过量铁质还会影响锌、铜等其他微量元素的吸收'
    },
    '锌': {
      '缺乏': '皮肤炎症、毛发脱落、伤口愈合缓慢、免疫功能下降易感染、食欲减退、生长发育迟缓、嗅觉和味觉功能减退、爪部和鼻部皮肤角化异常',
      '过量': '干扰铜和铁的吸收导致继发性缺乏、胃肠道刺激引起呕吐腹泻、免疫功能异常、长期过量可能影响胰腺功能'
    },
    '碳水化合物': {
      '缺乏': '血糖过低导致疲劳无力、大脑功能受影响、可能出现酮症、消化道缺乏有益菌群的营养来源、影响肠道健康',
      '过量': '血糖快速升高、易导致肥胖和糖尿病、消化负担加重可能引起腹泻、影响蛋白质和脂肪的正常代谢、增加龋齿风险'
    },
    '纤维': {
      '缺乏': '便秘、肠道蠕动减慢、有益肠道菌群减少、肠道健康恶化、可能增加结肠疾病风险、影响营养素在肠道的正常吸收',
      '过量': '腹泻、胀气、肠道过度蠕动、影响蛋白质、脂肪和微量元素的吸收、可能导致营养不良、增加肠梗阻风险'
    }
  },
  evaluation_text: {
    '缺乏': '摄入缺乏 &#9660;',
    '正常': '摄入正常',
    '过量': '摄入过量 &#9650;',
  },
  evaluationTextColor:{
    '缺乏': 'bg-red-100 text-red-800',
    '正常': 'bg-green-100 text-green-800',
    '过量': 'bg-red-100 text-red-800',
  },
  evaluationValueColor: {
    '缺乏': 'text-red-600',
    '正常': 'text-green-600',
    '过量': 'text-red-600',
  }
};

const selectedDietaryStructureAndTraceElementsData = [
  '蛋白质', '脂肪', '铁', '锌', '碳水化合物', '纤维'
];

function getValueStatus(itemValue, normalRange){
  const value = parseFloat(itemValue);
  const [min, max] = normalRange.split('-').map(Number);
  return value < min ? '缺乏' : value > max ? '过量' : '正常';
}

function getProgressPercent(itemValue) {

  const value = parseFloat(itemValue);
  return (value / 100) * 100;
}

function generateDietaryStructureAndTraceElementsCardsHTML(dietaryStructureAndTraceElementsData) {

  let cardsHTML = '';

  selectedDietaryStructureAndTraceElementsData.forEach(
    (element) => {
      const foundItem = dietaryStructureAndTraceElementsData.find(data => data.name === element);
      const foundItemValue = foundItem?.value || 0;
      const foundItemNormalRange = foundItem?.['正常范围'] || '-';
      const foundItemStatus = getValueStatus(foundItemValue, foundItemNormalRange);
      const foundItemProgressPercent = getProgressPercent(foundItemValue);

      cardsHTML += `
        <div class="px-4 py-4 bg-transparent border border-1 border-gray-200 rounded-lg overflow-hidden ${element === '锌' ? 'page-break mt-8': ''}">
          <div class="bg-transparent">
            <div class="flex items-center justify-between mb-2">
              <div>
                <div class="flex items-center">
                  <h3 class="font-semibold text-xl text-gray-900 mr-2">
                    ${element === '纤维' ? '膳食纤维' : element}
                  </h3>
                  <div class="${CONFIG.evaluationTextColor[foundItemStatus]} font-medium text-xs px-2 py-1 rounded-full flex items-center">
                    ${CONFIG.evaluation_text[foundItemStatus]}
                  </div>
                </div>
                <p class="text-sm text-gray-500 mt-1">
                    ${CONFIG.overallMetricsSimplifiedDescription[element]} | 参考范围: ${foundItemNormalRange}
                </p>
              </div>

              <div class="flex items-baseline">
                <span class="text-3xl font-bold ${CONFIG.evaluationValueColor[foundItemStatus]}">${foundItemValue}</span>
                <span class="text-sm font-medium text-gray-500 ml-1 mt-4">/ 100</span>
              </div>
            </div>

            <!-- 进度条 -->
            <div class="relative">
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
                <span>摄入缺乏</span>
                <span>摄入适量</span>
                <span>摄入过量</span>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 rounded-2xl p-4 mt-4 leading-relaxed text-gray-500" style="font-size: 13px;">
            <i class="fas fa-dog" style="color: #002FA7; margin-right: 4px;"></i>
            ${CONFIG.overallMetricsDetailedDescription[element]}
            ${foundItemStatus === '正常'
                  ? ''
                  : foundItemStatus === '缺乏'
                    ? `<br><i class="fas fa-exclamation-triangle" style="color: #FFA500; margin-right: 4px;"></i> ${CONFIG.overallAbnormalityExplanation[element]['缺乏']}`
                    : `<br><i class="fas fa-exclamation-triangle" style="color: #FFA500; margin-right: 4px;"></i> ${CONFIG.overallAbnormalityExplanation[element]['过量']}`
                }
          </div>
        </div>
      `;
    })
  return cardsHTML;
}

function generateDietaryStructureAndTraceElementsHTML(dietaryStructureAndTraceElementsData) {
  let cardsHTML = '';
  cardsHTML += `
    <h2 class="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pt-4 pb-2 page-break">
      饮食结构及微量元素评估
    </h2>

    <div class="bg-blue-50 p-4 rounded-lg mb-4">

      <div>
        <div class="flex items-center">
          <div class="bg-indigo-100 p-2 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <div>
            <!--              <h2 class="font-bold text-gray-800" style="font-size: 13px">肠道整体指标</h2>-->
            <p class="text-gray-600 leading-relaxed" style="font-size: 13px">
              ${CONFIG.overallDescription}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--<div class="md:col-span-2">-->
    <div class="grid grid-cols-1 sm:grid-cols-1 gap-2">
      ${generateDietaryStructureAndTraceElementsCardsHTML(dietaryStructureAndTraceElementsData)}
    </div>
  `;
  return cardsHTML;
}

function loadDietaryStructureAndTraceElementsHTML(sampleData) {
  // 生成肠道评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "intestinalAssessment" 的 div 中
  document.getElementById('dietary-structure-and-trace-elements-analysis').innerHTML = generateDietaryStructureAndTraceElementsHTML(sampleData['营养']);
}

export {loadDietaryStructureAndTraceElementsHTML};


