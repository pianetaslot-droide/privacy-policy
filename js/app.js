/* ========================================
   乐居生活 - 核心 JavaScript
   ======================================== */

// ==================== 商品数据 ====================
const products = [
  { id: 1, name: '日式手工陶瓷杯', category: 'kitchen', icon: '🍵', price: 39.90, originalPrice: 59.90, stock: 120, featured: true, isNew: false, description: '采用传统手工拉坯工艺，温润如玉的釉面触感，容量约300ml，适合日常饮茶和咖啡。', detail: '这款日式手工陶瓷杯采用高温烧制，釉面光滑细腻，手感温润。每一只杯子都经过匠人精心打磨，独一无二。可微波炉加热，可洗碗机清洗。', badge: '热卖' },
  { id: 2, name: '北欧风不锈钢刀具套装', category: 'kitchen', icon: '🔪', price: 168.00, originalPrice: 238.00, stock: 45, featured: true, isNew: false, description: '德国工艺不锈钢锻造，包含主厨刀、切片刀、水果刀、剪刀及刀座，一套满足全部需求。', detail: '采用德国4116高碳不锈钢，硬度达到HRC56-58，锋利持久。人体工学手柄设计，握持舒适不易疲劳。配备实木刀座，安全收纳。', badge: '特惠' },
  { id: 3, name: '珐琅彩搪瓷炖锅', category: 'kitchen', icon: '🍲', price: 259.00, originalPrice: 359.00, stock: 30, featured: false, isNew: true, description: '精铸铁胎搪瓷锅，均匀导热锁住营养，适用于煲汤、炖菜、焖饭，明火电磁炉通用。', detail: '精选优质铸铁铸造，外层高温珐琅工艺，内层哑光黑色搪瓷。锅盖内侧雨点设计，水蒸气循环滴落，让食物更加鲜美多汁。', badge: '新品' },
  { id: 4, name: '竹木砧板三件套', category: 'kitchen', icon: '🪵', price: 78.00, originalPrice: null, stock: 200, featured: false, isNew: false, description: '天然整竹制作，三种尺寸满足不同需求，生熟分开更健康。', detail: '采用5年以上成熟楠竹，经过碳化处理，防霉防裂。大中小三种规格，分别适用于切肉、切菜和切水果。' },
  { id: 5, name: '全棉四件套（云朵白）', category: 'bedroom', icon: '🛏️', price: 299.00, originalPrice: 459.00, stock: 60, featured: true, isNew: false, description: '60支长绒棉面料，亲肤柔软，包含被套、床单和两个枕套，适合1.5/1.8米床。', detail: '甄选新疆长绒棉，60支高密度织造，面料细腻光滑如丝绸般触感。活性印染工艺，色牢度高不掉色。拉链隐藏设计，美观大方。', badge: '爆款' },
  { id: 6, name: '记忆棉护颈枕', category: 'bedroom', icon: '💤', price: 129.00, originalPrice: 199.00, stock: 80, featured: true, isNew: false, description: '慢回弹太空记忆棉，根据体温和压力自动贴合颈椎曲线，缓解颈部疲劳。', detail: '采用进口记忆棉材料，密度80D，回弹时间3-5秒。人体工学蝶形设计，高低两侧适应不同睡姿。外套可拆洗，透气竹纤维面料。', badge: '好评如潮' },
  { id: 7, name: '法兰绒加厚毛毯', category: 'bedroom', icon: '🧶', price: 89.00, originalPrice: 139.00, stock: 100, featured: false, isNew: true, description: '双面法兰绒材质，柔软蓬松保暖性强，冬季沙发毯午睡毯皆宜，多色可选。', detail: '380克加厚法兰绒，双面细腻触感。采用活性印染，不起球不掉色。适合空调房、午休、追剧时使用。' },
  { id: 8, name: '智能感应皂液器', category: 'bathroom', icon: '🧴', price: 69.00, originalPrice: 99.00, stock: 150, featured: false, isNew: true, description: '红外自动感应出泡，无需接触更卫生，USB充电一次续航3个月，泡沫绵密细腻。', detail: '采用高灵敏红外传感器，伸手即出泡。内置高品质泡沫泵芯，一按即出绵密泡沫。IPX4防水等级，放在洗手台无忧。', badge: '新品' },
  { id: 9, name: '日式天然硅藻泥地垫', category: 'bathroom', icon: '🧽', price: 58.00, originalPrice: 79.00, stock: 90, featured: true, isNew: false, description: '天然硅藻土材质，踩上去3秒速干吸水，防滑防霉，简约素色设计百搭浴室。', detail: '采用天然硅藻土制作，微孔结构超强吸水。表面经过防滑处理，湿脚踩上去也不打滑。不发霉不变味，打理方便。' },
  { id: 10, name: '旋转置物架（免钉）', category: 'bathroom', icon: '🗄️', price: 45.00, originalPrice: null, stock: 200, featured: false, isNew: false, description: '360度旋转设计，免打孔安装，四层收纳空间，浴室厨房桌面均可使用。', detail: '食品级PP材质，安全无毒。独特旋转设计，取用方便。免打孔底座，不伤墙面不留痕。防水防潮，易清洁。' },
  { id: 11, name: '北欧风干花花瓶套装', category: 'decor', icon: '🏺', price: 88.00, originalPrice: 128.00, stock: 55, featured: true, isNew: false, description: '磨砂玻璃花瓶配永生干花，自然文艺范，客厅卧室书房餐桌百搭装饰。', detail: '手工磨砂工艺玻璃瓶，搭配精选天然干花花束。无需打理浇水，常年美丽绽放。多种花色可选，为空间增添温馨氛围。', badge: '颜值担当' },
  { id: 12, name: '创意小夜灯（月球）', category: 'decor', icon: '🌙', price: 49.00, originalPrice: 79.00, stock: 120, featured: false, isNew: true, description: '3D打印月球表面纹理，触控调光三色可切换，USB充电，适合床头氛围灯。', detail: 'NASA月球数据3D打印，真实还原月球表面纹理。三种色温（暖白/暖黄/冷白）触控切换。USB充电8小时续航，磁吸底座可悬浮展示。' },
  { id: 13, name: '棉麻折叠收纳箱（3只装）', category: 'storage', icon: '📦', price: 55.00, originalPrice: 85.00, stock: 180, featured: true, isNew: false, description: '加厚棉麻面料，钢架支撑不塌陷，可折叠不占空间，适合衣柜杂物整理。', detail: '外层采用日式棉麻面料，质感优良。内置镀锌钢丝骨架，承重力强。不用时可完全折叠，厚度仅3cm。防尘盖设计，保持衣物干净。', badge: '实用之选' },
  { id: 14, name: '桌面文具收纳盒', category: 'storage', icon: '✏️', price: 35.00, originalPrice: null, stock: 200, featured: false, isNew: true, description: '多格分区设计，笔筒+手机架+小物件收纳一体，简约白色百搭桌面。', detail: '环保ABS材质，圆角设计安全无毛刺。多功能分区，笔筒、便签区、手机支架、杂物格一应俱全。底部防滑垫，稳固不移位。' },
  { id: 15, name: 'LED护眼台灯', category: 'lighting', icon: '💡', price: 158.00, originalPrice: 228.00, stock: 40, featured: false, isNew: true, description: '无频闪无蓝光危害，五档亮度三档色温，USB充电口，学习办公护眼之选。', detail: 'Ra>95高显色指数，真实还原色彩。无可视频闪技术，有效减少眼睛疲劳。触控面板操作，5档亮度×3档色温共15种光效。灯臂多角度调节，自由定位光源方向。', badge: '护眼推荐' },
  { id: 16, name: '复古实木小吊灯', category: 'lighting', icon: '🪔', price: 199.00, originalPrice: 299.00, stock: 25, featured: true, isNew: false, description: '日式原木灯罩+铁艺灯架，E27螺口通用灯泡，适合餐厅吧台走廊氛围照明。', detail: '精选橡木手工车削灯罩，纹理天然独特。铁艺灯架复古喷漆处理，哑光质感。E27标准螺口，兼容LED/钨丝/爱迪生灯泡。含1.5米可调节挂线。' },
];

