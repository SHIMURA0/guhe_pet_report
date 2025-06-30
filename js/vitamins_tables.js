// js/vitamins_tables.js
// date: 2025-06-30
// author: Honglie Zhang

const CONFIG = {
  overallDescription: {
    nonBVitamins: '评估狗狗体内维⽣素A、D、E、K、C⽔平，能直接反映肠道菌群健康状态和微⽣态平衡。这些检测可早期发现消化系统功能异常，在临床症状出现前识别微⽣态失衡。通过维⽣素评估，兽医可及时调整饮⻝、补充特定营养素或添加合适的益⽣菌，有效预防营养吸收障碍，为狗狗定制个性化肠道健康⽅案，保障其整体健康与⽣活质量',
    BVitamins: '评估狗狗体内B族维⽣素⽔平，这些是维持狗狗神经系统、能量代谢和细胞功能的关键维⽣素群，能全⾯反映狗狗的营养状态和代谢健康。B族维⽣素参与狗狗⼏乎所有的⽣理过程, 这些⽔溶性维⽣素⽆法在体内⼤量储存，需要持续补充，因此检测其⽔平对狗狗健康管理极为重要。B族维⽣素缺乏会导致神经系统异常、⽪肤病变、贫⾎、消化不良和免疫功能下降等多种问题。通过B族维⽣素的系统性评估，兽医可以识别潜在的营养不良、肠道吸收障碍或代谢异常，及时调整饮⻝配⽅、补充复合B族维⽣素或改善肠道菌群环境，为狗狗制定精准的营养⼲预⽅案，确保其神经系统健康、能量代谢正常和整体⽣命活⼒'
  },
  vitaminsTranslation: {
    '维生素A': '视黄醇',
    '维生素D': '胆钙化醇',
    '维生素E': '生育酚',
    '维生素K': '叶绿醌',
    '维生素C': '抗坏血酸',
    '维生素B1': '硫胺素',
    '维生素B2': '核黄素',
    '维生素B6': '吡哆醇',
    '叶酸': '叶酸',
    '维生素B12': '钴胺素'
  },
  vitaminsDescription: {
    '维生素A': {
      functionality: '维生素A是狗狗体内重要的营养成分，参与视觉、皮肤健康、免疫系统功能以及细胞生长和分化的调节。它有助于维持视力，特别是在夜间视力方面，支持正常的生长和发育，促进皮肤和被毛的健康',
      deficiencySymptoms: '夜盲症、干眼症、皮肤干燥粗糙、被毛无光泽、免疫力下降、生长迟缓、角膜软化',
      deficiencyTreatment: '补充富含维生素A的食物如肝脏、胡萝卜、南瓜，必要时使用维生素A补充剂，定期监测血液指标',
      overdoseSymptoms: '食欲不振、呕吐、腹泻、关节疼痛、骨骼变形、肝脏损伤、皮肤干燥脱屑',
      overdoseTreatment: '立即停止维生素A补充，提供支持性护理，监测肝功能，必要时就医处理'
    },
    '维生素D': {
      functionality: '维生素D在狗狗体内扮演着重要的角色，主要影响钙和磷的代谢，帮助维持骨骼和牙齿的健康。它促进钙的吸收和利用，对狗狗的生长、发育以及整体骨骼健康至关重要',
      deficiencySymptoms: '骨软化症、佝偻病、骨骼畸形、牙齿发育不良、肌肉无力、生长迟缓、易骨折',
      deficiencyTreatment: '增加日晒时间，补充维生素D3，调整饮食结构，添加富含维生素D的鱼肝油',
      overdoseSymptoms: '高钙血症、肾结石、恶心呕吐、心律不齐、软组织钙化、肾功能损害',
      overdoseTreatment: '停止维生素D补充，限制钙摄入，增加水分摄取，监测肾功能和血钙水平'
    },
    '维生素E': {
      functionality: '维生素E作为狗狗体内关键抗氧化剂，保护细胞膜免受损伤，支持免疫系统，维持心肌健康并促进皮肤被毛健康',
      deficiencySymptoms: '肌肉无力、心肌病变、免疫力下降、皮肤干燥、被毛失去光泽、生殖功能障碍',
      deficiencyTreatment: '补充植物油、坚果、绿叶蔬菜，使用维生素E补充剂，配合硒元素补充',
      overdoseSymptoms: '出血倾向、血液凝固异常、疲劳、头晕、胃肠道不适',
      overdoseTreatment: '减少维生素E摄入，监测凝血功能，必要时补充维生素K，密切观察出血症状'
    },
    '维生素K': {
      functionality: '维生素K在狗狗体内发挥着至关重要的作用，主要负责促进血液凝固和支持骨骼健康。它有助于合成凝血因子，确保伤口愈合并防止过度出血，同时参与钙的代谢，维持骨骼的强度和健康',
      deficiencySymptoms: '出血倾向、凝血时间延长、瘀斑、鼻出血、伤口愈合缓慢、骨质疏松',
      deficiencyTreatment: '补充绿叶蔬菜、肝脏等富含维生素K的食物，使用维生素K1注射剂，调整肠道菌群',
      overdoseSymptoms: '溶血性贫血、黄疸、肝脏损伤、血栓形成风险增加',
      overdoseTreatment: '停止过量补充，监测肝功能和凝血指标，提供支持性治疗'
    },
    '维生素C': {
      functionality: '维生素C是一种强效的抗氧化剂，对狗狗的健康至关重要。它有助于增强免疫系统，促进伤口愈合，支持皮肤和被毛的健康，同时还参与胶原蛋白的合成，保持关节健康和皮肤弹性',
      deficiencySymptoms: '坏血病、牙龈出血、关节疼痛、伤口愈合缓慢、免疫力下降、疲劳无力',
      deficiencyTreatment: '补充新鲜水果蔬菜，使用维生素C补充剂，改善饮食结构，增加抗氧化食物',
      overdoseSymptoms: '胃肠道不适、腹泻、恶心、肾结石形成、铁吸收过量',
      overdoseTreatment: '减少维生素C摄入，增加水分摄取，监测肾功能，必要时医疗干预'
    },
    '维生素B1': {
      functionality: '维生素B1对狗狗神经系统功能和碳水化合物代谢至关重要，参与能量产生过程，维持神经传导和肌肉功能的正常运作',
      deficiencySymptoms: '脚气病、神经炎、肌肉无力、食欲不振、体重下降、心律不齐、行为异常',
      deficiencyTreatment: '补充富含B1的食物如瘦肉、谷物、豆类，使用硫胺素补充剂，调整饮食结构',
      overdoseSymptoms: '一般不易过量，偶见过敏反应、皮疹、胃肠道不适',
      overdoseTreatment: '停止过量补充，对症处理过敏症状，一般无需特殊治疗'
    },
    '维生素B2': {
      functionality: '维生素B2参与狗狗体内能量产生过程，促进细胞生长和红细胞形成，支持视力健康，维持皮肤和粘膜的完整性',
      deficiencySymptoms: '口角炎、舌炎、皮炎、眼部炎症、生长迟缓、贫血、皮肤干燥',
      deficiencyTreatment: '补充奶制品、肝脏、绿叶蔬菜，使用核黄素补充剂，改善营养搭配',
      overdoseSymptoms: '尿液变黄、轻微胃肠道不适，一般毒性较低',
      overdoseTreatment: '减少摄入量，增加水分摄取，通常无需特殊处理'
    },
    '维生素B6': {
      functionality: '维生素B6参与狗狗蛋白质代谢和神经递质合成，调节免疫系统功能，支持红细胞生成和神经系统健康',
      deficiencySymptoms: '皮炎、抽搐、贫血、免疫力下降、生长迟缓、神经系统异常',
      deficiencyTreatment: '补充肉类、鱼类、谷物，使用吡哆醇补充剂，平衡蛋白质摄入',
      overdoseSymptoms: '神经毒性、四肢麻木、行走困难、感觉异常',
      overdoseTreatment: '立即停止补充，进行神经功能评估，提供支持性治疗，恢复需时间'
    },
    '叶酸': {
      functionality: '维生素B9对狗狗DNA合成和细胞分裂过程必不可少，支持红细胞生成和神经系统发育，对幼犬生长发育尤为重要',
      deficiencySymptoms: '巨幼红细胞性贫血、白细胞减少、生长迟缓、免疫力下降、神经管缺陷',
      deficiencyTreatment: '补充绿叶蔬菜、肝脏、豆类，使用叶酸补充剂，改善肠道吸收功能',
      overdoseSymptoms: '掩盖维生素B12缺乏症状，神经系统损害加重，锌吸收减少',
      overdoseTreatment: '调整剂量，同时监测B12水平，评估神经功能，平衡营养摄入'
    },
    '维生素B12': {
      functionality: '维生素B12对狗狗的红细胞生成至关重要，参与神经组织发育维护和DNA合成，支持正常的神经功能和认知能力',
      deficiencySymptoms: '恶性贫血、神经退行性病变、认知能力下降、疲劳无力、食欲不振、体重下降',
      deficiencyTreatment: '补充动物性食品如肝脏、肉类、鱼类，使用B12注射剂，治疗肠道吸收障碍',
      overdoseSymptoms: '一般不易过量，偶见过敏反应、皮疹、注射部位反应',
      overdoseTreatment: '停止过量补充，处理过敏症状，监测血液指标，一般预后良好'
    }
  }
}

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
  '叶酸',
  '维生素B12'
];

