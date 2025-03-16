// 客户经理仪表盘页面的多语言支持
const advisorTranslations = {
    // 简体中文
    'zh-CN': {
        // 页面标题
        'pageTitle': '客户经理仪表盘 - 健康智汇',
        
        // 导航
        'brandName': '健康智汇 - 客户经理平台',
        'home': '首页',
        'customerManagement': '客户管理',
        'appointmentManagement': '预约管理',
        'performanceReport': '业绩报表',
        'profile': '个人资料',
        'settings': '设置',
        'logout': '退出登录',
        'manager': '张经理',
        
        // 面包屑导航
        'breadcrumbHome': '首页',
        'breadcrumbCustomerManagement': '客户管理',
        'breadcrumbCustomerDetail': '客户详情',
        
        // 客户信息
        'highValueCustomer': '高价值客户',
        'customerId': '客户ID',
        'registrationTime': '注册时间',
        'contactCustomer': '联系客户',
        'sendMessage': '发送消息',
        'scheduleConsultation': '预约咨询',
        'age': '岁',
        'male': '男',
        'location': '上海市浦东新区',
        
        // 健康数据
        'healthDataSummary': '健康数据摘要',
        'healthScore': '健康评分',
        'bmiIndex': 'BMI指数',
        'bloodPressure': '血压 (mmHg)',
        'bloodSugar': '血糖 (mmol/L)',
        
        // 风险评估
        'riskAssessmentResults': '风险评估结果',
        'riskScore': '风险评分',
        'mediumRisk': '中等风险',
        'higherThanAverage': '高于同龄人群平均水平',
        'mainRiskFactors': '主要风险因素',
        'familyHeartHistory': '家族心脏病史',
        'occasionalSmoking': '偶尔吸烟',
        'lightExerciseDeficiency': '轻度运动不足',
        'preventionSuggestions': '预防建议',
        'monitorBloodPressure': '定期监测血压，减少盐分摄入，增加有氧运动',
        'quitSmoking': '完全戒烟，避免被动吸烟',
        'weeklyExercise': '每周进行至少150分钟的中等强度有氧运动',
        'healthyDiet': '保持健康饮食，增加蔬果摄入',
        'annualCheckup': '每年进行一次全面体检',
        
        // 客户画像
        'customerProfile': '客户画像',
        'familySituation': '家庭情况',
        'married': '已婚',
        'oneChild': '1子女 (8岁)',
        'dualIncomeFamily': '双职工家庭',
        'mortgageInProgress': '住房贷款中',
        'occupationAndIncome': '职业与收入',
        'itIndustry': 'IT行业',
        'middleManagement': '中层管理',
        'annualIncome': '年收入30-50万',
        'highEducation': '高学历',
        'lifestyle': '生活方式',
        'healthConscious': '关注健康',
        'highWorkPressure': '工作压力大',
        'focusOnChildEducation': '注重子女教育',
        'travelEnthusiast': '旅行爱好者',
        'financialGoals': '财务目标',
        'childEducationPlanning': '子女教育规划',
        'retirementPreparation': '退休养老准备',
        'healthMedicalProtection': '健康医疗保障',
        'wealthGrowth': '财富稳健增长',
        
        // 行为分析
        'behaviorAnalysis': '行为分析',
        'healthConcern': '健康关注度',
        'riskAvoidance': '风险规避度',
        'educationEmphasis': '教育重视度',
        'financialAwareness': '理财意识',
        'insuranceKnowledge': '保险认知',
        'serviceDependence': '服务依赖度',
        'customerPortrait': '客户画像',
        'similarCustomerAverage': '同类客户均值',
        
        // 互动历史
        'interactionHistory': '互动历史',
        'completedHealthRiskAssessment': '完成健康风险评估',
        'completedAssessmentDesc': '用户完成了全部健康风险评估问卷，风险评分为32分（中等风险）',
        'browsedCriticalIllnessProducts': '浏览重疾保险产品',
        'browsedProductsDesc': '用户浏览了3款重疾保险产品详情，停留时间共计8分钟',
        'uploadedHealthData': '上传健康数据',
        'uploadedHealthDataDesc': '用户上传了最新的体检报告，健康评分为85分',
        'registeredAccount': '注册账号',
        'registeredAccountDesc': '用户注册成功并完成了基本信息填写',
        
        // 保险推荐
        'insuranceRecommendation': '保险推荐',
        'userInterestedInsuranceCategories': '用户关注的保险类别',
        'criticalIllnessInsurance': '重疾保险',
        'educationInsurance': '教育金保险',
        'medicalInsurance': '医疗保险',
        'annuityInsurance': '年金保险',
        'personalizedRecommendedProducts': '个性化推荐产品',
        'premiumCriticalIllnessInsurance': '尊享e生重疾保险',
        'bestMatch': '最佳匹配',
        'comprehensiveCoverage': '全面覆盖100种重大疾病，保费稳定，终身保障，适合希望获得全面重疾保障的客户',
        'monthlyPremium': '月保费',
        'recommendationReason': '推荐理由',
        'criticalIllnessRecommendationReason': '基于客户家族病史和健康风险评估结果，提供全面重疾保障，满足客户健康保障需求',
        'specialHighlight': '特别亮点',
        'criticalIllnessHighlight': '含轻症保障，多次赔付设计，契合客户健康关注点',
        'excellentEducationInsurance': '优学教育金保险',
        'recommended': '推荐',
        'educationInsuranceDesc': '专为子女教育规划设计，在子女关键教育阶段提供教育金给付，兼具保障和储蓄功能',
        'educationRecommendationReason': '客户有8岁子女，关注子女教育规划，该产品可满足未来教育资金需求',
        'educationHighlight': '教育金分阶段给付，可灵活应对不同教育阶段的资金需求',
        'comfortMedicalInsurance': '安心医疗保险',
        'medicalInsuranceDesc': '高端医疗保险，提供百万医疗保障，覆盖住院、手术、特殊门诊等医疗费用',
        'medicalRecommendationReason': '补充客户基本医保，提供更全面的医疗保障，减轻潜在医疗负担',
        'medicalHighlight': '含国内外知名医院直付服务，免除客户垫付压力',
        
        // 推荐跟进行动
        'recommendedFollowUpActions': '推荐跟进行动',
        'scheduleProductIntroMeeting': '预约产品介绍会议',
        'scheduleProductIntroDesc': '客户近期频繁浏览重疾保险产品，建议尽快联系客户预约线上或线下会议，介绍尊享e生重疾保险产品详情。',
        'scheduleAppointment': '安排预约',
        'sendChildEducationPlan': '发送子女教育规划方案',
        'sendChildEducationPlanDesc': '根据客户子女年龄和教育需求，准备个性化的教育金规划方案，结合优学教育金保险产品，帮助客户理解长期教育规划的重要性。',
        'preparePlan': '准备方案',
        'familyProtectionPlanAssessment': '全家保障方案评估',
        'familyProtectionPlanDesc': '客户是家庭支柱，建议进行全家保障需求评估，制定家庭整体保险保障方案，包括配偶和子女的保险规划。',
        'arrangeAssessment': '安排评估',
        
        // 页脚
        'copyright': '© 2023 汇丰保险 版权所有',
        'advisorPlatform': '客户经理平台',
        'version': 'v2.5.0',
        'reportIssue': '反馈问题'
    },
    
    // 繁体中文
    'zh-TW': {
        // 页面标题
        'pageTitle': '客戶經理儀表板 - 健康智匯',
        
        // 導航
        'brandName': '健康智匯 - 客戶經理平台',
        'home': '首頁',
        'customerManagement': '客戶管理',
        'appointmentManagement': '預約管理',
        'performanceReport': '業績報表',
        'profile': '個人資料',
        'settings': '設置',
        'logout': '退出登錄',
        'manager': '張經理',
        
        // 麵包屑導航
        'breadcrumbHome': '首頁',
        'breadcrumbCustomerManagement': '客戶管理',
        'breadcrumbCustomerDetail': '客戶詳情',
        
        // 客戶信息
        'highValueCustomer': '高價值客戶',
        'customerId': '客戶ID',
        'registrationTime': '註冊時間',
        'contactCustomer': '聯繫客戶',
        'sendMessage': '發送消息',
        'scheduleConsultation': '預約咨詢',
        'age': '歲',
        'male': '男',
        'location': '上海市浦東新區',
        
        // 健康數據
        'healthDataSummary': '健康數據摘要',
        'healthScore': '健康評分',
        'bmiIndex': 'BMI指數',
        'bloodPressure': '血壓 (mmHg)',
        'bloodSugar': '血糖 (mmol/L)',
        
        // 風險評估
        'riskAssessmentResults': '風險評估結果',
        'riskScore': '風險評分',
        'mediumRisk': '中等風險',
        'higherThanAverage': '高於同齡人群平均水平',
        'mainRiskFactors': '主要風險因素',
        'familyHeartHistory': '家族心臟病史',
        'occasionalSmoking': '偶爾吸煙',
        'lightExerciseDeficiency': '輕度運動不足',
        'preventionSuggestions': '預防建議',
        'monitorBloodPressure': '定期監測血壓，減少鹽分攝入，增加有氧運動',
        'quitSmoking': '完全戒煙，避免被動吸煙',
        'weeklyExercise': '每週進行至少150分鐘的中等強度有氧運動',
        'healthyDiet': '保持健康飲食，增加蔬果攝入',
        'annualCheckup': '每年進行一次全面體檢',
        
        // 客戶畫像
        'customerProfile': '客戶畫像',
        'familySituation': '家庭情況',
        'married': '已婚',
        'oneChild': '1子女 (8歲)',
        'dualIncomeFamily': '雙職工家庭',
        'mortgageInProgress': '住房貸款中',
        'occupationAndIncome': '職業與收入',
        'itIndustry': 'IT行業',
        'middleManagement': '中層管理',
        'annualIncome': '年收入30-50萬',
        'highEducation': '高學歷',
        'lifestyle': '生活方式',
        'healthConscious': '關注健康',
        'highWorkPressure': '工作壓力大',
        'focusOnChildEducation': '注重子女教育',
        'travelEnthusiast': '旅行愛好者',
        'financialGoals': '財務目標',
        'childEducationPlanning': '子女教育規劃',
        'retirementPreparation': '退休養老準備',
        'healthMedicalProtection': '健康醫療保障',
        'wealthGrowth': '財富穩健增長',
        
        // 行為分析
        'behaviorAnalysis': '行為分析',
        'healthConcern': '健康關注度',
        'riskAvoidance': '風險規避度',
        'educationEmphasis': '教育重視度',
        'financialAwareness': '理財意識',
        'insuranceKnowledge': '保險認知',
        'serviceDependence': '服務依賴度',
        'customerPortrait': '客戶畫像',
        'similarCustomerAverage': '同類客戶均值',
        
        // 互動歷史
        'interactionHistory': '互動歷史',
        'completedHealthRiskAssessment': '完成健康風險評估',
        'completedAssessmentDesc': '用戶完成了全部健康風險評估問卷，風險評分為32分（中等風險）',
        'browsedCriticalIllnessProducts': '瀏覽重疾保險產品',
        'browsedProductsDesc': '用戶瀏覽了3款重疾保險產品詳情，停留時間共計8分鐘',
        'uploadedHealthData': '上傳健康數據',
        'uploadedHealthDataDesc': '用戶上傳了最新的體檢報告，健康評分為85分',
        'registeredAccount': '註冊賬號',
        'registeredAccountDesc': '用戶註冊成功並完成了基本信息填寫',
        
        // 保險推薦
        'insuranceRecommendation': '保險推薦',
        'userInterestedInsuranceCategories': '用戶關注的保險類別',
        'criticalIllnessInsurance': '重疾保險',
        'educationInsurance': '教育金保險',
        'medicalInsurance': '醫療保險',
        'annuityInsurance': '年金保險',
        'personalizedRecommendedProducts': '個性化推薦產品',
        'premiumCriticalIllnessInsurance': '尊享e生重疾保險',
        'bestMatch': '最佳匹配',
        'comprehensiveCoverage': '全面覆蓋100種重大疾病，保費穩定，終身保障，適合希望獲得全面重疾保障的客戶',
        'monthlyPremium': '月保費',
        'recommendationReason': '推薦理由',
        'criticalIllnessRecommendationReason': '基於客戶家族病史和健康風險評估結果，提供全面重疾保障，滿足客戶健康保障需求',
        'specialHighlight': '特別亮點',
        'criticalIllnessHighlight': '含輕症保障，多次賠付設計，契合客戶健康關注點',
        'excellentEducationInsurance': '優學教育金保險',
        'recommended': '推薦',
        'educationInsuranceDesc': '專為子女教育規劃設計，在子女關鍵教育階段提供教育金給付，兼具保障和儲蓄功能',
        'educationRecommendationReason': '客戶有8歲子女，關注子女教育規劃，該產品可滿足未來教育資金需求',
        'educationHighlight': '教育金分階段給付，可靈活應對不同教育階段的資金需求',
        'comfortMedicalInsurance': '安心醫療保險',
        'medicalInsuranceDesc': '高端醫療保險，提供百萬醫療保障，覆蓋住院、手術、特殊門診等醫療費用',
        'medicalRecommendationReason': '補充客戶基本醫保，提供更全面的醫療保障，減輕潛在醫療負擔',
        'medicalHighlight': '含國內外知名醫院直付服務，免除客戶墊付壓力',
        
        // 推薦跟進行動
        'recommendedFollowUpActions': '推薦跟進行動',
        'scheduleProductIntroMeeting': '預約產品介紹會議',
        'scheduleProductIntroDesc': '客戶近期頻繁瀏覽重疾保險產品，建議儘快聯繫客戶預約線上或線下會議，介紹尊享e生重疾保險產品詳情。',
        'scheduleAppointment': '安排預約',
        'sendChildEducationPlan': '發送子女教育規劃方案',
        'sendChildEducationPlanDesc': '根據客戶子女年齡和教育需求，準備個性化的教育金規劃方案，結合優學教育金保險產品，幫助客戶理解長期教育規劃的重要性。',
        'preparePlan': '準備方案',
        'familyProtectionPlanAssessment': '全家保障方案評估',
        'familyProtectionPlanDesc': '客戶是家庭支柱，建議進行全家保障需求評估，制定家庭整體保險保障方案，包括配偶和子女的保險規劃。',
        'arrangeAssessment': '安排評估',
        
        // 頁腳
        'copyright': '© 2023 匯豐保險 版權所有',
        'advisorPlatform': '客戶經理平台',
        'version': 'v2.5.0',
        'reportIssue': '反饋問題'
    },
    
    // 英文
    'en-US': {
        // 页面标题
        'pageTitle': 'Advisor Dashboard - Health Smart Hub',
        
        // Navigation
        'brandName': 'Health Smart Hub - Advisor Platform',
        'home': 'Home',
        'customerManagement': 'Customer Management',
        'appointmentManagement': 'Appointment Management',
        'performanceReport': 'Performance Report',
        'profile': 'Profile',
        'settings': 'Settings',
        'logout': 'Logout',
        'manager': 'Manager Zhang',
        
        // Breadcrumb Navigation
        'breadcrumbHome': 'Home',
        'breadcrumbCustomerManagement': 'Customer Management',
        'breadcrumbCustomerDetail': 'Customer Details',
        
        // Customer Information
        'highValueCustomer': 'High Value Customer',
        'customerId': 'Customer ID',
        'registrationTime': 'Registration Time',
        'contactCustomer': 'Contact Customer',
        'sendMessage': 'Send Message',
        'scheduleConsultation': 'Schedule Consultation',
        'age': 'years old',
        'male': 'Male',
        'location': 'Pudong New District, Shanghai',
        
        // Health Data
        'healthDataSummary': 'Health Data Summary',
        'healthScore': 'Health Score',
        'bmiIndex': 'BMI Index',
        'bloodPressure': 'Blood Pressure (mmHg)',
        'bloodSugar': 'Blood Sugar (mmol/L)',
        
        // Risk Assessment
        'riskAssessmentResults': 'Risk Assessment Results',
        'riskScore': 'Risk Score',
        'mediumRisk': 'Medium Risk',
        'higherThanAverage': 'Higher than average for same age group by',
        'mainRiskFactors': 'Main Risk Factors',
        'familyHeartHistory': 'Family history of heart disease',
        'occasionalSmoking': 'Occasional smoking',
        'lightExerciseDeficiency': 'Light exercise deficiency',
        'preventionSuggestions': 'Prevention Suggestions',
        'monitorBloodPressure': 'Regularly monitor blood pressure, reduce salt intake, increase aerobic exercise',
        'quitSmoking': 'Quit smoking completely, avoid passive smoking',
        'weeklyExercise': 'Engage in at least 150 minutes of moderate-intensity aerobic exercise weekly',
        'healthyDiet': 'Maintain a healthy diet, increase fruit and vegetable intake',
        'annualCheckup': 'Have a comprehensive physical examination annually',
        
        // Customer Profile
        'customerProfile': 'Customer Profile',
        'familySituation': 'Family Situation',
        'married': 'Married',
        'oneChild': '1 child (8 years old)',
        'dualIncomeFamily': 'Dual-income family',
        'mortgageInProgress': 'Mortgage in progress',
        'occupationAndIncome': 'Occupation & Income',
        'itIndustry': 'IT Industry',
        'middleManagement': 'Middle Management',
        'annualIncome': 'Annual income 300K-500K',
        'highEducation': 'Higher education',
        'lifestyle': 'Lifestyle',
        'healthConscious': 'Health conscious',
        'highWorkPressure': 'High work pressure',
        'focusOnChildEducation': 'Focus on child education',
        'travelEnthusiast': 'Travel enthusiast',
        'financialGoals': 'Financial Goals',
        'childEducationPlanning': 'Child education planning',
        'retirementPreparation': 'Retirement preparation',
        'healthMedicalProtection': 'Health & medical protection',
        'wealthGrowth': 'Steady wealth growth',
        
        // Behavior Analysis
        'behaviorAnalysis': 'Behavior Analysis',
        'healthConcern': 'Health Concern',
        'riskAvoidance': 'Risk Avoidance',
        'educationEmphasis': 'Education Emphasis',
        'financialAwareness': 'Financial Awareness',
        'insuranceKnowledge': 'Insurance Knowledge',
        'serviceDependence': 'Service Dependence',
        'customerPortrait': 'Customer Portrait',
        'similarCustomerAverage': 'Similar Customer Average',
        
        // Interaction History
        'interactionHistory': 'Interaction History',
        'completedHealthRiskAssessment': 'Completed Health Risk Assessment',
        'completedAssessmentDesc': 'User completed the entire health risk assessment questionnaire, with a risk score of 32 (medium risk)',
        'browsedCriticalIllnessProducts': 'Browsed Critical Illness Insurance Products',
        'browsedProductsDesc': 'User browsed details of 3 critical illness insurance products, with a total stay time of 8 minutes',
        'uploadedHealthData': 'Uploaded Health Data',
        'uploadedHealthDataDesc': 'User uploaded the latest medical examination report, with a health score of 85',
        'registeredAccount': 'Registered Account',
        'registeredAccountDesc': 'User successfully registered and completed basic information',
        
        // Insurance Recommendation
        'insuranceRecommendation': 'Insurance Recommendation',
        'userInterestedInsuranceCategories': 'User Interested Insurance Categories',
        'criticalIllnessInsurance': 'Critical Illness Insurance',
        'educationInsurance': 'Education Insurance',
        'medicalInsurance': 'Medical Insurance',
        'annuityInsurance': 'Annuity Insurance',
        'personalizedRecommendedProducts': 'Personalized Recommended Products',
        'premiumCriticalIllnessInsurance': 'Premium Critical Illness Insurance',
        'bestMatch': 'Best Match',
        'comprehensiveCoverage': 'Comprehensive coverage of 100 major diseases, stable premium, lifetime protection, suitable for customers seeking comprehensive critical illness protection',
        'monthlyPremium': 'Monthly Premium',
        'recommendationReason': 'Recommendation Reason',
        'criticalIllnessRecommendationReason': 'Based on the customer\'s family medical history and health risk assessment results, provides comprehensive critical illness protection to meet the customer\'s health protection needs',
        'specialHighlight': 'Special Highlight',
        'criticalIllnessHighlight': 'Includes minor illness protection, multiple payment design, aligns with customer\'s health concerns',
        'excellentEducationInsurance': 'Excellent Education Insurance',
        'recommended': 'Recommended',
        'educationInsuranceDesc': 'Designed specifically for children\'s education planning, provides education funds at key educational stages, combining protection and savings functions',
        'educationRecommendationReason': 'Customer has an 8-year-old child and focuses on education planning; this product can meet future educational funding needs',
        'educationHighlight': 'Education funds are paid in stages, flexibly addressing funding needs at different educational stages',
        'comfortMedicalInsurance': 'Comfort Medical Insurance',
        'medicalInsuranceDesc': 'High-end medical insurance, providing million-dollar medical coverage, covering hospitalization, surgery, special outpatient services, and other medical expenses',
        'medicalRecommendationReason': 'Supplements the customer\'s basic medical insurance, provides more comprehensive medical protection, and reduces potential medical burden',
        'medicalHighlight': 'Includes direct payment services at renowned domestic and international hospitals, eliminating the customer\'s need for advance payment',
        
        // Recommended Follow-up Actions
        'recommendedFollowUpActions': 'Recommended Follow-up Actions',
        'scheduleProductIntroMeeting': 'Schedule Product Introduction Meeting',
        'scheduleProductIntroDesc': 'Customer has recently frequently browsed critical illness insurance products. It is recommended to contact the customer as soon as possible to schedule an online or offline meeting to introduce the Premium Critical Illness Insurance product details.',
        'scheduleAppointment': 'Schedule Appointment',
        'sendChildEducationPlan': 'Send Child Education Planning Proposal',
        'sendChildEducationPlanDesc': 'Based on the customer\'s child\'s age and educational needs, prepare a personalized education fund planning proposal, combined with the Excellent Education Insurance product, to help the customer understand the importance of long-term education planning.',
        'preparePlan': 'Prepare Plan',
        'familyProtectionPlanAssessment': 'Family Protection Plan Assessment',
        'familyProtectionPlanDesc': 'The customer is the family\'s main provider. It is recommended to conduct a family protection needs assessment and develop an overall family insurance protection plan, including insurance planning for spouse and children.',
        'arrangeAssessment': 'Arrange Assessment',
        
        // Footer
        'copyright': '© 2023 HSBC Insurance. All rights reserved',
        'advisorPlatform': 'Advisor Platform',
        'version': 'v2.5.0',
        'reportIssue': 'Report Issue'
    }
};

