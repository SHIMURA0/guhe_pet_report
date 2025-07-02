
// js/taxonomic_composition_analysis.js
// date: 2025-06-30
// author: Honglie Zhang

// 1. 数据配置 - 分离数据和逻辑
const CONFIG = {
  description: {
    overallDescription: `肠道菌群按照标准分类学层级构成，从大到小依次为界、门、纲、目、科、属、种。门级分类识别主要微生物进化分支(如拟杆菌门、厚壁菌门)，纲目科层级进一步细分菌群结构，而属种级则精确到具体微生物类型。这种层级分类体系使研究者能够系统评估肠道微生态组成，从不同分类水平解析菌群丰度变化及其生态平衡状态，为肠道健康评估和干预提供精准的微生物学依据。`,
    overallExplanation: `上图展示了狗狗肠道菌群从"细菌界"到"属"级的分类层级，其中流带宽度表示相对丰度，颜色区分不同分类群。阅读时应从左向右追踪，观察各分类单元的分支关系。与人类相比，狗狗肠道菌群表现出杂⻝动物的特征：也主要是由厚壁菌门和拟杆菌门细菌构成，此外还有梭杆菌门和变形菌门等。
    狗狗肠道长度适中且菌群多样性接近人类水平，既能有效代谢蛋白质和脂肪，也具备处理复杂碳水化合物的能力。相比专性肉食动物，狗狗肠道菌群更加灵活多样，能够适应从肉类到谷物、蔬菜等不同食物来源。这种特性使狗狗能够消化淀粉类食物，并从多种营养素中获取能量。
    理解狗狗肠道菌群的这些特点有助于制定平衡的饮食策略：既要保证足够的动物蛋白，也要适当补充优质碳水化合物和膳食纤维，维持肠道菌群平衡。`
  },

  // 从原始数据中提取的纯数据部分
  get sankeyData() {
    const originalOptions = JSON.parse(
      "{\"title\":{\"text\":\"\\u83cc\\u7fa4\\u5c42\\u7ea7\\u6784\\u6210\\uff08\\u4ec5\\u663e\\u793a\\u4e30\\u5ea6\\u5343\\u5206\\u4e4b\\u4e94\\u4ee5\\u4e0a\\u83cc\\uff09\"},\"tooltip\":{\"trigger\":\"item\",\"triggerOn\":\"mousemove\"},\"animation\":false,\"series\":{\"type\":\"sankey\",\"layout\":\"none\",\"left\":-5,\"nodeAlign\":\"right\",\"nodeWidth\":15,\"nodeGap\":12,\"focusNodeAdjacency\":\"allEdges\",\"data\":[{\"name\":\"k__\\u7ec6\\u83cc\"},{\"name\":\"g__\\u62df\\u6746\\u83cc\\u5c5e\"},{\"name\":\"g__\\u7ecf\\u9ecf\\u6db2\\u771f\\u6746\\u83cc\\u5c5e\"},{\"name\":\"g__\\u68ad\\u83cc\\u5c5e\"},{\"name\":\"g__Epulopiscium\"},{\"name\":\"g__\\u57c3\\u5e0c\\u6c0f\\u83cc\\u5c5e\"},{\"name\":\"g__\\u4f18\\u6746\\u83cc\\u5c5e\"},{\"name\":\"g__Lachnoclostridium\"},{\"name\":\"g__Providencia\"},{\"name\":\"g__Romboutsia\"},{\"name\":\"g__\\u7624\\u80c3\\u7403\\u83cc\\u5c5e\"},{\"name\":\"g__\\u8428\\u7279\\u6c0f\\u83cc\\u5c5e\"},{\"name\":\"g__Terrisporobacter\"},{\"name\":\"g__Tyzzerella\"},{\"name\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\"},{\"name\":\"p__\\u53d8\\u5f62\\u83cc\\u95e8\"},{\"name\":\"p__\\u653e\\u7ebf\\u83cc\\u95e8\"},{\"name\":\"p__\\u62df\\u6746\\u83cc\\u95e8\"},{\"name\":\"\\u8106\\u5f31\\u62df\\u6746\\u83cc\"},{\"name\":\"\\u5355\\u5f62\\u62df\\u6746\\u83cc\"},{\"name\":\"Blautia hansenii\"},{\"name\":\"Blautia wexlerae\"},{\"name\":\"\\u9690\\u85cf\\u68ad\\u83cc\"},{\"name\":\"\\u65b0\\u751f\\u68ad\\u83cc\"},{\"name\":\"Clostridium paraputrificum\"},{\"name\":\"\\u8150\\u8d25\\u68ad\\u83cc\"},{\"name\":\"Clostridium sp003024715\"},{\"name\":\"Clostridium ventriculi\"},{\"name\":\"Lachnoclostridium sp001517625\"},{\"name\":\"Providencia vermicola\"},{\"name\":\"Romboutsia sedimentorum\"},{\"name\":\"\\u6d3b\\u6cfc\\u7624\\u80c3\\u7403\\u83cc\"},{\"name\":\"Sutterella massiliensis\"},{\"name\":\"Sutterella wadsworthensis\"},{\"name\":\"Terrisporobacter petrolearius\"}],\"links\":[{\"source\":\"p__\\u62df\\u6746\\u83cc\\u95e8\",\"target\":\"g__\\u62df\\u6746\\u83cc\\u5c5e\",\"value\":\"28046\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__\\u7ecf\\u9ecf\\u6db2\\u771f\\u6746\\u83cc\\u5c5e\",\"value\":\"25967\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__\\u68ad\\u83cc\\u5c5e\",\"value\":\"175328\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__Epulopiscium\",\"value\":\"160036\"},{\"source\":\"p__\\u53d8\\u5f62\\u83cc\\u95e8\",\"target\":\"g__\\u57c3\\u5e0c\\u6c0f\\u83cc\\u5c5e\",\"value\":\"56515\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__\\u4f18\\u6746\\u83cc\\u5c5e\",\"value\":\"6862\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__Lachnoclostridium\",\"value\":\"19442\"},{\"source\":\"p__\\u53d8\\u5f62\\u83cc\\u95e8\",\"target\":\"g__Providencia\",\"value\":\"5046\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__Romboutsia\",\"value\":\"20251\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__\\u7624\\u80c3\\u7403\\u83cc\\u5c5e\",\"value\":\"46320\"},{\"source\":\"p__\\u53d8\\u5f62\\u83cc\\u95e8\",\"target\":\"g__\\u8428\\u7279\\u6c0f\\u83cc\\u5c5e\",\"value\":\"406534\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__Terrisporobacter\",\"value\":\"14059\"},{\"source\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"target\":\"g__Tyzzerella\",\"value\":\"24861\"},{\"source\":\"k__\\u7ec6\\u83cc\",\"target\":\"p__\\u539a\\u58c1\\u83cc\\u95e8\",\"value\":\"498819\"},{\"source\":\"k__\\u7ec6\\u83cc\",\"target\":\"p__\\u53d8\\u5f62\\u83cc\\u95e8\",\"value\":\"472092\"},{\"source\":\"k__\\u7ec6\\u83cc\",\"target\":\"p__\\u653e\\u7ebf\\u83cc\\u95e8\",\"value\":\"100\"},{\"source\":\"k__\\u7ec6\\u83cc\",\"target\":\"p__\\u62df\\u6746\\u83cc\\u95e8\",\"value\":\"28513\"},{\"source\":\"g__\\u62df\\u6746\\u83cc\\u5c5e\",\"target\":\"\\u8106\\u5f31\\u62df\\u6746\\u83cc\",\"value\":\"5011\"},{\"source\":\"g__\\u62df\\u6746\\u83cc\\u5c5e\",\"target\":\"\\u5355\\u5f62\\u62df\\u6746\\u83cc\",\"value\":\"5009\"},{\"source\":\"g__\\u7ecf\\u9ecf\\u6db2\\u771f\\u6746\\u83cc\\u5c5e\",\"target\":\"Blautia hansenii\",\"value\":\"15138\"},{\"source\":\"g__\\u7ecf\\u9ecf\\u6db2\\u771f\\u6746\\u83cc\\u5c5e\",\"target\":\"Blautia wexlerae\",\"value\":\"9083\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"\\u9690\\u85cf\\u68ad\\u83cc\",\"value\":\"24693\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"\\u65b0\\u751f\\u68ad\\u83cc\",\"value\":\"11336\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"Clostridium paraputrificum\",\"value\":\"51608\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"\\u8150\\u8d25\\u68ad\\u83cc\",\"value\":\"49993\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"Clostridium sp003024715\",\"value\":\"14633\"},{\"source\":\"g__\\u68ad\\u83cc\\u5c5e\",\"target\":\"Clostridium ventriculi\",\"value\":\"14298\"},{\"source\":\"g__Lachnoclostridium\",\"target\":\"Lachnoclostridium sp001517625\",\"value\":\"19442\"},{\"source\":\"g__Providencia\",\"target\":\"Providencia vermicola\",\"value\":\"5046\"},{\"source\":\"g__Romboutsia\",\"target\":\"Romboutsia sedimentorum\",\"value\":\"20050\"},{\"source\":\"g__\\u7624\\u80c3\\u7403\\u83cc\\u5c5e\",\"target\":\"\\u6d3b\\u6cfc\\u7624\\u80c3\\u7403\\u83cc\",\"value\":\"46086\"},{\"source\":\"g__\\u8428\\u7279\\u6c0f\\u83cc\\u5c5e\",\"target\":\"Sutterella massiliensis\",\"value\":\"344028\"},{\"source\":\"g__\\u8428\\u7279\\u6c0f\\u83cc\\u5c5e\",\"target\":\"Sutterella wadsworthensis\",\"value\":\"62272\"},{\"source\":\"g__Terrisporobacter\",\"target\":\"Terrisporobacter petrolearius\",\"value\":\"14059\"}],\"lineStyle\":{\"color\":\"source\",\"curveness\":0.5}}}"
    )

    return {
      nodes: originalOptions.series.data,
      links: originalOptions.series.links
    };
  },

  // 自定义的图表配置（不包含数据）
  chartOptions: {
    title: {
      text: "狗狗菌群层级构成（仅显示丰度5‰以上菌）",
      left: 'center',
      top: 10,
      textStyle: {
        fontSize: 13,
        // fontWeight: 'bold',
        color: '#888'
      }
    },
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
      backgroundColor: 'rgba(50,50,50,0.8)',
      borderColor: '#777',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontSize: 12
      },
      formatter: function(params) {
        if (params.dataType === 'edge') {
          return `${params.data.source} → ${params.data.target}<br/>丰度: ${params.data.value}`;
        } else {
          return `${params.data.name}`;
        }
      }
    },
    animation: false,
    series: {
      type: "sankey",
      layout: "none",
      left: 50,
      right: 250,
      top: 80,
      bottom: 20,
      nodeAlign: "right",
      nodeWidth: 20,
      nodeGap: 12,
      focusNodeAdjacency: "allEdges",
      draggable: false,
      lineStyle: {
        color: "source",
        curveness: 0.5,
        opacity: 0.6
      },
      label: {
        fontSize: 10,
        color: '#333',
        fontFamily: 'Arial, sans-serif'
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          opacity: 0.8
        }
      }
    }
  },

  chartId: 'sankey-chart'
};