function getValueStatus(itemValue, normalRange){
  const value = parseFloat(itemValue);
  const [min, max] = normalRange.split('-').map(Number);
  return value < min ? '缺乏' : value > max ? '过量' : '正常';
}

function generateNonBVitaminsTableHTML(nonBVitaminsTableData) {
  let nonBVitaminsTableHTML = '';
  selectedNonBVitamins.forEach(
    (element) => {

      const foundItem = nonBVitaminsTableData.find(data => data.name === element);
      const foundItemValue = foundItem?.value || 0;
      const foundItemNormalRange = foundItem?.['正常范围'] || '-';
      const foundItemStatus = getValueStatus(foundItemValue, foundItemNormalRange);

      nonBVitaminsTableHTML += `
        <tr style="font-size: 13px; border: none;">

          <td
            style="
              padding: 12px 16px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;">
            <strong class="mb-1" style="font-size: 13px">
              ${element}
            </strong>
            <span style="font-size: 12px; color: #6b7280;">
              ${CONFIG.vitaminsTranslation[element]}
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
                  15-100
                </div>
                <div
                  style="
                    font-size: 10px;
                    color: #6B7280;">
                  正常
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
              ${CONFIG.vitaminsDescription[element].functionality}<br>
              ${foundItemStatus === '正常'
                ? ''
                : foundItemStatus === '缺乏'
                  ? `<i class="fas fa-exclamation-triangle" style="color: #EF4444; margin-right: 4px;"></i>${CONFIG.vitaminsDescription[element].deficiencySymptoms}<br>`
                  : `<i class="fas fa-exclamation-triangle" style="color: #EF4444; margin-right: 4px;"></i>${CONFIG.vitaminsDescription[element].overdoseSymptoms}<br>`}
              ${foundItemStatus === '正常'
                ? ''
                : foundItemStatus === '缺乏'
                  ? `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.vitaminsDescription[element].deficiencyTreatment}<br>`
                  : `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.vitaminsDescription[element].overdoseTreatment}<br>`}
            </div>
          </td>
        </tr>
      `;
    }
  )
  return nonBVitaminsTableHTML;
}