// ==================== 商品超详细信息 ====================
const productRichData = {
  1: {
    subtitle: '传承百年匠心 · 每一杯都是手作温度',
    specs: [
      ['材质', '高温烧制陶瓷（1280°C 窑变釉）'],
      ['容量', '约300ml（±10ml，手工误差属正常）'],
      ['尺寸', '口径 8.5cm × 高 9.2cm × 底径 5cm'],
      ['重量', '约220g（轻盈好拿，不烫手）'],
      ['颜色', '哑光白 / 青灰 / 墨绿 / 琥珀'],
      ['工艺', '手工拉坯 + 浸釉 + 二次烧制'],
      ['产地', '景德镇手工作坊'],
      ['包装', '礼盒装（含防震内衬 + 棉布袋）'],
    ],
    story: [
      { icon: '🏺', title: '千年窑火，手心温度', text: '每一只杯子都由景德镇匠人手工拉坯成型，在1280°C高温窑炉中经历12小时淬炼。因为是纯手工制作，每只杯子的纹理和釉色都略有不同——这不是瑕疵，而是独一无二的证明。' },
      { icon: '💧', title: '温润触感，唇齿留香', text: '特殊的釉面配方让杯壁触感温润如玉，不会像普通陶瓷那样冰冷生硬。杯口经过特别打磨，弧度贴合唇形，喝水喝茶都格外舒服。300ml的容量刚刚好——不会太大显得笨重，也不会太小不够喝。' },
      { icon: '♻️', title: '安全放心，经久耐用', text: '通过SGS食品安全检测，无铅无镉。可以放心装热水、茶、咖啡、果汁。支持微波炉加热和洗碗机清洗，釉面耐磨不掉色，越用越有味道。' },
    ],
    care: [
      { icon: '🫧', title: '首次使用', desc: '清水冲洗即可，无需特殊处理' },
      { icon: '🌡️', title: '耐温范围', desc: '-20°C ~ 300°C，可微波可冷冻' },
      { icon: '🧽', title: '日常清洁', desc: '海绵软布擦洗，避免钢丝球' },
      { icon: '⚠️', title: '注意事项', desc: '避免骤冷骤热（如刚从冰箱拿出直接倒沸水）' },
    ],
    faq: [
      { q: '手工杯每个都不一样，会不会差很多？', a: '手工制品的魅力就在于"不完美的完美"。每只杯子在釉色深浅、纹理走向上会有细微差异（约5%以内），但尺寸和容量基本一致。如果你在意一致性，建议一次多买几只挑选。' },
      { q: '可以装碳酸饮料吗？', a: '完全可以！我们的釉面经过高温烧制，化学性质非常稳定，酸性、碱性液体都不会腐蚀。可乐、果汁、柠檬水都没问题。' },
      { q: '杯底有个小圆点/粗糙感是不是次品？', a: '不是哦！那是烧制时的支钉痕，是高温窑烧陶瓷的工艺特征，也是手工陶瓷的"身份证"，说明是真正窑烧而非注浆模具。' },
      { q: '买来送人合适吗？', a: '非常合适！我们特别设计了礼盒包装，内含防震内衬和棉布收纳袋。拆开就有仪式感，无论送朋友、长辈还是同事都很得体。' },
    ],
    reviews: [
      { name: '小云', stars: 5, date: '2025-12-15', text: '手感真的好！比图片还好看，釉色很温润，同事看到都问我在哪买的。', tags: ['手感好', '颜值高', '送人佳品'] },
      { name: '阿杰', stars: 5, date: '2025-11-28', text: '第二次购买了，上次买了白色这次入了青灰色。质量稳定，包装也很用心，没有碎。', tags: ['回购', '包装好'] },
      { name: '梦梦', stars: 4, date: '2025-11-10', text: '杯子本身很棒，就是容量对我来说稍微小了一点，我比较能喝水哈哈。做工确实精致。', tags: ['做工精致'] },
    ],
    variants: [
      { type: 'color', label: '颜色', options: ['哑光白', '青灰', '墨绿', '琥珀'] },
    ],
  },
  2: {
    subtitle: '德国工艺 · 一套用十年的好刀',
    specs: [
      ['材质', '德国4116高碳不锈钢 + 核桃木手柄'],
      ['硬度', 'HRC 56-58（锋利持久不卷刃）'],
      ['套装内容', '主厨刀20cm + 切片刀18cm + 水果刀10cm + 厨房剪 + 实木刀座'],
      ['主厨刀全长', '33cm（刃长20cm，柄长13cm）'],
      ['刀座尺寸', '22cm × 12cm × 23cm'],
      ['总重量', '约1.8kg（含刀座）'],
      ['开刃角度', '15° 双面开刃'],
      ['包装', '彩盒 + 每把刀独立刀鞘保护'],
    ],
    story: [
      { icon: '⚒️', title: '德国钢材，锋利如初', text: '采用蒂森克虏伯4116高碳不锈钢，经过56道工序锻造。HRC56-58的硬度意味着切肉切菜不费力，用半年还是很锋利。跟菜市场几十块的刀完全是两个世界。' },
      { icon: '🤲', title: '握着就知道——专业手感', text: '手柄采用人体工学设计，核桃木材质防滑不打手。重心设计在刀刃前1/3处，切菜时自然下沉，不需要使劲压，食材自己就断了。做饭一小时手也不累。' },
      { icon: '🪵', title: '实木刀座，安全收纳', text: '配备橡胶木刀座，每把刀都有专属卡槽。不用担心刀刃裸露割伤手，也不会像磁力刀架那样刀掉下来。放在台面上也很好看。' },
    ],
    care: [
      { icon: '🫧', title: '清洁方式', desc: '用后立即清洗擦干，避免食物残渣腐蚀' },
      { icon: '🚫', title: '禁止事项', desc: '不可放入洗碗机！高温和碰撞会损伤刀刃' },
      { icon: '🪨', title: '磨刀建议', desc: '建议每3-6个月用磨刀棒校正刃口' },
      { icon: '🧴', title: '保养窍门', desc: '偶尔涂抹食用油防锈，保持刀身光亮' },
    ],
    faq: [
      { q: '真的比超市几十块的刀好很多吗？', a: '差别非常大。好钢材意味着更锋利、更持久、更不容易生锈。用过好刀再用普通刀会明显感觉"钝"和"费力"。一套好刀用十年，平均每年不到20块，绝对值得。' },
      { q: '需要开刃吗？收到能直接用吗？', a: '出厂已经开好刃了，收到就能直接用。第一次切东西你会惊讶于它的锋利——请注意安全！' },
      { q: '可以切骨头吗？', a: '主厨刀和切片刀适合切肉、菜、水果等。剁骨头建议用专门的砍骨刀，硬碰硬容易崩刃。日常排骨可以，大骨头不建议。' },
    ],
    reviews: [
      { name: '老王', stars: 5, date: '2025-12-20', text: '切东西太爽了！番茄一刀下去不流汁，以前那把刀切番茄都是压扁的。老婆说做饭速度都快了。', tags: ['锋利', '手感好'] },
      { name: '小厨神', stars: 5, date: '2025-12-01', text: '刀座很漂亮放在厨房有档次。五把刀基本覆盖所有需求了，特别是那把主厨刀，切什么都行。', tags: ['颜值高', '实用'] },
    ],
    variants: [
      { type: 'style', label: '款式', options: ['经典核桃木柄', '黑色碳纤维柄'] },
    ],
  },
  5: {
    subtitle: '60支长绒棉 · 睡在云朵上的感觉',
    specs: [
      ['面料', '100%新疆长绒棉（60支精梳）'],
      ['织法', '贡缎织法（400根/英寸高密度）'],
      ['染色工艺', '活性印染（色牢度4级，不掉色不缩水）'],
      ['套件内容', '被套×1 + 床单×1 + 枕套×2'],
      ['适用床型', '1.5m床（被套200×230cm）/ 1.8m床（被套220×240cm）'],
      ['床单尺寸', '1.5m: 230×250cm / 1.8m: 250×270cm'],
      ['枕套尺寸', '48×74cm（标准枕通用）'],
      ['重量', '约2.2kg（1.8m款）'],
      ['支数说明', '60支 = 1克棉花拉出60根1米长纱线，数字越大越细腻'],
      ['包装', '精美礼盒 + 防尘收纳袋'],
    ],
    story: [
      { icon: '🌾', title: '新疆长绒棉，只用最好的', text: '我们只选用纤维长度35mm以上的新疆阿克苏长绒棉——全世界只有不到5%的棉花能达到这个标准。纤维越长，纱线越细，面料就越柔软光滑。这就是你摸到这套四件套时会说"哇"的原因。' },
      { icon: '✨', title: '贡缎织法，丝绸般光泽', text: '采用400根/英寸的高密度贡缎织法。面料表面有淡淡的丝缎光泽，看起来高级但不浮夸。冬暖夏凉，春秋盖着也舒服。不像纯丝绸那样滑得睡不住，又比普通纯棉高级很多。' },
      { icon: '🧪', title: '活性印染，安全不掉色', text: '与普通涂料印染不同，活性印染让颜料与纤维发生化学键合。洗50次颜色依然鲜艳。无甲醛、无荧光增白剂，亲肤安全，婴儿也能放心用。' },
    ],
    care: [
      { icon: '🌊', title: '洗涤温度', desc: '首次冷水单独洗，之后40°C以下机洗' },
      { icon: '🧴', title: '洗涤剂', desc: '用中性洗涤剂，勿用漂白剂和柔顺剂' },
      { icon: '☀️', title: '晾晒方式', desc: '反面晾晒避免阳光直射，防止褪色' },
      { icon: '🫧', title: '缩水率', desc: '首次洗涤约2-3%缩水，尺寸已预留余量' },
      { icon: '🔄', title: '换洗建议', desc: '建议2-3周换洗一次，保持清爽卫生' },
      { icon: '📦', title: '收纳方式', desc: '折叠放入附赠收纳袋，防尘防潮' },
    ],
    faq: [
      { q: '60支和40支手感差别大吗？', a: '非常大。40支像穿纯棉T恤，60支像穿丝绸衬衫。支数代表纱线细度，60支面料更轻薄柔软有光泽，而且透气性更好。用过60支很难再回去用40支。' },
      { q: '贡缎面料会起球吗？', a: '正常使用不会。贡缎是长纤维紧密编织的，比普通针织面料更不容易起球。但请避免与粗糙物品（如魔术贴、牛仔裤拉链）长时间摩擦。' },
      { q: '1.5m的床能用1.8m的被套吗？', a: '可以用，被子两边垂下来会更多，看起来更有铺床感。如果你的被子是200×230cm就选1.5m款，220×240cm就选1.8m款。关键看被芯尺寸而不是床的尺寸。' },
      { q: '颜色实物和图片一样吗？', a: '我们尽力做到色差最小。云朵白是温暖的米白色（不是荧光白），在自然光和灯光下略有色差是正常的。如果收到觉得颜色不满意，支持7天无理由退换。' },
    ],
    reviews: [
      { name: '雅琪', stars: 5, date: '2025-12-18', text: '终于知道五星酒店那种丝滑感了！面料真的是摸到就不想松手。洗了三次了完全不起球，颜色也没变。', tags: ['丝滑', '不起球', '酒店质感'] },
      { name: '大壮', stars: 5, date: '2025-12-05', text: '之前一直用40支的觉得够用了，被老婆种草买了60支。真的不一样…现在她又要买第二套换着用了。', tags: ['回购', '品质升级'] },
      { name: '小鱼', stars: 4, date: '2025-11-20', text: '面料很好，做工也精细。唯一建议是希望颜色多出几款，比如浅灰或者豆沙色。白色不太耐脏。', tags: ['面料好', '期待更多颜色'] },
    ],
    variants: [
      { type: 'color', label: '颜色', options: ['云朵白', '浅灰', '奶茶棕'] },
      { type: 'size', label: '尺寸', options: ['1.5m床适用', '1.8m床适用'] },
    ],
  },
  6: {
    subtitle: '太空科技记忆棉 · 颈椎的私人定制',
    specs: [
      ['填充物', '进口慢回弹记忆棉（密度80D）'],
      ['外套材质', '竹纤维针织面料（可拆洗）'],
      ['尺寸', '60cm × 35cm × 高11/9cm（高低两侧）'],
      ['重量', '约1.1kg'],
      ['回弹时间', '3-5秒慢回弹'],
      ['适用人群', '仰睡、侧睡均适用'],
      ['认证', '通过OEKO-TEX STANDARD 100检测'],
    ],
    story: [
      { icon: '🚀', title: '源于NASA的记忆棉科技', text: '记忆棉最初由NASA为航天员研发，用于减轻太空飞行中的压力。这种材料能感应你的体温和体重，自动塑形贴合你的颈椎曲线——相当于给脖子做了一个专属模具。' },
      { icon: '😴', title: '高低双侧，怎么睡都舒服', text: '人体工学蝶形设计不是噱头：高侧11cm适合侧睡（填满肩膀和脖子的空隙），低侧9cm适合仰睡（维持颈椎自然弧度）。不管你习惯哪种睡姿，都能找到舒适角度。' },
    ],
    care: [
      { icon: '🚫', title: '不可水洗', desc: '记忆棉枕芯不可水洗！会破坏分子结构' },
      { icon: '☀️', title: '除味方法', desc: '通风处晾晒1-2小时，勿暴晒' },
      { icon: '🧺', title: '外套清洁', desc: '拉链外套可拆下机洗，30°C以下' },
      { icon: '🔄', title: '使用寿命', desc: '正常使用3-5年，记忆棉老化后建议更换' },
    ],
    faq: [
      { q: '新枕头有味道正常吗？', a: '新品记忆棉可能有轻微气味，这是记忆棉材料本身的味道，无毒无害。拆开包装在通风处放置24-48小时即可散去。' },
      { q: '习惯睡高枕的人能适应吗？', a: '需要3-7天的适应期。如果之前睡很高的枕头，说明颈椎已经习惯了不正确的姿势。刚开始可能觉得低，但坚持一周后你会发现脖子舒服了很多，早上不再僵硬。' },
      { q: '夏天会不会热？', a: '竹纤维外套透气性很好，比纯棉凉爽30%。但记忆棉本身确实比其他材料稍微暖一些，怕热的话夏天可以加一个凉感枕巾。' },
    ],
    reviews: [
      { name: '程序猿小李', stars: 5, date: '2025-12-22', text: '每天对着电脑脖子疼，用了这个枕头一周后明显好转。3-5秒回弹真的很爽，按下去慢慢弹起来。', tags: ['颈椎舒服', '程序员推荐'] },
      { name: '宝妈丽丽', stars: 5, date: '2025-11-30', text: '产后颈椎一直不好，用了三种枕头都不行。这个终于让我睡了个好觉！高低两侧的设计真的科学。', tags: ['产后颈椎救星'] },
    ],
    variants: [
      { type: 'color', label: '外套颜色', options: ['月光白', '浅灰'] },
    ],
  },
  8: {
    subtitle: '零接触出泡 · 比手动卫生100倍',
    specs: [
      ['感应距离', '0-6cm 红外自动感应'],
      ['出泡量', '每次约0.8ml（可调节）'],
      ['容量', '320ml（约用2-3个月）'],
      ['充电方式', 'Type-C USB充电（充2小时用3个月）'],
      ['防水等级', 'IPX4 生活防水'],
      ['材质', 'ABS机身 + 硅胶底座防滑'],
      ['尺寸', '7.5cm × 7.5cm × 19.5cm'],
      ['重量', '约280g（空瓶）'],
    ],
    story: [
      { icon: '🦠', title: '不用按压，告别交叉感染', text: '传统皂液器要用脏手去按——这意味着你洗手前先把细菌按到了瓶子上。红外感应设计让你伸手即出泡，全程零接触，家里有小孩和老人的话特别必要。' },
      { icon: '🫧', title: '绵密泡沫，清洁更彻底', text: '内置微孔泡沫发生器，把液态皂液打成绵密泡沫。同样的洗手液，泡沫形态接触面积大3倍，清洁更到位，用量还更省。' },
    ],
    care: [
      { icon: '🔋', title: '充电提醒', desc: '红灯闪烁时需充电，2小时充满' },
      { icon: '🧴', title: '适用皂液', desc: '必须使用泡沫型洗手液，不可用凝胶型' },
      { icon: '💧', title: '加液方式', desc: '打开顶盖直接倒入，建议1:3兑水稀释' },
      { icon: '🧹', title: '清洁保养', desc: '湿布擦拭机身，勿整机浸水' },
    ],
    faq: [
      { q: '什么洗手液都能用吗？', a: '必须用泡沫型洗手液（就是买来就是泡沫的那种）。普通凝胶/液体洗手液需要加水1:3稀释后使用，否则会堵塞泡沫泵。推荐用氨基酸洗手液。' },
      { q: '小孩能自己用吗？', a: '完全可以！感应区域在出泡口下方0-6cm，3岁以上小孩伸手就能触发。而且再也不用担心他们按不动挤不出了。很多家长反馈孩子因为觉得好玩反而更爱洗手了。' },
    ],
    reviews: [
      { name: '洁癖妈妈', stars: 5, date: '2025-12-10', text: '必须好评！家里三个都换成这个了。厨房、卫生间、洗手台各一个。小朋友现在主动洗手了，因为觉得自动出泡很神奇。', tags: ['全屋必备', '小孩爱用'] },
    ],
    variants: [
      { type: 'color', label: '颜色', options: ['珍珠白', '太空灰'] },
    ],
  },
  15: {
    subtitle: 'Ra>95高显色 · 专业护眼不是说说而已',
    specs: [
      ['光源类型', 'LED全光谱灯珠（72颗）'],
      ['显色指数', 'Ra>95（接近自然光）'],
      ['色温范围', '3000K暖光 / 4000K自然光 / 5500K冷白光'],
      ['亮度档位', '5档无极调光（10%-100%）'],
      ['照度', '桌面中心照度>1200lux（国AA级标准）'],
      ['功率', '12W（省电，亮度≈60W白炽灯）'],
      ['充电接口', 'Type-C（可给手机充电）'],
      ['灯臂角度', '底座旋转90° + 灯臂折叠180° + 灯头旋转270°'],
      ['尺寸', '底座15cm × 灯臂38cm × 灯头28cm'],
      ['净重', '约980g（稳固不倒）'],
      ['认证', 'CCC认证 / CQC护眼认证 / 无蓝光危害RG0级'],
    ],
    story: [
      { icon: '👁️', title: 'Ra>95 你看到的颜色才是真的', text: '显色指数Ra决定了灯光下颜色的真实度。普通台灯Ra只有80左右，看颜色会偏差。我们的Ra>95意味着接近太阳光的效果——画画不偏色、看书不伤眼、化妆不翻车。' },
      { icon: '📚', title: '国AA级照度，告别"看不清"', text: '国标对护眼台灯分A级和AA级。我们达到最高的AA级标准：桌面中心照度>1200lux，均匀度>3。简单说就是够亮、够均匀、没有暗区——学习一小时眼睛也不累。' },
      { icon: '🎛️', title: '15种光效，每个场景都对', text: '5档亮度 × 3档色温 = 15种光效组合。白天写作业用冷白光提神，晚上看书用暖光放松，画画做手工用自然光还原色彩。一盏灯搞定所有场景。' },
    ],
    care: [
      { icon: '🧹', title: '清洁方式', desc: '干布或微湿布擦拭，勿用化学清洁剂' },
      { icon: '💡', title: '使用寿命', desc: 'LED寿命约50000小时（每天用8小时可用17年）' },
      { icon: '🔌', title: '供电方式', desc: 'Type-C供电，可接充电宝使用' },
      { icon: '⚠️', title: '注意事项', desc: '勿直视灯珠，避免长时间高亮度近距离使用' },
    ],
    faq: [
      { q: '和普通LED台灯有什么区别？', a: '三个核心区别：① Ra>95高显色（普通台灯80左右）看颜色更准；② 无可视频闪技术，用专业设备测不到闪烁；③ 低蓝光RG0级，从光源层面减少蓝光伤害。不是所有LED台灯都叫护眼灯。' },
      { q: '孩子几岁开始需要护眼灯？', a: '建议从开始写作业（通常5-6岁）就使用。孩子的眼睛比成人更敏感，普通灯光的频闪和蓝光对发育中的眼睛伤害更大。越早使用护眼灯越好。' },
      { q: '能替代房间大灯吗？', a: '台灯是任务照明，照亮的是桌面区域。建议搭配房间大灯一起使用，避免只开台灯导致环境亮度差异过大，那样反而更容易眼疲劳。' },
    ],
    reviews: [
      { name: '学霸妈', stars: 5, date: '2025-12-25', text: '儿子每天写作业2小时，之前总揉眼睛。换了这个灯后明显好了，亮度均匀不刺眼。值！', tags: ['护眼效果好', '学习必备'] },
      { name: '设计师阿明', stars: 5, date: '2025-12-08', text: '作为设计师对颜色要求很高，Ra95的显色确实很棒，晚上对着屏幕校色也不会偏。15种光效切换很实用。', tags: ['显色准', '设计师推荐'] },
    ],
    variants: [
      { type: 'color', label: '颜色', options: ['极简白', '深空灰'] },
    ],
  },
};

