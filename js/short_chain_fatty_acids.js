// js/short_chain_fatty_acids.js
// date: 2025-07-01
// author: Honglie Zhang

const CONFIG = {
  overallDescription: '短链脂肪酸（SCFA）是狗狗肠道微⽣物发酵膳⻝纤维产⽣的代谢物，是评估狗狗肠道微⽣态健康的重要指标。主要包括⼄酸（C2）、丙酸（C3）和丁酸（C4）三种。通过检测粪便中短链脂肪酸的含量和组成⽐例，可以早期发现肠道微⽣态失衡，预防肠道疾病，指导饮⻝调整，为狗狗量身定制肠道健康⽅案',
  shortChainFattyAcidsTableInfo: {
    '乙酸': {
      translation: 'Acetate',
      description: '乙酸是狗狗肠道微生物发酵膳食纤维产生的主要短链脂肪酸，占总SCFA的60-70%。它为狗狗的肠道上皮细胞提供重要能量，维持肠道适宜的酸性环境，有效抑制大肠杆菌、沙门氏菌等有害病原菌的生长繁殖',
      deficiencySymptoms: '大便异味加重、软便或腹泻、食欲下降、毛发光泽度差、容易感染肠道疾病、精神状态不佳',
      deficiencyTreatment: '增加南瓜泥、红薯、胡萝卜等富含纤维的食物、添加狗用益生元补充剂、适量喂食无糖酸奶、定期检测粪便菌群',
      excessSymptoms: '腹部胀气、排便次数增加、食欲减退、偶尔呕吐（罕见情况下可能出现酸中毒）',
      excessTreatment: '减少高纤维食物摄入、暂时恢复基础狗粮、监测狗狗的饮水和排尿情况、如症状持续请及时就医'
    },
    '丙酸': {
      translation: 'Propionate',
      description: '丙酸主要由狗狗肠道中的拟杆菌产生，占总SCFA的15-25%。它在调节狗狗的脂质代谢、维持血糖稳定方面发挥重要作用，同时具有抗炎功能，有助于预防肥胖和代谢性疾病的发生',
      deficiencySymptoms: '体重异常增加、血脂偏高、容易疲劳、运动耐力下降、皮肤炎症反复发作、肝脏负担加重',
      deficiencyTreatment: '增加苹果片、胡萝卜丁等富含果胶的零食、补充含有双歧杆菌的宠物益生菌、调整蛋白质与纤维的配比、适量增加运动',
      excessSymptoms: '食欲明显减退、轻微恶心表现（流口水、舔嘴）、腹部轻度不适、活动量暂时减少',
      excessTreatment: '适量减少纤维类食物、改为少量多餐喂食、观察狗狗的食欲恢复情况、保证充足的饮水'
    },
    '丁酸': {
      translation: 'Butyrate',
      description: '丁酸是狗狗肠道健康的"守护神"，占总SCFA的10-20%，主要由梭状芽孢杆菌产生。它是结肠细胞最重要的营养来源，对维护肠道屏障完整性、增强免疫力、预防肠道炎症和肿瘤具有关键作用',
      deficiencySymptoms: '慢性腹泻、肠道敏感、免疫力下降、容易过敏、毛发粗糙无光泽、伤口愈合缓慢、肠道炎症反复发作',
      deficiencyTreatment: '增加煮熟放凉的土豆、香蕉等抗性淀粉食物、补充专用的丁酸菌株益生菌、避免过度使用抗生素、添加狗用益生元粉',
      excessSymptoms: '轻微腹胀、排气增多、偶尔腹部不适（通常为正常的肠道调节反应，无需担心）',
      excessTreatment: '逐步调整高纤维食物的用量、保持饮食种类的多样化、密切观察狗狗的整体消化状况、维持日常散步运动'
    }
  }
}

const selectedShortChainFattyAcidsData = ['乙酸', '丙酸', '丁酸'];

function getValueStatus(itemValue, normalRange){
  const value = parseFloat(itemValue);
  const [min, max] = normalRange.split('-').map(Number);
  return value < min ? '缺乏' : value > max ? '过量' : '正常';
}