function generateBVitaminsTableHTML(BVitaminsTableData) {
  let BVitaminsTableHTML = '';
  selectedBVitamins.forEach(
    (element) => {

      const foundItem = BVitaminsTableData.find(data => data.name === element);
      const foundItemValue = foundItem?.value || 0;
      const foundItemNormalRange = foundItem?.['正常范围'] || '-';
      const foundItemStatus = getValueStatus(foundItemValue, foundItemNormalRange);

      BVitaminsTableHTML += `
        <tr style="font-size: 13px; border: none;">

          <td
            style="
              padding: 12px 16px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;">
            <strong class="mb-1" style="font-size: 13px">
              ${element === '叶酸' ? '维生素B9' : element}
            </strong>
            <span style="font-size: 12px; color: #6b7280;">
              ${CONFIG.vitaminsTranslation[element]}
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
                  15-100
                </div>
                <div
                  style="
                    font-size: 10px;
                    color: #6B7280;">
                  正常
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
              color: #10B981;
              padding: 12px 16px;
              text-align: center;
              font-size: 12px;">
            <strong>
              ${foundItemStatus}
            </strong>
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
              ${CONFIG.vitaminsDescription[element].functionality}<br>
              ${foundItemStatus === '正常'
              ? ''
              : foundItemStatus === '缺乏'
                ? `<i class="fas fa-exclamation-triangle" style="color: #EF4444; margin-right: 4px;"></i>${CONFIG.vitaminsDescription[element].deficiencySymptoms}<br>`
                : `<i class="fas fa-exclamation-triangle" style="color: #EF4444; margin-right: 4px;"></i>${CONFIG.vitaminsDescription[element].overdoseSymptoms}<br>`}
                    ${foundItemStatus === '正常'
              ? ''
              : foundItemStatus === '缺乏'
                ? `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.vitaminsDescription[element].deficiencyTreatment}<br>`
                : `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.vitaminsDescription[element].overdoseTreatment}<br>`}
            </div>
          </td>
        </tr>
      `;
    }
  )
  return BVitaminsTableHTML;
}

function generateVitaminsTableHTML(vitaminsTableData) {
  let vitaminsTableHTML = '';
  vitaminsTableHTML += `
    <h2 class="text-xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pt-4 pb-2 page-break">
      维生素评估 (非B族维生素)
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
              ${CONFIG.overallDescription.nonBVitamins}
            </p>
          </div>
        </div>
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
          维生素名称
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
        ${generateNonBVitaminsTableHTML(vitaminsTableData)}
      </tbody>
    </table>

    <h2 class="text-xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pt-8 pb-2 page-break">
      维生素评估 (B族维生素)
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
              ${CONFIG.overallDescription.BVitamins}
            </p>
          </div>
        </div>
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
          维生素名称
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
        ${generateBVitaminsTableHTML(vitaminsTableData)}
      </tbody>
    </table>
  `;
  return vitaminsTableHTML;
}

function loadVitaminsTable(sampleData) {
  // 生成肠道评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "intestinalAssessment" 的 div 中
  document.getElementById('vitamin-table').innerHTML = generateVitaminsTableHTML(sampleData['营养']);
}

export {loadVitaminsTable};
