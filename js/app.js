/* ========================================
   乐居生活 - 核心 JavaScript
   ======================================== */

// ==================== 商品数据 ====================
const products = [
  // 厨房用品
  {
    id: 1, name: '日式手工陶瓷杯', category: 'kitchen', icon: '🍵',
    price: 39.90, originalPrice: 59.90, stock: 120, featured: true, isNew: false,
    description: '采用传统手工拉坯工艺，温润如玉的釉面触感，容量约300ml，适合日常饮茶和咖啡。',
    detail: '这款日式手工陶瓷杯采用高温烧制，釉面光滑细腻，手感温润。每一只杯子都经过匠人精心打磨，独一无二。可微波炉加热，可洗碗机清洗。',
    badge: '热卖'
  },
  {
    id: 2, name: '北欧风不锈钢刀具套装', category: 'kitchen', icon: '🔪',
    price: 168.00, originalPrice: 238.00, stock: 45, featured: true, isNew: false,
    description: '德国工艺不锈钢锻造，包含主厨刀、切片刀、水果刀、剪刀及刀座，一套满足全部需求。',
    detail: '采用德国4116高碳不锈钢，硬度达到HRC56-58，锋利持久。人体工学手柄设计，握持舒适不易疲劳。配备实木刀座，安全收纳。',
    badge: '特惠'
  },
  {
    id: 3, name: '珐琅彩搪瓷炖锅', category: 'kitchen', icon: '🍲',
    price: 259.00, originalPrice: 359.00, stock: 30, featured: false, isNew: true,
    description: '精铸铁胎搪瓷锅，均匀导热锁住营养，适用于煲汤、炖菜、焖饭，明火电磁炉通用。',
    detail: '精选优质铸铁铸造，外层高温珐琅工艺，内层哑光黑色搪瓷。锅盖内侧雨点设计，水蒸气循环滴落，让食物更加鲜美多汁。',
    badge: '新品'
  },
  {
    id: 4, name: '竹木砧板三件套', category: 'kitchen', icon: '🪵',
    price: 78.00, originalPrice: null, stock: 200, featured: false, isNew: false,
    description: '天然整竹制作，三种尺寸满足不同需求，生熟分开更健康。',
    detail: '采用5年以上成熟楠竹，经过碳化处理，防霉防裂。大中小三种规格，分别适用于切肉、切菜和切水果。'
  },

  // 卧室家纺
  {
    id: 5, name: '全棉四件套（云朵白）', category: 'bedroom', icon: '🛏️',
    price: 299.00, originalPrice: 459.00, stock: 60, featured: true, isNew: false,
    description: '60支长绒棉面料，亲肤柔软，包含被套、床单和两个枕套，适合1.5/1.8米床。',
    detail: '甄选新疆长绒棉，60支高密度织造，面料细腻光滑如丝绸般触感。活性印染工艺，色牢度高不掉色。拉链隐藏设计，美观大方。',
    badge: '爆款'
  },
  {
    id: 6, name: '记忆棉护颈枕', category: 'bedroom', icon: '💤',
    price: 129.00, originalPrice: 199.00, stock: 80, featured: true, isNew: false,
    description: '慢回弹太空记忆棉，根据体温和压力自动贴合颈椎曲线，缓解颈部疲劳。',
    detail: '采用进口记忆棉材料，密度80D，回弹时间3-5秒。人体工学蝶形设计，高低两侧适应不同睡姿。外套可拆洗，透气竹纤维面料。',
    badge: '好评如潮'
  },
  {
    id: 7, name: '法兰绒加厚毛毯', category: 'bedroom', icon: '🧶',
    price: 89.00, originalPrice: 139.00, stock: 100, featured: false, isNew: true,
    description: '双面法兰绒材质，柔软蓬松保暖性强，冬季沙发毯午睡毯皆宜，多色可选。',
    detail: '380克加厚法兰绒，双面细腻触感。采用活性印染，不起球不掉色。适合空调房、午休、追剧时使用。'
  },

  // 卫浴用品
  {
    id: 8, name: '智能感应皂液器', category: 'bathroom', icon: '🧴',
    price: 69.00, originalPrice: 99.00, stock: 150, featured: false, isNew: true,
    description: '红外自动感应出泡，无需接触更卫生，USB充电一次续航3个月，泡沫绵密细腻。',
    detail: '采用高灵敏红外传感器，伸手即出泡。内置高品质泡沫泵芯，一按即出绵密泡沫。IPX4防水等级，放在洗手台无忧。',
    badge: '新品'
  },
  {
    id: 9, name: '日式天然硅藻泥地垫', category: 'bathroom', icon: '🧽',
    price: 58.00, originalPrice: 79.00, stock: 90, featured: true, isNew: false,
    description: '天然硅藻土材质，踩上去3秒速干吸水，防滑防霉，简约素色设计百搭浴室。',
    detail: '采用天然硅藻土制作，微孔结构超强吸水。表面经过防滑处理，湿脚踩上去也不打滑。不发霉不变味，打理方便。'
  },
  {
    id: 10, name: '旋转置物架（免钉）', category: 'bathroom', icon: '🗄️',
    price: 45.00, originalPrice: null, stock: 200, featured: false, isNew: false,
    description: '360度旋转设计，免打孔安装，四层收纳空间，浴室厨房桌面均可使用。',
    detail: '食品级PP材质，安全无毒。独特旋转设计，取用方便。免打孔底座，不伤墙面不留痕。防水防潮，易清洁。'
  },

  // 装饰摆件
  {
    id: 11, name: '北欧风干花花瓶套装', category: 'decor', icon: '🏺',
    price: 88.00, originalPrice: 128.00, stock: 55, featured: true, isNew: false,
    description: '磨砂玻璃花瓶配永生干花，自然文艺范，客厅卧室书房餐桌百搭装饰。',
    detail: '手工磨砂工艺玻璃瓶，搭配精选天然干花花束。无需打理浇水，常年美丽绽放。多种花色可选，为空间增添温馨氛围。',
    badge: '颜值担当'
  },
  {
    id: 12, name: '创意小夜灯（月球）', category: 'decor', icon: '🌙',
    price: 49.00, originalPrice: 79.00, stock: 120, featured: false, isNew: true,
    description: '3D打印月球表面纹理，触控调光三色可切换，USB充电，适合床头氛围灯。',
    detail: 'NASA月球数据3D打印，真实还原月球表面纹理。三种色温（暖白/暖黄/冷白）触控切换。USB充电8小时续航，磁吸底座可悬浮展示。'
  },

  // 收纳整理
  {
    id: 13, name: '棉麻折叠收纳箱（3只装）', category: 'storage', icon: '📦',
    price: 55.00, originalPrice: 85.00, stock: 180, featured: true, isNew: false,
    description: '加厚棉麻面料，钢架支撑不塌陷，可折叠不占空间，适合衣柜杂物整理。',
    detail: '外层采用日式棉麻面料，质感优良。内置镀锌钢丝骨架，承重力强。不用时可完全折叠，厚度仅3cm。防尘盖设计，保持衣物干净。',
    badge: '实用之选'
  },
  {
    id: 14, name: '桌面文具收纳盒', category: 'storage', icon: '✏️',
    price: 35.00, originalPrice: null, stock: 200, featured: false, isNew: true,
    description: '多格分区设计，笔筒+手机架+小物件收纳一体，简约白色百搭桌面。',
    detail: '环保ABS材质，圆角设计安全无毛刺。多功能分区，笔筒、便签区、手机支架、杂物格一应俱全。底部防滑垫，稳固不移位。'
  },

  // 灯具照明
  {
    id: 15, name: 'LED护眼台灯', category: 'lighting', icon: '💡',
    price: 158.00, originalPrice: 228.00, stock: 40, featured: false, isNew: true,
    description: '无频闪无蓝光危害，五档亮度三档色温，USB充电口，学习办公护眼之选。',
    detail: 'Ra>95高显色指数，真实还原色彩。无可视频闪技术，有效减少眼睛疲劳。触控面板操作，5档亮度×3档色温共15种光效。灯臂多角度调节，自由定位光源方向。',
    badge: '护眼推荐'
  },
  {
    id: 16, name: '复古实木小吊灯', category: 'lighting', icon: '🪔',
    price: 199.00, originalPrice: 299.00, stock: 25, featured: true, isNew: false,
    description: '日式原木灯罩+铁艺灯架，E27螺口通用灯泡，适合餐厅吧台走廊氛围照明。',
    detail: '精选橡木手工车削灯罩，纹理天然独特。铁艺灯架复古喷漆处理，哑光质感。E27标准螺口，兼容LED/钨丝/爱迪生灯泡。含1.5米可调节挂线。'
  },
];