// 工具函数：生成完整的图表配置
function getCompleteChartOptions() {
  const options = JSON.parse(JSON.stringify(CONFIG.chartOptions)); // 深拷贝
  const sankeyData = CONFIG.sankeyData;

  // 将数据注入到配置中
  options.series.data = sankeyData.nodes;
  options.series.links = sankeyData.links;

  return options;
}

// 2. HTML模板生成器 - 纯函数，无副作用
function generateTaxonomicCompositionHTML() {
  return `
    <h2 class="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pt-4 pb-2 page-break">
      菌群层级构成分析
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
            <p class="text-gray-600 mt-1 leading-relaxed" style="font-size: 12px">
              ${CONFIG.description.overallDescription}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      id="${CONFIG.chartId}"
      class="bg-transparent p-4 flex justify-content"
      style="width: 100%; height: 650px;">
    </div>

    <div class="bg-teal-50 p-4 rounded-lg mb-4">
      <div>
        <div>
          <p class="text-gray-600 mt-1 leading-relaxed" style="font-size: 12px">
            <i class="fas fa-dog fa-1x" style="color: #ff9e00;"></i>
            ${CONFIG.description.overallExplanation}
          </p>
        </div>
      </div>
    </div>
  `;
}

// 3. 图表初始化器 - 专门负责图表逻辑
class TaxonomicChart {
  constructor(chartId) {
    this.chartId = chartId;
    this.chart = null;
  }