function generateShortChainFattyAcidsTable(shortChainFattyAcidsData) {
  let shortChainFattyAcidsTableHTML = '';

  selectedShortChainFattyAcidsData.forEach(
    (element) => {
      const foundItem = shortChainFattyAcidsData.find(data => data.name === element);
      const foundItemValue = foundItem?.value || 0;
      const foundItemNormalRange = foundItem?.['正常范围'] || '-';
      const foundItemStatus = getValueStatus(foundItemValue, foundItemNormalRange);
      shortChainFattyAcidsTableHTML += `
        <tr style="font-size: 13px; border: none;">
          <td
            style="
              padding: 12px 16px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;">
            <strong class="mb-0" style="font-size: 13px">
              ${element}
            </strong>
            <span style="font-size: 12px; color: #6b7280;">
              ${CONFIG.shortChainFattyAcidsTableInfo[element].translation}
            </span>
          </td>

          <td
            style="
              padding: 8px 12px;
              text-align: center;
              font-size: 10px;">
            <div
              style="
                display: flex;
                justify-content: center;
                gap: 6px;">
              <div style="text-align: center;">
                <div
                  style="
                    background: #EF4444;
                    color: white;
                    padding: 2px 4px;
                    border-radius: 4px;
                    font-size: 10px;
                    margin-bottom: 2px;">
                  <15
                </div>
                <div style="font-size: 10px; color: #6B7280;">
                  缺乏
                </div>
              </div>
              <div style="text-align: center;">
                <div
                  style="
                    background: #10B981;
                    color: white;
                    padding: 2px 4px;
                    border-radius: 4px;
                    font-size: 10px;
                    margin-bottom: 2px;">
                  15-98
                </div>
                <div
                  style="
                    font-size: 10px;
                    color: #6B7280;">
                  正常
                </div>
              </div>
              <div style="text-align: center;">
                <div
                  style="
                    background: #8B5CF6;
                    color: white;
                    padding: 2px 4px;
                    border-radius: 4px;
                    font-size: 10px;
                    margin-bottom: 2px;">
                  >98
                </div>
                <div
                  style="
                    font-size: 10px;
                    color: #6B7280;">
                  过量
                </div>
              </div>
            </div>
          </td>

          <td
            style="
              padding: 12px 16px;
              text-align: center;
              font-size: 12px;">
            <div>
              <span
                style="${foundItemStatus === '正常' ? 'color: #10B981;' : 'color: #EF4444;'};">
                <strong>
                  ${foundItemStatus === '正常'
                    ? foundItemValue
                    : foundItemStatus === '缺乏'
                      ? `${foundItemValue} &#9660;`
                      : `${foundItemValue} &#9650;`}
                </strong>
              </span>
            </div>
            <div
              style="
                width: 100%;
                background-color: #e5e7eb;
                border-radius: 9999px;
                height: 8px;
                margin-top: 4px;">
              <div
                style="
                  height: 8px;
                  border-radius: 9999px;
                  width: ${foundItemValue}%;
                  ${foundItemStatus === '正常'
                    ? 'background-color: #10B981;'
                    : 'background-color: #EF4444;'}">
              </div>
            </div>
          </td>

          <td
            style="
              ${foundItemStatus === '正常' ? 'color: #10B981;' : 'color: #EF4444;'};
              padding: 12px 16px;
              text-align: center;
              font-size: 12px;">
            <strong>${foundItemStatus}</strong>
          </td>

        </tr>

        <tr>
          <td colspan="4" style="padding: 0 0 12px 0;">
            <div
              style="
                width: 98%;
                padding: 8px 12px;
                color: #6B7280;
                border-radius: 6px;
                font-size: 11px;
                line-height: 1.5;
                background-color: #F2FDFD;
                margin: -4px auto 0;">
              <i class="fas fa-dog" style="color: #002FA7; margin-right: 2px;"></i>
              ${CONFIG.shortChainFattyAcidsTableInfo[element].description}<br>
              ${foundItemStatus === '正常'
                ? ''
                : foundItemStatus === '缺乏'
                  ? `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.shortChainFattyAcidsTableInfo[element].deficiencySymptoms}<br>`
                  : `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.shortChainFattyAcidsTableInfo[element].excessSymptoms}<br>`}
              ${foundItemStatus === '正常'
                ? ''
                : foundItemStatus === '缺乏'
                  ? `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.shortChainFattyAcidsTableInfo[element].deficiencyTreatment}<br>`
                  : `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.shortChainFattyAcidsTableInfo[element].excessTreatment}`}
            </div>
          </td>
        </tr>
      `;
    }
  )
  return shortChainFattyAcidsTableHTML;
}

function generateShortChainFattyAcidsHTML(shortChainFattyAcidsData) {
  let shortChainFattyAcidsHTML = '';
  shortChainFattyAcidsHTML += `
    <h2 class="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pt-4 pb-2 page-break">
      短链脂肪酸评估
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

    <div class="grid grid-cols-3 gap-3 my-6">
      <!-- 肠道微生态卡片 -->
      <div
        class="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-4 hover:shadow-md transition-all transform hover:-translate-y-1">
        <div class="flex items-center mb-3">
          <h4 class="font-semibold text-base text-blue-800">肠道微生态</h4>
        </div>
        <p class="text-blue-700 text-sm leading-relaxed">
          反映狗狗肠道菌群的组成和活性，评估有益菌与有害菌的平衡状态</p>
      </div>

      <!-- 消化吸收功能卡片 -->
      <div
        class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 hover:shadow-md transition-all transform hover:-translate-y-1">
        <div class="flex items-center mb-3">
          <h4 class="font-semibold text-base text-green-800">消化吸收功能</h4>
        </div>
        <p class="text-green-700 text-sm leading-relaxed">
          评估狗狗肠道消化功能和营养吸收能力，特别是对膳食纤维的利用效率</p>
      </div>

      <!-- 肠道屏障功能卡片 -->
      <div
        class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 hover:shadow-md transition-all transform hover:-translate-y-1">
        <div class="flex items-center mb-3">
          <h4 class="font-semibold text-base text-purple-800">肠道屏障功能</h4>
        </div>
        <p class="text-purple-700 text-sm leading-relaxed">
          评估肠道黏膜屏障的完整性和健康状态，反映狗狗肠道的防御能力</p>
      </div>

    </div>

    <table
      style="
        width: 100%;
        text-align: left;
        border-collapse: separate;
        border-spacing: 0;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
        background: white;">
      <thead>
      <tr style="font-size: 12px; background-color: #4b5563;">
        <th
          style="
            background: #00B5BA;
            padding: 8px 16px;
            color: white;
            font-weight: 600;
            border-top-left-radius: 8px;
            width: 20%;">
          短链脂肪酸名称
        </th>
        <th
          style="
            background: #00B5BA;
            padding: 8px 8px;
            color: white;
            font-weight: 600;
            text-align: center;
            width: 30%;">
          参考范围 (0-100)
        </th>
        <th
          style="
            background: #00B5BA;
            padding: 8px 8px;
            color: white;
            font-weight: 600;
            text-align: center;
            width: 30%;">
          评估数值
        </th>
        <th
          style="
            background: #00B5BA;
            padding: 8px 8px;
            color: white;
            font-weight: 600;
            text-align: center;
            border-top-right-radius: 8px;
            width: 20%;">
          评估结果
        </th>
      </tr>
      </thead>

      <tbody>
        ${generateShortChainFattyAcidsTable(shortChainFattyAcidsData)}
      </tbody>
    </table>
  `;
  return shortChainFattyAcidsHTML;
}

function loadShortChainFattyAcidsHTML(sampleData) {
// 生成肠道评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "intestinalAssessment" 的 div 中
  document.getElementById(
    'short-chain-fatty-acids'
  ).innerHTML = generateShortChainFattyAcidsHTML(sampleData['营养']);
}

export {loadShortChainFattyAcidsHTML};
