// app.js
// date: 2025-06-24
// author: Honglie Zhang

import { fetchData} from './api.js';
import { loadNoteContent } from './note.js';
import {loadOverallHealthMetricsAnalysisHTML} from './overall_health_metrics_analysis.js';
import { loadIntestinalAssessment } from './intestinal_assessment.js';
import { loadGutMicrobiomeAssessment } from './gut_microbiome_assessment.js';
import { loadTaxonomicCompositionAnalysisHTML } from './taxonomic_composition_analysis.js';
import { loadDietaryStructureAndTraceElementsHTML } from './dietary_structure_and_trace_elements.js';
import { loadOverallVitaminEvaluationHTML } from './overall_vitamin_evaluation.js';


async function initialize(sampleId) {
  try {
    const reportData = await fetchData(sampleId); // 确保数据加载并获取报告数据

    // 处理获取到的报告数据
    console.log('获取到的报告数据:', reportData);
    // 在这里处理 reportData，例如调用展示函数等

  } catch (error) {
    console.error('初始化时出错:', error);
  }
}

// 调用 initialize 函数，传入样本ID
// const sampleData = initialize('547442648');

const sampleData = {
  "code": "200",
  "msg": "成功返回样品数据",
  "sampleinfo": {
    "sampleid": "547442648",
    "sampleusername": "珠珠（贵宾×比熊犬）",
    "sex": "女",
    "age": "17岁",
    "comment": "品种：贵宾x比熊混种犬，年龄：17.5岁，\r\n体重：3.7kg，性别：母，已绝育，\r\n粮食：皇家成犬湿粮包为主、零食、自制为辅\r\n病史：库欣，肾上腺肿瘤，二尖瓣脱垂，老年痴呆，已服用曲洛斯坦一年10mg/天",
    "binddate": "2025-06-10",
    "samplestatus": "已生成报告",
    "reportdate": "2025-06-14",
    "receivedate": "2025-06-12",
    "experimentdate": "2025-06-12"
  },
  "总分": [
    {
      "name": "健康总分",
      "value": 41,
      "type": "健康总分",
      "url": "totalscore",
      "desc": "整体健康状况不佳有疾病高风险"
    },
    {
      "name": "菌群健康",
      "value": 25,
      "type": "分项分"
    },
    {
      "name": "营养饮食",
      "value": 73,
      "type": "分项分"
    }
  ],
  "肠道评估": [
    {
      "name": "厚壁菌/拟杆菌",
      "value": "6.37",
      "正常范围": "0.15-7.5"
    },
    {
      "name": "肠道炎症",
      "value": "81",
      "正常范围": "0-75",
      "desc": "反映肠道内炎症水平，过高可能伴随感染或消化道症状，长期慢性炎症也会诱发代谢和其他疾病。"
    },
    {
      "name": "代谢健康",
      "value": "1",
      "正常范围": "25-100",
      "desc": "评估与代谢健康相关的水平，包括血糖和代谢综合征，一般肥胖、糖尿病或缺乏运动会偏低。"
    },
    {
      "name": "肠道屏障",
      "value": "17",
      "正常范围": "25-100",
      "desc": "评估菌群参与的肠道屏障水平，肠道屏障帮助抵御病原感染和炎症或过敏。"
    },
    {
      "name": "消化效率",
      "value": "97",
      "正常范围": "25-100",
      "desc": "综合评估菌群对多种营养物质的消化效率和利用率，过低通常存在消化不良。"
    },
    {
      "name": "蛋白发酵",
      "value": "14",
      "正常范围": "0-70",
      "desc": "过高表示大量蛋白质未在小肠充分吸收进入结直肠，引发肠道菌群的蛋白质代谢，需要调整蛋白摄入方式。"
    },
    {
      "name": "肠道产气",
      "value": "94",
      "正常范围": "0-70",
      "desc": "过高表示菌群具有很高的产前水平，可能会引发消化道症状，异常需要适度控制高产气食物和调整菌群。"
    },
    {
      "name": "草酸盐代谢",
      "value": "1",
      "正常范围": "25-100",
      "desc": "过低表明菌群转化草酸盐的代谢能力不足，可能会导致草酸钙积累引发肾结石，建议控制高草酸食物摄入或焯水后食用。"
    },
    {
      "name": "肠道菌群平衡",
      "value": "25",
      "正常范围": "15-100",
      "desc": "过低表明存在菌群失衡，正常肠道菌群占比过低，部分机会致病菌或病原菌过高，益生菌缺乏。"
    },
    {
      "name": "菌群多样性",
      "value": "28",
      "正常范围": "15-95",
      "desc": "多样性水平表明肠道菌群的构成分布的均衡程度以及种类的多样性，过低和过高都不理想。"
    },
    {
      "name": "菌种数量",
      "value": "270",
      "正常范围": "200-2500",
      "desc": "菌种数量，随发育增加，过低说明菌群多样性太低，过高表明存在较多非肠道常见菌，可能有感染。"
    },
    {
      "name": "有益菌",
      "value": "9",
      "正常范围": "16-100",
      "desc": "包括双歧杆菌、乳杆菌、粪栖杆菌、AKK菌等有助于肠道健康的菌，不仅仅是益生菌。"
    },
    {
      "name": "有害菌",
      "value": "90",
      "正常范围": "0-84",
      "desc": "机会致病菌和病原菌，过高表示可能存在病原菌过多或消化道感染的风险。"
    },
    {
      "name": "革兰氏阴性菌",
      "value": "0.127687766730033",
      "正常范围": "0-0.4",
      "desc": "肠道菌群主要以阳性菌为主，阴性菌一般是病原菌较多。"
    },
    {
      "name": "好氧菌",
      "value": "0.0548250662861826",
      "正常范围": "0-0.3",
      "desc": "肠道菌群绝大部分厌氧，出现好氧菌过多一般也是病原菌入侵或肠道菌群紊乱的情况。"
    },
    {
      "name": "菌群恢复力",
      "value": "3",
      "正常范围": "25-100",
      "desc": "高表示抗生素使用后整个菌群更易恢复回使用前的状态，低表示菌群构成很容易发生变化。"
    }
  ],
  "营养": [
    {
      "name": "碳水化合物",
      "value": "33",
      "正常范围": "20-90"
    },
    {
      "name": "蛋白质",
      "value": "41",
      "正常范围": "20-90"
    },
    {
      "name": "脂肪",
      "value": "15",
      "正常范围": "20-90"
    },
    {
      "name": "盐",
      "value": "8",
      "正常范围": "0-75"
    },
    {
      "name": "糖",
      "value": "94",
      "正常范围": "0-75"
    },
    {
      "name": "纤维",
      "value": "28",
      "正常范围": "20-98"
    },
    {
      "name": "铁",
      "value": "23",
      "正常范围": "15-100"
    },
    {
      "name": "锌",
      "value": "59",
      "正常范围": "15-100"
    },
    {
      "name": "乙酸",
      "value": "23",
      "正常范围": "15-98"
    },
    {
      "name": "丙酸",
      "value": "3",
      "正常范围": "15-98"
    },
    {
      "name": "丁酸",
      "value": "46",
      "正常范围": "15-98"
    },
    {
      "name": "维生素A",
      "value": "34",
      "正常范围": "15-100"
    },
    {
      "name": "维生素B1",
      "value": "93",
      "正常范围": "15-100"
    },
    {
      "name": "维生素B2",
      "value": "83",
      "正常范围": "15-100"
    },
    {
      "name": "维生素B6",
      "value": "79",
      "正常范围": "15-100"
    },
    {
      "name": "维生素B12",
      "value": "87",
      "正常范围": "15-100"
    },
    {
      "name": "叶酸",
      "value": "33",
      "正常范围": "15-100"
    },
    {
      "name": "维生素C",
      "value": "74",
      "正常范围": "15-100"
    },
    {
      "name": "维生素D",
      "value": "80",
      "正常范围": "15-100"
    },
    {
      "name": "维生素E",
      "value": "1",
      "正常范围": "15-100"
    },
    {
      "name": "维生素K",
      "value": "24",
      "正常范围": "15-100"
    },
    {
      "name": "苏氨酸",
      "value": "97",
      "正常范围": "6-98"
    },
    {
      "name": "异亮氨酸",
      "value": "95",
      "正常范围": "6-98"
    },
    {
      "name": "亮氨酸",
      "value": "94",
      "正常范围": "6-98"
    },
    {
      "name": "赖氨酸",
      "value": "72",
      "正常范围": "6-98"
    },
    {
      "name": "蛋氨酸",
      "value": "99",
      "正常范围": "6-98"
    },
    {
      "name": "半胱氨酸",
      "value": "78",
      "正常范围": "6-98"
    },
    {
      "name": "苯丙氨酸",
      "value": "94",
      "正常范围": "6-98"
    },
    {
      "name": "酪氨酸",
      "value": "97",
      "正常范围": "6-98"
    },
    {
      "name": "缬氨酸",
      "value": "98",
      "正常范围": "6-98"
    },
    {
      "name": "组氨酸",
      "value": "74",
      "正常范围": "6-98"
    },
    {
      "name": "丙氨酸",
      "value": "65",
      "正常范围": "6-98"
    },
    {
      "name": "谷氨酸",
      "value": "83",
      "正常范围": "6-98"
    },
    {
      "name": "甘氨酸",
      "value": "22",
      "正常范围": "6-98"
    },
    {
      "name": "脯氨酸",
      "value": "65",
      "正常范围": "6-98"
    },
    {
      "name": "丝氨酸",
      "value": "99",
      "正常范围": "6-98"
    },
    {
      "name": "色氨酸",
      "value": "83",
      "正常范围": "6-98"
    }
  ],
}

document.addEventListener('DOMContentLoaded', () => {
  loadNoteContent(); // 加载 note.html 内容
  loadIntestinalAssessment(sampleData); // 加载 intestinal_assessment.html 内容
  loadOverallHealthMetricsAnalysisHTML(sampleData); // 加载 overall_health_metrics_analysis.html 内容
  loadGutMicrobiomeAssessment(sampleData); // 加载 gut_microbiome_assessment.html 内容
  loadTaxonomicCompositionAnalysisHTML();
  loadDietaryStructureAndTraceElementsHTML(sampleData);
  loadOverallVitaminEvaluationHTML(sampleData);
});
