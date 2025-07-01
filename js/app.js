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
import { loadVitaminsTable } from './vitamins_tables.js';
import {loadOverallGutMicrobiomeMetabolomicsAssessmentHTML} from './overall_gut_microbiome_metabolomics_assessment.js';
import {loadShortChainFattyAcidsHTML} from "./short_chain_fatty_acids.js";
import {loadAminoAcidsHTML} from "./amino_acids.js";
import {loadDetectedGutMicrobiomeGenusHTML} from "./detected_gut_microbiome_genus.js";
import {loadDetectedGutMicrobiomeSpeciesHTML} from "./detected_gut_microbiome_species.js";

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
  "菌群代谢物": [
    {
      "name": "对甲酚（p-Cresol）",
      "value": "27",
      "正常范围": "0-85",
      "说明": "尿毒症毒素、慢性肾病、神经行为疾病、结直肠癌、自闭症、慢性便秘 /"
    },
    {
      "name": "吲哚",
      "value": "14",
      "正常范围": "15-95",
      "说明": "食物上瘾、焦虑、慢性肾病/致病菌定植、炎症反应"
    },
    {
      "name": "苯酚",
      "value": "10",
      "正常范围": "5-85",
      "说明": "结直肠癌、糖尿病肾病、尿毒症、艰难梭菌定植 /"
    },
    {
      "name": "腐胺",
      "value": "63",
      "正常范围": "5-85",
      "说明": "结直肠癌、IBD、结肠炎、增加肠道通透、变形菌门正相关 / 炎症"
    },
    {
      "name": "硫化氢",
      "value": "21",
      "正常范围": "5-85",
      "说明": "IBD、腹胀气、抑制乳酸菌、心血管疾病、2型糖尿病、肝硬化 /"
    },
    {
      "name": "尸胺",
      "value": "35",
      "正常范围": "5-85",
      "说明": "肠炎、结直肠疾病、乳腺癌 / 阿尔茨海默病、帕金森病"
    }
  ],
  "菌群构成-属": [
    {
      "name": "UBA7057",
      "value": "0.0033%",
      "群体水平": "94"
    },
    {
      "name": "CAG-611",
      "value": "0.0033%",
      "群体水平": "95"
    },
    {
      "name": "分枝杆菌属 Mycobacterium",
      "value": "0.0033%",
      "群体水平": "95"
    },
    {
      "name": "类梭菌属 Paeniclostridium",
      "value": "0.01%",
      "群体水平": "97"
    },
    {
      "name": "CAG-115",
      "value": "0.0033%",
      "群体水平": "86"
    },
    {
      "name": "厌氧生孢菌属 Anaerosporobacter",
      "value": "0.0371%",
      "群体水平": "96"
    },
    {
      "name": "Epulopiscium",
      "value": "0.9003%",
      "群体水平": "99"
    },
    {
      "name": "Phocea",
      "value": "0.0168%",
      "群体水平": "92"
    },
    {
      "name": "UBA11940",
      "value": "0.0067%",
      "群体水平": "88"
    },
    {
      "name": "土生孢杆菌属 Terrisporobacter",
      "value": "1.1027%",
      "群体水平": "99"
    },
    {
      "name": "丁酸球菌属 Butyricicoccus",
      "value": "20.9621%",
      "群体水平": "99"
    },
    {
      "name": "龙包茨氏菌属 Romboutsia",
      "value": "0.0573%",
      "群体水平": "97"
    },
    {
      "name": "幼婴粪杆菌属 Coprobacter",
      "value": "0.0033%",
      "群体水平": "71"
    },
    {
      "name": "韩生命工学研究院菌属 Absiella",
      "value": "0.0101%",
      "群体水平": "80"
    },
    {
      "name": "丁酸弧菌属 Butyrivibrio",
      "value": "0.2189%",
      "群体水平": "98"
    },
    {
      "name": "CAG-194",
      "value": "0.0066%",
      "群体水平": "88"
    },
    {
      "name": "拟梭菌属 Clostridioides",
      "value": "0.0033%",
      "群体水平": "91"
    },
    {
      "name": "克雷伯氏菌属 Klebsiella",
      "value": "0.0539%",
      "群体水平": "36"
    },
    {
      "name": "假解黄酮菌属 Pseudoflavonifractor",
      "value": "0.0876%",
      "群体水平": "97"
    },
    {
      "name": "Prevotellamassilia",
      "value": "0.0033%",
      "群体水平": "42"
    },
    {
      "name": "CAG-127",
      "value": "0.0033%",
      "群体水平": "55"
    },
    {
      "name": "副普雷沃氏菌属 Paraprevotella",
      "value": "0.0033%",
      "群体水平": "49"
    },
    {
      "name": "UBA9502",
      "value": "0.0201%",
      "群体水平": "71"
    },
    {
      "name": "志贺氏菌属 Shigella",
      "value": "0.01%",
      "群体水平": "69"
    },
    {
      "name": "艾森贝格氏菌属 Eisenbergiella",
      "value": "0.0472%",
      "群体水平": "54"
    },
    {
      "name": "厌氧棒菌属 Anaerotignum",
      "value": "4.8126%",
      "群体水平": "99"
    },
    {
      "name": "UBA7160",
      "value": "0.0067%",
      "群体水平": "27"
    },
    {
      "name": "劳森氏杆菌属 Lawsonibacter",
      "value": "0.246%",
      "群体水平": "88"
    },
    {
      "name": "萨特氏菌属 Sutterella",
      "value": "7.9731%",
      "群体水平": "99"
    },
    {
      "name": "Tyzzerella",
      "value": "2.8058%",
      "群体水平": "99"
    },
    {
      "name": "孪生球菌属 Gemella",
      "value": "0.0033%",
      "群体水平": "53"
    },
    {
      "name": "厌氧棒状菌属 Anaerostipes",
      "value": "0.0101%",
      "群体水平": "37"
    },
    {
      "name": "粪球菌属 Coprococcus",
      "value": "0.0033%",
      "群体水平": "17"
    },
    {
      "name": "巨单胞菌属 Megamonas",
      "value": "0.0067%",
      "群体水平": "40"
    },
    {
      "name": "CAG-81",
      "value": "0.3976%",
      "群体水平": "72"
    },
    {
      "name": "沙门氏菌属 Salmonella",
      "value": "0.0134%",
      "群体水平": "51"
    },
    {
      "name": "毛螺菌属 Lachnospira",
      "value": "0.0033%",
      "群体水平": "18"
    },
    {
      "name": "Dorea菌属 Dorea",
      "value": "0.0301%",
      "群体水平": "23"
    },
    {
      "name": "柯林斯氏菌属 Collinsella",
      "value": "0.0168%",
      "群体水平": "30"
    },
    {
      "name": "别样杆菌属 Alistipes",
      "value": "0.0033%",
      "群体水平": "12"
    },
    {
      "name": "解黄酮菌属 Flavonifractor",
      "value": "0.6373%",
      "群体水平": "93"
    },
    {
      "name": "直肠真杆菌属 Agathobacter",
      "value": "0.0232%",
      "群体水平": "21"
    },
    {
      "name": "戴阿利斯特杆菌属 Dialister",
      "value": "0.0033%",
      "群体水平": "11"
    },
    {
      "name": "罗氏菌属 Roseburia",
      "value": "1.5712%",
      "群体水平": "65"
    },
    {
      "name": "双歧杆菌属 Bifidobacterium",
      "value": "0.0167%",
      "群体水平": "18"
    },
    {
      "name": "经黏液真杆菌属 Blautia",
      "value": "4.8527%",
      "群体水平": "97"
    },
    {
      "name": "泛菌属 Pantoea",
      "value": "0.0033%",
      "群体水平": "99"
    },
    {
      "name": "粪杆菌属 Faecalibacterium",
      "value": "0.0066%",
      "群体水平": "4"
    },
    {
      "name": "优杆菌属 Eubacterium",
      "value": "0.9577%",
      "群体水平": "81"
    },
    {
      "name": "Lachnoclostridium",
      "value": "15.8682%",
      "群体水平": "99"
    },
    {
      "name": "拟杆菌属 Bacteroides",
      "value": "11.8101%",
      "群体水平": "32"
    },
    {
      "name": "梭菌属 Clostridium",
      "value": "14.5424%",
      "群体水平": "98"
    },
    {
      "name": "埃希氏菌属 Escherichia",
      "value": "4.5192%",
      "群体水平": "70"
    },
    {
      "name": "普雷沃氏菌属 Prevotella",
      "value": "0.0266%",
      "群体水平": "3"
    },
    {
      "name": "瘤胃球菌属 Ruminococcus",
      "value": "3.3251%",
      "群体水平": "84"
    },
    {
      "name": "链球菌属  Streptococcus",
      "value": "0.0101%",
      "群体水平": "7"
    }
  ],
  "菌群构成-种": [
    {
      "name": "假小链双歧杆菌 Bifidobacterium pseudocatenulatum",
      "value": "0.0033%",
      "群体水平": "99"
    },
    {
      "name": "CAG-115 sp003507295",
      "value": "0.0033%",
      "群体水平": "97"
    },
    {
      "name": "Lachnoclostridium algidixylanolyticum",
      "value": "0.0033%",
      "群体水平": "98"
    },
    {
      "name": "运动厌氧生孢菌 Anaerosporobacter mobilis",
      "value": "0.0371%",
      "群体水平": "99"
    },
    {
      "name": "纤细真杆菌 Eubacterium tenue",
      "value": "0.5059%",
      "群体水平": "99"
    },
    {
      "name": "Lachnoclostridium colinum",
      "value": "0.0269%",
      "群体水平": "99"
    },
    {
      "name": "无乳链球菌 Streptococcus agalactiae",
      "value": "0.0101%",
      "群体水平": "98"
    },
    {
      "name": "索氏类梭菌 Paeniclostridium sordellii",
      "value": "0.0033%",
      "群体水平": "96"
    },
    {
      "name": "粪柯林斯氏菌 Collinsella stercoris",
      "value": "0.0168%",
      "群体水平": "93"
    },
    {
      "name": "解葡糖酰胺布劳特氏菌 Blautia glucerasea",
      "value": "0.0809%",
      "群体水平": "99"
    },
    {
      "name": "Blautia sp000432195",
      "value": "0.7554%",
      "群体水平": "99"
    },
    {
      "name": "Tyzzerella sp000411335",
      "value": "0.0101%",
      "群体水平": "98"
    },
    {
      "name": "沉积物龙包茨氏菌 Romboutsia sedimentorum",
      "value": "0.0573%",
      "群体水平": "98"
    },
    {
      "name": "鸡盲肠丁酸球菌 Butyricicoccus pullicaecorum",
      "value": "20.6554%",
      "群体水平": "99"
    },
    {
      "name": "穗状丁酸弧菌 Butyrivibrio crossotus",
      "value": "0.2089%",
      "群体水平": "99"
    },
    {
      "name": "艰难梭菌 Clostridium difficile",
      "value": "0.0269%",
      "群体水平": "99"
    },
    {
      "name": "CAG-194 sp000432915",
      "value": "0.0033%",
      "群体水平": "93"
    },
    {
      "name": "苛求幼婴粪杆菌 Coprobacter fastidiosus",
      "value": "0.0033%",
      "群体水平": "80"
    },
    {
      "name": "Phocea massiliensis",
      "value": "0.0168%",
      "群体水平": "92"
    },
    {
      "name": "粪厌氧棒状菌 Anaerostipes caccae",
      "value": "0.0101%",
      "群体水平": "95"
    },
    {
      "name": "Absiella dolichum",
      "value": "0.0101%",
      "群体水平": "88"
    },
    {
      "name": "石油土生孢杆菌 Terrisporobacter petrolearius",
      "value": "1.1027%",
      "群体水平": "99"
    },
    {
      "name": "Clostridium sp001916075",
      "value": "0.0033%",
      "群体水平": "77"
    },
    {
      "name": "Blautia sp000433815",
      "value": "0.0438%",
      "群体水平": "94"
    },
    {
      "name": "Clostridium lactatifermentans",
      "value": "0.0033%",
      "群体水平": "81"
    },
    {
      "name": "动物双歧杆菌 Bifidobacterium animalis",
      "value": "0.0134%",
      "群体水平": "96"
    },
    {
      "name": "规则粪球菌 Coprococcus catus",
      "value": "0.0033%",
      "群体水平": "52"
    },
    {
      "name": "Sutterella massiliensis",
      "value": "7.9496%",
      "群体水平": "99"
    },
    {
      "name": "解甘草皂苷梭菌 Clostridium glycyrrhizinilyticum",
      "value": "0.0773%",
      "群体水平": "96"
    },
    {
      "name": "艰难拟梭菌 Clostridioides difficile",
      "value": "0.0033%",
      "群体水平": "91"
    },
    {
      "name": "双孢梭菌 Clostridium disporicum",
      "value": "0.6844%",
      "群体水平": "99"
    },
    {
      "name": "解糖梭菌 Clostridium saccharolyticum",
      "value": "0.0742%",
      "群体水平": "92"
    },
    {
      "name": "Lachnoclostridium sp000155435",
      "value": "11.6228%",
      "群体水平": "99"
    },
    {
      "name": "Anaerotignum sp001304995",
      "value": "4.7219%",
      "群体水平": "99"
    },
    {
      "name": "CAG-81 sp000435795",
      "value": "0.3943%",
      "群体水平": "97"
    },
    {
      "name": "Lawsonibacter sp900066825",
      "value": "0.2427%",
      "群体水平": "96"
    },
    {
      "name": "鲍氏志贺菌 Shigella boydii",
      "value": "0.0033%",
      "群体水平": "71"
    },
    {
      "name": "假毛茸属毛囊菌 Pseudoflavonifractor capillosus",
      "value": "0.0876%",
      "群体水平": "98"
    },
    {
      "name": "光泽副普雷沃氏菌 Paraprevotella clara",
      "value": "0.0033%",
      "群体水平": "58"
    },
    {
      "name": "汉氏布劳特氏菌 Blautia hansenii",
      "value": "1.1566%",
      "群体水平": "99"
    },
    {
      "name": "肠道罗斯拜瑞氏菌 Roseburia intestinalis",
      "value": "0.0571%",
      "群体水平": "91"
    },
    {
      "name": "Eisenbergiella sp900066775",
      "value": "0.0472%",
      "群体水平": "68"
    },
    {
      "name": "痢疾志贺菌 Shigella dysenteriae",
      "value": "0.0067%",
      "群体水平": "77"
    },
    {
      "name": "类腐败梭菌 Clostridium paraputrificum",
      "value": "9.1001%",
      "群体水平": "99"
    },
    {
      "name": "Agathobacter sp000434275",
      "value": "0.0033%",
      "群体水平": "55"
    },
    {
      "name": "副溶血孪生球菌 Gemella parahaemolysans",
      "value": "0.0033%",
      "群体水平": "73"
    },
    {
      "name": "卵形布劳特氏菌 Blautia obeum",
      "value": "0.0236%",
      "群体水平": "55"
    },
    {
      "name": "昂氏别样杆菌 Alistipes onderdonkii",
      "value": "0.0033%",
      "群体水平": "37"
    },
    {
      "name": "长下颌真杆菌 Eubacterium dolichum",
      "value": "0.4518%",
      "群体水平": "99"
    },
    {
      "name": "隐藏梭菌 Clostridium celatum",
      "value": "1.0152%",
      "群体水平": "96"
    },
    {
      "name": "Lachnospira sp000437735",
      "value": "0.0033%",
      "群体水平": "43"
    },
    {
      "name": "Lachnoclostridium aldenense",
      "value": "0.0033%",
      "群体水平": "47"
    },
    {
      "name": "扭链瘤胃球菌 Ruminococcus torques",
      "value": "0.0066%",
      "群体水平": "34"
    },
    {
      "name": "Bacteroides sp002161565",
      "value": "0.0033%",
      "群体水平": "26"
    },
    {
      "name": "Lachnoclostridium sp001517625",
      "value": "4.2086%",
      "群体水平": "99"
    },
    {
      "name": "Tyzzerella nexilis",
      "value": "2.263%",
      "群体水平": "98"
    },
    {
      "name": "卵形拟杆菌 Bacteroides ovatus",
      "value": "0.4519%",
      "群体水平": "89"
    },
    {
      "name": "多枝梭菌 Clostridium ramosum",
      "value": "0.0573%",
      "群体水平": "82"
    },
    {
      "name": "Clostridium sp003024715",
      "value": "3.4064%",
      "群体水平": "98"
    },
    {
      "name": "人罗斯拜瑞氏菌 Roseburia hominis",
      "value": "1.5075%",
      "群体水平": "92"
    },
    {
      "name": "食葡糖罗斯拜瑞氏菌 Roseburia inulinivorans",
      "value": "0.0033%",
      "群体水平": "20"
    },
    {
      "name": "细绳形巨单胞菌 Megamonas funiformis",
      "value": "0.0067%",
      "群体水平": "42"
    },
    {
      "name": "肠炎鼠伤寒沙门氏菌 Salmonella enterica",
      "value": "0.0134%",
      "群体水平": "52"
    },
    {
      "name": "韦氏布劳特氏菌 Blautia wexlerae",
      "value": "2.7285%",
      "群体水平": "98"
    },
    {
      "name": "珀氏解黄酮菌 Flavonifractor plautii",
      "value": "0.6373%",
      "群体水平": "93"
    },
    {
      "name": "杜雷拟杆菌 Bacteroides dorei",
      "value": "0.0066%",
      "群体水平": "14"
    },
    {
      "name": "直肠有益杆状菌 Agathobacter rectalis",
      "value": "0.0099%",
      "群体水平": "22"
    },
    {
      "name": "Prevotella sp000434975",
      "value": "0.0134%",
      "群体水平": "39"
    },
    {
      "name": "脆弱拟杆菌 Bacteroides fragilis",
      "value": "0.2326%",
      "群体水平": "59"
    },
    {
      "name": "单形拟杆菌 Bacteroides uniformis",
      "value": "0.0201%",
      "群体水平": "10"
    },
    {
      "name": "罗达斯氏泛菌 Pantoea rodasii",
      "value": "0.0033%",
      "群体水平": "99"
    },
    {
      "name": "粪便拟杆菌 Bacteroides stercoris",
      "value": "0.988%",
      "群体水平": "44"
    },
    {
      "name": "活泼瘤胃球菌 Ruminococcus gnavus",
      "value": "2.8969%",
      "群体水平": "96"
    },
    {
      "name": "普通拟杆菌 Bacteroides vulgatus",
      "value": "4.4012%",
      "群体水平": "62"
    },
    {
      "name": "普氏栖粪杆菌 Faecalibacterium prausnitzii",
      "value": "0.0066%",
      "群体水平": "7"
    },
    {
      "name": "普氏菌 Prevotella copri",
      "value": "0.0033%",
      "群体水平": "10"
    },
    {
      "name": "大肠杆菌 Escherichia coli",
      "value": "0.0772%",
      "群体水平": "18"
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
  loadVitaminsTable(sampleData);
  loadOverallGutMicrobiomeMetabolomicsAssessmentHTML(sampleData);
  loadShortChainFattyAcidsHTML(sampleData);
  loadAminoAcidsHTML(sampleData);
  loadDetectedGutMicrobiomeGenusHTML(sampleData);
  loadDetectedGutMicrobiomeSpeciesHTML(sampleData);
});