// 获取商品丰富数据（没有详细数据的商品返回通用模板）
function getProductRichInfo(productId) {
  if (productRichData[productId]) return productRichData[productId];
  // 通用模板
  const p = products.find(x => x.id === productId);
  if (!p) return null;
  return {
    subtitle: '',
    specs: [
      ['品牌', '乐居生活'],
      ['分类', getCategoryName(p.category)],
      ['材质', '详见商品描述'],
      ['包装', '标准包装'],
    ],
    story: [],
    care: [
      { icon: '📖', title: '使用前', desc: '请仔细阅读产品说明' },
      { icon: '🧹', title: '日常保养', desc: '保持清洁干燥' },
    ],
    faq: [
      { q: '支持7天无理由退换吗？', a: '支持！收到商品7天内如不满意，可在售后页面发起退换申请。商品保持完好即可，我们承担退货运费。' },
    ],
    reviews: [],
    variants: [],
  };
}

// ==================== 工具函数 ====================
// 安全设置文本内容
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// 获取商品的翻译名称
function getProductName(p) {
  return (typeof tProduct === 'function' && tProduct(p.id, 'name')) || p.name;
}

function getProductDesc(p) {
  return (typeof tProduct === 'function' && tProduct(p.id, 'desc')) || p.description;
}

function getProductDetail(p) {
  return (typeof tProduct === 'function' && tProduct(p.id, 'detail')) || p.detail;
}

