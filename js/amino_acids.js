// js/amino_acids.js
// date: 2025-07-01
// author: Honglie Zhang

const CONFIG = {
  essentialAminoAcids: {
    overallDescription: '必需氨基酸的均衡搭配是狗狗营养代谢的重要基础，也是评估蛋⽩质营养状况的关键指标。健康的肠道菌群能够优化氨基酸的消化吸收和代谢转化，⽽氨基酸平衡同样影响肠道微⽣态稳定。通过监测氨基酸利⽤率和肠道菌群结构，可以早期发现营养不⾜和消化障碍，指导优质蛋⽩源选择和益⽣菌补充，为狗狗制定个性化肠道营养⽅案',
    '组氨酸': {
      translation: 'Histidine',
      description: '组氨酸是血红蛋白的重要组成部分，参与血液pH值缓冲和组织修复，对狗狗的血液健康和免疫系统至关重要',
      deficiencySymptoms: '贫血、毛发褪色、伤口愈合缓慢、免疫力下降、食欲不振、生长发育迟缓',
      deficiencyTreatment: '增加富含组氨酸的食物（如鸡肉、牛肉、鱼类）、补充优质蛋白质、定期血常规检查、咨询兽医营养建议',
      excessSymptoms: '过度兴奋、焦虑不安、消化不良、偶尔出现皮肤过敏反应',
      excessTreatment: '适量减少高蛋白食物、增加碳水化合物比例、保持饮食均衡、观察行为变化'
    },

    '异亮氨酸': {
      translation: 'Isoleucine',
      description: '异亮氨酸是支链氨基酸之一，主要参与狗狗的肌肉蛋白质合成和能量代谢，对维持肌肉力量和耐力、调节血糖水平具有重要作用',
      deficiencySymptoms: '肌肉无力、运动耐力下降、体重减轻、毛发稀疏、伤口愈合慢、容易疲劳',
      deficiencyTreatment: '增加瘦肉类食物（如鸡胸肉、瘦牛肉）、适量添加鸡蛋、保证充足蛋白质摄入、配合适度运动',
      excessSymptoms: '血氨升高、神经系统异常、食欲下降、偶尔出现呕吐',
      excessTreatment: '减少高蛋白食物摄入、增加碳水化合物、监测肝肾功能、必要时就医检查'
    },

    '亮氨酸': {
      translation: 'Leucine',
      description: '亮氨酸是最重要的支链氨基酸，被称为肌肉构建的"启动开关"，对狗狗的肌肉发育、维持和修复至关重要，同时参与调节血糖和伤口愈合',
      deficiencySymptoms: '肌肉量减少、力量下降、毛发质量差、免疫力低下、伤口愈合困难、精神萎靡',
      deficiencyTreatment: '增加优质肉类（牛肉、羊肉、鸡肉）、添加鱼类蛋白、保证日常运动量、补充完整氨基酸谱',
      excessSymptoms: '血糖波动、神经过敏、消化不适、偶尔出现腹泻',
      excessTreatment: '调整蛋白质摄入量、平衡三大营养素比例、监测血糖变化、保持规律饮食'
    },

    '赖氨酸': {
      translation: 'Lysine',
      description: '赖氨酸是狗狗生长发育的关键氨基酸，参与蛋白质合成、钙质吸收和免疫球蛋白产生，对骨骼健康、免疫功能和毛发生长具有重要意义',
      deficiencySymptoms: '生长缓慢、骨骼发育不良、毛发粗糙无光泽、免疫力差、容易感染、食欲减退',
      deficiencyTreatment: '增加鱼类、肉类和蛋类食物、补充钙质、定期免疫检查、保证营养均衡',
      excessSymptoms: '钙磷代谢异常、肾脏负担加重、偶尔出现尿路问题',
      excessTreatment: '适量减少蛋白质含量、增加饮水量、监测肾功能指标、平衡矿物质摄入'
    },

    '蛋氨酸': {
      translation: 'Methionine',
      description: '蛋氨酸是含硫氨基酸，对狗狗的毛发和皮肤健康至关重要，同时参与肝脏解毒过程和脂肪代谢，是维持毛发光泽和肝脏功能的关键营养素',
      deficiencySymptoms: '毛发干燥脱落、皮肤问题、肝功能异常、脂肪肝、免疫力下降、伤口愈合慢',
      deficiencyTreatment: '增加富含蛋氨酸的食物（鱼类、鸡蛋、肉类）、补充B族维生素、定期肝功能检查、保证充足饮水',
      excessSymptoms: '毛发过度生长、皮脂分泌增加、肝脏负担重、偶尔出现消化不良',
      excessTreatment: '适量控制蛋白质摄入、增加纤维类食物、监测肝功能、保持饮食清淡'
    },

    '苯丙氨酸': {
      translation: 'Phenylalanine',
      description: '苯丙氨酸是合成酪氨酸和神经递质的前体物质，对狗狗的神经系统功能、情绪调节和毛发色素形成具有重要作用，影响学习能力和行为表现',
      deficiencySymptoms: '毛发颜色变浅、学习能力下降、情绪低落、反应迟钝、皮肤色素减少',
      deficiencyTreatment: '增加肉类、鱼类和蛋类食物、保证营养均衡、适当进行训练刺激、定期行为评估',
      excessSymptoms: '过度兴奋、焦虑不安、睡眠质量差、注意力难以集中',
      excessTreatment: '减少高蛋白食物、增加碳水化合物、保持环境安静、适量运动消耗能量'
    },

    '苏氨酸': {
      translation: 'Threonine',
      description: '苏氨酸是胶原蛋白和弹性蛋白的重要组成成分，对狗狗的皮肤、关节健康和免疫球蛋白合成至关重要，有助于维持皮毛光泽和关节灵活性',
      deficiencySymptoms: '皮肤干燥粗糙、关节僵硬、毛发质量差、免疫力低下、消化功能减弱',
      deficiencyTreatment: '增加胶原蛋白丰富的食物（骨头汤、鱼皮）、补充优质蛋白质、适量运动、定期皮肤检查',
      excessSymptoms: '消化不良、腹泻、免疫系统过度活跃、偶尔皮肤过敏',
      excessTreatment: '调整蛋白质摄入量、增加易消化食物、监测免疫指标、保持饮食温和'
    },

    '色氨酸': {
      translation: 'Tryptophan',
      description: '色氨酸是合成血清素的唯一前体，对狗狗的情绪调节、睡眠质量和压力应对能力至关重要，被称为天然的"情绪稳定剂"和"睡眠调节器"',
      deficiencySymptoms: '焦虑易怒、睡眠质量差、攻击性增加、压力敏感、食欲异常、抑郁倾向',
      deficiencyTreatment: '增加火鸡肉、鸡肉、鱼类等富含色氨酸的食物、保持规律作息、减少环境压力、必要时行为矫正',
      excessSymptoms: '过度嗜睡、反应迟钝、食欲不振、活动量明显减少',
      excessTreatment: '适量减少色氨酸摄入、增加日间活动、保持正常光照、调整饮食时间'
    },

    '缬氨酸': {
      translation: 'Valine',
      description: '缬氨酸是第三种支链氨基酸，主要参与狗狗的肌肉能量代谢和神经系统功能，对维持肌肉协调性、平衡感和神经传导具有重要作用',
      deficiencySymptoms: '肌肉协调性差、平衡感下降、神经敏感性增加、毛发生长缓慢、食欲波动',
      deficiencyTreatment: '增加瘦肉类、奶制品、豆类食物、保证蛋白质均衡、适当进行平衡训练、定期神经系统检查',
      excessSymptoms: '神经过敏、肌肉紧张、偶尔出现震颤、睡眠不安',
      excessTreatment: '减少支链氨基酸摄入、增加镁元素补充、保持环境安静、适量按摩放松肌肉'
    }
  },

  otherAminoAcids: {
    overallDescription: '氨基酸代谢与肠道菌群的互作是狗狗肠道微⽣态健康的重要组成部分，是评估狗狗消化系统功能的关键指标。通过检测狗狗肠道菌群对氨基酸的合成能⼒和代谢模式，可以早期识别微⽣态失衡状态，预防营养吸收障碍，指导益⽣菌和益⽣元补充，为狗狗量身定制个性化肠道健康⽅案',
    '半胱氨酸': {
      translation: 'Cysteine',
      description: '半胱氨酸是含硫氨基酸，是合成谷胱甘肽的重要原料，对狗狗的抗氧化防御、毛发结构形成和肝脏解毒功能至关重要，有助于维持毛发的强韧性和光泽',
      deficiencySymptoms: '毛发脆弱易断、皮肤干燥、抗氧化能力下降、肝脏解毒功能减弱、伤口愈合缓慢、免疫力下降',
      deficiencyTreatment: '增加富含半胱氨酸的食物（鸡肉、鸭肉、鸡蛋）、补充维生素C促进合成、适量添加硫元素、定期肝功能检查',
      excessSymptoms: '毛发过度角化、皮肤油腻、消化不良、偶尔出现硫磺味体臭',
      excessTreatment: '适量减少含硫蛋白质、增加饮水量、保持皮肤清洁、调整饮食结构'
    },

    '酪氨酸': {
      translation: 'Tyrosine',
      description: '酪氨酸是合成多巴胺、去甲肾上腺素等神经递质的前体，同时是黑色素合成的关键物质，对狗狗的神经功能、情绪调节和毛发色素沉着具有重要影响',
      deficiencySymptoms: '毛发颜色变浅、鼻镜褪色、情绪低落、反应迟钝、学习能力下降、甲状腺功能异常',
      deficiencyTreatment: '增加富含酪氨酸的食物（奶酪、鸡肉、鱼类、香蕉）、保证充足日照、补充维生素B6、定期甲状腺检查',
      excessSymptoms: '过度兴奋、焦虑不安、血压升高、偶尔出现心率异常',
      excessTreatment: '减少高酪氨酸食物、增加镁元素摄入、保持环境安静、适量有氧运动'
    },

    '甘氨酸': {
      translation: 'Glycine',
      description: '甘氨酸是胶原蛋白的主要组成成分，占胶原蛋白的三分之一，对狗狗的关节健康、皮肤弹性、伤口愈合和睡眠质量具有重要作用，被称为"天然的镇静剂"',
      deficiencySymptoms: '关节僵硬、皮肤松弛、伤口愈合慢、睡眠质量差、肌肉紧张、消化功能减弱',
      deficiencyTreatment: '增加胶原蛋白丰富的食物（骨头汤、猪蹄、鱼皮）、适量运动促进合成、保证充足睡眠、补充维生素C',
      excessSymptoms: '过度嗜睡、肌肉松弛、反应迟钝、食欲减退',
      excessTreatment: '适量减少胶原蛋白摄入、增加日间活动、调整饮食时间、保持正常作息'
    },

    '脯氨酸': {
      translation: 'Proline',
      description: '脯氨酸是胶原蛋白合成的关键氨基酸，约占胶原蛋白的10-15%，对狗狗的关节软骨、皮肤弹性、血管壁强度和伤口愈合具有重要作用，被称为"关节保护者"',
      deficiencySymptoms: '关节疼痛僵硬、皮肤松弛老化、伤口愈合缓慢、毛发缺乏光泽、血管脆性增加、运动后恢复慢',
      deficiencyTreatment: '增加富含脯氨酸的食物（骨头汤、猪皮、鸡爪、鱼胶）、补充维生素C促进胶原合成、适量关节运动、定期关节检查',
      excessSymptoms: '关节过度灵活、韧带松弛、偶尔出现消化不良、轻微腹泻',
      excessTreatment: '适量减少胶原蛋白类食物、平衡蛋白质摄入、加强核心肌群训练、监测关节稳定性'
    },

    '丙氨酸': {
      translation: 'Alanine',
      description: '丙氨酸是重要的糖异生氨基酸，在狗狗的能量代谢中发挥关键作用，能够在运动或饥饿时将肌肉蛋白转化为葡萄糖，维持血糖稳定和能量供应',
      deficiencySymptoms: '运动耐力下降、血糖波动、肌肉疲劳、恢复能力差、精神不振、食欲不稳定',
      deficiencyTreatment: '增加优质蛋白质摄入、保证碳水化合物供应、适量运动训练、定期血糖监测、补充B族维生素',
      excessSymptoms: '血糖升高、代谢负担加重、肝脏压力增加、偶尔出现多饮多尿',
      excessTreatment: '控制蛋白质摄入量、增加纤维类食物、监测血糖水平、保持适量运动'
    },

    '谷氨酸': {
      translation: 'Glutamic Acid',
      description: '谷氨酸是最重要的兴奋性神经递质，对狗狗的大脑功能、学习记忆、神经发育和肠道健康具有重要作用，同时参与蛋白质代谢和免疫调节',
      deficiencySymptoms: '学习能力下降、记忆力减退、神经发育迟缓、肠道功能紊乱、免疫力低下、反应迟钝',
      deficiencyTreatment: '增加富含谷氨酸的食物（肉类、鱼类、奶制品）、补充谷氨酰胺、进行智力训练、保证充足睡眠',
      excessSymptoms: '过度兴奋、焦虑不安、癫痫风险增加、睡眠障碍、注意力过度集中',
      excessTreatment: '减少谷氨酸摄入、增加GABA类食物、保持环境安静、避免过度刺激、必要时就医'
    }
  }

};