// ==================== 分类名称映射 ====================
function getCategoryName(cat) {
  const map = {
    kitchen: '厨房用品', bedroom: '卧室家纺', bathroom: '卫浴用品',
    decor: '装饰摆件', storage: '收纳整理', lighting: '灯具照明'
  };
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
  showToast('已加入购物车');
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
  if (link && user) {
    link.innerHTML = `&#x1F464; ${user.name}`;
    link.href = 'login.html';
  }
}

// ==================== 商品渲染 ====================
function renderProducts(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-light);grid-column:1/-1">暂无符合条件的商品</div>';
    return;
  }

  container.innerHTML = list.map(p => `
    <div class="product-card">
      <a href="product-detail.html?id=${p.id}">
        <div class="product-image">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          ${p.icon}
        </div>
      </a>
      <div class="product-info">
        <h3><a href="product-detail.html?id=${p.id}">${p.name}</a></h3>
        <p class="desc">${p.description}</p>
        <div class="product-price">
          <span class="price-current">&yen;${p.price.toFixed(2)}</span>
          ${p.originalPrice ? `<span class="price-original">&yen;${p.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">加入购物车</button>
          <a href="product-detail.html?id=${p.id}" class="btn btn-sm" style="border:1px solid var(--border);color:var(--text)">查看详情</a>
        </div>
      </div>
    </div>
  `).join('');
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

// 搜索框回车支持
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSearch();
    });
  }

  // 回到顶部按钮（滚动超过300px时显示）
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '&#x2191;';
  backToTop.setAttribute('aria-label', '回到顶部');
  backToTop.style.cssText = 'position:fixed;bottom:32px;right:32px;width:44px;height:44px;border-radius:50%;background:var(--primary);color:#fff;border:none;font-size:1.2rem;cursor:pointer;opacity:0;transition:opacity .3s;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.2)';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
    backToTop.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
