<!DOCTYPE html>
<html lang="zh-CN" id="advisor-html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="pageTitle">客户经理仪表盘 - 健康智汇</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <!-- 引入字体图标库 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- 引入Bootstrap框架以提高开发效率和跨平台兼容性 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- 引入国际化支持脚本 -->
    <script src="js/advisor-i18n.js"></script>
    <style>
        /* 客户经理仪表盘专用样式 */
        .advisor-header {
            background-color: #333;
            color: white;
            padding: 1rem 0;
        }
        
        .advisor-header .brand-name {
            color: white;
            margin-left: 10px;
        }
        
        .dashboard-container {
            padding: 2rem 0;
        }
        
        .customer-card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            margin-bottom: 1.5rem;
        }
        
        .customer-header {
            background-color: var(--hsbc-red);
            color: white;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .customer-avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background-color: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #666;
            margin: 0 auto 1rem;
            border: 5px solid white;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }
        
        .status-badge {
            background-color: #28a745;
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 20px;
            font-size: 0.8rem;
        }
        
        .customer-actions a {
            color: white;
            margin-left: 0.5rem;
        }
        
        .section-title {
            border-bottom: 2px solid #eee;
            padding-bottom: 0.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        
        .metric-card {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 1rem;
            height: 100%;
        }
        
        .metric-card .value {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--hsbc-red);
            margin-bottom: 0.5rem;
        }
        
        .metric-card .label {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 0;
        }
        
        .risk-factor {
            display: flex;
            align-items: center;
            margin-bottom: 0.75rem;
        }
        
        .risk-factor i {
            width: 24px;
            margin-right: 0.5rem;
            color: var(--hsbc-red);
        }
        
        .profile-tag {
            display: inline-block;
            background-color: #f1f1f1;
            color: #555;
            padding: 0.35rem 0.75rem;
            border-radius: 20px;
            font-size: 0.85rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
        }
        
        .profile-tag.primary {
            background-color: #e5f0ff;
            color: #0066cc;
        }
        
        .profile-tag.secondary {
            background-color: #f0e5ff;
            color: #6600cc;
        }
        
        .profile-tag.success {
            background-color: #e5ffe5;
            color: #00aa00;
        }
        
        .profile-tag.warning {
            background-color: #fff5e5;
            color: #cc7700;
        }
        
        .profile-tag.info {
            background-color: #e5f5ff;
            color: #0099cc;
        }
        
        .interest-level {
            display: flex;
            align-items: center;
        }
        
        .interest-level .stars {
            color: #ffc107;
            margin-left: 0.5rem;
        }
        
        .recommendation-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
            transition: all 0.3s ease;
        }
        
        .recommendation-card:hover {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transform: translateY(-3px);
        }
        
        .recommendation-card .match-score {
            display: inline-block;
            background-color: #f1f8e9;
            color: #689f38;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-size: 0.8rem;
            margin-left: 0.5rem;
        }
        
        .recommendation-card .features {
            margin-top: 0.5rem;
            font-size: 0.9rem;
            color: #666;
        }
        
        .timeline {
            list-style: none;
            padding: 0;
            position: relative;
        }
        
        .timeline:before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 16px;
            width: 2px;
            background-color: #ddd;
        }
        
        .timeline li {
            margin-bottom: 1.5rem;
            padding-left: 40px;
            position: relative;
        }
        
        .timeline li .event-icon {
            position: absolute;
            left: 0;
            top: 0;
            width: 32px;
            height: 32px;
            background-color: white;
            border: 2px solid var(--hsbc-red);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--hsbc-red);
        }
        
        .timeline li .event-time {
            font-size: 0.8rem;
            color: #999;
            margin-bottom: 0.25rem;
        }
        
        .timeline li .event-title {
            font-weight: 600;
            margin-bottom: 0.25rem;
        }
        
        .timeline li .event-desc {
            font-size: 0.9rem;
            color: #666;
        }
        
        .action-card {
            background-color: #f9f9f9;
            border-left: 4px solid var(--hsbc-red);
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 0 4px 4px 0;
        }
        
        .action-card .action-title {
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        
        .action-card .action-desc {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 0.5rem;
        }
        
        .chart-container {
            height: 250px;
        }
    </style>
</head>
<body>
    <!-- 头部导航 -->
    <header class="advisor-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="images/tc-hsbc-logo-2.svg" alt="汇丰保险" class="logo" style="filter: brightness(10);">
                        <span class="brand-name" data-i18n="brandName">健康智汇 - 客户经理平台</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                    <i class="fas fa-home me-1"></i><span data-i18n="home">首页</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fas fa-users me-1"></i><span data-i18n="customerManagement">客户管理</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fas fa-calendar-alt me-1"></i><span data-i18n="appointmentManagement">预约管理</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fas fa-chart-bar me-1"></i><span data-i18n="performanceReport">业绩报表</span>
                                </a>
                            </li>
                            <!-- 语言切换下拉菜单 -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    <i class="fas fa-globe me-1"></i><span class="current-language">简体中文</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end language-menu">
                                    <li><a class="dropdown-item" href="#" data-lang="zh-CN">简体中文</a></li>
                                    <li><a class="dropdown-item" href="#" data-lang="zh-TW">繁體中文</a></li>
                                    <li><a class="dropdown-item" href="#" data-lang="en-US">English</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    <i class="fas fa-user-circle me-1"></i><span data-i18n="manager">张经理</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#" data-i18n="profile">个人资料</a></li>
                                    <li><a class="dropdown-item" href="#" data-i18n="settings">设置</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#" data-i18n="logout">退出登录</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <!-- 主要内容区域 -->
    <section class="dashboard-container">
        <div class="container">
            <!-- 面包屑导航 -->
            <nav aria-label="breadcrumb" class="mb-4">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#" data-i18n="breadcrumbHome">首页</a></li>
                    <li class="breadcrumb-item"><a href="#" data-i18n="breadcrumbCustomerManagement">客户管理</a></li>
                    <li class="breadcrumb-item active" aria-current="page" data-i18n="breadcrumbCustomerDetail">客户详情</li>
                </ol>
            </nav>
            
            <!-- 客户信息卡片 -->
            <div class="customer-card">
                <div class="customer-header">
                    <div>
                        <h3>王小明 <span class="status-badge" data-i18n="highValueCustomer">高价值客户</span></h3>
                        <p class="mb-0"><span data-i18n="customerId">客户ID</span>: C1000567 | <span data-i18n="registrationTime">注册时间</span>: 2023-03-15</p>
                    </div>
                    <div class="customer-actions">
                        <a href="#" class="btn btn-sm btn-outline-light">
                            <i class="fas fa-phone-alt me-1"></i><span data-i18n="contactCustomer">联系客户</span>
                        </a>
                        <a href="#" class="btn btn-sm btn-outline-light">
                            <i class="fas fa-envelope me-1"></i><span data-i18n="sendMessage">发送消息</span>
                        </a>
                        <a href="#" class="btn btn-sm btn-outline-light">
                            <i class="fas fa-calendar-plus me-1"></i><span data-i18n="scheduleConsultation">预约咨询</span>
                        </a>
                    </div>
                </div>
                
                <div class="customer-body p-4">
                    <div class="row">
                        <div class="col-md-3 text-center mb-4">
                            <div class="customer-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <h5>王小明</h5>
                            <p class="text-muted mb-1">35<span data-i18n="age">岁</span> | <span data-i18n="male">男</span></p>
                            <p class="text-muted mb-3" data-i18n="location">上海市浦东新区</p>
                            
                            <div class="contact-info">
                                <p class="mb-1"><i class="fas fa-phone-alt me-2"></i>138****1234</p>
                                <p class="mb-1"><i class="fas fa-envelope me-2"></i>wang****@example.com</p>
                                <p class="mb-1"><i class="fab fa-weixin me-2"></i>WXM_2023</p>
                            </div>
                        </div>
                        
                        <div class="col-md-9">
                            <h4 class="section-title" data-i18n="healthDataSummary">健康数据摘要</h4>
                            <div class="row mb-4">
                                <div class="col-md-3 mb-3">
                                    <div class="metric-card">
                                        <div class="value">85</div>
                                        <p class="label" data-i18n="healthScore">健康评分</p>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <div class="metric-card">
                                        <div class="value">23.5</div>
                                        <p class="label" data-i18n="bmiIndex">BMI指数</p>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <div class="metric-card">
                                        <div class="value">118/78</div>
                                        <p class="label" data-i18n="bloodPressure">血压 (mmHg)</p>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <div class="metric-card">
                                        <div class="value">5.4</div>
                                        <p class="label" data-i18n="bloodSugar">血糖 (mmol/L)</p>
                                    </div>
                                </div>
                            </div>
                            
                            <h4 class="section-title" data-i18n="riskAssessmentResults">风险评估结果</h4>
                            <div class="row mb-4">
                                <div class="col-md-6">
                                    <div class="risk-score d-flex align-items-center mb-3">
                                        <div class="chart-container me-3" style="width: 100px; height: 100px;">
                                            <canvas id="riskDonut"></canvas>
                                        </div>
                                        <div>
                                            <h5><span data-i18n="riskScore">风险评分</span>: 32</h5>
                                            <span class="badge bg-warning" data-i18n="mediumRisk">中等风险</span>
                                            <p class="text-muted mt-1 mb-0" data-i18n="higherThanAverage">高于同龄人群平均水平15%</p>
                                        </div>
                                    </div>
                                    
                                    <h6 class="mt-3" data-i18n="mainRiskFactors">主要风险因素:</h6>
                                    <div class="risk-factors mt-2">
                                        <div class="risk-factor">
                                            <i class="fas fa-dna"></i>
                                            <span data-i18n="familyHeartHistory">家族心脏病史</span>
                                        </div>
                                        <div class="risk-factor">
                                            <i class="fas fa-smoking"></i>
                                            <span data-i18n="occasionalSmoking">偶尔吸烟</span>
                                        </div>
                                        <div class="risk-factor">
                                            <i class="fas fa-running"></i>
                                            <span data-i18n="lightExerciseDeficiency">轻度运动不足</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <h6 data-i18n="preventionSuggestions">预防建议:</h6>
                                    <ul class="prevention-tips">
                                        <li data-i18n="monitorBloodPressure">定期监测血压，减少盐分摄入，增加有氧运动</li>
                                        <li data-i18n="quitSmoking">完全戒烟，避免被动吸烟</li>
                                        <li data-i18n="weeklyExercise">每周进行至少150分钟的中等强度有氧运动</li>
                                        <li data-i18n="healthyDiet">保持健康饮食，增加蔬果摄入</li>
                                        <li data-i18n="annualCheckup">每年进行一次全面体检</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 客户画像与推荐 -->
            <div class="row">
                <div class="col-md-6">
                    <div class="customer-card">
                        <div class="p-4">
                            <h4 class="section-title" data-i18n="customerProfile">客户画像</h4>
                            
                            <div class="profile-section mb-4">
                                <h6 data-i18n="familySituation">家庭情况</h6>
                                <div class="profile-tags mb-3">
                                    <span class="profile-tag primary" data-i18n="married">已婚</span>
                                    <span class="profile-tag primary" data-i18n="oneChild">1子女 (8岁)</span>
                                    <span class="profile-tag primary" data-i18n="dualIncomeFamily">双职工家庭</span>
                                    <span class="profile-tag primary" data-i18n="mortgageInProgress">住房贷款中</span>
                                </div>
                                
                                <h6 data-i18n="occupationAndIncome">职业与收入</h6>
                                <div class="profile-tags mb-3">
                                    <span class="profile-tag secondary" data-i18n="itIndustry">IT行业</span>
                                    <span class="profile-tag secondary" data-i18n="middleManagement">中层管理</span>
                                    <span class="profile-tag secondary" data-i18n="annualIncome">年收入30-50万</span>
                                    <span class="profile-tag secondary" data-i18n="highEducation">高学历</span>
                                </div>
                                
                                <h6 data-i18n="lifestyle">生活方式</h6>
                                <div class="profile-tags mb-3">
                                    <span class="profile-tag success" data-i18n="healthConscious">关注健康</span>
                                    <span class="profile-tag warning" data-i18n="highWorkPressure">工作压力大</span>
                                    <span class="profile-tag info" data-i18n="focusOnChildEducation">注重子女教育</span>
                                    <span class="profile-tag" data-i18n="travelEnthusiast">旅行爱好者</span>
                                </div>
                                
                                <h6 data-i18n="financialGoals">财务目标</h6>
                                <div class="profile-tags mb-3">
                                    <span class="profile-tag info" data-i18n="childEducationPlanning">子女教育规划</span>
                                    <span class="profile-tag info" data-i18n="retirementPreparation">退休养老准备</span>
                                    <span class="profile-tag warning" data-i18n="healthMedicalProtection">健康医疗保障</span>
                                    <span class="profile-tag success" data-i18n="wealthGrowth">财富稳健增长</span>
                                </div>
                            </div>
                            
                            <h4 class="section-title" data-i18n="behaviorAnalysis">行为分析</h4>
                            <div class="row mb-4">
                                <div class="col-md-12">
                                    <div class="chart-container">
                                        <canvas id="behaviorChart"></canvas>
                                    </div>
                                </div>
                            </div>
                            
                            <h4 class="section-title" data-i18n="interactionHistory">互动历史</h4>
                            <ul class="timeline">
                                <li>
                                    <div class="event-icon">
                                        <i class="fas fa-file-alt"></i>
                                    </div>
                                    <div class="event-time">2023-05-18 09:32</div>
                                    <div class="event-title" data-i18n="completedHealthRiskAssessment">完成健康风险评估</div>
                                    <div class="event-desc" data-i18n="completedAssessmentDesc">用户完成了全部健康风险评估问卷，风险评分为32分（中等风险）</div>
                                </li>
                                <li>
                                    <div class="event-icon">
                                        <i class="fas fa-search"></i>
                                    </div>
                                    <div class="event-time">2023-05-15 16:45</div>
                                    <div class="event-title" data-i18n="browsedCriticalIllnessProducts">浏览重疾保险产品</div>
                                    <div class="event-desc" data-i18n="browsedProductsDesc">用户浏览了3款重疾保险产品详情，停留时间共计8分钟</div>
                                </li>
                                <li>
                                    <div class="event-icon">
                                        <i class="fas fa-upload"></i>
                                    </div>
                                    <div class="event-time">2023-05-10 14:20</div>
                                    <div class="event-title" data-i18n="uploadedHealthData">上传健康数据</div>
                                    <div class="event-desc" data-i18n="uploadedHealthDataDesc">用户上传了最新的体检报告，健康评分为85分</div>
                                </li>
                                <li>
                                    <div class="event-icon">
                                        <i class="fas fa-user-plus"></i>
                                    </div>
                                    <div class="event-time">2023-03-15 10:05</div>
                                    <div class="event-title" data-i18n="registeredAccount">注册账号</div>
                                    <div class="event-desc" data-i18n="registeredAccountDesc">用户注册成功并完成了基本信息填写</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="customer-card">
                        <div class="p-4">
                            <h4 class="section-title" data-i18n="insuranceRecommendation">保险推荐</h4>
                            
                            <div class="interest-section mb-4">
                                <h6 data-i18n="userInterestedInsuranceCategories">用户关注的保险类别</h6>
                                <div class="d-flex flex-wrap">
                                    <div class="interest-level me-4 mb-3">
                                        <span data-i18n="criticalIllnessInsurance">重疾保险:</span>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div class="interest-level me-4 mb-3">
                                        <span data-i18n="educationInsurance">教育金保险:</span>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div class="interest-level me-4 mb-3">
                                        <span data-i18n="medicalInsurance">医疗保险:</span>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div class="interest-level me-4 mb-3">
                                        <span data-i18n="annuityInsurance">年金保险:</span>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="recommendations mb-4">
                                <h6 data-i18n="personalizedRecommendedProducts">个性化推荐产品</h6>
                                
                                <div class="recommendation-card">
                                    <h5>
                                        <span data-i18n="premiumCriticalIllnessInsurance">尊享e生重疾保险</span>
                                        <span class="match-score" data-i18n="bestMatch">最佳匹配</span>
                                    </h5>
                                    <p class="mb-2" data-i18n="comprehensiveCoverage">全面覆盖100种重大疾病，保费稳定，终身保障，适合希望获得全面重疾保障的客户</p>
                                    <div class="features">
                                        <div class="mb-1"><strong data-i18n="monthlyPremium">月保费:</strong> 600-800元</div>
                                        <div class="mb-1"><strong data-i18n="recommendationReason">推荐理由:</strong> <span data-i18n="criticalIllnessRecommendationReason">基于客户家族病史和健康风险评估结果，提供全面重疾保障，满足客户健康保障需求</span></div>
                                        <div><strong data-i18n="specialHighlight">特别亮点:</strong> <span data-i18n="criticalIllnessHighlight">含轻症保障，多次赔付设计，契合客户健康关注点</span></div>
                                    </div>
                                </div>
                                
                                <div class="recommendation-card">
                                    <h5>
                                        <span data-i18n="excellentEducationInsurance">优学教育金保险</span>
                                        <span class="match-score" data-i18n="recommended">推荐</span>
                                    </h5>
                                    <p class="mb-2" data-i18n="educationInsuranceDesc">专为子女教育规划设计，在子女关键教育阶段提供教育金给付，兼具保障和储蓄功能</p>
                                    <div class="features">
                                        <div class="mb-1"><strong data-i18n="monthlyPremium">月保费:</strong> 1000-1500元</div>
                                        <div class="mb-1"><strong data-i18n="recommendationReason">推荐理由:</strong> <span data-i18n="educationRecommendationReason">客户有8岁子女，关注子女教育规划，该产品可满足未来教育资金需求</span></div>
                                        <div><strong data-i18n="specialHighlight">特别亮点:</strong> <span data-i18n="educationHighlight">教育金分阶段给付，可灵活应对不同教育阶段的资金需求</span></div>
                                    </div>
                                </div>
                                
                                <div class="recommendation-card">
                                    <h5>
                                        <span data-i18n="comfortMedicalInsurance">安心医疗保险</span>
                                        <span class="match-score" data-i18n="recommended">推荐</span>
                                    </h5>
                                    <p class="mb-2" data-i18n="medicalInsuranceDesc">高端医疗保险，提供百万医疗保障，覆盖住院、手术、特殊门诊等医疗费用</p>
                                    <div class="features">
                                        <div class="mb-1"><strong data-i18n="monthlyPremium">月保费:</strong> 300-500元</div>
                                        <div class="mb-1"><strong data-i18n="recommendationReason">推荐理由:</strong> <span data-i18n="medicalRecommendationReason">补充客户基本医保，提供更全面的医疗保障，减轻潜在医疗负担</span></div>
                                        <div><strong data-i18n="specialHighlight">特别亮点:</strong> <span data-i18n="medicalHighlight">含国内外知名医院直付服务，免除客户垫付压力</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <h4 class="section-title" data-i18n="recommendedFollowUpActions">推荐跟进行动</h4>
                            <div class="action-cards">
                                <div class="action-card">
                                    <div class="action-title">
                                        <i class="fas fa-calendar-alt me-2"></i><span data-i18n="scheduleProductIntroMeeting">预约产品介绍会议</span>
                                    </div>
                                    <div class="action-desc" data-i18n="scheduleProductIntroDesc">客户近期频繁浏览重疾保险产品，建议尽快联系客户预约线上或线下会议，介绍尊享e生重疾保险产品详情。</div>
                                    <a href="#" class="btn btn-sm btn-hsbc" data-i18n="scheduleAppointment">安排预约</a>
                                </div>
                                
                                <div class="action-card">
                                    <div class="action-title">
                                        <i class="fas fa-file-alt me-2"></i><span data-i18n="sendChildEducationPlan">发送子女教育规划方案</span>
                                    </div>
                                    <div class="action-desc" data-i18n="sendChildEducationPlanDesc">根据客户子女年龄和教育需求，准备个性化的教育金规划方案，结合优学教育金保险产品，帮助客户理解长期教育规划的重要性。</div>
                                    <a href="#" class="btn btn-sm btn-hsbc" data-i18n="preparePlan">准备方案</a>
                                </div>
                                
                                <div class="action-card">
                                    <div class="action-title">
                                        <i class="fas fa-user-friends me-2"></i><span data-i18n="familyProtectionPlanAssessment">全家保障方案评估</span>
                                    </div>
                                    <div class="action-desc" data-i18n="familyProtectionPlanDesc">客户是家庭支柱，建议进行全家保障需求评估，制定家庭整体保险保障方案，包括配偶和子女的保险规划。</div>
                                    <a href="#" class="btn btn-sm btn-hsbc" data-i18n="arrangeAssessment">安排评估</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-0" data-i18n="copyright">© 2023 汇丰保险 版权所有</p>
                </div>
                <div class="col-md-6 text-end">
                    <p class="mb-0"><span data-i18n="advisorPlatform">客户经理平台</span> <span data-i18n="version">v2.5.0</span> | <a href="#" class="text-white" data-i18n="reportIssue">反馈问题</a></p>
                </div>
            </div>
        </div>
    </footer>

    <!-- JS依赖 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // 风险评分图表
            const riskCtx = document.getElementById('riskDonut').getContext('2d');
            const riskChart = new Chart(riskCtx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [32, 68],
                        backgroundColor: [
                            '#ffc107',
                            '#f5f5f5'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    cutout: '70%',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            enabled: false
                        },
                        legend: {
                            display: false
                        }
                    }
                }
            });
            
            // 行为分析图表
            const behaviorCtx = document.getElementById('behaviorChart').getContext('2d');
            const behaviorChart = new Chart(behaviorCtx, {
                type: 'radar',
                data: {
                    labels: [
                        advisorTranslations[currentAdvisorLanguage].healthConcern,
                        advisorTranslations[currentAdvisorLanguage].riskAvoidance,
                        advisorTranslations[currentAdvisorLanguage].educationEmphasis,
                        advisorTranslations[currentAdvisorLanguage].financialAwareness,
                        advisorTranslations[currentAdvisorLanguage].insuranceKnowledge,
                        advisorTranslations[currentAdvisorLanguage].serviceDependence
                    ],
                    datasets: [{
                        label: advisorTranslations[currentAdvisorLanguage].customerPortrait,
                        data: [85, 70, 90, 65, 75, 55],
                        backgroundColor: 'rgba(219, 0, 17, 0.2)',
                        borderColor: 'rgba(219, 0, 17, 1)',
                        pointBackgroundColor: 'rgba(219, 0, 17, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(219, 0, 17, 1)'
                    }, {
                        label: advisorTranslations[currentAdvisorLanguage].similarCustomerAverage,
                        data: [65, 60, 70, 60, 60, 50],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
                    }]
                },
                options: {
                    scales: {
                        r: {
                            max: 100,
                            min: 0,
                            ticks: {
                                stepSize: 20,
                                display: false
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.raw + '%';
                                }
                            }
                        }
                    }
                }
            });
            
            // 初始化语言设置
            initAdvisorLanguage();
            
            // 为语言切换按钮添加事件监听
            document.querySelectorAll('.language-menu .dropdown-item').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const lang = this.getAttribute('data-lang');
                    changeAdvisorLanguage(lang);
                    document.querySelector('.current-language').textContent = this.textContent;
                });
            });
        });
    </script>
</body>
</html> 