const selectedAminoAcidsData = {
  '必需氨基酸': [
    '组氨酸',
    '异亮氨酸',
    '亮氨酸',
    '赖氨酸',
    '蛋氨酸',
    '苯丙氨酸',
    '苏氨酸',
    '色氨酸',
    '缬氨酸'
  ],
  '其他氨基酸': [
    '半胱氨酸',
    '酪氨酸',
    '甘氨酸',
    '脯氨酸',
    '丙氨酸',
    '谷氨酸'
  ]
};

function getValueStatus(itemValue, normalRange){
  const value = parseFloat(itemValue);
  const [min, max] = normalRange.split('-').map(Number);
  return value < min ? '缺乏' : value > max ? '过量' : '正常';
}

function generateEssentialAminoAcidsTable(AminoAcidsData) {
  let essentialAminoAcidsHTML = '';
  selectedAminoAcidsData['必需氨基酸'].forEach(
    (element) => {
      const foundItem = AminoAcidsData.find(item => item.name === element);
      const foundItemValue = foundItem?.value || 0;
      const foundItemNormalRange = foundItem?.['正常范围'] || '-';
      const foundItemStatus = getValueStatus(foundItemValue, foundItemNormalRange);
      essentialAminoAcidsHTML += `
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
              ${CONFIG.essentialAminoAcids[element].translation}
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
                  <6
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
                  6-98
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
                style="
                  ${foundItemStatus === '正常'
                    ? 'color: #10B981'
                    : foundItemStatus === '过量'
                      ? 'color: #8B5CF6'
                      : 'color: #EF4444'};">
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
                    : foundItemStatus === '过量'
                      ? 'background-color: #8B5CF6;'
                      : 'background-color: #EF4444;'};">
              </div>
            </div>
          </td>

          <td
            style="
              ${foundItemStatus === '正常'
                ? 'color: #10B981'
                : foundItemStatus === '过量'
                  ? 'color: #8B5CF6'
                  : 'color: #EF4444'};
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
              ${CONFIG.essentialAminoAcids[element].description}<br>
              ${foundItemStatus === '正常'
                ? ''
                : foundItemStatus === '缺乏'
                  ? `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.essentialAminoAcids[element].deficiencySymptoms}<br>`
                  : `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.essentialAminoAcids[element].excessSymptoms}<br>`}
                      ${foundItemStatus === '正常'
                ? ''
                : foundItemStatus === '缺乏'
                  ? `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.essentialAminoAcids[element].deficiencyTreatment}<br>`
                  : `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.essentialAminoAcids[element].excessTreatment}`}
            </div>
          </td>
        </tr>
      `;
    }
  );
  return essentialAminoAcidsHTML;
}

