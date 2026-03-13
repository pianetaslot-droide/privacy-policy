/* ========================================
   乐居生活 - 多语言国际化 (i18n)
   基于IP自动检测 + 手动切换
   ======================================== */

// ==================== 翻译数据 ====================
const translations = {

  'zh': {
    // 通用
    lang_name: '中文',
    lang_flag: '🇨🇳',
    currency: '¥',
    currency_code: 'CNY',

    // 导航
    nav_home: '首页',
    nav_all_products: '全部商品',
    nav_kitchen: '厨房用品',
    nav_bedroom: '卧室家纺',
    nav_bathroom: '卫浴用品',
    nav_decor: '装饰摆件',
    nav_storage: '收纳整理',
    nav_login: '登录',
    nav_cart: '购物车',
    search_placeholder: '搜索商品，如：陶瓷杯、床品四件套...',
    search_btn: '搜索',

    // 首页
    hero_title: '让生活回归美好',
    hero_subtitle: '精选家居好物，打造温馨舒适的生活空间',
    hero_shop_now: '立即选购',
    hero_sale: '限时特惠',
    cat_title: '热门分类',
    cat_subtitle: '为您精心挑选的家居品类',
    cat_kitchen: '厨房用品',
    cat_bedroom: '卧室家纺',
    cat_bathroom: '卫浴用品',
    cat_decor: '装饰摆件',
    cat_storage: '收纳整理',
    cat_lighting: '灯具照明',
    featured_title: '热销推荐',
    featured_subtitle: '本周最受欢迎的家居好物',
    new_title: '新品上市',
    new_subtitle: '最新到货的家居精品',

    // 商品
    add_to_cart: '加入购物车',
    view_detail: '查看详情',
    buy_now: '立即购买',
    in_stock: '有货',
    out_of_stock: '暂时缺货',
    free_shipping_note: '满99元包邮',
    category_label: '分类',
    stock_label: '库存',
    shipping_label: '运费',
    tab_detail: '商品详情',
    tab_spec: '规格参数',
    tab_review: '用户评价',
    no_detail: '暂无详细描述。',
    spec_default: '品牌：乐居优选\n产地：中国\n材质：优质环保材料\n包装：精美礼盒装',
    no_review: '暂无评价，购买后可发表评价。',
    product_not_found: '商品未找到',
    back_to_list: '返回商品列表',

    // 商品列表
    filter_title: '筛选条件',
    filter_category: '商品分类',
    filter_all: '全部',
    filter_price: '价格范围',
    price_under_50: '¥50以下',
    price_50_100: '¥50-100',
    price_100_200: '¥100-200',
    price_over_200: '¥200以上',
    sort_default: '默认排序',
    sort_price_asc: '价格从低到高',
    sort_price_desc: '价格从高到低',
    sort_name: '按名称排序',
    result_count: '共 {n} 件商品',

    // 购物车
    cart_title: '我的购物车',
    cart_empty_title: '购物车是空的',
    cart_empty_subtitle: '快去挑选喜欢的商品吧',
    cart_go_shopping: '去购物',
    cart_remove: '删除',
    cart_removed: '已从购物车移除',
    order_summary: '订单摘要',
    subtotal: '商品小计',
    shipping: '运费',
    free_shipping: '免运费',
    shipping_hint: '再购 ¥{n} 即可免运费',
    total: '合计',
    go_checkout: '去结算',
    continue_shopping: '继续购物',
    added_to_cart: '已加入购物车',

    // 结算
    checkout_address: '收货信息',
    checkout_name: '收货人',
    checkout_name_ph: '请输入收货人姓名',
    checkout_phone: '联系电话',
    checkout_phone_ph: '请输入手机号码',
    checkout_region: '省份/城市',
    checkout_region_ph: '请选择',
    checkout_zip: '邮政编码',
    checkout_zip_ph: '请输入邮编',
    checkout_address_detail: '详细地址',
    checkout_address_ph: '请输入详细地址（街道、门牌号等）',
    checkout_note: '备注',
    checkout_note_ph: '如有特殊要求请备注',
    checkout_payment: '支付方式',
    pay_wechat: '微信支付',
    pay_wechat_desc: '使用微信扫码支付',
    pay_alipay: '支付宝',
    pay_alipay_desc: '使用支付宝扫码支付',
    pay_cod: '货到付款',
    pay_cod_desc: '送货上门时支付现金',
    total_due: '应付总额',
    submit_order: '提交订单',
    back_to_cart: '返回购物车',
    order_success: '订单提交成功！',
    order_number: '订单号',
    order_ship_soon: '我们会尽快为您安排发货',
    back_to_home: '返回首页',
    err_name: '请输入收货人姓名',
    err_phone: '请输入正确的手机号码',
    err_region: '请选择省份/城市',
    err_address: '请输入详细地址',
    err_login_first: '请先登录后再下单',

    // 登录注册
    auth_welcome: '欢迎来到乐居生活',
    auth_subtitle: '登录账户，享受便捷购物体验',
    auth_login: '登录',
    auth_register: '注册',
    auth_account: '手机号 / 邮箱',
    auth_account_ph: '请输入手机号或邮箱',
    auth_password: '密码',
    auth_password_ph: '请输入密码',
    auth_remember: '记住我',
    auth_forgot: '忘记密码？',
    auth_nickname: '昵称',
    auth_nickname_ph: '给自己起个名字吧',
    auth_phone: '手机号',
    auth_phone_ph: '请输入手机号',
    auth_email: '邮箱（选填）',
    auth_email_ph: '请输入邮箱地址',
    auth_confirm: '确认密码',
    auth_confirm_ph: '请再次输入密码',
    auth_password_min: '至少6位密码',
    auth_agree: '我已阅读并同意',
    auth_terms: '用户协议',
    auth_privacy: '隐私政策',
    auth_footer: '注册即表示您同意我们的服务条款',
    auth_login_success: '登录成功，欢迎回来！',
    auth_login_ok: '登录成功！',
    auth_register_success: '注册成功，已自动登录！',
    auth_center: '个人中心',
    auth_welcome_back: '欢迎',
    auth_my_orders: '我的订单',
    auth_logout: '退出登录',
    auth_logged_out: '已退出登录',
    auth_no_orders: '暂无订单记录',
    auth_items: '件商品',
    auth_back: '返回',
    err_nickname: '请输入昵称',
    err_phone_invalid: '请输入正确的手机号码',
    err_pwd_short: '密码至少6位',
    err_pwd_mismatch: '两次密码不一致',
    err_agree: '请同意用户协议',
    err_phone_exists: '该手机号已注册',
    order_status_pending: '待支付',

    // 页脚
    footer_about: '乐居生活百货成立于2020年，致力于为每一个家庭提供高品质、高性价比的家居生活用品。我们精心挑选每一件商品，让您的生活更加舒适美好。',
    footer_guide: '购物指南',
    footer_guide_flow: '购物流程',
    footer_guide_pay: '支付方式',
    footer_guide_ship: '发货说明',
    footer_service: '售后服务',
    footer_service_return: '退换货政策',
    footer_service_guarantee: '售后保障',
    footer_service_faq: '常见问题',
    footer_contact: '联系我们',
    footer_hotline: '客服热线：400-888-0000',
    footer_hours: '工作时间：9:00-21:00',
    footer_address: '门店地址：幸福路88号',
    footer_copyright: '© 2026 乐居生活百货 版权所有',

    // 城市选项
    cities: ['北京市', '上海市', '广州市', '深圳市', '杭州市', '成都市', '武汉市', '南京市', '其他城市'],

    // 商品翻译
    products: {
      1:  { name: '日式手工陶瓷杯', desc: '采用传统手工拉坯工艺，温润如玉的釉面触感，容量约300ml，适合日常饮茶和咖啡。', detail: '这款日式手工陶瓷杯采用高温烧制，釉面光滑细腻，手感温润。每一只杯子都经过匠人精心打磨，独一无二。可微波炉加热，可洗碗机清洗。' },
      2:  { name: '北欧风不锈钢刀具套装', desc: '德国工艺不锈钢锻造，包含主厨刀、切片刀、水果刀、剪刀及刀座，一套满足全部需求。', detail: '采用德国4116高碳不锈钢，硬度达到HRC56-58，锋利持久。人体工学手柄设计，握持舒适不易疲劳。配备实木刀座，安全收纳。' },
      3:  { name: '珐琅彩搪瓷炖锅', desc: '精铸铁胎搪瓷锅，均匀导热锁住营养，适用于煲汤、炖菜、焖饭，明火电磁炉通用。', detail: '精选优质铸铁铸造，外层高温珐琅工艺，内层哑光黑色搪瓷。锅盖内侧雨点设计，水蒸气循环滴落，让食物更加鲜美多汁。' },
      4:  { name: '竹木砧板三件套', desc: '天然整竹制作，三种尺寸满足不同需求，生熟分开更健康。', detail: '采用5年以上成熟楠竹，经过碳化处理，防霉防裂。大中小三种规格，分别适用于切肉、切菜和切水果。' },
      5:  { name: '全棉四件套（云朵白）', desc: '60支长绒棉面料，亲肤柔软，包含被套、床单和两个枕套，适合1.5/1.8米床。', detail: '甄选新疆长绒棉，60支高密度织造，面料细腻光滑如丝绸般触感。活性印染工艺，色牢度高不掉色。拉链隐藏设计，美观大方。' },
      6:  { name: '记忆棉护颈枕', desc: '慢回弹太空记忆棉，根据体温和压力自动贴合颈椎曲线，缓解颈部疲劳。', detail: '采用进口记忆棉材料，密度80D，回弹时间3-5秒。人体工学蝶形设计，高低两侧适应不同睡姿。外套可拆洗，透气竹纤维面料。' },
      7:  { name: '法兰绒加厚毛毯', desc: '双面法兰绒材质，柔软蓬松保暖性强，冬季沙发毯午睡毯皆宜，多色可选。', detail: '380克加厚法兰绒，双面细腻触感。采用活性印染，不起球不掉色。适合空调房、午休、追剧时使用。' },
      8:  { name: '智能感应皂液器', desc: '红外自动感应出泡，无需接触更卫生，USB充电一次续航3个月，泡沫绵密细腻。', detail: '采用高灵敏红外传感器，伸手即出泡。内置高品质泡沫泵芯，一按即出绵密泡沫。IPX4防水等级，放在洗手台无忧。' },
      9:  { name: '日式天然硅藻泥地垫', desc: '天然硅藻土材质，踩上去3秒速干吸水，防滑防霉，简约素色设计百搭浴室。', detail: '采用天然硅藻土制作，微孔结构超强吸水。表面经过防滑处理，湿脚踩上去也不打滑。不发霉不变味，打理方便。' },
      10: { name: '旋转置物架（免钉）', desc: '360度旋转设计，免打孔安装，四层收纳空间，浴室厨房桌面均可使用。', detail: '食品级PP材质，安全无毒。独特旋转设计，取用方便。免打孔底座，不伤墙面不留痕。防水防潮，易清洁。' },
      11: { name: '北欧风干花花瓶套装', desc: '磨砂玻璃花瓶配永生干花，自然文艺范，客厅卧室书房餐桌百搭装饰。', detail: '手工磨砂工艺玻璃瓶，搭配精选天然干花花束。无需打理浇水，常年美丽绽放。多种花色可选，为空间增添温馨氛围。' },
      12: { name: '创意小夜灯（月球）', desc: '3D打印月球表面纹理，触控调光三色可切换，USB充电，适合床头氛围灯。', detail: 'NASA月球数据3D打印，真实还原月球表面纹理。三种色温（暖白/暖黄/冷白）触控切换。USB充电8小时续航，磁吸底座可悬浮展示。' },
      13: { name: '棉麻折叠收纳箱（3只装）', desc: '加厚棉麻面料，钢架支撑不塌陷，可折叠不占空间，适合衣柜杂物整理。', detail: '外层采用日式棉麻面料，质感优良。内置镀锌钢丝骨架，承重力强。不用时可完全折叠，厚度仅3cm。防尘盖设计，保持衣物干净。' },
      14: { name: '桌面文具收纳盒', desc: '多格分区设计，笔筒+手机架+小物件收纳一体，简约白色百搭桌面。', detail: '环保ABS材质，圆角设计安全无毛刺。多功能分区，笔筒、便签区、手机支架、杂物格一应俱全。底部防滑垫，稳固不移位。' },
      15: { name: 'LED护眼台灯', desc: '无频闪无蓝光危害，五档亮度三档色温，USB充电口，学习办公护眼之选。', detail: 'Ra>95高显色指数，真实还原色彩。无可视频闪技术，有效减少眼睛疲劳。触控面板操作，5档亮度×3档色温共15种光效。灯臂多角度调节，自由定位光源方向。' },
      16: { name: '复古实木小吊灯', desc: '日式原木灯罩+铁艺灯架，E27螺口通用灯泡，适合餐厅吧台走廊氛围照明。', detail: '精选橡木手工车削灯罩，纹理天然独特。铁艺灯架复古喷漆处理，哑光质感。E27标准螺口，兼容LED/钨丝/爱迪生灯泡。含1.5米可调节挂线。' },
    },
    badges: { '热卖': '热卖', '特惠': '特惠', '新品': '新品', '爆款': '爆款', '好评如潮': '好评如潮', '颜值担当': '颜值担当', '实用之选': '实用之选', '护眼推荐': '护眼推荐' }
  },

  'en': {
    lang_name: 'English',
    lang_flag: '🇬🇧',
    currency: '$',
    currency_code: 'USD',

    nav_home: 'Home',
    nav_all_products: 'All Products',
    nav_kitchen: 'Kitchen',
    nav_bedroom: 'Bedroom',
    nav_bathroom: 'Bathroom',
    nav_decor: 'Decor',
    nav_storage: 'Storage',
    nav_login: 'Login',
    nav_cart: 'Cart',
    search_placeholder: 'Search products, e.g. ceramic cup, bedding set...',
    search_btn: 'Search',

    hero_title: 'Live Beautifully',
    hero_subtitle: 'Curated home goods for a cozy and comfortable living space',
    hero_shop_now: 'Shop Now',
    hero_sale: 'On Sale',
    cat_title: 'Popular Categories',
    cat_subtitle: 'Carefully curated home categories for you',
    cat_kitchen: 'Kitchen',
    cat_bedroom: 'Bedroom',
    cat_bathroom: 'Bathroom',
    cat_decor: 'Decor',
    cat_storage: 'Storage',
    cat_lighting: 'Lighting',
    featured_title: 'Best Sellers',
    featured_subtitle: "This week's most popular home essentials",
    new_title: 'New Arrivals',
    new_subtitle: 'Freshly arrived home products',

    add_to_cart: 'Add to Cart',
    view_detail: 'Details',
    buy_now: 'Buy Now',
    in_stock: 'In Stock',
    out_of_stock: 'Out of Stock',
    free_shipping_note: 'Free shipping over $15',
    category_label: 'Category',
    stock_label: 'Stock',
    shipping_label: 'Shipping',
    tab_detail: 'Description',
    tab_spec: 'Specifications',
    tab_review: 'Reviews',
    no_detail: 'No description available.',
    spec_default: 'Brand: LeJu Select\nOrigin: China\nMaterial: Premium eco-friendly materials\nPackaging: Gift box',
    no_review: 'No reviews yet. Purchase to leave a review.',
    product_not_found: 'Product Not Found',
    back_to_list: 'Back to Products',

    filter_title: 'Filters',
    filter_category: 'Category',
    filter_all: 'All',
    filter_price: 'Price Range',
    price_under_50: 'Under $8',
    price_50_100: '$8 - $15',
    price_100_200: '$15 - $30',
    price_over_200: 'Over $30',
    sort_default: 'Default',
    sort_price_asc: 'Price: Low to High',
    sort_price_desc: 'Price: High to Low',
    sort_name: 'Name',
    result_count: '{n} products found',

    cart_title: 'My Cart',
    cart_empty_title: 'Your cart is empty',
    cart_empty_subtitle: 'Go find something you love',
    cart_go_shopping: 'Start Shopping',
    cart_remove: 'Remove',
    cart_removed: 'Removed from cart',
    order_summary: 'Order Summary',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    free_shipping: 'Free',
    shipping_hint: 'Spend ${n} more for free shipping',
    total: 'Total',
    go_checkout: 'Checkout',
    continue_shopping: 'Continue Shopping',
    added_to_cart: 'Added to cart',

    checkout_address: 'Shipping Address',
    checkout_name: 'Full Name',
    checkout_name_ph: 'Enter your full name',
    checkout_phone: 'Phone',
    checkout_phone_ph: 'Enter phone number',
    checkout_region: 'City / Region',
    checkout_region_ph: 'Select',
    checkout_zip: 'Zip Code',
    checkout_zip_ph: 'Enter zip code',
    checkout_address_detail: 'Address',
    checkout_address_ph: 'Street, apartment, suite, etc.',
    checkout_note: 'Notes',
    checkout_note_ph: 'Special instructions (optional)',
    checkout_payment: 'Payment Method',
    pay_wechat: 'WeChat Pay',
    pay_wechat_desc: 'Scan to pay with WeChat',
    pay_alipay: 'Alipay',
    pay_alipay_desc: 'Scan to pay with Alipay',
    pay_cod: 'Cash on Delivery',
    pay_cod_desc: 'Pay when you receive your order',
    total_due: 'Total Due',
    submit_order: 'Place Order',
    back_to_cart: 'Back to Cart',
    order_success: 'Order Placed Successfully!',
    order_number: 'Order No.',
    order_ship_soon: "We'll ship your order as soon as possible",
    back_to_home: 'Back to Home',
    err_name: 'Please enter your name',
    err_phone: 'Please enter a valid phone number',
    err_region: 'Please select a city/region',
    err_address: 'Please enter your address',
    err_login_first: 'Please log in before placing an order',

    auth_welcome: 'Welcome to LeJu Living',
    auth_subtitle: 'Log in for a better shopping experience',
    auth_login: 'Login',
    auth_register: 'Register',
    auth_account: 'Phone / Email',
    auth_account_ph: 'Enter your phone or email',
    auth_password: 'Password',
    auth_password_ph: 'Enter your password',
    auth_remember: 'Remember me',
    auth_forgot: 'Forgot password?',
    auth_nickname: 'Nickname',
    auth_nickname_ph: 'Choose a nickname',
    auth_phone: 'Phone',
    auth_phone_ph: 'Enter your phone number',
    auth_email: 'Email (optional)',
    auth_email_ph: 'Enter your email',
    auth_confirm: 'Confirm Password',
    auth_confirm_ph: 'Re-enter your password',
    auth_password_min: 'At least 6 characters',
    auth_agree: 'I agree to the',
    auth_terms: 'Terms of Service',
    auth_privacy: 'Privacy Policy',
    auth_footer: 'By signing up you agree to our terms of service',
    auth_login_success: 'Welcome back!',
    auth_login_ok: 'Login successful!',
    auth_register_success: 'Registered & logged in!',
    auth_center: 'My Account',
    auth_welcome_back: 'Welcome',
    auth_my_orders: 'My Orders',
    auth_logout: 'Log Out',
    auth_logged_out: 'Logged out',
    auth_no_orders: 'No orders yet',
    auth_items: 'items',
    auth_back: 'Back',
    err_nickname: 'Please enter a nickname',
    err_phone_invalid: 'Please enter a valid phone number',
    err_pwd_short: 'Password must be at least 6 characters',
    err_pwd_mismatch: 'Passwords do not match',
    err_agree: 'Please agree to the terms',
    err_phone_exists: 'Phone already registered',
    order_status_pending: 'Pending Payment',

    footer_about: 'LeJu Living was founded in 2020, dedicated to providing quality, affordable home goods for every family. We carefully select every product to make your life more comfortable.',
    footer_guide: 'Shopping Guide',
    footer_guide_flow: 'How to Order',
    footer_guide_pay: 'Payment Methods',
    footer_guide_ship: 'Shipping Info',
    footer_service: 'Customer Service',
    footer_service_return: 'Return Policy',
    footer_service_guarantee: 'Warranty',
    footer_service_faq: 'FAQ',
    footer_contact: 'Contact Us',
    footer_hotline: 'Hotline: 400-888-0000',
    footer_hours: 'Hours: 9:00 AM - 9:00 PM',
    footer_address: 'Store: No.88 Xingfu Road',
    footer_copyright: '© 2026 LeJu Living. All rights reserved.',

    cities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Hangzhou', 'Chengdu', 'Wuhan', 'Nanjing', 'Other'],

    products: {
      1:  { name: 'Japanese Handmade Ceramic Cup', desc: 'Traditional hand-thrown craft, smooth glaze finish, ~300ml capacity. Perfect for daily tea or coffee.', detail: 'High-temperature fired with smooth, delicate glaze. Each cup is individually hand-crafted. Microwave and dishwasher safe.' },
      2:  { name: 'Nordic Stainless Steel Knife Set', desc: "German-crafted stainless steel. Includes chef's knife, slicer, paring knife, scissors & block.", detail: 'Made from German 4116 high-carbon stainless steel, HRC 56-58 hardness. Ergonomic handle design for comfortable grip. Includes wooden knife block.' },
      3:  { name: 'Enamel Cast Iron Dutch Oven', desc: 'Cast iron with enamel coating. Even heat distribution for soups, stews, and rice. Works on all cooktops.', detail: 'Premium cast iron construction with high-temp enamel exterior. Rain-drop design inside lid for moisture circulation.' },
      4:  { name: 'Bamboo Cutting Board Set (3pc)', desc: 'Natural whole-bamboo construction, three sizes for different needs. Separate raw and cooked for better hygiene.', detail: 'Made from mature 5+ year bamboo, carbonized for mold and crack resistance. Three sizes for meat, vegetables, and fruits.' },
      5:  { name: 'Cotton Bedding Set (Cloud White)', desc: '60-count long-staple cotton, ultra-soft. Includes duvet cover, flat sheet, and 2 pillowcases.', detail: 'Premium Xinjiang long-staple cotton, 60-count high-density weave with silky-smooth texture. Color-fast active dyeing process.' },
      6:  { name: 'Memory Foam Neck Pillow', desc: 'Slow-rebound space memory foam that contours to your neck curve based on body heat and pressure.', detail: 'Imported memory foam, 80D density, 3-5s rebound time. Ergonomic butterfly shape with dual heights for different sleeping positions.' },
      7:  { name: 'Flannel Thick Blanket', desc: 'Double-sided flannel, soft and warm. Great for sofa throws and naps. Multiple colors available.', detail: '380g heavy-weight flannel with smooth texture on both sides. Active dyeing — no pilling, no fading.' },
      8:  { name: 'Smart Touchless Soap Dispenser', desc: 'Infrared auto-sensing foam dispenser. No-touch for better hygiene. USB rechargeable, 3-month battery life.', detail: 'High-sensitivity infrared sensor for instant foam. IPX4 waterproof rating. Premium foam pump produces rich, dense foam.' },
      9:  { name: 'Diatomite Bath Mat', desc: 'Natural diatomaceous earth — absorbs water in 3 seconds. Anti-slip, anti-mold, minimalist design.', detail: 'Natural diatomite with micro-pore structure for super absorption. Anti-slip surface treatment. Odor-free and easy to clean.' },
      10: { name: 'Rotating Storage Rack (No-drill)', desc: '360° rotating design, no-drill installation, 4-tier storage. For bathroom, kitchen, or desktop.', detail: 'Food-grade PP material, safe and non-toxic. No-drill base leaves no marks. Waterproof and easy to clean.' },
      11: { name: 'Nordic Dried Flower Vase Set', desc: 'Frosted glass vase with preserved dried flowers. Natural artistic style for any room.', detail: 'Hand-frosted glass vase with curated natural dried flower bouquet. No watering needed. Multiple color options available.' },
      12: { name: 'Moon Night Light (3D Print)', desc: '3D-printed moon surface texture. Touch-control 3-color dimming. USB rechargeable bedside lamp.', detail: 'NASA lunar data 3D printed for realistic surface texture. 3 color temperatures with touch switching. 8-hour battery. Magnetic levitation base.' },
      13: { name: 'Linen Storage Bins (3-pack)', desc: 'Thick linen fabric with steel frame support. Foldable to save space. Perfect for closet organization.', detail: 'Japanese-style linen exterior with galvanized wire frame. Fully foldable to 3cm thickness. Dust-proof lid keeps items clean.' },
      14: { name: 'Desktop Organizer Box', desc: 'Multi-compartment design: pen holder + phone stand + small items storage. Clean white minimalist style.', detail: 'Eco-friendly ABS with rounded edges. Multi-functional compartments for pens, sticky notes, phone, and accessories. Non-slip base.' },
      15: { name: 'LED Eye-Care Desk Lamp', desc: 'Flicker-free, no blue light hazard. 5 brightness levels, 3 color temperatures. USB charging port.', detail: 'Ra>95 high color rendering. Flicker-free technology reduces eye strain. Touch panel with 15 lighting modes. Adjustable arm angle.' },
      16: { name: 'Vintage Wood Pendant Light', desc: 'Japanese solid wood shade + iron frame. E27 universal socket. Ideal for dining room or bar lighting.', detail: 'Hand-turned oak wood shade with natural grain. Matte black iron frame. E27 socket compatible with LED/filament/Edison bulbs. 1.5m adjustable cord.' },
    },
    badges: { '热卖': 'Hot', '特惠': 'Sale', '新品': 'New', '爆款': 'Best', '好评如潮': 'Top Rated', '颜值担当': 'Beautiful', '实用之选': 'Practical', '护眼推荐': 'Eye Care' }
  },

  'it': {
    lang_name: 'Italiano',
    lang_flag: '🇮🇹',
    currency: '€',
    currency_code: 'EUR',

    nav_home: 'Home',
    nav_all_products: 'Tutti i Prodotti',
    nav_kitchen: 'Cucina',
    nav_bedroom: 'Camera',
    nav_bathroom: 'Bagno',
    nav_decor: 'Decorazioni',
    nav_storage: 'Organizzazione',
    nav_login: 'Accedi',
    nav_cart: 'Carrello',
    search_placeholder: 'Cerca prodotti, es: tazza in ceramica, set letto...',
    search_btn: 'Cerca',

    hero_title: 'Vivi la Bellezza',
    hero_subtitle: 'Articoli per la casa selezionati per uno spazio accogliente',
    hero_shop_now: 'Acquista Ora',
    hero_sale: 'Offerte',
    cat_title: 'Categorie Popolari',
    cat_subtitle: 'Categorie selezionate con cura per te',
    cat_kitchen: 'Cucina',
    cat_bedroom: 'Camera da letto',
    cat_bathroom: 'Bagno',
    cat_decor: 'Decorazioni',
    cat_storage: 'Organizzazione',
    cat_lighting: 'Illuminazione',
    featured_title: 'I Più Venduti',
    featured_subtitle: 'I prodotti più amati della settimana',
    new_title: 'Novità',
    new_subtitle: 'Ultimi arrivi selezionati',

    add_to_cart: 'Aggiungi al Carrello',
    view_detail: 'Dettagli',
    buy_now: 'Acquista Ora',
    in_stock: 'Disponibile',
    out_of_stock: 'Esaurito',
    free_shipping_note: 'Spedizione gratuita sopra €15',
    category_label: 'Categoria',
    stock_label: 'Disponibilità',
    shipping_label: 'Spedizione',
    tab_detail: 'Descrizione',
    tab_spec: 'Specifiche',
    tab_review: 'Recensioni',
    no_detail: 'Nessuna descrizione disponibile.',
    spec_default: 'Marchio: LeJu Select\nOrigine: Cina\nMateriale: Materiali ecologici premium\nConfezione: Confezione regalo',
    no_review: 'Nessuna recensione. Acquista per lasciare una recensione.',
    product_not_found: 'Prodotto Non Trovato',
    back_to_list: 'Torna ai Prodotti',

    filter_title: 'Filtri',
    filter_category: 'Categoria',
    filter_all: 'Tutti',
    filter_price: 'Fascia di Prezzo',
    price_under_50: 'Sotto €8',
    price_50_100: '€8 - €15',
    price_100_200: '€15 - €30',
    price_over_200: 'Sopra €30',
    sort_default: 'Predefinito',
    sort_price_asc: 'Prezzo crescente',
    sort_price_desc: 'Prezzo decrescente',
    sort_name: 'Nome',
    result_count: '{n} prodotti trovati',

    cart_title: 'Il Mio Carrello',
    cart_empty_title: 'Il carrello è vuoto',
    cart_empty_subtitle: 'Vai a trovare qualcosa che ti piace',
    cart_go_shopping: 'Inizia lo Shopping',
    cart_remove: 'Rimuovi',
    cart_removed: 'Rimosso dal carrello',
    order_summary: 'Riepilogo Ordine',
    subtotal: 'Subtotale',
    shipping: 'Spedizione',
    free_shipping: 'Gratuita',
    shipping_hint: 'Aggiungi €{n} per la spedizione gratuita',
    total: 'Totale',
    go_checkout: 'Procedi al Pagamento',
    continue_shopping: 'Continua lo Shopping',
    added_to_cart: 'Aggiunto al carrello',

    checkout_address: 'Indirizzo di Spedizione',
    checkout_name: 'Nome Completo',
    checkout_name_ph: 'Inserisci il tuo nome',
    checkout_phone: 'Telefono',
    checkout_phone_ph: 'Inserisci il numero di telefono',
    checkout_region: 'Città / Regione',
    checkout_region_ph: 'Seleziona',
    checkout_zip: 'CAP',
    checkout_zip_ph: 'Inserisci il CAP',
    checkout_address_detail: 'Indirizzo',
    checkout_address_ph: 'Via, numero civico, interno, ecc.',
    checkout_note: 'Note',
    checkout_note_ph: 'Istruzioni speciali (opzionale)',
    checkout_payment: 'Metodo di Pagamento',
    pay_wechat: 'WeChat Pay',
    pay_wechat_desc: 'Scansiona per pagare con WeChat',
    pay_alipay: 'Alipay',
    pay_alipay_desc: 'Scansiona per pagare con Alipay',
    pay_cod: 'Contrassegno',
    pay_cod_desc: "Paga alla consegna dell'ordine",
    total_due: 'Totale Dovuto',
    submit_order: 'Invia Ordine',
    back_to_cart: 'Torna al Carrello',
    order_success: 'Ordine Effettuato con Successo!',
    order_number: 'N. Ordine',
    order_ship_soon: 'Spediremo il tuo ordine il prima possibile',
    back_to_home: 'Torna alla Home',
    err_name: 'Inserisci il tuo nome',
    err_phone: 'Inserisci un numero di telefono valido',
    err_region: 'Seleziona una città/regione',
    err_address: 'Inserisci il tuo indirizzo',
    err_login_first: 'Accedi prima di effettuare un ordine',

    auth_welcome: 'Benvenuto su LeJu Living',
    auth_subtitle: 'Accedi per una migliore esperienza di acquisto',
    auth_login: 'Accedi',
    auth_register: 'Registrati',
    auth_account: 'Telefono / Email',
    auth_account_ph: 'Inserisci telefono o email',
    auth_password: 'Password',
    auth_password_ph: 'Inserisci la password',
    auth_remember: 'Ricordami',
    auth_forgot: 'Password dimenticata?',
    auth_nickname: 'Nickname',
    auth_nickname_ph: 'Scegli un nickname',
    auth_phone: 'Telefono',
    auth_phone_ph: 'Inserisci il tuo telefono',
    auth_email: 'Email (opzionale)',
    auth_email_ph: 'Inserisci la tua email',
    auth_confirm: 'Conferma Password',
    auth_confirm_ph: 'Reinserisci la password',
    auth_password_min: 'Almeno 6 caratteri',
    auth_agree: 'Accetto i',
    auth_terms: 'Termini di Servizio',
    auth_privacy: 'Informativa Privacy',
    auth_footer: "Registrandoti accetti i nostri termini di servizio",
    auth_login_success: 'Bentornato!',
    auth_login_ok: 'Accesso riuscito!',
    auth_register_success: 'Registrato e connesso!',
    auth_center: 'Il Mio Account',
    auth_welcome_back: 'Benvenuto',
    auth_my_orders: 'I Miei Ordini',
    auth_logout: 'Esci',
    auth_logged_out: 'Disconnesso',
    auth_no_orders: 'Nessun ordine',
    auth_items: 'articoli',
    auth_back: 'Indietro',
    err_nickname: 'Inserisci un nickname',
    err_phone_invalid: 'Inserisci un numero di telefono valido',
    err_pwd_short: 'La password deve avere almeno 6 caratteri',
    err_pwd_mismatch: 'Le password non corrispondono',
    err_agree: 'Accetta i termini',
    err_phone_exists: 'Telefono già registrato',
    order_status_pending: 'In attesa di pagamento',

    footer_about: 'LeJu Living è stata fondata nel 2020, dedicata a fornire articoli per la casa di qualità e convenienza per ogni famiglia.',
    footer_guide: 'Guida Acquisti',
    footer_guide_flow: 'Come Ordinare',
    footer_guide_pay: 'Metodi di Pagamento',
    footer_guide_ship: 'Info Spedizione',
    footer_service: 'Assistenza Clienti',
    footer_service_return: 'Politica Resi',
    footer_service_guarantee: 'Garanzia',
    footer_service_faq: 'FAQ',
    footer_contact: 'Contattaci',
    footer_hotline: 'Tel: 400-888-0000',
    footer_hours: 'Orari: 9:00 - 21:00',
    footer_address: 'Negozio: Via Xingfu 88',
    footer_copyright: '© 2026 LeJu Living. Tutti i diritti riservati.',

    cities: ['Pechino', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Hangzhou', 'Chengdu', 'Wuhan', 'Nanjing', 'Altra città'],

    products: {
      1:  { name: 'Tazza in Ceramica Giapponese', desc: 'Artigianato tradizionale, smalto liscio e caldo, capacità ~300ml. Perfetta per tè e caffè.', detail: 'Cottura ad alta temperatura con smalto liscio e delicato. Ogni tazza è artigianale e unica. Adatta a microonde e lavastoviglie.' },
      2:  { name: 'Set Coltelli Nordico in Acciaio', desc: 'Acciaio tedesco forgiato. Include coltello chef, affettatrice, spelucchino, forbici e ceppo.', detail: 'Acciaio inox tedesco 4116 ad alto carbonio, durezza HRC 56-58. Manico ergonomico per impugnatura confortevole. Ceppo in legno incluso.' },
      3:  { name: 'Pentola in Ghisa Smaltata', desc: 'Ghisa con rivestimento in smalto. Distribuzione uniforme del calore. Per tutti i piani cottura.', detail: 'Costruzione in ghisa premium con smalto esterno ad alta temperatura. Design a gocce nel coperchio per ricircolo umidità.' },
      4:  { name: 'Set Taglieri in Bambù (3 pz)', desc: 'Bambù naturale intero, tre misure per diverse esigenze. Igiene separando crudo e cotto.', detail: 'Bambù maturo 5+ anni, trattamento carbonizzato antimuffa. Tre misure per carne, verdure e frutta.' },
      5:  { name: 'Set Letto in Cotone (Bianco Nuvola)', desc: 'Cotone a fibra lunga 60 fili, ultra morbido. Include copripiumino, lenzuolo e 2 federe.', detail: 'Cotone Xinjiang a fibra lunga, tessitura ad alta densità 60 fili con tocco setoso. Tintura reattiva resistente.' },
      6:  { name: 'Cuscino Cervicale Memory Foam', desc: 'Memory foam a ritorno lento che si adatta alla curva cervicale in base a calore e pressione.', detail: 'Memory foam importato, densità 80D, tempo di ritorno 3-5s. Design ergonomico a farfalla con doppia altezza.' },
      7:  { name: 'Coperta Spessa in Flanella', desc: 'Flanella double-face, morbida e calda. Ideale per divano e pisolini. Più colori disponibili.', detail: 'Flanella pesante 380g con texture liscia su entrambi i lati. Tintura reattiva anti-pilling.' },
      8:  { name: 'Dispenser Sapone Automatico', desc: 'Sensore infrarossi per schiuma senza contatto. Ricarica USB, 3 mesi di autonomia.', detail: 'Sensore infrarossi ad alta sensibilità. Pompa schiuma di qualità. Impermeabilità IPX4.' },
      9:  { name: 'Tappetino Bagno in Diatomite', desc: 'Terra di diatomee naturale — assorbe in 3 secondi. Antiscivolo, antimuffa, design minimalista.', detail: 'Diatomite naturale con struttura microporosa per super assorbimento. Trattamento antiscivolo.' },
      10: { name: 'Scaffale Rotante (Senza Fori)', desc: 'Design rotante a 360°, installazione senza fori, 4 ripiani. Per bagno, cucina o scrivania.', detail: 'Materiale PP alimentare, sicuro e atossico. Design rotante per facile accesso. Base senza fori.' },
      11: { name: 'Set Vaso con Fiori Secchi Nordico', desc: 'Vaso in vetro satinato con fiori secchi preservati. Stile naturale per ogni ambiente.', detail: 'Vetro satinato artigianale con bouquet di fiori secchi naturali. Nessuna manutenzione necessaria.' },
      12: { name: 'Lampada Notturna Luna 3D', desc: 'Texture lunare stampata in 3D. Dimmer touch 3 colori. Ricarica USB per comodino.', detail: 'Stampa 3D da dati NASA. 3 temperature colore con commutazione touch. 8 ore di autonomia.' },
      13: { name: 'Contenitori Pieghevoli in Lino (3 pz)', desc: 'Tessuto in lino spesso con telaio in acciaio. Pieghevoli per risparmiare spazio.', detail: 'Esterno in lino giapponese con telaio in filo zincato. Pieghevole a 3cm. Coperchio antipolvere.' },
      14: { name: 'Organizer da Scrivania', desc: 'Design multi-scomparto: portapenne + supporto telefono + piccoli oggetti. Bianco minimalista.', detail: 'ABS ecologico con bordi arrotondati. Scomparti multifunzione. Base antiscivolo.' },
      15: { name: 'Lampada LED Proteggi-Vista', desc: 'Senza sfarfallio, senza luce blu. 5 livelli luminosità, 3 temperature colore. Porta USB.', detail: 'Ra>95 ad alta resa cromatica. Tecnologia anti-sfarfallio. Pannello touch con 15 modalità luce.' },
      16: { name: 'Lampada a Sospensione in Legno', desc: 'Paralume in legno massello + struttura in ferro. Attacco E27. Ideale per ristorante o bar.', detail: 'Paralume in rovere tornito a mano. Struttura in ferro verniciato opaco. Attacco E27 universale. Cavo regolabile 1.5m.' },
    },
    badges: { '热卖': 'Top', '特惠': 'Offerta', '新品': 'Nuovo', '爆款': 'Best', '好评如潮': 'Top Voto', '颜值担当': 'Bello', '实用之选': 'Pratico', '护眼推荐': 'Vista' }
  },

  'ja': {
    lang_name: '日本語',
    lang_flag: '🇯🇵',
    currency: '¥',
    currency_code: 'JPY',

    nav_home: 'ホーム',
    nav_all_products: '全商品',
    nav_kitchen: 'キッチン',
    nav_bedroom: '寝室',
    nav_bathroom: 'バスルーム',
    nav_decor: 'インテリア',
    nav_storage: '収納',
    nav_login: 'ログイン',
    nav_cart: 'カート',
    search_placeholder: '商品を検索、例：陶器カップ、ベッドセット...',
    search_btn: '検索',

    hero_title: '美しい暮らしを',
    hero_subtitle: '厳選されたホームグッズで心地よい空間を',
    hero_shop_now: '今すぐ購入',
    hero_sale: 'セール',
    cat_title: '人気カテゴリー',
    cat_subtitle: '厳選されたホームカテゴリー',
    cat_kitchen: 'キッチン',
    cat_bedroom: '寝室・寝具',
    cat_bathroom: 'バスルーム',
    cat_decor: 'インテリア',
    cat_storage: '収納',
    cat_lighting: '照明',
    featured_title: 'ベストセラー',
    featured_subtitle: '今週最も人気のホームグッズ',
    new_title: '新着商品',
    new_subtitle: '最新入荷のホームアイテム',

    add_to_cart: 'カートに追加',
    view_detail: '詳細',
    buy_now: '今すぐ購入',
    in_stock: '在庫あり',
    out_of_stock: '在庫切れ',
    free_shipping_note: '¥1500以上で送料無料',
    category_label: 'カテゴリー',
    stock_label: '在庫',
    shipping_label: '送料',
    tab_detail: '商品説明',
    tab_spec: '仕様',
    tab_review: 'レビュー',
    no_detail: '説明はありません。',
    spec_default: 'ブランド：LeJu セレクト\n原産地：中国\n素材：高品質エコ素材\n梱包：ギフトボックス',
    no_review: 'レビューはまだありません。',
    product_not_found: '商品が見つかりません',
    back_to_list: '商品一覧に戻る',

    filter_title: 'フィルター',
    filter_category: 'カテゴリー',
    filter_all: 'すべて',
    filter_price: '価格帯',
    price_under_50: '¥750以下',
    price_50_100: '¥750-¥1500',
    price_100_200: '¥1500-¥3000',
    price_over_200: '¥3000以上',
    sort_default: 'デフォルト',
    sort_price_asc: '価格：安い順',
    sort_price_desc: '価格：高い順',
    sort_name: '名前順',
    result_count: '{n}件の商品',

    cart_title: 'ショッピングカート',
    cart_empty_title: 'カートは空です',
    cart_empty_subtitle: 'お気に入りの商品を見つけましょう',
    cart_go_shopping: 'ショッピングへ',
    cart_remove: '削除',
    cart_removed: 'カートから削除しました',
    order_summary: '注文概要',
    subtotal: '小計',
    shipping: '送料',
    free_shipping: '無料',
    shipping_hint: 'あと¥{n}で送料無料',
    total: '合計',
    go_checkout: 'レジに進む',
    continue_shopping: '買い物を続ける',
    added_to_cart: 'カートに追加しました',

    checkout_address: '配送先',
    checkout_name: '氏名',
    checkout_name_ph: 'お名前を入力',
    checkout_phone: '電話番号',
    checkout_phone_ph: '電話番号を入力',
    checkout_region: '都市/地域',
    checkout_region_ph: '選択してください',
    checkout_zip: '郵便番号',
    checkout_zip_ph: '郵便番号を入力',
    checkout_address_detail: '住所',
    checkout_address_ph: '番地、マンション名等',
    checkout_note: '備考',
    checkout_note_ph: '特別な指示（任意）',
    checkout_payment: 'お支払い方法',
    pay_wechat: 'WeChat Pay',
    pay_wechat_desc: 'WeChatでスキャン決済',
    pay_alipay: 'Alipay',
    pay_alipay_desc: 'Alipayでスキャン決済',
    pay_cod: '代金引換',
    pay_cod_desc: '商品受取時にお支払い',
    total_due: 'お支払い金額',
    submit_order: '注文を確定する',
    back_to_cart: 'カートに戻る',
    order_success: '注文が完了しました！',
    order_number: '注文番号',
    order_ship_soon: 'できるだけ早く発送いたします',
    back_to_home: 'ホームに戻る',
    err_name: 'お名前を入力してください',
    err_phone: '有効な電話番号を入力してください',
    err_region: '都市/地域を選択してください',
    err_address: '住所を入力してください',
    err_login_first: '注文する前にログインしてください',

    auth_welcome: 'LeJu Livingへようこそ',
    auth_subtitle: 'ログインしてより良いお買い物体験を',
    auth_login: 'ログイン',
    auth_register: '新規登録',
    auth_account: '電話番号 / メール',
    auth_account_ph: '電話番号またはメールを入力',
    auth_password: 'パスワード',
    auth_password_ph: 'パスワードを入力',
    auth_remember: 'ログイン状態を保持',
    auth_forgot: 'パスワードを忘れた？',
    auth_nickname: 'ニックネーム',
    auth_nickname_ph: 'ニックネームを選択',
    auth_phone: '電話番号',
    auth_phone_ph: '電話番号を入力',
    auth_email: 'メール（任意）',
    auth_email_ph: 'メールアドレスを入力',
    auth_confirm: 'パスワード確認',
    auth_confirm_ph: 'パスワードを再入力',
    auth_password_min: '6文字以上',
    auth_agree: '同意します：',
    auth_terms: '利用規約',
    auth_privacy: 'プライバシーポリシー',
    auth_footer: '登録すると利用規約に同意したものとみなされます',
    auth_login_success: 'おかえりなさい！',
    auth_login_ok: 'ログイン成功！',
    auth_register_success: '登録完了、ログインしました！',
    auth_center: 'マイアカウント',
    auth_welcome_back: 'ようこそ',
    auth_my_orders: '注文履歴',
    auth_logout: 'ログアウト',
    auth_logged_out: 'ログアウトしました',
    auth_no_orders: '注文履歴はありません',
    auth_items: '点',
    auth_back: '戻る',
    err_nickname: 'ニックネームを入力してください',
    err_phone_invalid: '有効な電話番号を入力してください',
    err_pwd_short: 'パスワードは6文字以上必要です',
    err_pwd_mismatch: 'パスワードが一致しません',
    err_agree: '利用規約に同意してください',
    err_phone_exists: 'この電話番号は既に登録されています',
    order_status_pending: '支払い待ち',

    footer_about: 'LeJu Livingは2020年に設立され、すべてのご家庭に高品質でお手頃な生活用品を提供しています。',
    footer_guide: 'お買い物ガイド',
    footer_guide_flow: 'ご注文方法',
    footer_guide_pay: 'お支払い方法',
    footer_guide_ship: '配送について',
    footer_service: 'カスタマーサービス',
    footer_service_return: '返品ポリシー',
    footer_service_guarantee: '保証',
    footer_service_faq: 'よくある質問',
    footer_contact: 'お問い合わせ',
    footer_hotline: '電話：400-888-0000',
    footer_hours: '営業時間：9:00-21:00',
    footer_address: '店舗：幸福路88号',
    footer_copyright: '© 2026 LeJu Living. All rights reserved.',

    cities: ['北京', '上海', '広州', '深圳', '杭州', '成都', '武漢', '南京', 'その他'],

    products: {
      1:  { name: '日本の手作り陶器カップ', desc: '伝統的な手びねり技法、滑らかな釉薬仕上げ、約300ml。お茶やコーヒーに最適。', detail: '高温焼成による滑らかで繊細な釉薬。一つ一つ手作りのユニークな仕上がり。電子レンジ・食洗機対応。' },
      2:  { name: '北欧風ステンレス包丁セット', desc: 'ドイツ製ステンレス鍛造。シェフナイフ、スライサー、ペティナイフ、キッチンバサミ、ナイフスタンド付き。', detail: 'ドイツ4116高炭素ステンレス、HRC56-58の硬度。人間工学ハンドルで快適な握り心地。木製スタンド付き。' },
      3:  { name: 'エナメル鋳鉄ダッチオーブン', desc: 'エナメルコーティング鋳鉄製。均一な熱分布。スープ、煮込み、炊飯に。全てのコンロ対応。', detail: 'プレミアム鋳鉄に高温エナメル外装。蓋内部の雨滴デザインで水分循環。' },
      4:  { name: '竹製まな板セット（3枚組）', desc: '天然竹一枚板、3サイズ。生もの・調理済みを分けてより衛生的に。', detail: '5年以上の成熟竹を炭化処理。肉用・野菜用・フルーツ用の3サイズ。' },
      5:  { name: 'コットン寝具セット（クラウドホワイト）', desc: '60番手長繊維綿、極上の肌触り。掛け布団カバー、フラットシーツ、枕カバー2枚。', detail: '新疆長繊維綿60番手高密度織り。シルクのような滑らかな肌触り。活性染料で色落ちしにくい。' },
      6:  { name: '低反発ネックピロー', desc: '低反発メモリーフォームが体温と圧力に合わせて首のカーブにフィット。', detail: '輸入メモリーフォーム、密度80D、反発時間3-5秒。人間工学バタフライ形状。' },
      7:  { name: 'フランネル厚手ブランケット', desc: '両面フランネル、柔らかく暖かい。ソファやお昼寝に。複数カラー展開。', detail: '380g厚手フランネル、両面滑らかな質感。活性染料で毛玉・色落ちなし。' },
      8:  { name: 'スマートタッチレスソープディスペンサー', desc: '赤外線自動検知フォームディスペンサー。非接触で衛生的。USB充電式、3ヶ月使用可能。', detail: '高感度赤外線センサーで即座に泡立ち。IPX4防水。高品質フォームポンプ。' },
      9:  { name: '珪藻土バスマット', desc: '天然珪藻土 — 3秒で吸水。滑り止め、防カビ、ミニマルデザイン。', detail: '天然珪藻土の微細孔構造で超吸水。滑り止め加工済み。お手入れ簡単。' },
      10: { name: '回転式収納ラック（穴あけ不要）', desc: '360度回転、穴あけ不要、4段収納。バスルーム、キッチン、デスクに。', detail: '食品グレードPP素材、安全無毒。穴あけ不要の底面。防水・お手入れ簡単。' },
      11: { name: '北欧風ドライフラワー花瓶セット', desc: 'フロストガラス花瓶にプリザーブドドライフラワー。ナチュラルなアート感覚。', detail: '手作りフロストガラスに厳選天然ドライフラワー。水やり不要。複数カラー展開。' },
      12: { name: 'ムーンナイトライト（3Dプリント）', desc: '3Dプリント月面テクスチャー。タッチ式3色調光。USB充電式ベッドサイドランプ。', detail: 'NASAデータによる3Dプリント。3色温タッチ切替。8時間バッテリー。磁気浮遊ベース。' },
      13: { name: 'リネン折りたたみ収納ボックス（3個組）', desc: '厚手リネン生地にスチールフレーム。折りたたんでコンパクト収納。', detail: '日本風リネン外装に亜鉛メッキワイヤーフレーム。3cmに折りたたみ可能。防塵蓋付き。' },
      14: { name: 'デスクオーガナイザー', desc: 'マルチ仕切り：ペン立て＋スマホスタンド＋小物収納。ホワイトミニマルスタイル。', detail: 'エコABS素材、丸角安全設計。多機能仕切り。滑り止めベース。' },
      15: { name: 'LED目に優しいデスクランプ', desc: 'フリッカーフリー、ブルーライトカット。5段階明るさ、3段階色温。USB充電ポート付き。', detail: 'Ra>95高演色。フリッカーフリー技術。タッチパネルで15モード。角度調整可能アーム。' },
      16: { name: 'ヴィンテージウッドペンダントライト', desc: '無垢材シェード＋アイアンフレーム。E27ソケット。ダイニングやバーに最適。', detail: 'オーク材手旋盤加工シェード。マットブラックアイアンフレーム。E27ソケットLED/フィラメント/エジソン球対応。1.5m調節可能コード。' },
    },
    badges: { '热卖': '人気', '特惠': 'セール', '新品': '新着', '爆款': 'Best', '好评如潮': '高評価', '颜值担当': '美しい', '实用之选': '実用的', '护眼推荐': '目に優しい' }
  }
};

// ==================== 汇率换算 ====================
const exchangeRates = { CNY: 1, USD: 0.14, EUR: 0.13, JPY: 21.5 };

// ==================== 语言检测与切换 ====================
const LANG_KEY = 'leju_lang';
const SUPPORTED_LANGS = ['zh', 'en', 'it', 'ja'];

// 国家 → 语言映射
const countryToLang = {
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh',
  US: 'en', GB: 'en', AU: 'en', CA: 'en', NZ: 'en', IE: 'en', IN: 'en', SG: 'en', PH: 'en', ZA: 'en',
  IT: 'it', SM: 'it', VA: 'it',
  JP: 'ja'
};

// 获取当前语言
function getCurrentLang() {
  return localStorage.getItem(LANG_KEY) || 'zh';
}

// 获取翻译文本
function t(key) {
  const lang = getCurrentLang();
  return (translations[lang] && translations[lang][key]) || translations['zh'][key] || key;
}

// 获取商品翻译
function tProduct(id, field) {
  const lang = getCurrentLang();
  const tr = translations[lang] && translations[lang].products && translations[lang].products[id];
  return tr ? tr[field] : null;
}

// 获取徽章翻译
function tBadge(badge) {
  if (!badge) return '';
  const lang = getCurrentLang();
  return (translations[lang] && translations[lang].badges && translations[lang].badges[badge]) || badge;
}

// 货币换算
function convertPrice(cnyPrice) {
  const lang = getCurrentLang();
  const code = translations[lang].currency_code;
  const rate = exchangeRates[code] || 1;
  return (cnyPrice * rate);
}

// 格式化价格
function formatPrice(cnyPrice) {
  const lang = getCurrentLang();
  const symbol = translations[lang].currency;
  const converted = convertPrice(cnyPrice);
  if (lang === 'ja') return symbol + Math.round(converted).toLocaleString();
  return symbol + converted.toFixed(2);
}

// 设置语言
function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'zh';
  localStorage.setItem(LANG_KEY, lang);
  location.reload();
}

