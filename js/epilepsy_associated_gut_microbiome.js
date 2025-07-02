// js/epilepsy_associated_gut_microbiome.js
// date: 2025-07-01
// author: Honglie Zhang

const CONFIG = {
  overallDescription: {
    info: '狗狗的癫痫是⼀种神经系统疾病，表现为反复发作的癫痫发作。这种病症可能与遗传因素、脑外伤、感染或中毒等原因有关。当癫痫发作时，狗狗可能会有抽搐、失去意识或异常⾏为等表现。及时的诊断和治疗对于控制疾病进程⾄关重要。癫痫的管理⽅案通常包括药物治疗、饮⻝调整和环境管理，以减少发作的频率和严重程度'
  }
};

function getValueStatus(
  itemValue, normalRange
) {
  // 如果 itemValue 是 "ND"，转换为 0
  const value = itemValue === 'ND' ? 0 : parseFloat(itemValue);
  const [min, max] = normalRange.split('-').map(Number);
  return value < min ? '缺乏' : value > max ? '过量' : '正常';
}

function getStatusColor(itemValue, status) {
  if (itemValue === 'ND') {
    return status === '正常' ? 'text-gray-500' : 'text-red-500';
  } else {
    return status === '正常' ? '' : 'text-red-500';
  }
}

// function getProgressColorAndPercent(itemValue, status) {
//   let progressColor = '';
//   let progressPercent = 0;
//   if (itemValue === 'ND') {
//
//   } else {
//
//   }
//
// }

function translateBacteriaName(microbiomeName) {
  let bacteriaChineseName, bacteriaLatinName;

  // 检查是否包含中文字符
  const isChinese = /[\u4E00-\u9FFF]/.test(microbiomeName); // 判断是否有中文

  if (isChinese) {
    // 使用正则表达式分割中文和拉丁名
    [bacteriaChineseName, bacteriaLatinName] = microbiomeName.split(/ (?=[A-Z])/);
  } else {
    // 如果没有中文，则中文名和拉丁名相同
    if (microbiomeName === 'Prevotellaceae'){
      return ['普雷沃氏菌科', 'Prevotellaceae']
    } else {
      bacteriaChineseName = bacteriaLatinName = microbiomeName
    }
  }
  return [bacteriaChineseName, bacteriaLatinName]
}