// 默认语言
let currentAdvisorLanguage = 'zh-CN';

// 初始化语言
function initAdvisorLanguage() {
    // 检查本地存储中是否有语言设置
    const savedLanguage = localStorage.getItem('advisorLanguage');
    if (savedLanguage && advisorTranslations[savedLanguage]) {
        currentAdvisorLanguage = savedLanguage;
    }
    
    // 应用语言
    applyAdvisorLanguage();
}

// 切换语言
function changeAdvisorLanguage(lang) {
    if (advisorTranslations[lang]) {
        currentAdvisorLanguage = lang;
        localStorage.setItem('advisorLanguage', lang);
        applyAdvisorLanguage();
    }
}

// 应用语言
function applyAdvisorLanguage() {
    // 更新页面元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (advisorTranslations[currentAdvisorLanguage] && advisorTranslations[currentAdvisorLanguage][key]) {
            element.textContent = advisorTranslations[currentAdvisorLanguage][key];
        }
    });
    
    // 更新页面标题
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.getAttribute('data-i18n')) {
        const titleKey = titleElement.getAttribute('data-i18n');
        if (advisorTranslations[currentAdvisorLanguage] && advisorTranslations[currentAdvisorLanguage][titleKey]) {
            titleElement.textContent = advisorTranslations[currentAdvisorLanguage][titleKey];
        }
    }
    
    // 更新HTML的lang属性
    document.getElementById('advisor-html').setAttribute('lang', currentAdvisorLanguage);
}

// 页面加载完成后初始化语言
document.addEventListener('DOMContentLoaded', initAdvisorLanguage); 