// 基于IP自动检测语言（首次访问）
function detectLanguageByIP() {
  // 如果用户已手动选择过语言，跳过检测
  if (localStorage.getItem(LANG_KEY)) return;

  // 也检查浏览器语言作为后备
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  let fallbackLang = 'zh';
  if (browserLang.startsWith('en')) fallbackLang = 'en';
  else if (browserLang.startsWith('it')) fallbackLang = 'it';
  else if (browserLang.startsWith('ja')) fallbackLang = 'ja';

  // 用免费 IP 地理定位 API 检测国家
  fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(data => {
      const country = (data.country_code || '').toUpperCase();
      const detectedLang = countryToLang[country] || fallbackLang;
      localStorage.setItem(LANG_KEY, detectedLang);
      if (detectedLang !== 'zh') {
        location.reload();
      }
    })
    .catch(() => {
      // API 失败时使用浏览器语言
      localStorage.setItem(LANG_KEY, fallbackLang);
      if (fallbackLang !== 'zh') {
        location.reload();
      }
    });
}

// 渲染语言切换器
function renderLangSwitcher(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const currentLang = getCurrentLang();
  const current = translations[currentLang];

  container.innerHTML = `
    <div class="lang-switcher">
      <button class="lang-current" onclick="this.parentElement.classList.toggle('open')" aria-label="Switch language">
        ${current.lang_flag} ${current.lang_name} ▾
      </button>
      <div class="lang-dropdown">
        ${SUPPORTED_LANGS.map(code => {
          const lang = translations[code];
          return `<button class="${code === currentLang ? 'active' : ''}" onclick="setLang('${code}')">${lang.lang_flag} ${lang.lang_name}</button>`;
        }).join('')}
      </div>
    </div>`;

  // 点击外部关闭下拉菜单
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      container.querySelector('.lang-switcher')?.classList.remove('open');
    }
  });
}

// 页面加载时检测语言
detectLanguageByIP();