function generateOtherAminoAcidsTable(AminoAcidsData) {
  let otherAminoAcidsHTML = '';
  selectedAminoAcidsData['其他氨基酸'].forEach(
    (element) => {
      const foundItem = AminoAcidsData.find(item => item.name === element);
      const foundItemValue = foundItem?.value || 0;
      const foundItemNormalRange = foundItem?.['正常范围'] || '-';
      const foundItemStatus = getValueStatus(foundItemValue, foundItemNormalRange);
      otherAminoAcidsHTML += `
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
              ${CONFIG.otherAminoAcids[element].translation}
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
                  <6
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
                  6-98
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
                style="
                  ${foundItemStatus === '正常'
                    ? 'color: #10B981;'
                    : 'color: #EF4444;'};">
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
              ${foundItemStatus === '正常'
                ? 'color: #10B981;'
                : 'color: #EF4444;'};
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
              ${CONFIG.otherAminoAcids[element].description}<br>
              ${foundItemStatus === '正常'
                ? ''
                : foundItemStatus === '缺乏'
                  ? `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.otherAminoAcids[element].deficiencySymptoms}<br>`
                  : `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.otherAminoAcids[element].excessSymptoms}<br>`}
                              ${foundItemStatus === '正常'
                ? ''
                : foundItemStatus === '缺乏'
                  ? `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.otherAminoAcids[element].deficiencyTreatment}<br>`
                  : `<i class="fas fa-bone" style="color: #D2B48C; margin-right: 2px;"></i>${CONFIG.otherAminoAcids[element].excessTreatment}`}
            </div>
          </td>
        </tr>
      `;
    }
  );
  return otherAminoAcidsHTML;
}

function generateAminoAcidsHTML(AminoAcidsData) {
  let aminoAcidsHTML = '';
  aminoAcidsHTML += `
    <h2 class="text-xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pt-4 pb-2 page-break">
      氨基酸评估 (必需氨基酸)
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
              ${CONFIG.essentialAminoAcids.overallDescription}
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
        ${generateEssentialAminoAcidsTable(AminoAcidsData)}
      </tbody>
    </table>

    <h2 class="text-xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pt-8 pb-2 page-break">
      氨基酸评估 (其它重要氨基酸)
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
              ${CONFIG.otherAminoAcids.overallDescription}
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
        ${generateOtherAminoAcidsTable(AminoAcidsData)}
      </tbody>
    </table>
  `;
  return aminoAcidsHTML;
}

function loadAminoAcidsHTML(sampleData) {
  // 生成肠道评估的 HTML
  // 将生成的 HTML 插入到 ID 为 "intestinalAssessment" 的 div 中
  document.getElementById(
    'amino-acids-table'
  ).innerHTML = generateAminoAcidsHTML(sampleData['营养']);
}

export {loadAminoAcidsHTML};