function getProductBadge(p) {
  return (typeof tBadge === 'function' && tBadge(p.badge)) || p.badge || '';
}

// ==================== 分类名称映射 ====================
function getCategoryName(cat) {
  if (typeof t === 'function') {
    const key = 'cat_' + cat;
    const translated = t(key);
    if (translated !== key) return translated;
  }
  const map = { kitchen: '厨房用品', bedroom: '卧室家纺', bathroom: '卫浴用品', decor: '装饰摆件', storage: '收纳整理', lighting: '灯具照明' };
  return map[cat] || cat;
}

// ==================== 购物车操作 ====================
function getCart() {
  return JSON.parse(localStorage.getItem('leju_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('leju_cart', JSON.stringify(cart));
}

function addToCart(id, qty) {
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  const product = products.find(p => p.id === id);
  if (!product) return;

  if (existing) {
    existing.qty = Math.min(existing.qty + qty, product.stock);
  } else {
    cart.push({ id, qty: Math.min(qty, product.stock) });
  }
  saveCart(cart);
  updateCartCount();
  showToast(typeof t === 'function' ? t('added_to_cart') : '已加入购物车');
}

function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'inline' : 'none';
  });
}

// ==================== 用户操作 ====================
function getUser() {
  const data = localStorage.getItem('leju_user');
  return data ? JSON.parse(data) : null;
}