  init() {
    const chartDom = document.getElementById(this.chartId);
    if (!chartDom) {
      console.error(`Chart container with id "${this.chartId}" not found`);
      return;
    }

    // 设置容器样式
    this.setupContainer(chartDom);

    // 初始化图表
    this.chart = echarts.init(chartDom, null, { renderer: 'svg' });

    // 使用完整配置（包含数据）
    const options = getCompleteChartOptions();
    this.chart.setOption(options);

    // 添加窗口大小调整监听器
    this.setupResizeListener();
  }

  setupContainer(chartDom) {
    chartDom.style.width = '100%';
    chartDom.style.maxWidth = '100%';
    chartDom.style.boxSizing = 'border-box';
    chartDom.style.display = 'flex';
    chartDom.style.justifyContent = 'center';
    chartDom.style.alignItems = 'center';
  }

  setupResizeListener() {
    window.addEventListener('resize', () => {
      if (this.chart) {
        this.chart.resize();
      }
    });
  }

  // 支持动态更新数据
  updateData(newNodes, newLinks) {
    if (this.chart) {
      const options = getCompleteChartOptions();
      options.series.data = newNodes;
      options.series.links = newLinks;
      this.chart.setOption(options);
    }
  }

  destroy() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  }
}

// 4. 主控制器 - 协调所有组件
class TaxonomicCompositionAnalysis {
  constructor(containerId) {
    this.containerId = containerId;
    this.chart = null;
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`Container with id "${this.containerId}" not found`);
      return;
    }

    // 生成并插入HTML
    container.innerHTML = generateTaxonomicCompositionHTML();

    // 初始化图表
    this.initChart();
  }

  initChart() {
    // 等待DOM元素就绪
    setTimeout(() => {
      this.chart = new TaxonomicChart(CONFIG.chartId);
      this.chart.init();
    }, 100);
  }

  destroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}

