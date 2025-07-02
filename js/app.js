// app.js
// date: 2025-06-24
// author: Honglie Zhang

import {fetchData} from './api.js';
import {loadNoteContent} from './note.js';
import {loadOverallHealthMetricsAnalysisHTML} from './overall_health_metrics_analysis.js';
import {loadIntestinalAssessment} from './intestinal_assessment.js';
import {loadGutMicrobiomeAssessment} from './gut_microbiome_assessment.js';
import {loadTaxonomicCompositionAnalysisHTML} from './taxonomic_composition_analysis.js';
import {loadDietaryStructureAndTraceElementsHTML} from './dietary_structure_and_trace_elements.js';
import {loadOverallVitaminEvaluationHTML} from './overall_vitamin_evaluation.js';
import {loadVitaminsTable} from './vitamins_tables.js';
import {loadOverallGutMicrobiomeMetabolomicsAssessmentHTML} from './overall_gut_microbiome_metabolomics_assessment.js';
import {loadShortChainFattyAcidsHTML} from "./short_chain_fatty_acids.js";
import {loadAminoAcidsHTML} from "./amino_acids.js";
import {loadDetectedGutMicrobiomeGenusHTML} from "./detected_gut_microbiome_genus.js";
import {loadDetectedGutMicrobiomeSpeciesHTML} from "./detected_gut_microbiome_species.js";
import {loadEpilepsyAssociatedGutMicrobiomeHTML} from "./epilepsy_associated_gut_microbiome.js";

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
    "sampleid": "540847280",
    "sampleusername": "赵小裤",
    "sex": "男",
    "age": "14岁",
    "comment": "14岁喜乐蒂串串，吃冠能体重控制粮，随餐吃一点肉菜等人饭。",
    "binddate": "2025-06-27",
    "samplestatus": "已生成报告",
    "reportdate": "2025-07-02",
    "receivedate": "2025-06-30",
    "experimentdate": "2025-06-30"
  },
  "总分": [
    {
      "name": "健康总分",
      "value": 39,
      "type": "健康总分",
      "url": "totalscore",
      "desc": "多项疾病风险建议复查"
    },
    {
      "name": "菌群健康",
      "value": 25,
      "type": "分项分"
    },
    {
      "name": "营养饮食",
      "value": 66,
      "type": "分项分"
    }
  ],
  "多样性": [
    {
      "name": "检测到菌种数量",
      "value": "193",
      "type": "多样性"
    },
    {
      "name": "香浓多样性",
      "value": "14",
      "type": "多样性"
    }
  ],
  "肠道评估": [
    {
      "name": "厚壁菌/拟杆菌",
      "value": "17.49",
      "正常范围": "0.15-7.5"
    },
    {
      "name": "肠道炎症",
      "value": "96",
      "正常范围": "0-75",
      "desc": "反映肠道内炎症水平，过高可能伴随感染或消化道症状，长期慢性炎症也会诱发代谢和其他疾病。"
    },
    {
      "name": "代谢健康",
      "value": "10",
      "正常范围": "25-100",
      "desc": "评估与代谢健康相关的水平，包括血糖和代谢综合征，一般肥胖、糖尿病或缺乏运动会偏低。"
    },
    {
      "name": "肠道屏障",
      "value": "4",
      "正常范围": "25-100",
      "desc": "评估菌群参与的肠道屏障水平，肠道屏障帮助抵御病原感染和炎症或过敏。"
    },
    {
      "name": "消化效率",
      "value": "77",
      "正常范围": "25-100",
      "desc": "综合评估菌群对多种营养物质的消化效率和利用率，过低通常存在消化不良。"
    },
    {
      "name": "蛋白发酵",
      "value": "29",
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
      "value": "17",
      "正常范围": "15-100",
      "desc": "过低表明存在菌群失衡，正常肠道菌群占比过低，部分机会致病菌或病原菌过高，益生菌缺乏。"
    },
    {
      "name": "菌群多样性",
      "value": "14",
      "正常范围": "15-95",
      "desc": "多样性水平表明肠道菌群的构成分布的均衡程度以及种类的多样性，过低和过高都不理想。"
    },
    {
      "name": "菌种数量",
      "value": "193",
      "正常范围": "200-2500",
      "desc": "菌种数量，随发育增加，过低说明菌群多样性太低，过高表明存在较多非肠道常见菌，可能有感染。"
    },
    {
      "name": "有益菌",
      "value": "4",
      "正常范围": "16-100",
      "desc": "包括双歧杆菌、乳杆菌、粪栖杆菌、AKK菌等有助于肠道健康的菌，不仅仅是益生菌。"
    },
    {
      "name": "有害菌",
      "value": "99",
      "正常范围": "0-84",
      "desc": "机会致病菌和病原菌，过高表示可能存在病原菌过多或消化道感染的风险。"
    },
    {
      "name": "革兰氏阴性菌",
      "value": "0.414671128968035",
      "正常范围": "0-0.4",
      "desc": "肠道菌群主要以阳性菌为主，阴性菌一般是病原菌较多。"
    },
    {
      "name": "好氧菌",
      "value": "0.34365768776738",
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
  "疾病": [
    {
      "name": "感染型腹泻",
      "value": "0.61531705",
      "正常范围": "\u003C0.3"
    }
  ],
  "营养": [
    {
      "name": "碳水化合物",
      "value": "22",
      "正常范围": "20-90"
    },
    {
      "name": "蛋白质",
      "value": "23",
      "正常范围": "20-90"
    },
    {
      "name": "脂肪",
      "value": "15",
      "正常范围": "20-90"
    },
    {
      "name": "盐",
      "value": "10",
      "正常范围": "0-75"
    },
    {
      "name": "糖",
      "value": "60",
      "正常范围": "0-75"
    },
    {
      "name": "纤维",
      "value": "26",
      "正常范围": "20-98"
    },
    {
      "name": "铁",
      "value": "4",
      "正常范围": "15-100"
    },
    {
      "name": "锌",
      "value": "94",
      "正常范围": "15-100"
    },
    {
      "name": "乙酸",
      "value": "9",
      "正常范围": "15-98"
    },
    {
      "name": "丙酸",
      "value": "2",
      "正常范围": "15-98"
    },
    {
      "name": "丁酸",
      "value": "8",
      "正常范围": "15-98"
    },
    {
      "name": "维生素A",
      "value": "17",
      "正常范围": "15-100"
    },
    {
      "name": "维生素B1",
      "value": "57",
      "正常范围": "15-100"
    },
    {
      "name": "维生素B2",
      "value": "92",
      "正常范围": "15-100"
    },
    {
      "name": "维生素B6",
      "value": "65",
      "正常范围": "15-100"
    },
    {
      "name": "维生素B12",
      "value": "95",
      "正常范围": "15-100"
    },
    {
      "name": "叶酸",
      "value": "23",
      "正常范围": "15-100"
    },
    {
      "name": "维生素C",
      "value": "60",
      "正常范围": "15-100"
    },
    {
      "name": "维生素D",
      "value": "80",
      "正常范围": "15-100"
    },
    {
      "name": "维生素E",
      "value": "45",
      "正常范围": "15-100"
    },
    {
      "name": "维生素K",
      "value": "57",
      "正常范围": "15-100"
    },
    {
      "name": "苏氨酸",
      "value": "73",
      "正常范围": "6-98"
    },
    {
      "name": "异亮氨酸",
      "value": "55",
      "正常范围": "6-98"
    },
    {
      "name": "亮氨酸",
      "value": "56",
      "正常范围": "6-98"
    },
    {
      "name": "赖氨酸",
      "value": "28",
      "正常范围": "6-98"
    },
    {
      "name": "蛋氨酸",
      "value": "98",
      "正常范围": "6-98"
    },
    {
      "name": "半胱氨酸",
      "value": "68",
      "正常范围": "6-98"
    },
    {
      "name": "苯丙氨酸",
      "value": "64",
      "正常范围": "6-98"
    },
    {
      "name": "酪氨酸",
      "value": "92",
      "正常范围": "6-98"
    },
    {
      "name": "缬氨酸",
      "value": "83",
      "正常范围": "6-98"
    },
    {
      "name": "组氨酸",
      "value": "66",
      "正常范围": "6-98"
    },
    {
      "name": "丙氨酸",
      "value": "37",
      "正常范围": "6-98"
    },
    {
      "name": "谷氨酸",
      "value": "42",
      "正常范围": "6-98"
    },
    {
      "name": "甘氨酸",
      "value": "10",
      "正常范围": "6-98"
    },
    {
      "name": "脯氨酸",
      "value": "64",
      "正常范围": "6-98"
    },
    {
      "name": "丝氨酸",
      "value": "99",
      "正常范围": "6-98"
    },
    {
      "name": "色氨酸",
      "value": "49",
      "正常范围": "6-98"
    }
  ],
  "抗生素耐药": [
    {
      "name": "β-内酰胺酶类",
      "value": "84",
      "正常范围": "0-91"
    },
    {
      "name": "氨基糖苷类",
      "value": "85",
      "正常范围": "0-91"
    },
    {
      "name": "大环内酯类",
      "value": "91",
      "正常范围": "0-91"
    },
    {
      "name": "呋喃类",
      "value": "82",
      "正常范围": "0-91"
    },
    {
      "name": "喹诺酮类",
      "value": "75",
      "正常范围": "0-91"
    },
    {
      "name": "磺胺类",
      "value": "45",
      "正常范围": "0-91"
    },
    {
      "name": "甲氧苄啶类",
      "value": "86",
      "正常范围": "0-91"
    },
    {
      "name": "氯霉素类",
      "value": "95",
      "正常范围": "0-91"
    },
    {
      "name": "四环素类",
      "value": "93",
      "正常范围": "0-91"
    }
  ],
  "炎症": [
    {
      "name": "IgA",
      "value": "89",
      "正常范围": "15-98",
      "说明": "体液免疫"
    },
    {
      "name": "白蛋白",
      "value": "13",
      "正常范围": "15-98",
      "说明": "体液免疫"
    },
    {
      "name": "粪便钙卫蛋白（FC）",
      "value": "11",
      "正常范围": "0-85",
      "说明": "IBD等炎症指标"
    },
    {
      "name": "粪便嗜酸性粒细胞蛋白X(EPX)",
      "value": "7",
      "正常范围": "0-85",
      "说明": "肠炎标志物"
    },
    {
      "name": "白介素6（IL-6）",
      "value": "18",
      "正常范围": "1-85",
      "说明": "促炎症细胞因子"
    },
    {
      "name": "肿瘤坏死因子α（TNF-α）",
      "value": "8",
      "正常范围": "5-85",
      "说明": "促炎症细胞因子"
    },
    {
      "name": "Il-17a",
      "value": "50",
      "正常范围": "5-85",
      "说明": "促炎症细胞因子"
    },
    {
      "name": "脂多糖LPS",
      "value": "72",
      "正常范围": "0-85",
      "说明": "致炎症代谢物"
    },
    {
      "name": "Il-10",
      "value": "1",
      "正常范围": "15-95",
      "说明": "抗炎症细胞因子"
    },
    {
      "name": "IFN-γ",
      "value": "49",
      "正常范围": "15-95",
      "说明": "抗炎症细胞因子"
    },
    {
      "name": "一氧化氮",
      "value": "84",
      "正常范围": "5-95",
      "说明": "免疫保护"
    },
    {
      "name": "胆汁酸",
      "value": "64",
      "正常范围": "15-95",
      "说明": "抗炎代谢物"
    },
    {
      "name": "氢",
      "value": "96",
      "正常范围": "15-95",
      "说明": "抗炎代谢物"
    },
    {
      "name": "丁酸盐",
      "value": "8",
      "正常范围": "15-98",
      "说明": "抗炎代谢物"
    },
    {
      "name": "乙酸盐",
      "value": "9",
      "正常范围": "15-98",
      "说明": "抗炎代谢物"
    }
  ],
  "菌群代谢物": [
    {
      "name": "对甲酚（p-Cresol）",
      "value": "82",
      "正常范围": "0-85",
      "说明": "尿毒症毒素、慢性肾病、神经行为疾病、结直肠癌、自闭症、慢性便秘 /"
    },
    {
      "name": "吲哚",
      "value": "22",
      "正常范围": "15-95",
      "说明": "食物上瘾、焦虑、慢性肾病/致病菌定植、炎症反应"
    },
    {
      "name": "苯酚",
      "value": "27",
      "正常范围": "5-85",
      "说明": "结直肠癌、糖尿病肾病、尿毒症、艰难梭菌定植 /"
    },
    {
      "name": "腐胺",
      "value": "80",
      "正常范围": "5-85",
      "说明": "结直肠癌、IBD、结肠炎、增加肠道通透、变形菌门正相关 / 炎症"
    },
    {
      "name": "硫化氢",
      "value": "35",
      "正常范围": "5-85",
      "说明": "IBD、腹胀气、抑制乳酸菌、心血管疾病、2型糖尿病、肝硬化 /"
    },
    {
      "name": "尸胺",
      "value": "40",
      "正常范围": "5-85",
      "说明": "肠炎、结直肠疾病、乳腺癌 / 阿尔茨海默病、帕金森病"
    }
  ],
  "门": [
    {
      "name": "Firmicutes",
      "value": "0.000",
      "正常范围": "5.712-87.2124"
    },
    {
      "name": "Bacteroidota",
      "value": "0.000",
      "正常范围": "0.1467-54.1674"
    },
    {
      "name": "Fusobacteriota",
      "value": "0.000",
      "正常范围": "0-25.4898"
    },
    {
      "name": "Proteobacteria",
      "value": "0.000",
      "正常范围": "0.1001-52.6286"
    },
    {
      "name": "Actinobacteriota",
      "value": "0.000",
      "正常范围": "0.0442-22.8767"
    }
  ],
  "核心菌属": [
    {
      "name": "Prevotella ",
      "value": "0.023",
      "正常范围": "0.00333-15.884"
    },
    {
      "name": "Bacteroides",
      "value": "2.805",
      "正常范围": "0.035-46.2711"
    },
    {
      "name": "Fusobacterium",
      "value": "0.003",
      "正常范围": "0.0035-22.6743"
    },
    {
      "name": "Megamonas",
      "value": "0.010",
      "正常范围": "0-20.2447"
    },
    {
      "name": "Alloprevotella",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "Blautia",
      "value": "2.597",
      "正常范围": "0.0068-19.239"
    },
    {
      "name": "Clostridium",
      "value": "17.533",
      "正常范围": "0.0144-28.7519"
    },
    {
      "name": "Collinsella",
      "value": "0.000",
      "正常范围": "0.0176-12.21"
    },
    {
      "name": "Faecalibacterium",
      "value": "0.020",
      "正常范围": "0-4.6464"
    },
    {
      "name": "Lachnoclostridium",
      "value": "1.944",
      "正常范围": "0-1.221"
    },
    {
      "name": "Lachnospiraceae",
      "value": "0.007",
      "正常范围": "0-0.363"
    },
    {
      "name": "Peptoclostridium",
      "value": "0.000",
      "正常范围": "0-0.2112"
    },
    {
      "name": "Ruminococcus Gnavus",
      "value": "4.609",
      "正常范围": "0-4.0557"
    },
    {
      "name": "Ruminococcus Torques",
      "value": "0.000",
      "正常范围": "0-0.5775"
    },
    {
      "name": "Sutterella",
      "value": "40.653",
      "正常范围": "0-4.3082"
    },
    {
      "name": "Clostridium hiranonis (Peptacetobacter hiranonis)",
      "value": "0.000",
      "正常范围": "0-17.2227"
    },
    {
      "name": "Turicibacter sanguinis",
      "value": "0.003",
      "正常范围": "0-0.0594"
    },
    {
      "name": "Subdoligranulum",
      "value": "0.000",
      "正常范围": "0-0.0033"
    },
    {
      "name": "Lachnospira",
      "value": "0.007",
      "正常范围": "0-0.5148"
    },
    {
      "name": "Ruminococcus",
      "value": "4.632",
      "正常范围": "0.0159-4.8840"
    },
    {
      "name": "Turicibacter",
      "value": "0.040",
      "正常范围": "0-4.7124"
    },
    {
      "name": "Faecalibacterium prausnitzii",
      "value": "0.017",
      "正常范围": "0-3.0129"
    }
  ],
  "益生菌": [
    {
      "name": "Bifidobacterium",
      "value": "0.007",
      "正常范围": "0.01334-8.2533"
    },
    {
      "name": "B. adolescentis",
      "value": "0.000",
      "正常范围": "0-1.6698"
    },
    {
      "name": "B. bifidum",
      "value": "0.000",
      "正常范围": "0-0.0462"
    },
    {
      "name": "B. breve",
      "value": "0.000",
      "正常范围": "0-0.066"
    },
    {
      "name": "B. animalis ",
      "value": "0.000",
      "正常范围": "0-0.1386"
    },
    {
      "name": "Lactobacillus",
      "value": "0.047",
      "正常范围": "0.1632-22.5692"
    },
    {
      "name": "L. brevis",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "L. acidophilus",
      "value": "0.000",
      "正常范围": "0-2.5509"
    },
    {
      "name": "L. casei",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "L.plantarum",
      "value": "0.000",
      "正常范围": "0-3.6993"
    },
    {
      "name": "L. salivarius",
      "value": "0.000",
      "正常范围": "0-1.1352"
    },
    {
      "name": "L. fermentum",
      "value": "0.000",
      "正常范围": "0-0.0066"
    },
    {
      "name": "L. rhamnosus",
      "value": "0.000",
      "正常范围": "0-0.4059"
    },
    {
      "name": "B. coagulans",
      "value": "0.000",
      "正常范围": "0-0.005"
    },
    {
      "name": "P. pentosaceus",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "P. freudenreichii",
      "value": "0.000",
      "正常范围": "0-0.0476"
    },
    {
      "name": "L. lactis",
      "value": "0.000",
      "正常范围": "0-0.005"
    },
    {
      "name": "P. freudenreichii",
      "value": "0.000",
      "正常范围": "0-0.005"
    },
    {
      "name": "L. lactis",
      "value": "0.000",
      "正常范围": "0-0.005"
    },
    {
      "name": "Bacillus subtilis",
      "value": "0.000",
      "正常范围": "0-0.005"
    },
    {
      "name": "Lactobacillus_helveticus",
      "value": "0.000",
      "正常范围": "0-0.005"
    },
    {
      "name": "Lactobacillus_paracasei",
      "value": "0.000",
      "正常范围": "0-0.005"
    },
    {
      "name": "Lactobacillus_reuteri",
      "value": "0.044",
      "正常范围": "0-0.0166"
    },
    {
      "name": "Pediococcus_acidilactici",
      "value": "0.000",
      "正常范围": "0-0.005"
    },
    {
      "name": "Bacillus licheniformis",
      "value": "0.000",
      "正常范围": "0-0.005"
    }
  ],
  "病原菌": [
    {
      "name": "Escherichia coli",
      "value": "0.064",
      "正常范围": "0-0.1501"
    },
    {
      "name": "Campylobacter upsaliensis",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "Listeria monocytogenes",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "Staphylococcus intermedius",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "Clostridium piliforme",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "Streptococcus rubneri",
      "value": "0.000",
      "正常范围": "0-0.0066"
    },
    {
      "name": "脆弱拟杆菌 Bacteroides fragilis",
      "value": "0.501",
      "正常范围": "0-2.370711213"
    },
    {
      "name": "肠炎鼠伤寒沙门氏菌 Salmonella enterica",
      "value": "0.007",
      "正常范围": "0-0.6006"
    },
    {
      "name": "解齿放线菌 Actinomyces odontolyticus",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "共生梭菌 Clostridium symbiosum",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "沃氏嗜胆菌 Bilophila wadsworthia",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "产酸拟杆菌 Bacteroides acidifaciens",
      "value": "0.000",
      "正常范围": "0-0.0034"
    },
    {
      "name": "格氏链球菌 Streptococcus gordonii",
      "value": "0.000",
      "正常范围": "0-0.0363"
    },
    {
      "name": "痢疾志贺菌 Shigella dysenteriae",
      "value": "0.000",
      "正常范围": "0-0.0099"
    },
    {
      "name": "肺炎克雷伯氏菌 Klebsiella pneumoniae",
      "value": "0.000",
      "正常范围": "0-0.2376"
    },
    {
      "name": "血链球菌 Streptococcus sanguinis",
      "value": "0.000",
      "正常范围": "0-0.0034"
    },
    {
      "name": "摩氏摩根氏菌 Morganella morganii",
      "value": "0.017",
      "正常范围": "0-0.0035"
    },
    {
      "name": "Actinomyces oris",
      "value": "0.000",
      "正常范围": "0-0.0132"
    },
    {
      "name": "空肠弯曲菌 Campylobacter jejuni",
      "value": "0.000",
      "正常范围": "0-0.0066"
    },
    {
      "name": "具核梭杆菌 Fusobacterium nucleatum",
      "value": "0.000",
      "正常范围": "0-0.8908"
    },
    {
      "name": "铜绿假单胞菌 Pseudomonas aeruginosa",
      "value": "0.000",
      "正常范围": "0-0.1122"
    },
    {
      "name": "沙眼衣原体 Chlamydia trachomatis",
      "value": "0.003",
      "正常范围": "0-0"
    },
    {
      "name": "衣氏放线菌 Actinomyces israelii",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "无乳链球菌 Streptococcus agalactiae",
      "value": "0.000",
      "正常范围": "0-0.0238"
    },
    {
      "name": "幽门螺杆菌 Helicobacter pylori",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "粪肠球菌 Enterococcus faecalis",
      "value": "0.000",
      "正常范围": "0-0.033"
    },
    {
      "name": "Catabacter hongkongensis",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "牙龈卟啉单胞菌 Porphyromonas gingivalis",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "变异链球菌  Streptococcus mutans",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "肺炎链球菌 Streptococcus pneumoniae",
      "value": "0.000",
      "正常范围": "0-0.0216"
    },
    {
      "name": "粘质沙雷菌 Serratia marcescens",
      "value": "0.000",
      "正常范围": "0-0.0035"
    },
    {
      "name": "脑膜炎奈瑟菌 Neisseria meningitidis",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "肉毒梭菌 Clostridium botulinum",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "霍乱弧菌 Vibrio cholerae",
      "value": "0.000",
      "正常范围": "0-0.0035"
    },
    {
      "name": "艰难梭菌 Peptoclostridium difficile",
      "value": "0.000",
      "正常范围": "0-0.2112"
    },
    {
      "name": "普通变形菌 Proteus vulgaris",
      "value": "0.000",
      "正常范围": "0-0.0315"
    },
    {
      "name": "索氏志贺氏菌 Shigella sonnei",
      "value": "0.000",
      "正常范围": "0-0.0429"
    },
    {
      "name": "金黄色葡萄球菌 Staphylococcus aureus",
      "value": "0.000",
      "正常范围": "0-0.0034"
    },
    {
      "name": "腐生葡萄球菌腐生亚种 Staphylococcus saprophyticus",
      "value": "0.000",
      "正常范围": "0-0.361"
    },
    {
      "name": "化脓链球菌 Streptococcus pyogenes",
      "value": "0.000",
      "正常范围": "0-0.5016"
    },
    {
      "name": "解脲脲原体 Ureaplasma urealyticum",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "解脲棒杆菌 Corynebacterium urealyticum",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "肺炎枝原体 Mycoplasma pneumoniae",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "沙门氏菌属 Salmonella",
      "value": "0.007",
      "正常范围": "0-0.61"
    },
    {
      "name": "博氏疏螺旋体 Borrelia burgdorferi",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "鼠伤寒沙门氏菌 Salmonella typhimurium",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "鼠疫耶尔森氏菌 Yersinia pestis",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "小肠结肠炎耶尔森氏菌 Yersinia enterocolitica",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "鹦鹉热衣原体 Chlamydophila psittaci",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "肺炎衣原体 Chlamydia pneumoniae",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "淋病奈瑟氏球菌 Neisseria gonorrhoeae",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "立氏立克次氏体 Rickettsia rickettsii",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "结核分枝杆菌 Mycobacterium tuberculosis",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "溃疡分枝杆菌 Mycobacterium ulcerans",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "流感嗜血杆菌 Haemophilus influenzae",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "破伤风杆菌 Clostridium tetani",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "Leptospirosis",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "Bordetella",
      "value": "0.000",
      "正常范围": "0-0"
    }
  ],
  "有害菌": [
    {
      "name": "Shigella",
      "value": "5.652",
      "正常范围": "0-0.1551"
    },
    {
      "name": "Streptococcus",
      "value": "0.071",
      "正常范围": "0-1.6203"
    },
    {
      "name": "Desulfovibrio",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "Klebsiella",
      "value": "0.114",
      "正常范围": "0-0.2433"
    },
    {
      "name": "Campylobacter",
      "value": "0.000",
      "正常范围": "0-0.0066"
    },
    {
      "name": "Arcobacter",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "Staphylococcaceae",
      "value": "0.000",
      "正常范围": "0-0.385"
    },
    {
      "name": "Helicobacter",
      "value": "0.000",
      "正常范围": "0-0.0165"
    },
    {
      "name": "Pantoea",
      "value": "0.074",
      "正常范围": "0-0.0033"
    },
    {
      "name": "Enterococcus",
      "value": "0.007",
      "正常范围": "0-2.97"
    },
    {
      "name": "产气荚膜梭菌 Clostridium perfringens",
      "value": "0.010",
      "正常范围": "0-0.0099"
    },
    {
      "name": "艰难梭菌 Clostridium difficile",
      "value": "0.000",
      "正常范围": "0-5.1744"
    }
  ],
  "其他关注菌属": [
    {
      "name": "Hafnia-Obesumbacterium",
      "value": "0.000",
      "正常范围": "0-0.0034"
    },
    {
      "name": "Bacillus",
      "value": "0.000",
      "正常范围": "0-9.4809"
    },
    {
      "name": "Pediococcus",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "name": "Clostridia",
      "value": "48.915",
      "正常范围": "0.0273-69.3462"
    },
    {
      "name": "颤螺菌属",
      "value": "0.000",
      "正常范围": "0-0.387"
    },
    {
      "name": "肠杆菌科",
      "value": "6.294",
      "正常范围": "0-9.3932"
    },
    {
      "name": "厌氧菌属",
      "value": "0.000",
      "正常范围": "0-0.009"
    },
    {
      "name": "戴阿利斯特杆菌属",
      "value": "0.003",
      "正常范围": "0-1.32"
    },
    {
      "name": "消化链球菌属",
      "value": "0.000",
      "正常范围": "0-0.4046"
    },
    {
      "name": "考拉杆菌属",
      "value": "0.017",
      "正常范围": "0-1.2852"
    },
    {
      "name": "厌氧支原体属",
      "value": "0.000",
      "正常范围": "0-0.0066"
    },
    {
      "name": "优杆菌属",
      "value": "0.686",
      "正常范围": "0-1.4204"
    },
    {
      "name": "鞘氨醇菌属",
      "value": "0.000",
      "正常范围": "0-0.264"
    },
    {
      "name": "罗氏菌属",
      "value": "0.017",
      "正常范围": "0-0.463735237"
    },
    {
      "name": "异常球菌属",
      "value": "0.000",
      "正常范围": "0-1.3936"
    }
  ],
  "症状相关菌": [
    {
      "相关疾病症状": "IBD",
      "相关性": "+",
      "name": "Odoribacter",
      "value": "0.000",
      "正常范围": "0-0.0132"
    },
    {
      "相关疾病症状": "IBD",
      "相关性": "+",
      "name": "红棕色单胞菌属 Porphyromonas",
      "value": "0.000",
      "正常范围": "0-3.612"
    },
    {
      "相关疾病症状": "IBD",
      "相关性": "+",
      "name": "Epulopiscium",
      "value": "16.004",
      "正常范围": "0-0.2706"
    },
    {
      "相关疾病症状": "IBD",
      "相关性": "+",
      "name": "肠杆菌科 Enterobacteriaceae",
      "value": "6.294",
      "正常范围": "0-9.3932"
    },
    {
      "相关疾病症状": "IBD",
      "相关性": "-",
      "name": "柯林斯氏菌属 Collinsella",
      "value": "0.000",
      "正常范围": "0-9.9994"
    },
    {
      "相关疾病症状": "IBD",
      "相关性": "-",
      "name": "Holdemanella",
      "value": "0.000",
      "正常范围": "0-0.310237849"
    },
    {
      "相关疾病症状": "IBD",
      "相关性": "-",
      "name": "嗜血杆菌属 Haemophilus",
      "value": "0.000",
      "正常范围": "0-2.044"
    },
    {
      "相关疾病症状": "IBD",
      "相关性": "-",
      "name": "螺杆菌属 Helicobacter",
      "value": "0.000",
      "正常范围": "0-0.9306"
    },
    {
      "相关疾病症状": "IBD",
      "相关性": "-",
      "name": "普雷沃氏菌属 Prevotella",
      "value": "0.023",
      "正常范围": "0-10.2696"
    },
    {
      "相关疾病症状": "IBD",
      "相关性": "-",
      "name": "萨特氏菌属 Sutterella",
      "value": "40.653",
      "正常范围": "0-3.3"
    },
    {
      "相关疾病症状": "IBD",
      "相关性": "-",
      "name": "厌氧螺菌 Anaerobiospirillum",
      "value": "0.000",
      "正常范围": "0-1.4157"
    },
    {
      "相关疾病症状": "过敏",
      "相关性": "+",
      "name": "Butyricicoccus",
      "value": "0.000",
      "正常范围": "0-0.243633815"
    },
    {
      "相关疾病症状": "过敏",
      "相关性": "+",
      "name": "Flavonifractor",
      "value": "0.000",
      "正常范围": "0-0.023343449"
    },
    {
      "相关疾病症状": "过敏",
      "相关性": "+",
      "name": "颤螺菌属 Oscillospira",
      "value": "0.000",
      "正常范围": "0-0.387"
    },
    {
      "相关疾病症状": "过敏",
      "相关性": "+",
      "name": "Fournierella",
      "value": "0.000",
      "正常范围": "0-0.050068427"
    },
    {
      "相关疾病症状": "过敏",
      "相关性": "+",
      "name": "粪杆菌属 Faecalibacterium",
      "value": "0.020",
      "正常范围": "0-3.8379"
    },
    {
      "相关疾病症状": "过敏",
      "相关性": "+",
      "name": "瘤胃菌科 Ruminococcaceae",
      "value": "4.655",
      "正常范围": "0.0168-9.449581094"
    },
    {
      "相关疾病症状": "过敏",
      "相关性": "+",
      "name": "Butyricicoccus",
      "value": "0.000",
      "正常范围": "0-0.243633815"
    },
    {
      "相关疾病症状": "过敏",
      "相关性": "+",
      "name": "厌氧螺菌 Anaerobiospirillum",
      "value": "0.000",
      "正常范围": "0-1.4157"
    },
    {
      "相关疾病症状": "过敏",
      "相关性": "-",
      "name": "Peptoclostridium",
      "value": "0.000",
      "正常范围": "0-0.0462"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "+",
      "name": "Terrisporobacter",
      "value": "1.406",
      "正常范围": "0-0.9966"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "+",
      "name": "Romboutsia",
      "value": "2.025",
      "正常范围": "0-0.5412"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "+",
      "name": "丹毒丝菌目 Erysipelotrichales",
      "value": "0.686",
      "正常范围": "0-14.124"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "+",
      "name": "梭菌目 Clostridiales",
      "value": "48.915",
      "正常范围": "0.245-64.9869"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "+",
      "name": "Escherichia-Shigella",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "考拉杆菌属 Phascolarctobacterium",
      "value": "0.017",
      "正常范围": "0-1.2852"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "柯林斯氏菌属 Collinsella",
      "value": "0.000",
      "正常范围": "0-9.9994"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "Holdemanella",
      "value": "0.000",
      "正常范围": "0-0.310237849"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "扭链瘤胃球菌 Ruminococcus torques",
      "value": "0.000",
      "正常范围": "0-0.4455"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "Catenibacterium",
      "value": "0.000",
      "正常范围": "0-0.2541"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "鲸杆菌属 Cetobacterium",
      "value": "0.000",
      "正常范围": "0-0.1632"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "鲸杆菌属 Cetobacterium",
      "value": "0.000",
      "正常范围": "0-0.1632"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "粪杆菌属 Faecalibacterium",
      "value": "0.020",
      "正常范围": "0-3.8379"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "螺杆菌属 Helicobacter",
      "value": "0.000",
      "正常范围": "0-0.9306"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "罗氏菌属 Roseburia",
      "value": "0.017",
      "正常范围": "0-0.463735237"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "萨特氏菌属 Sutterella",
      "value": "40.653",
      "正常范围": "0-3.3"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "厌氧螺菌 Anaerobiospirillum",
      "value": "0.000",
      "正常范围": "0-1.4157"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "Peptoclostridium",
      "value": "0.000",
      "正常范围": "0-0.0462"
    },
    {
      "相关疾病症状": "腹泻",
      "相关性": "-",
      "name": "Prevotellaceae",
      "value": "0.040",
      "正常范围": "0-15.96"
    },
    {
      "相关疾病症状": "呕吐",
      "相关性": "+",
      "name": "Allobaculum",
      "value": "0.000",
      "正常范围": "0-12.6621"
    },
    {
      "相关疾病症状": "呕吐",
      "相关性": "+",
      "name": "Peptoclostridium",
      "value": "0.000",
      "正常范围": "0-0.0462"
    },
    {
      "相关疾病症状": "呕吐",
      "相关性": "+",
      "name": "Campylobacteraceae",
      "value": "0.000",
      "正常范围": "0-0.5775"
    },
    {
      "相关疾病症状": "呕吐",
      "相关性": "+",
      "name": "弯曲杆菌属 Campylobacter",
      "value": "0.000",
      "正常范围": "0-0.4917"
    },
    {
      "相关疾病症状": "呕吐",
      "相关性": "+",
      "name": "经黏液真杆菌属 Blautia",
      "value": "2.597",
      "正常范围": "0-16.005"
    },
    {
      "相关疾病症状": "呕吐",
      "相关性": "+",
      "name": "萨特氏菌属 Sutterella",
      "value": "40.653",
      "正常范围": "0-3.3"
    },
    {
      "相关疾病症状": "呕吐",
      "相关性": "+",
      "name": "红蝽菌科 Coriobacteriaceae",
      "value": "0.000",
      "正常范围": "0-10.1607"
    },
    {
      "相关疾病症状": "呕吐",
      "相关性": "-",
      "name": "考拉杆菌属 Phascolarctobacterium",
      "value": "0.017",
      "正常范围": "0-1.2852"
    },
    {
      "相关疾病症状": "呕吐",
      "相关性": "+",
      "name": "柯林斯氏菌属 Collinsella",
      "value": "0.000",
      "正常范围": "0-9.9994"
    },
    {
      "相关疾病症状": "呕吐",
      "相关性": "-",
      "name": "普雷沃氏菌属 Prevotella",
      "value": "0.023",
      "正常范围": "0-10.2696"
    },
    {
      "相关疾病症状": "肾病",
      "相关性": "+",
      "name": "Negativibacillus",
      "value": "0.000",
      "正常范围": "0-0.1632"
    },
    {
      "相关疾病症状": "肾病",
      "相关性": "+",
      "name": "毛螺菌属 Lachnospira",
      "value": "0.007",
      "正常范围": "0-0.2278"
    },
    {
      "相关疾病症状": "肾病",
      "相关性": "+",
      "name": "棒杆菌科 Corynebacteriaceae",
      "value": "0.003",
      "正常范围": "0-0.006668667"
    },
    {
      "相关疾病症状": "肾病",
      "相关性": "-",
      "name": "考拉杆菌属 Phascolarctobacterium",
      "value": "0.017",
      "正常范围": "0-1.2852"
    },
    {
      "相关疾病症状": "肾病",
      "相关性": "-",
      "name": "螺杆菌属 Helicobacter",
      "value": "0.000",
      "正常范围": "0-0.9306"
    },
    {
      "相关疾病症状": "肾病",
      "相关性": "-",
      "name": "Peptoclostridium",
      "value": "0.000",
      "正常范围": "0-0.0462"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "+",
      "name": "脱铁杆菌纲 Deferribacteres",
      "value": "0.000",
      "正常范围": "0-0.02000867"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "+",
      "name": "Mucispirillum",
      "value": "0.000",
      "正常范围": "0-0.0198"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "+",
      "name": "脱铁杆菌科 Deferribacteraceae",
      "value": "0.000",
      "正常范围": "0-0.02000867"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "+",
      "name": "Parasutterella",
      "value": "0.000",
      "正常范围": "0-0.20007336"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "+",
      "name": "考拉杆菌属 Phascolarctobacterium",
      "value": "0.017",
      "正常范围": "0-1.2852"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "+",
      "name": "Acidaminococcaceae",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "+",
      "name": "Alloprevotella",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "+",
      "name": "普雷沃氏菌属 Prevotella",
      "value": "0.023",
      "正常范围": "0-10.2696"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "+",
      "name": "Prevotellaceae",
      "value": "0.040",
      "正常范围": "0-15.96"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "-",
      "name": "柯林斯氏菌属 Collinsella",
      "value": "0.000",
      "正常范围": "0-9.9994"
    },
    {
      "相关疾病症状": "皮肤病",
      "相关性": "-",
      "name": "Peptoclostridium",
      "value": "0.000",
      "正常范围": "0-0.0462"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "+",
      "name": "Colidextribacter massiliensis",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "+",
      "name": "Ruminococcaceae UCG-014",
      "value": "0.000",
      "正常范围": "0-0"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "+",
      "name": "埃希氏菌属 Escherichia",
      "value": "5.652",
      "正常范围": "0-2.2236"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "+",
      "name": "巨单胞菌属 Megamonas",
      "value": "0.010",
      "正常范围": "0-16.2459"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "+",
      "name": "毛螺旋菌科 Lachnospiraceae",
      "value": "23.077",
      "正常范围": "0.0049-30.1521"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "+",
      "name": "柯林斯氏菌属 Collinsella",
      "value": "0.000",
      "正常范围": "0-9.9994"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "-",
      "name": "鲸杆菌属 Cetobacterium",
      "value": "0.000",
      "正常范围": "0-0.1632"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "-",
      "name": "粪杆菌属 Faecalibacterium",
      "value": "0.020",
      "正常范围": "0-3.8379"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "-",
      "name": "嗜血杆菌属 Haemophilus",
      "value": "0.000",
      "正常范围": "0-2.044"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "-",
      "name": "罗氏菌属 Roseburia",
      "value": "0.017",
      "正常范围": "0-0.463735237"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "-",
      "name": "厌氧螺菌 Anaerobiospirillum",
      "value": "0.000",
      "正常范围": "0-1.4157"
    },
    {
      "相关疾病症状": "癫痫",
      "相关性": "-",
      "name": "Prevotellaceae",
      "value": "0.040",
      "正常范围": "0-15.96"
    }
  ],
  "菌群构成-种": [
    {
      "name": "假小链双歧杆菌 Bifidobacterium pseudocatenulatum",
      "value": "0.0067%",
      "群体水平": "99"
    },
    {
      "name": "Clostridium sp001403635",
      "value": "0.0235%",
      "群体水平": "99"
    },
    {
      "name": "罗伊氏乳杆菌 Lactobacillus reuteri",
      "value": "0.0437%",
      "群体水平": "99"
    },
    {
      "name": "卷曲乳杆菌 Lactobacillus crispatus",
      "value": "0.0033%",
      "群体水平": "99"
    },
    {
      "name": "Romboutsia dakarense",
      "value": "0.0201%",
      "群体水平": "99"
    },
    {
      "name": "Paenibacillus tyraminigenes",
      "value": "0.0033%",
      "群体水平": "99"
    },
    {
      "name": "狗肠梭菌 Clostridium colicanis",
      "value": "0.1917%",
      "群体水平": "99"
    },
    {
      "name": "微好气戴阿利斯特菌 Dialister micraerophilus",
      "value": "0.0033%",
      "群体水平": "97"
    },
    {
      "name": "胃梭菌 Clostridium ventriculi",
      "value": "1.4298%",
      "群体水平": "99"
    },
    {
      "name": "纤细真杆菌 Eubacterium tenue",
      "value": "0.2321%",
      "群体水平": "99"
    },
    {
      "name": "血苏黎世杆菌 Turicibacter sanguinis",
      "value": "0.0033%",
      "群体水平": "95"
    },
    {
      "name": "Massiliprevotella massiliensis",
      "value": "0.0033%",
      "群体水平": "87"
    },
    {
      "name": "贺氏明串珠菌 Leuconostoc holzapfelii",
      "value": "0.0033%",
      "群体水平": "92"
    },
    {
      "name": "索氏类梭菌 Paeniclostridium sordellii",
      "value": "0.1951%",
      "群体水平": "99"
    },
    {
      "name": "解葡糖酰胺布劳特氏菌 Blautia glucerasea",
      "value": "0.01%",
      "群体水平": "94"
    },
    {
      "name": "沙眼衣原体 Chlamydia trachomatis",
      "value": "0.0033%",
      "群体水平": "94"
    },
    {
      "name": "阴道厌氧球菌 Anaerococcus vaginalis",
      "value": "0.0067%",
      "群体水平": "95"
    },
    {
      "name": "Tyzzerella sp000411335",
      "value": "0.0067%",
      "群体水平": "98"
    },
    {
      "name": "居幼虫普罗威登斯菌 Providencia vermicola",
      "value": "0.5046%",
      "群体水平": "99"
    },
    {
      "name": "沉积物龙包茨氏菌 Romboutsia sedimentorum",
      "value": "2.005%",
      "群体水平": "99"
    },
    {
      "name": "UBA737 sp002431945",
      "value": "0.0033%",
      "群体水平": "80"
    },
    {
      "name": "二路普雷沃菌 Prevotella bivia",
      "value": "0.0033%",
      "群体水平": "84"
    },
    {
      "name": "解糖胨普雷沃菌 Prevotella disiens",
      "value": "0.01%",
      "群体水平": "91"
    },
    {
      "name": "第三梭菌 Clostridium tertium",
      "value": "0.1345%",
      "群体水平": "99"
    },
    {
      "name": "腐败梭菌 Clostridium septicum",
      "value": "4.9993%",
      "群体水平": "99"
    },
    {
      "name": "石油土生孢杆菌 Terrisporobacter petrolearius",
      "value": "1.4059%",
      "群体水平": "99"
    },
    {
      "name": "健康者粪布劳特氏菌 Blautia stercoris",
      "value": "0.0033%",
      "群体水平": "76"
    },
    {
      "name": "Peptoniphilus grossensis",
      "value": "0.0033%",
      "群体水平": "88"
    },
    {
      "name": "口颊普雷沃菌 Prevotella buccalis",
      "value": "0.0033%",
      "群体水平": "87"
    },
    {
      "name": "大芬沟德氏菌 Finegoldia magna",
      "value": "0.01%",
      "群体水平": "89"
    },
    {
      "name": "Blautia sp000433815",
      "value": "0.1244%",
      "群体水平": "97"
    },
    {
      "name": "马赛费诺拉尔氏菌 Fenollaria massiliensis",
      "value": "0.01%",
      "群体水平": "88"
    },
    {
      "name": "产黏科森扎氏菌 Cosenzaea myxofaciens",
      "value": "0.0033%",
      "群体水平": "77"
    },
    {
      "name": "Fusobacterium animalis",
      "value": "0.0033%",
      "群体水平": "85"
    },
    {
      "name": "GCA-900066135 sp900066135",
      "value": "0.0033%",
      "群体水平": "61"
    },
    {
      "name": "摩氏摩根氏菌摩根亚种 Morganella morganii",
      "value": "0.0168%",
      "群体水平": "88"
    },
    {
      "name": "Sutterella massiliensis",
      "value": "34.4028%",
      "群体水平": "99"
    },
    {
      "name": "双孢梭菌 Clostridium disporicum",
      "value": "0.3362%",
      "群体水平": "99"
    },
    {
      "name": "伶俐瘤胃球菌 Ruminococcus callidus",
      "value": "0.0033%",
      "群体水平": "59"
    },
    {
      "name": "软弱贫养菌 Abiotrophia defectiva",
      "value": "0.01%",
      "群体水平": "94"
    },
    {
      "name": "解糖梭菌 Clostridium saccharolyticum",
      "value": "0.0066%",
      "群体水平": "77"
    },
    {
      "name": "植生拉乌尔菌 Raoultella planticola",
      "value": "0.0033%",
      "群体水平": "74"
    },
    {
      "name": "新生梭菌 Clostridium neonatale",
      "value": "1.1336%",
      "群体水平": "99"
    },
    {
      "name": "产气荚膜梭菌 Clostridium perfringens",
      "value": "0.01%",
      "群体水平": "85"
    },
    {
      "name": "巴黎链球菌 Streptococcus lutetiensis",
      "value": "0.0269%",
      "群体水平": "89"
    },
    {
      "name": "鲍氏志贺菌 Shigella boydii",
      "value": "0.0067%",
      "群体水平": "78"
    },
    {
      "name": "UBA11524 sp000437595",
      "value": "0.0033%",
      "群体水平": "58"
    },
    {
      "name": "光泽副普雷沃氏菌 Paraprevotella clara",
      "value": "0.0067%",
      "群体水平": "63"
    },
    {
      "name": "Turicibacter sp001543345",
      "value": "0.037%",
      "群体水平": "87"
    },
    {
      "name": "伴生粪球菌 Coprococcus comes",
      "value": "0.0067%",
      "群体水平": "47"
    },
    {
      "name": "华德萨特氏菌 Sutterella wadsworthensis",
      "value": "6.2272%",
      "群体水平": "99"
    },
    {
      "name": "汉氏布劳特氏菌 Blautia hansenii",
      "value": "1.5138%",
      "群体水平": "99"
    },
    {
      "name": "类腐败梭菌 Clostridium paraputrificum",
      "value": "5.1608%",
      "群体水平": "99"
    },
    {
      "name": "副溶血孪生球菌 Gemella parahaemolysans",
      "value": "0.01%",
      "群体水平": "85"
    },
    {
      "name": "KLE1615 sp900066985",
      "value": "0.0033%",
      "群体水平": "35"
    },
    {
      "name": "长下颌真杆菌 Eubacterium dolichum",
      "value": "0.4541%",
      "群体水平": "99"
    },
    {
      "name": "隐藏梭菌 Clostridium celatum",
      "value": "2.4693%",
      "群体水平": "98"
    },
    {
      "name": "Ruminococcus bicirculans",
      "value": "0.0168%",
      "群体水平": "57"
    },
    {
      "name": "Blautia massiliensis",
      "value": "0.0336%",
      "群体水平": "71"
    },
    {
      "name": "Lachnospira sp000437735",
      "value": "0.0066%",
      "群体水平": "49"
    },
    {
      "name": "CAG-83 sp000435555",
      "value": "0.0033%",
      "群体水平": "29"
    },
    {
      "name": "宠大厌氧棒状菌 Anaerostipes hadrus",
      "value": "0.0033%",
      "群体水平": "32"
    },
    {
      "name": "Lachnoclostridium sp001517625",
      "value": "1.9442%",
      "群体水平": "97"
    },
    {
      "name": "卵形拟杆菌 Bacteroides ovatus",
      "value": "0.3027%",
      "群体水平": "85"
    },
    {
      "name": "马赛拟杆菌 Bacteroides massiliensis",
      "value": "0.0067%",
      "群体水平": "42"
    },
    {
      "name": "Gemmiger sp003476825",
      "value": "0.0033%",
      "群体水平": "27"
    },
    {
      "name": "多枝梭菌 Clostridium ramosum",
      "value": "0.1244%",
      "群体水平": "89"
    },
    {
      "name": "Clostridium sp003024715",
      "value": "1.4633%",
      "群体水平": "94"
    },
    {
      "name": "粪拟杆菌 Bacteroides caccae",
      "value": "0.0033%",
      "群体水平": "15"
    },
    {
      "name": "粪考拉杆菌 Phascolarctobacterium faecium",
      "value": "0.0168%",
      "群体水平": "29"
    },
    {
      "name": "粪便罗斯拜瑞氏菌 Roseburia faecis",
      "value": "0.0167%",
      "群体水平": "29"
    },
    {
      "name": "细绳形巨单胞菌 Megamonas funiformis",
      "value": "0.01%",
      "群体水平": "45"
    },
    {
      "name": "肠炎鼠伤寒沙门氏菌 Salmonella enterica",
      "value": "0.0066%",
      "群体水平": "43"
    },
    {
      "name": "韦氏布劳特氏菌 Blautia wexlerae",
      "value": "0.9083%",
      "群体水平": "92"
    },
    {
      "name": "直肠有益杆状菌 Agathobacter rectalis",
      "value": "0.01%",
      "群体水平": "22"
    },
    {
      "name": "Prevotella sp000434975",
      "value": "0.0067%",
      "群体水平": "35"
    },
    {
      "name": "脆弱拟杆菌 Bacteroides fragilis",
      "value": "0.5011%",
      "群体水平": "68"
    },
    {
      "name": "平常拟杆菌 Bacteroides plebeius",
      "value": "0.0033%",
      "群体水平": "21"
    },
    {
      "name": "单形拟杆菌 Bacteroides uniformis",
      "value": "0.5009%",
      "群体水平": "44"
    },
    {
      "name": "缓症链球菌 Streptococcus mitis",
      "value": "0.0437%",
      "群体水平": "70"
    },
    {
      "name": "罗达斯氏泛菌 Pantoea rodasii",
      "value": "0.074%",
      "群体水平": "99"
    },
    {
      "name": "粪便拟杆菌 Bacteroides stercoris",
      "value": "0.0066%",
      "群体水平": "8"
    },
    {
      "name": "活泼瘤胃球菌 Ruminococcus gnavus",
      "value": "4.6086%",
      "群体水平": "98"
    },
    {
      "name": "普通拟杆菌 Bacteroides vulgatus",
      "value": "0.0269%",
      "群体水平": "10"
    },
    {
      "name": "普氏栖粪杆菌 Faecalibacterium prausnitzii",
      "value": "0.0168%",
      "群体水平": "9"
    },
    {
      "name": "大肠杆菌 Escherichia coli",
      "value": "0.0635%",
      "群体水平": "16"
    }
  ],
  "菌群构成-属": [
    {
      "name": "类芽孢杆菌属 Paenibacillus",
      "value": "0.0033%",
      "群体水平": "97"
    },
    {
      "name": "Massiliprevotella",
      "value": "0.0033%",
      "群体水平": "87"
    },
    {
      "name": "类梭菌属 Paeniclostridium",
      "value": "0.1951%",
      "群体水平": "99"
    },
    {
      "name": "衣原体属 Chlamydia",
      "value": "0.0033%",
      "群体水平": "94"
    },
    {
      "name": "厌氧球菌属 Anaerococcus",
      "value": "0.0067%",
      "群体水平": "93"
    },
    {
      "name": "普罗威登斯菌属 Providencia",
      "value": "0.5046%",
      "群体水平": "99"
    },
    {
      "name": "UBA737",
      "value": "0.0033%",
      "群体水平": "79"
    },
    {
      "name": "Epulopiscium",
      "value": "16.0036%",
      "群体水平": "99"
    },
    {
      "name": "明串珠菌属 Leuconostoc",
      "value": "0.0033%",
      "群体水平": "78"
    },
    {
      "name": "UBA11940",
      "value": "0.0033%",
      "群体水平": "82"
    },
    {
      "name": "土生孢杆菌属 Terrisporobacter",
      "value": "1.4059%",
      "群体水平": "99"
    },
    {
      "name": "芬戈尔德菌属 Finegoldia",
      "value": "0.01%",
      "群体水平": "89"
    },
    {
      "name": "龙包茨氏菌属 Romboutsia",
      "value": "2.0251%",
      "群体水平": "99"
    },
    {
      "name": "费诺拉尔氏菌属 Fenollaria",
      "value": "0.01%",
      "群体水平": "87"
    },
    {
      "name": "科森扎氏菌属 Cosenzaea",
      "value": "0.0033%",
      "群体水平": "77"
    },
    {
      "name": "嗜蛋白胨菌属 Peptoniphilus",
      "value": "0.0033%",
      "群体水平": "80"
    },
    {
      "name": "GCA-900066135",
      "value": "0.0033%",
      "群体水平": "59"
    },
    {
      "name": "摩根氏菌属 Morganella",
      "value": "0.0168%",
      "群体水平": "87"
    },
    {
      "name": "乏养菌属 Abiotrophia",
      "value": "0.01%",
      "群体水平": "94"
    },
    {
      "name": "CAG-269",
      "value": "0.0033%",
      "群体水平": "56"
    },
    {
      "name": "克雷伯氏菌属 Klebsiella",
      "value": "0.1143%",
      "群体水平": "44"
    },
    {
      "name": "苏黎世杆菌属 Turicibacter",
      "value": "0.0403%",
      "群体水平": "86"
    },
    {
      "name": "UBA11524",
      "value": "0.0033%",
      "群体水平": "52"
    },
    {
      "name": "Prevotellamassilia",
      "value": "0.0134%",
      "群体水平": "53"
    },
    {
      "name": "CAG-127",
      "value": "0.0033%",
      "群体水平": "55"
    },
    {
      "name": "副普雷沃氏菌属 Paraprevotella",
      "value": "0.0067%",
      "群体水平": "54"
    },
    {
      "name": "柔武氏菌属 Raoultella",
      "value": "0.0033%",
      "群体水平": "63"
    },
    {
      "name": "KLE1615",
      "value": "0.0033%",
      "群体水平": "33"
    },
    {
      "name": "TM7x",
      "value": "0.0168%",
      "群体水平": "85"
    },
    {
      "name": "UBA9502",
      "value": "0.0067%",
      "群体水平": "56"
    },
    {
      "name": "志贺氏菌属 Shigella",
      "value": "0.0067%",
      "群体水平": "63"
    },
    {
      "name": "粪链状菌属 Faecalicatena",
      "value": "0.0033%",
      "群体水平": "35"
    },
    {
      "name": "GCA-900066495",
      "value": "0.0066%",
      "群体水平": "36"
    },
    {
      "name": "CAG-83",
      "value": "0.0033%",
      "群体水平": "27"
    },
    {
      "name": "梭杆菌属 Fusobacterium",
      "value": "0.0033%",
      "群体水平": "46"
    },
    {
      "name": "肠球菌属 Enterococcus",
      "value": "0.0067%",
      "群体水平": "58"
    },
    {
      "name": "萨特氏菌属 Sutterella",
      "value": "40.6534%",
      "群体水平": "99"
    },
    {
      "name": "Tyzzerella",
      "value": "2.4861%",
      "群体水平": "98"
    },
    {
      "name": "孪生球菌属 Gemella",
      "value": "0.01%",
      "群体水平": "70"
    },
    {
      "name": "厌氧棒状菌属 Anaerostipes",
      "value": "0.0033%",
      "群体水平": "26"
    },
    {
      "name": "粪球菌属 Coprococcus",
      "value": "0.0067%",
      "群体水平": "21"
    },
    {
      "name": "巨单胞菌属 Megamonas",
      "value": "0.01%",
      "群体水平": "43"
    },
    {
      "name": "沙门氏菌属 Salmonella",
      "value": "0.0066%",
      "群体水平": "42"
    },
    {
      "name": "毛螺菌属 Lachnospira",
      "value": "0.0066%",
      "群体水平": "22"
    },
    {
      "name": "考拉杆菌属 Phascolarctobacterium",
      "value": "0.0168%",
      "群体水平": "21"
    },
    {
      "name": "乳杆菌属 Lactobacillus",
      "value": "0.047%",
      "群体水平": "34"
    },
    {
      "name": "直肠真杆菌属 Agathobacter",
      "value": "0.01%",
      "群体水平": "15"
    },
    {
      "name": "吉米菌属 Gemmiger",
      "value": "0.0033%",
      "群体水平": "11"
    },
    {
      "name": "戴阿利斯特杆菌属 Dialister",
      "value": "0.0033%",
      "群体水平": "11"
    },
    {
      "name": "罗氏菌属 Roseburia",
      "value": "0.0167%",
      "群体水平": "11"
    },
    {
      "name": "双歧杆菌属 Bifidobacterium",
      "value": "0.0067%",
      "群体水平": "12"
    },
    {
      "name": "经黏液真杆菌属 Blautia",
      "value": "2.5967%",
      "群体水平": "93"
    },
    {
      "name": "泛菌属 Pantoea",
      "value": "0.074%",
      "群体水平": "49"
    },
    {
      "name": "粪杆菌属 Faecalibacterium",
      "value": "0.0201%",
      "群体水平": "6"
    },
    {
      "name": "优杆菌属 Eubacterium",
      "value": "0.6862%",
      "群体水平": "73"
    },
    {
      "name": "Lachnoclostridium",
      "value": "1.9442%",
      "群体水平": "81"
    },
    {
      "name": "拟杆菌属 Bacteroides",
      "value": "2.8046%",
      "群体水平": "11"
    },
    {
      "name": "梭菌属 Clostridium",
      "value": "17.5328%",
      "群体水平": "99"
    },
    {
      "name": "埃希氏菌属 Escherichia",
      "value": "5.6515%",
      "群体水平": "73"
    },
    {
      "name": "普雷沃氏菌属 Prevotella",
      "value": "0.0233%",
      "群体水平": "2"
    },
    {
      "name": "瘤胃球菌属 Ruminococcus",
      "value": "4.632%",
      "群体水平": "90"
    },
    {
      "name": "链球菌属  Streptococcus",
      "value": "0.0706%",
      "群体水平": "33"
    }
  ],
  "菌群层级图": [
    "{\"title\":{\"text\":\"\\u83cc\\u7fa4\\u5c42\\u7ea7\\u6784\\u6210\\uff08\\u4ec5\\u663e\\u793a\\u4e30\\u5ea6\\u5343\\u5206\\u4e4b\\u4e94\\u4ee5\\u4e0a\\u83cc\\uff09\"},\"tooltip\":{\"trigger\":\"item\",\"triggerOn\":\"mousemove\"},\"animation\":false,\"series\":{\"type\":\"sankey\",\"layout\":\"none\",\"left\":-5,\"nodeAlign\":\"right\",\"nodeWidth\":15,\"nodeGap\":12,\"focusNodeAdjacency\":\"allEdges\",\"data\":[{\"name\":\"k__\\u7ec6\\u83cc\"},{\"name\":\"g__\\u62df\\u6746\\u83cc\\u5c5e\"},{\"name\":\"g__\\u7ecf\\u9ecf\\u6db2\\u771f\\u6746\\u83cc\\u5c5e\"},{\"name\":\"g__\\u68ad\\u83cc\\u5c5e\"},{\"name\":\"g__Epulopiscium\"},{\"name\":\"g__\\u57c3\\u5e0c\\u6c0f\\u83cc\\u5c5e\"},{\"name\":\"g__\\u4f18\\u6746\\u83cc\\u5c5e\"},{\"name\":\"g__Lachnoclostridium\"},{\"name\":\"g__Providencia\"},{\"name\":\"g__Romboutsia\"},{\"name\":\"g__\\u7624\\u80c3\\u7403\\u83cc\\u5c5e\"},{\"name\":\"g__\\u8428\\u7279\\u6c0f\\u83cc\\u5c5e\"},{\"name\":\"g__Terrisporobacter\"},{\"name\":\"g__Tyzzerella\"},{\"name\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\"},{\"name\":\"p__\\u53d8\\u5f62\\u83cc\\u95e8\"},{\"name\":\"p__\\u653e\\u7ebf\\u83cc\\u95e8\"},{\"name\":\"p__\\u62df\\u6746\\u83cc\\u95e8\"},{\"name\":\"\\u8106\\u5f31\\u62df\\u6746\\u83cc\"},{\"name\":\"\\u5355\\u5f62\\u62df\\u6746\\u83cc\"},{\"name\":\"Blautia hansenii\"},{\"name\":\"Blautia wexlerae\"},{\"name\":\"\\u9690\\u85cf\\u68ad\\u83cc\"},{\"name\":\"\\u65b0\\u751f\\u68ad\\u83cc\"},{\"name\":\"Clostridium paraputrificum\"},{\"name\":\"\\u8150\\u8d25\\u68ad\\u83cc\"},{\"name\":\"Clostridium sp003024715\"},{\"name\":\"Clostridium ventriculi\"},{\"name\":\"Lachnoclostridium sp001517625\"},{\"name\":\"Providencia vermicola\"},{\"name\":\"Romboutsia sedimentorum\"},{\"name\":\"\\u6d3b\\u6cfc\\u7624\\u80c3\\u7403\\u83cc\"},{\"name\":\"Sutterella massiliensis\"},{\"name\":\"Sutterella wadsworthensis\"},{\"name\":\"Terrisporobacter petrolearius\"}],\"links\":[{\"source\":\"p__\\u62df\\u6746\\u83cc\\u95e8\",\"target\":\"g__\\u62df\\u6746\\u83cc\\u5c5e\",\"value\":\"28046\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__\\u7ecf\\u9ecf\\u6db2\\u771f\\u6746\\u83cc\\u5c5e\",\"value\":\"25967\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__\\u68ad\\u83cc\\u5c5e\",\"value\":\"175328\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__Epulopiscium\",\"value\":\"160036\"},{\"source\":\"p__\\u53d8\\u5f62\\u83cc\\u95e8\",\"target\":\"g__\\u57c3\\u5e0c\\u6c0f\\u83cc\\u5c5e\",\"value\":\"56515\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__\\u4f18\\u6746\\u83cc\\u5c5e\",\"value\":\"6862\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__Lachnoclostridium\",\"value\":\"19442\"},{\"source\":\"p__\\u53d8\\u5f62\\u83cc\\u95e8\",\"target\":\"g__Providencia\",\"value\":\"5046\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__Romboutsia\",\"value\":\"20251\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__\\u7624\\u80c3\\u7403\\u83cc\\u5c5e\",\"value\":\"46320\"},{\"source\":\"p__\\u53d8\\u5f62\\u83cc\\u95e8\",\"target\":\"g__\\u8428\\u7279\\u6c0f\\u83cc\\u5c5e\",\"value\":\"406534\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__Terrisporobacter\",\"value\":\"14059\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__Tyzzerella\",\"value\":\"24861\"},{\"source\":\"k__\\u7ec6\\u83cc\",\"target\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"value\":\"498819\"},{\"source\":\"k__\\u7ec6\\u83cc\",\"target\":\"p__\\u53d8\\u5f62\\u83cc\\u95e8\",\"value\":\"472092\"},{\"source\":\"k__\\u7ec6\\u83cc\",\"target\":\"p__\\u653e\\u7ebf\\u83cc\\u95e8\",\"value\":\"100\"},{\"source\":\"k__\\u7ec6\\u83cc\",\"target\":\"p__\\u62df\\u6746\\u83cc\\u95e8\",\"value\":\"28513\"},{\"source\":\"g__\\u62df\\u6746\\u83cc\\u5c5e\",\"target\":\"\\u8106\\u5f31\\u62df\\u6746\\u83cc\",\"value\":\"5011\"},{\"source\":\"g__\\u62df\\u6746\\u83cc\\u5c5e\",\"target\":\"\\u5355\\u5f62\\u62df\\u6746\\u83cc\",\"value\":\"5009\"},{\"source\":\"g__\\u7ecf\\u9ecf\\u6db2\\u771f\\u6746\\u83cc\\u5c5e\",\"target\":\"Blautia hansenii\",\"value\":\"15138\"},{\"source\":\"g__\\u7ecf\\u9ecf\\u6db2\\u771f\\u6746\\u83cc\\u5c5e\",\"target\":\"Blautia wexlerae\",\"value\":\"9083\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"\\u9690\\u85cf\\u68ad\\u83cc\",\"value\":\"24693\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"\\u65b0\\u751f\\u68ad\\u83cc\",\"value\":\"11336\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"Clostridium paraputrificum\",\"value\":\"51608\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"\\u8150\\u8d25\\u68ad\\u83cc\",\"value\":\"49993\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"Clostridium sp003024715\",\"value\":\"14633\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"Clostridium ventriculi\",\"value\":\"14298\"},{\"source\":\"g__Lachnoclostridium\",\"target\":\"Lachnoclostridium sp001517625\",\"value\":\"19442\"},{\"source\":\"g__Providencia\",\"target\":\"Providencia vermicola\",\"value\":\"5046\"},{\"source\":\"g__Romboutsia\",\"target\":\"Romboutsia sedimentorum\",\"value\":\"20050\"},{\"source\":\"g__\\u7624\\u80c3\\u7403\\u83cc\\u5c5e\",\"target\":\"\\u6d3b\\u6cfc\\u7624\\u80c3\\u7403\\u83cc\",\"value\":\"46086\"},{\"source\":\"g__\\u8428\\u7279\\u6c0f\\u83cc\\u5c5e\",\"target\":\"Sutterella massiliensis\",\"value\":\"344028\"},{\"source\":\"g__\\u8428\\u7279\\u6c0f\\u83cc\\u5c5e\",\"target\":\"Sutterella wadsworthensis\",\"value\":\"62272\"},{\"source\":\"g__Terrisporobacter\",\"target\":\"Terrisporobacter petrolearius\",\"value\":\"14059\"}],\"lineStyle\":{\"color\":\"source\",\"curveness\":0.5}}}"
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  loadNoteContent(); // 加载 note.html 内容
  loadIntestinalAssessment(sampleData); // 加载 intestinal_assessment.html 内容
  loadOverallHealthMetricsAnalysisHTML(sampleData); // 加载 overall_health_metrics_analysis.html 内容
  loadGutMicrobiomeAssessment(sampleData); // 加载 gut_microbiome_assessment.html 内容
  loadTaxonomicCompositionAnalysisHTML();
  loadDietaryStructureAndTraceElementsHTML(sampleData);
  loadOverallVitaminEvaluationHTML(sampleData);
  loadVitaminsTable(sampleData);
  loadOverallGutMicrobiomeMetabolomicsAssessmentHTML(sampleData);
  loadShortChainFattyAcidsHTML(sampleData);
  loadAminoAcidsHTML(sampleData);
  loadDetectedGutMicrobiomeGenusHTML(sampleData);
  loadDetectedGutMicrobiomeSpeciesHTML(sampleData);
  loadEpilepsyAssociatedGutMicrobiomeHTML(sampleData);
});