function generateEpilepsyAssociatedGutMicrobiomeTable(
  EpilepsyAssociatedGutMicrobiomeData
) {
  let epilepsyAssociatedGutMicrobiomeTableHTML = '';

  // 筛选出癫痫相关的菌群并排序
  const epilepsyRelatedBacteria = EpilepsyAssociatedGutMicrobiomeData
    .filter(bacteria => bacteria["相关疾病症状"] === "癫痫")
    .sort(
      (a, b) => {
        // 1. 先按照"相关性"排序，+排在-前面
        const aRelevance = a["相关性"];
        const bRelevance = b["相关性"];

        if (aRelevance !== bRelevance) {
          if (aRelevance === '+' && bRelevance === '-') return -1;
          if (aRelevance === '-' && bRelevance === '+') return 1;
        }

        // 2. 再按照"正常范围"的上限值递减排序
        const aRange = a["正常范围"];
        const bRange = b["正常范围"];

        // 提取上限值（split '-' 后的第二个数值）
        const aUpperLimit = parseFloat(aRange.split('-')[1]);
        const bUpperLimit = parseFloat(bRange.split('-')[1]);

        // 递减排序（大的在前面）
        return bUpperLimit - aUpperLimit;
      }
    );

  epilepsyRelatedBacteria.forEach(
    (item, index) => {
      const [bacteriaChineseName, bacteriaLatinName] = translateBacteriaName(item["name"]);
      const bacteriaValue = item["value"] === '0.000' ? 'ND' : parseFloat(item["value"]);
      const bacteriaNormalRange = item["正常范围"];
      const bacteriaStatus = getValueStatus(bacteriaValue, bacteriaNormalRange);
      const emptyRow = index === 5
        ? `<tr style="height: 130px;">
             <td colspan="4""></td>
           </tr>`
        : '';
      epilepsyAssociatedGutMicrobiomeTableHTML += `
        ${emptyRow}
        <tr style="font-size: 13px;">
          <td class="px-4 py-2 flex flex-col items-start">
            <strong style="font-size: 13px">
                ${bacteriaChineseName}
            </strong>
            <span class="italic text-gray-500" style="font-size: 12px">
                ${bacteriaLatinName}
            </span>
          </td>
          <td class="px-4 py-2 text-center" style="font-size: 12px">
            ${bacteriaNormalRange}
          </td>
          <td class="px-4 py-2 text-center" style="font-size: 12px">
            <div>
              <strong
                class="
                  ${getStatusColor(bacteriaValue, bacteriaStatus)}">
                ${bacteriaStatus === '正常'
                  ? bacteriaValue
                  : bacteriaStatus === '过量'
                    ? `${bacteriaValue} &#9650;`
                    : `${bacteriaValue} &#9660;`
                }
              </strong>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                class="h-2 rounded-full"
                style="
                  width:
                    ${bacteriaValue === 'ND'
                    ? '0%'
                    : bacteriaValue <= 0.1
                      ? `${bacteriaValue * 10}%`
                      : `${bacteriaValue}%`
                    };
                  background-color:
                    ${bacteriaStatus === '正常'
                      ? '#00B5BA'
                      : '#FF4F4F'};">
              </div>
            </div>
          </td>
          <td class="px-4 py-2 text-center" style="font-size: 12px;">
            <div
              class="font-bold"
              style="
                display: inline-block;
                background-color: ${item["相关性"] === "+" ? "#FF6F20" : "#2563EB"};
                color: white;
                padding: 4px 8px;
                border-radius: 8px;">
              ${item["相关性"] === "+" ? "正相关" : "负相关"}
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="4" class="px-0 pb-2" style="padding-top: 0;">
            <div class="w-[98%] mx-auto px-2 py-2 text-gray-700 rounded-md align-middle"
                 style="font-size: 11px; line-height: 1.3; background-color: #F2FDFD; margin-top: -2px;">
              <i class="fas fa-dog text-blue-500"></i>
              埃希氏菌属在狗的肠道微生物组中扮演着双重角色，当数量过高时可导致健康问题，并可能与癫痫症状加重相关。
            </div>
          </td>
        </tr>
      `;
    }
  );
  return epilepsyAssociatedGutMicrobiomeTableHTML;
}

function generateEpilepsyAssociatedGutMicrobiomeHTML(
  EpilepsyAssociatedGutMicrobiomeData
) {
  let epilepsyAssociatedGutMicrobiomeHTML = '';
  epilepsyAssociatedGutMicrobiomeHTML += `
    <header class="flex gap-2 mb-4 pt-6 page-break">
      <!-- 左侧橙色渐变容器 (约68%) -->
      <div
        class="bg-gradient-to-r from-teal-400 to-teal-500 text-white p-6 flex items-center w-[80%] rounded-2xl">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">癫痫相关菌群</h1>
          <p class="text-sm opacity-80 mt-1">Epilepsy-associated microbiome</p>
        </div>
      </div>

      <!-- 右侧灰色容器 (约29%) -->
      <div class="bg-slate-100 p-4 flex items-center justify-center w-[20%] rounded-2xl">
        <div class="flex items-baseline">
          <span style="color: green; font-weight: bold; font-size: 50px;">7</span>
          <span class="text-lg text-slate-500 ml-1">/10</span>
        </div>
      </div>
    </header>

    <div class="flex flex-row gap-2">
      <div class="bg-teal-50 p-4 rounded-lg w-1/2">
        <div>
          <div class="flex items-center mb-2">
            <div>
              <h2 class="font-bold text-gray-600" style="font-size: 15px">
                癫痫相关菌群简介
              </h2>
            </div>
          </div>
          <p class="text-gray-600" style="font-size: 13px">
            狗狗的癫痫是一种神经系统疾病，表现为反复发作的癫痫发作。这种病症可能与遗传因素、脑外伤、感染或中毒等原因有关。当癫痫发作时，狗狗可能会有抽搐、失去意识或异常行为等表现。及时的诊断和治疗对于控制疾病进程至关重要。癫痫的管理方案通常包括药物治疗、饮食调整和环境管理，以减少发作的频率和严重程度。
          </p>
        </div>
      </div>
      <div class="bg-gray-50 rounded-lg p-4 w-1/2">
        <h4 class="font-bold text-gray-600 mb-2" style="font-size: 15px;">癫痫常见症状</h4>
        <ul class="text-gray-700 space-y-0.5" style="font-size: 13px;">
          <li class="flex items-start">
            <div class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></div>
            <span>突然的抽搐或全身性发作，狗狗可能失去意识，有时伴随吠叫或呻吟。</span>
          </li>
          <li class="flex items-start">
            <div class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></div>
            <span>发作后，狗狗可能感到迷惑、疲惫或暂时失去平衡。</span>
          </li>
          <li class="flex items-start">
            <div class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 mr-2"></div>
            <span>在发作前，狗狗可能表现出异常行为，如焦虑、过度依赖或隐藏。</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-white p-4 justify-center rounded-2xl border border-slate-100 mb-4 mt-4">

      <!-- 横向条状图组 -->
      <div class="space-y-2 mb-1">
        <!-- 参考范围内 -->
        <div>
          <div class="flex justify-between text-xs text-slate-600 mb-1">
            <span>参考范围内</span>
            <span>70% (7/10)</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div class="bg-sky-500 h-full rounded-full" style="width: 70%"></div>
          </div>
        </div>

        <!-- 异常 -->
        <div>
          <div class="flex justify-between text-xs text-slate-600 mb-1">
            <span>较参考范围异常</span>
            <span>30% (3/10)</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div class="bg-[#FF4500] h-full rounded-full" style="width: 30%"></div>
          </div>
        </div>
      </div>
    </div>

    <table
      class="gut-microbiome-table"
      style="
        width: 100%;
        text-align: left;
        border-collapse: separate;
        border: 1px solid #e5e7eb;
        border-spacing: 0;
        border-radius: 8px;
        overflow: hidden;
        background: white;">
      <thead>
      <tr style="font-size: 12px; background-color: #4b5563;">
        <th
          style="
            padding: 8px 16px;
            color: white;
            font-weight: 600;
            border-top-left-radius: 8px;
            width: 32%;
            background: #00B5BA;
            ">
          菌群名称
        </th>
        <th
          style="
            padding: 8px 8px;
            color: white;
            font-weight: 600;
            text-align: center;
            width: 27%;
            background: #00B5BA;">
          参考范围%
        </th>
        <th
          style="
            padding: 8px 8px;
            color: white;
            font-weight: 600;
            text-align: center;
            width: 21%;
            background: #00B5BA;">
          检测丰度%
        </th>
        <th
          style="
            padding: 8px 8px;
            color: white;
            font-weight: 600;
            text-align: center;
            border-top-right-radius: 8px;
            width: 20%;
            background: #00B5BA;">
          癫痫相关性
        </th>
      </tr>
      </thead>

      <tbody>
        ${generateEpilepsyAssociatedGutMicrobiomeTable(EpilepsyAssociatedGutMicrobiomeData)}
      <tr>
        <td colspan="4" class="px-0 pb-2" style="padding-top: 0;">
          <div class="mt-2 mb-2 text-gray-500 text-center" style="font-size: 10px;">
            检测结果仅供专业参考
          </div>
        </td>
      </tr>
      </table>

      </tbody>
    </table>
  `;
  return epilepsyAssociatedGutMicrobiomeHTML;
}

function loadEpilepsyAssociatedGutMicrobiomeHTML(
  SampleData
) {
  // 生成肠道评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "intestinalAssessment" 的 div 中
  document.getElementById(
    'epilepsy-associated-gut-microbiome'
  ).innerHTML = generateEpilepsyAssociatedGutMicrobiomeHTML(SampleData['症状相关菌']);
}

export {loadEpilepsyAssociatedGutMicrobiomeHTML};
