// js/detected_gut_microbiome_species.js
// date: 2025-07-01
// author: Honglie Zhang

const CONFIG = {
  overallDescription: '下列表格展示了狗狗肠道中实际检出的种层级的肠道细菌 (检测丰度从⾼到低排列)。如果检测到的细菌超过30种，则仅列出丰度最⾼的前30种。“群体水平%”是指这类细菌在数据库中有多少比例的狗狗身上被发现，通常用百分比来表示'
};

function generateDetectedGutMicrobiomeSpeciesTable(DetectedGutMicrobiomeSpeciesData) {

  let detectedGutMicrobiomeSpeciesTable = '';

  const top30Bacteria = DetectedGutMicrobiomeSpeciesData
    .map(
      (bacteria) => (
        {
          ...bacteria,
          value: parseFloat(bacteria.value)
        }
      )
    )
    .sort((a, b) => b.value - a.value)
    .slice(0, 30); // 取前 30 项

  top30Bacteria.forEach(
    (bacteria, index) => {
      // 检查是否包含中文字符
      const isChinese = /[\u4E00-\u9FFF]/.test(bacteria.name); // 判断是否有中文
      let chineseName, latinName;

      if (isChinese) {
        // 使用正则表达式分割中文和拉丁名
        [chineseName, latinName] = bacteria.name.split(/ (?=[A-Z])/);
      } else {
        // 如果没有中文，则中文名和拉丁名相同
        chineseName = latinName = bacteria.name;
      }

      // 根据索引决定背景色：偶数行(0,2,4...)透明，奇数行(1,3,5...)灰色
      const backgroundColor = index % 2 === 0 ? 'transparent' : '#f9fafb';

      detectedGutMicrobiomeSpeciesTable += `
        <tr style="background-color: ${backgroundColor};">
          <td class="px-4 py-1 text-left align-middle">
            <span class="font-bold text-gray-600" style="font-size: 11px">
              ${chineseName}
            </span>
          </td>
          <td class="pl-2 pr-4 py-1 text-left align-middle" style="font-size: 11px; font-style: italic">
            ${latinName}
          </td>
          <td class="px-4 py-1 text-center align-middle" style="font-size: 11px">
            ${(bacteria.value).toFixed(4)}
          </td>
          <td class="px-4 py-1 text-center align-middle" style="font-size: 11px">
            ${bacteria["群体水平"]}
          </td>
        </tr>
      `;
    }
  );

  return detectedGutMicrobiomeSpeciesTable;
}

function generateDetectedGutMicrobiomeSpeciesHTML(DetectedGutMicrobiomeSpeciesData) {
  let detectedGutMicrobiomeSpeciesHTML = '';
  detectedGutMicrobiomeSpeciesHTML += `
    <h2 class="text-xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pt-4 pb-2 page-break">
      检出肠道菌群列表 (种层级)
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

    <table
      style="
        width: 100%;
        text-align: left;
        border-collapse: separate;
        border-spacing: 0;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
        background: white;
        line-height: 1.0;">
      <thead>
      <tr style="font-size: 12px; background-color: #4b5563;">
        <th
          style="
            background: #00B5BA;
            padding: 8px 16px;
            color: white;
            font-weight: 600;
            border-top-left-radius: 8px;
            width: 35%;">
          细菌名称
        </th>
        <th
          style="
            background: #00B5BA;
            padding: 8px 8px;
            color: white;
            font-weight: 600;
            text-align: left;
            width: 35%;">
          拉丁名
        </th>
        <th
          style="
            background: #00B5BA;
            padding: 8px 8px;
            color: white;
            font-weight: 600;
            text-align: center;
            width: 15%;">
          检测丰度%
        </th>
        <th
          style="
            background: #00B5BA;
            padding: 8px 8px;
            color: white;
            font-weight: 600;
            text-align: center;
            border-top-right-radius: 8px;
            width: 15%;">
          群体水平%
        </th>
      </tr>
      </thead>

      <tbody>
        ${generateDetectedGutMicrobiomeSpeciesTable(DetectedGutMicrobiomeSpeciesData)}
      </tbody>
    </table>
  `;
  return detectedGutMicrobiomeSpeciesHTML;
}

function loadDetectedGutMicrobiomeSpeciesHTML(SampleData) {
  // 生成肠道评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "intestinalAssessment" 的 div 中
  document.getElementById(
    'detected-gut-microbiome-species'
  ).innerHTML = generateDetectedGutMicrobiomeSpeciesHTML(SampleData['菌群构成-种']);
}

export {loadDetectedGutMicrobiomeSpeciesHTML};