function updateUserLink() {
  const user = getUser();
  const link = document.getElementById('userLink');
  if (!link) return;
  if (user) {
    link.innerHTML = `&#x1F464; ${user.name}`;
  } else {
    link.innerHTML = `&#x1F464; ${typeof t === 'function' ? t('nav_login') : '登录'}`;
  }
  link.href = 'login.html';
}

// ==================== 商品渲染（多语言版） ====================
function renderProducts(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-light);grid-column:1/-1">--</div>';
    return;
  }

  const hasI18n = typeof formatPrice === 'function';

  container.innerHTML = list.map(p => {
    const name = getProductName(p);
    const desc = getProductDesc(p);
    const badge = getProductBadge(p);
    const price = hasI18n ? formatPrice(p.price) : '¥' + p.price.toFixed(2);
    const origPrice = p.originalPrice ? (hasI18n ? formatPrice(p.originalPrice) : '¥' + p.originalPrice.toFixed(2)) : '';
    const addLabel = typeof t === 'function' ? t('add_to_cart') : '加入购物车';
    const detailLabel = typeof t === 'function' ? t('view_detail') : '查看详情';

    return `
    <div class="product-card">
      <a href="product-detail.html?id=${p.id}">
        <div class="product-image">
          ${badge ? `<span class="product-badge">${badge}</span>` : ''}
          ${p.icon}
        </div>
      </a>
      <div class="product-info">
        <h3><a href="product-detail.html?id=${p.id}">${name}</a></h3>
        <p class="desc">${desc}</p>
        <div class="product-price">
          <span class="price-current">${price}</span>
          ${origPrice ? `<span class="price-original">${origPrice}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">${addLabel}</button>
          <a href="product-detail.html?id=${p.id}" class="btn btn-sm" style="border:1px solid var(--border);color:var(--text)">${detailLabel}</a>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ==================== Toast 提示 ====================
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ==================== 搜索 ====================
function handleSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const keyword = input.value.trim();
  if (keyword) {
    location.href = 'products.html?search=' + encodeURIComponent(keyword);
  }
}

// ==================== 通用页面 i18n 应用 ====================
function applyPageI18n() {
  if (typeof t !== 'function') return;

  // 搜索栏
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t('search_placeholder');
  setText('searchBtn', t('search_btn'));
  setText('cartLabel', t('nav_cart'));

  // 主导航
  const nav = document.getElementById('mainNav');
  if (nav) {
    const currentPage = location.pathname.split('/').pop() || 'store.html';
    const navItems = [
      { href: 'store.html', key: 'nav_home' },
      { href: 'products.html', key: 'nav_all_products' },
      { href: 'products.html?cat=kitchen', key: 'nav_kitchen' },
      { href: 'products.html?cat=bedroom', key: 'nav_bedroom' },
      { href: 'products.html?cat=bathroom', key: 'nav_bathroom' },
      { href: 'products.html?cat=decor', key: 'nav_decor' },
      { href: 'products.html?cat=storage', key: 'nav_storage' },
    ];
    nav.innerHTML = navItems.map(item => {
      const isActive = (currentPage === item.href) || (currentPage === 'store.html' && item.href === 'store.html');
      return `<li><a href="${item.href}" class="${isActive ? 'active' : ''}">${t(item.key)}</a></li>`;
    }).join('');
  }

  // 页脚
  setText('footerAbout', t('footer_about'));
  setText('footerGuideTitle', t('footer_guide'));
  setText('footerGuide1', t('footer_guide_flow'));
  setText('footerGuide2', t('footer_guide_pay'));
  setText('footerGuide3', t('footer_guide_ship'));
  setText('footerServiceTitle', t('footer_service'));
  setText('footerService1', t('footer_service_return'));
  setText('footerService2', t('footer_service_guarantee'));
  setText('footerService3', t('footer_service_faq'));
  setText('footerContactTitle', t('footer_contact'));
  setText('footerContact1', t('footer_hotline'));
  setText('footerContact2', t('footer_hours'));
  setText('footerContact3', t('footer_address'));
  setText('footerCopyright', t('footer_copyright'));

  // 语言切换器
  if (typeof renderLangSwitcher === 'function') {
    renderLangSwitcher('langSwitcher');
  }

  // HTML lang 属性
  const langMap = { zh: 'zh-CN', en: 'en', it: 'it', ja: 'ja' };
  document.documentElement.lang = langMap[getCurrentLang()] || 'zh-CN';
}

// ==================== DOM Ready ====================
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSearch();
    });
  }

  // 回到顶部按钮
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '&#x2191;';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.style.cssText = 'position:fixed;bottom:32px;right:32px;width:44px;height:44px;border-radius:50%;background:var(--primary);color:#fff;border:none;font-size:1.2rem;cursor:pointer;opacity:0;transition:opacity .3s;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.2)';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
    backToTop.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