// 5. 公共API - 简化的接口函数
function loadTaxonomicCompositionAnalysisHTML(containerId = 'taxonomic-composition-analysis') {
  const analysis = new TaxonomicCompositionAnalysis(containerId);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => analysis.render());
  } else {
    analysis.render();
  }

  return analysis; // 返回实例以便后续操作
}

// 6. 工具函数 - 可选的辅助功能
const utils = {
  // 获取桑基图数据
  getSankeyData() {
    return CONFIG.sankeyData;
  },

  // 获取节点数据
  getNodes() {
    return CONFIG.sankeyData.nodes;
  },

  // 获取连接数据
  getLinks() {
    return CONFIG.sankeyData.links;
  },

  // 获取完整图表配置
  getChartOptions() {
    return getCompleteChartOptions();
  },

  // 更新图表配置
  updateChartOptions(newOptions) {
    Object.assign(CONFIG.chartOptions, newOptions);
  },

  // 获取当前配置
  getConfig() {
    return CONFIG;
  },

  // 验证数据格式
  validateData(data) {
    if (!data || typeof data !== 'object') return false;
    if (!Array.isArray(data.nodes) || !Array.isArray(data.links)) return false;

    // 验证节点格式
    for (const node of data.nodes) {
      if (!node.name) return false;
    }

    // 验证连接格式
    for (const link of data.links) {
      if (!link.source || !link.target || !link.value) return false;
    }

    return true;
  }
};

// 导出
export {
  loadTaxonomicCompositionAnalysisHTML,
  TaxonomicCompositionAnalysis,
  utils,
  getCompleteChartOptions
};
