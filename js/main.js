// 主要JavaScript功能

document.addEventListener('DOMContentLoaded', function() {
    // 初始化文件上传功能
    initFileUpload();
    
    // 初始化健康数据表单提交
    initHealthDataForm();
    
    // 初始化风险评估表单提交
    initRiskAssessmentForm();
    
    // 初始化保险推荐表单提交
    initInsuranceRecommendationForm();
    
    // 平滑滚动
    initSmoothScroll();
});

// 文件上传功能
function initFileUpload() {
    const uploadArea = document.querySelector('.upload-area');
    const fileInput = document.getElementById('file-upload');
    
    if (!uploadArea || !fileInput) return;
    
    // 拖拽上传
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('active');
    });
    
    uploadArea.addEventListener('dragleave', function() {
        uploadArea.classList.remove('active');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('active');
        
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    });
    
    // 点击上传
    fileInput.addEventListener('change', function() {
        if (this.files.length) {
            handleFiles(this.files);
        }
    });
}

// 处理上传的文件
function handleFiles(files) {
    // 在实际应用中，这里会将文件发送到服务器进行处理
    // 这里仅做演示，显示上传的文件名
    const fileNames = Array.from(files).map(file => file.name).join(', ');
    
    // 创建一个模拟的上传成功消息
    const uploadArea = document.querySelector('.upload-area');
    
    // 清空上传区域
    const originalContent = uploadArea.innerHTML;
    uploadArea.innerHTML = `
        <div class="upload-success">
            <div class="upload-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <p>文件上传成功: ${fileNames}</p>
            <p>正在分析您的健康数据...</p>
            <div class="spinner-border text-danger mt-3" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
    
    // 模拟分析过程
    setTimeout(() => {
        // 显示分析结果
        showHealthAnalysisResults();
    }, 3000);
}

// 健康数据表单提交
function initHealthDataForm() {
    const form = document.getElementById('health-data-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const height = document.getElementById('height').value;
        const weight = document.getElementById('weight').value;
        const systolic = document.getElementById('systolic').value;
        const diastolic = document.getElementById('diastolic').value;
        const bloodSugar = document.getElementById('bloodSugar').value;
        
        // 在实际应用中，这里会将数据发送到服务器进行处理
        // 这里仅做演示，显示一个加载状态
        const formContainer = form.parentElement;
        const originalContent = formContainer.innerHTML;
        
        formContainer.innerHTML = `
            <div class="text-center py-5">
                <p>正在分析您的健康数据...</p>
                <div class="spinner-border text-danger mt-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `;
        
        // 模拟分析过程
        setTimeout(() => {
            // 显示分析结果
            showHealthAnalysisResults();
        }, 2000);
    });
}

// 显示健康分析结果
function showHealthAnalysisResults() {
    // 获取健康分析卡片容器
    const container = document.querySelector('.health-analysis-section .card-body');
    
    if (!container) return;
    
    // 模拟分析结果
    const healthScore = Math.floor(Math.random() * 30) + 70; // 70-100之间的随机数
    const bmiValue = (Math.random() * 5 + 20).toFixed(1); // 20-25之间的随机数
    
    // 生成健康建议
    const recommendations = [
        '增加每日蔬果摄入量，保持均衡饮食',
        '每周进行至少150分钟的中等强度有氧运动',
        '保持充足的睡眠，每晚7-8小时',
        '减少高盐高糖食品的摄入',
        '定期监测血压和血糖水平'
    ];
    
    // 随机选择3个建议
    const selectedRecommendations = [];
    while (selectedRecommendations.length < 3) {
        const randomIndex = Math.floor(Math.random() * recommendations.length);
        if (!selectedRecommendations.includes(recommendations[randomIndex])) {
            selectedRecommendations.push(recommendations[randomIndex]);
        }
    }
    
    // 更新容器内容
    container.innerHTML = `
        <h3 class="text-center mb-4" data-i18n="analysisResults">健康分析结果</h3>
        
        <div class="row mb-4">
            <div class="col-md-6">
                <div class="health-score-container text-center">
                    <div class="health-score">
                        <div class="score-value">${healthScore}</div>
                        <canvas id="healthScoreChart" width="200" height="200"></canvas>
                    </div>
                    <h4 class="mt-3" data-i18n="healthScore">健康评分</h4>
                    <p class="text-muted" data-i18n="scoreRange">范围: 0-100</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="health-metrics">
                    <h4 class="mb-3" data-i18n="keyMetrics">关键指标</h4>
                    <div class="metric-item">
                        <div class="d-flex justify-content-between">
                            <span data-i18n="bmi">体质指数 (BMI)</span>
                            <span>${bmiValue}</span>
                        </div>
                        <div class="progress mt-2">
                            <div class="progress-bar bg-success" role="progressbar" style="width: ${(bmiValue - 18) / 12 * 100}%" aria-valuenow="${bmiValue}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small class="text-muted" data-i18n="normalRange">正常范围: 18.5-24.9</small>
                    </div>
                    
                    <div class="metric-item mt-4">
                        <div class="d-flex justify-content-between">
                            <span data-i18n="bloodPressureStatus">血压状态</span>
                            <span data-i18n="normal">正常</span>
                        </div>
                        <div class="progress mt-2">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    
                    <div class="metric-item mt-4">
                        <div class="d-flex justify-content-between">
                            <span data-i18n="bloodSugarStatus">血糖状态</span>
                            <span data-i18n="normal">正常</span>
                        </div>
                        <div class="progress mt-2">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="recommendations mt-5">
            <h4 class="mb-3" data-i18n="healthRecommendations">健康建议</h4>
            <ul class="recommendation-list">
                ${selectedRecommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        </div>
        
        <div class="text-center mt-5">
            <a href="#risk-assessment" class="btn btn-hsbc" data-i18n="continueToRiskAssessment">继续进行风险评估</a>
            <button class="btn btn-outline-secondary ms-2" onclick="resetHealthAnalysis()" data-i18n="startOver">重新开始</button>
        </div>
    `;
    
    // 初始化健康评分图表
    initHealthScoreChart(healthScore);
    
    // 重新应用语言
    applyLanguage();
}

// 初始化健康评分图表
function initHealthScoreChart(score) {
    const ctx = document.getElementById('healthScoreChart');
    
    if (!ctx) return;
    
    const healthScoreChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [score, 100 - score],
                backgroundColor: [
                    '#db0011',
                    '#f5f5f5'
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '80%',
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
}

// 重置健康分析
function resetHealthAnalysis() {
    // 重新加载页面或重置表单
    window.location.href = '#health-analysis';
    location.reload();
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 减去导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 初始化风险评估表单提交
function initRiskAssessmentForm() {
    const form = document.getElementById('risk-assessment-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const diabetesHistory = document.getElementById('history-diabetes').checked;
        const heartHistory = document.getElementById('history-heart').checked;
        const hypertensionHistory = document.getElementById('history-hypertension').checked;
        const cancerHistory = document.getElementById('history-cancer').checked;
        const smokingStatus = document.getElementById('smoking-status').value;
        const alcoholConsumption = document.getElementById('alcohol-consumption').value;
        const exerciseFrequency = document.getElementById('exercise-frequency').value;
        const sleepQuality = document.getElementById('sleep-quality').value;
        
        // 显示加载状态
        const formContainer = form.parentElement;
        formContainer.innerHTML = `
            <div class="text-center py-5">
                <p data-i18n="assessingRisk">正在评估您的健康风险...</p>
                <div class="spinner-border text-danger mt-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `;
        
        // 模拟分析过程
        setTimeout(() => {
            // 显示风险评估结果
            showRiskAssessmentResults(
                diabetesHistory, 
                heartHistory, 
                hypertensionHistory, 
                cancerHistory, 
                smokingStatus, 
                alcoholConsumption, 
                exerciseFrequency, 
                sleepQuality
            );
        }, 2000);
    });
}

// 显示风险评估结果
function showRiskAssessmentResults(diabetesHistory, heartHistory, hypertensionHistory, cancerHistory, smokingStatus, alcoholConsumption, exerciseFrequency, sleepQuality) {
    // 获取风险评估结果容器
    const container = document.querySelector('.risk-assessment-section .card-body');
    
    if (!container) return;
    
    // 计算风险分数（这里是简化的示例）
    let riskScore = 0;
    
    // 家族病史风险
    if (diabetesHistory) riskScore += 10;
    if (heartHistory) riskScore += 15;
    if (hypertensionHistory) riskScore += 12;
    if (cancerHistory) riskScore += 18;
    
    // 生活方式风险
    if (smokingStatus === 'current') riskScore += 25;
    else if (smokingStatus === 'former') riskScore += 10;
    
    if (alcoholConsumption === 'heavy') riskScore += 20;
    else if (alcoholConsumption === 'moderate') riskScore += 8;
    else if (alcoholConsumption === 'occasional') riskScore += 3;
    
    if (exerciseFrequency === 'sedentary') riskScore += 15;
    else if (exerciseFrequency === 'light') riskScore += 8;
    else if (exerciseFrequency === 'moderate') riskScore -= 5;
    else if (exerciseFrequency === 'active') riskScore -= 10;
    
    if (sleepQuality === 'poor') riskScore += 12;
    else if (sleepQuality === 'fair') riskScore += 5;
    else if (sleepQuality === 'good') riskScore -= 5;
    else if (sleepQuality === 'excellent') riskScore -= 10;
    
    // 确保分数在合理范围内
    riskScore = Math.max(0, Math.min(100, riskScore));
    
    // 根据分数确定风险等级
    let riskLevel, riskLevelClass, riskDescription;
    
    if (riskScore < 20) {
        riskLevel = '低风险';
        riskLevelClass = 'success';
        riskDescription = '您的健康风险较低，继续保持健康的生活方式。';
    } else if (riskScore < 50) {
        riskLevel = '中等风险';
        riskLevelClass = 'warning';
        riskDescription = '您有一些健康风险因素，建议采取预防措施。';
    } else {
        riskLevel = '高风险';
        riskLevelClass = 'danger';
        riskDescription = '您的健康风险较高，建议尽快咨询医疗专业人士。';
    }
    
    // 生成预防建议
    const preventionTips = generatePreventionTips(diabetesHistory, heartHistory, hypertensionHistory, cancerHistory, smokingStatus, alcoholConsumption, exerciseFrequency, sleepQuality);
    
    // 更新容器内容
    container.innerHTML = `
        <h3 class="text-center mb-4" data-i18n="riskAssessmentResults">健康风险评估结果</h3>
        
        <div class="row mb-4">
            <div class="col-md-6">
                <div class="risk-score-container text-center">
                    <div class="risk-score">
                        <div class="score-value">${riskScore}</div>
                        <canvas id="riskScoreChart" width="200" height="200"></canvas>
                    </div>
                    <h4 class="mt-3" data-i18n="riskScore">风险评分</h4>
                    <p class="text-muted" data-i18n="scoreRange">范围: 0-100</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="risk-level-container">
                    <h4 class="mb-3" data-i18n="riskLevel">风险等级</h4>
                    <div class="alert alert-${riskLevelClass}">
                        <h5>${riskLevel}</h5>
                        <p>${riskDescription}</p>
                    </div>
                    
                    <div class="mt-4">
                        <h4 class="mb-3" data-i18n="keyRiskFactors">主要风险因素</h4>
                        <ul class="risk-factors-list">
                            ${diabetesHistory ? '<li data-i18n="diabetesRisk">家族糖尿病史增加了您的风险</li>' : ''}
                            ${heartHistory ? '<li data-i18n="heartDiseaseRisk">家族心脏病史增加了您的风险</li>' : ''}
                            ${hypertensionHistory ? '<li data-i18n="hypertensionRisk">家族高血压史增加了您的风险</li>' : ''}
                            ${cancerHistory ? '<li data-i18n="cancerRisk">家族癌症史增加了您的风险</li>' : ''}
                            ${smokingStatus === 'current' ? '<li data-i18n="smokingRisk">吸烟显著增加了您的健康风险</li>' : ''}
                            ${alcoholConsumption === 'heavy' ? '<li data-i18n="alcoholRisk">大量饮酒增加了您的健康风险</li>' : ''}
                            ${exerciseFrequency === 'sedentary' ? '<li data-i18n="exerciseRisk">缺乏运动增加了您的健康风险</li>' : ''}
                            ${sleepQuality === 'poor' ? '<li data-i18n="sleepRisk">睡眠不足增加了您的健康风险</li>' : ''}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="prevention-tips mt-4">
            <h4 class="mb-3" data-i18n="preventionTips">预防建议</h4>
            <ul class="prevention-tips-list">
                ${preventionTips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
        
        <div class="share-container mt-5">
            <h4 class="mb-3" data-i18n="shareResults">分享您的结果</h4>
            <p data-i18n="shareDescription">与亲友分享您的健康风险评估结果，共同关注健康</p>
            
            <div class="share-buttons">
                <button class="btn btn-outline-primary me-2" onclick="generateShareCard()" data-i18n="generateShareCard">
                    <i class="fas fa-share-alt me-2"></i>生成分享卡片
                </button>
                <button class="btn btn-outline-success me-2" onclick="shareToWechat()" data-i18n="shareToWechat">
                    <i class="fab fa-weixin me-2"></i>分享到微信
                </button>
                <button class="btn btn-outline-danger" onclick="shareToWeibo()" data-i18n="shareToWeibo">
                    <i class="fab fa-weibo me-2"></i>分享到微博
                </button>
            </div>
            
            <div id="share-card-container" class="mt-4 d-none">
                <!-- 分享卡片将在这里显示 -->
            </div>
        </div>
        
        <div class="text-center mt-5">
            <a href="#insurance-recommendation" class="btn btn-hsbc" data-i18n="continueToInsurance">继续查看保险推荐</a>
            <button class="btn btn-outline-secondary ms-2" onclick="resetRiskAssessment()" data-i18n="startOver">重新开始</button>
        </div>
    `;
    
    // 初始化风险评分图表
    initRiskScoreChart(riskScore);
    
    // 重新应用语言
    applyLanguage();
}

// 生成预防建议
function generatePreventionTips(diabetesHistory, heartHistory, hypertensionHistory, cancerHistory, smokingStatus, alcoholConsumption, exerciseFrequency, sleepQuality) {
    const tips = [];
    
    // 基于家族病史的建议
    if (diabetesHistory) {
        tips.push('定期监测血糖水平，保持健康饮食习惯，控制碳水化合物摄入');
    }
    
    if (heartHistory || hypertensionHistory) {
        tips.push('定期监测血压，减少盐分摄入，增加有氧运动');
        tips.push('保持健康体重，避免高脂肪食品');
    }
    
    if (cancerHistory) {
        tips.push('定期进行相关癌症筛查，避免接触已知致癌物质');
        tips.push('保持健康饮食，增加蔬果摄入');
    }
    
    // 基于生活方式的建议
    if (smokingStatus === 'current') {
        tips.push('尽快戒烟，可寻求专业戒烟辅导');
    } else if (smokingStatus === 'former') {
        tips.push('继续保持不吸烟的习惯，避免二手烟环境');
    }
    
    if (alcoholConsumption === 'heavy' || alcoholConsumption === 'moderate') {
        tips.push('减少酒精摄入，男性每日不超过2个标准杯，女性不超过1个标准杯');
    }
    
    if (exerciseFrequency === 'sedentary' || exerciseFrequency === 'light') {
        tips.push('增加身体活动，每周至少进行150分钟中等强度有氧运动');
        tips.push('减少久坐时间，每小时起身活动几分钟');
    }
    
    if (sleepQuality === 'poor' || sleepQuality === 'fair') {
        tips.push('改善睡眠环境，保持规律的睡眠时间');
        tips.push('睡前避免使用电子设备，减少咖啡因摄入');
    }
    
    // 通用健康建议
    const generalTips = [
        '保持均衡饮食，多摄入蔬菜、水果、全谷物和优质蛋白',
        '保持充足的水分摄入，每天至少8杯水',
        '管理压力，尝试冥想、深呼吸或其他放松技巧',
        '定期体检，及时发现健康问题'
    ];
    
    // 随机选择2个通用建议
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * generalTips.length);
        if (!tips.includes(generalTips[randomIndex])) {
            tips.push(generalTips[randomIndex]);
        }
    }
    
    return tips;
}

// 初始化风险评分图表
function initRiskScoreChart(score) {
    const ctx = document.getElementById('riskScoreChart');
    
    if (!ctx) return;
    
    // 根据分数确定颜色
    let color;
    if (score < 20) {
        color = '#28a745'; // 绿色 - 低风险
    } else if (score < 50) {
        color = '#ffc107'; // 黄色 - 中等风险
    } else {
        color = '#dc3545'; // 红色 - 高风险
    }
    
    const riskScoreChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [score, 100 - score],
                backgroundColor: [
                    color,
                    '#f5f5f5'
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '80%',
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
}

// 重置风险评估
function resetRiskAssessment() {
    window.location.href = '#risk-assessment';
    location.reload();
}

// 生成分享卡片
function generateShareCard() {
    const container = document.getElementById('share-card-container');
    
    if (!container) return;
    
    // 显示加载状态
    container.innerHTML = `
        <div class="text-center py-3">
            <p data-i18n="generatingCard">正在生成分享卡片...</p>
            <div class="spinner-border text-danger mt-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
    container.classList.remove('d-none');
    
    // 模拟生成过程
    setTimeout(() => {
        // 获取用户年龄（这里模拟一个随机年龄）
        const age = Math.floor(Math.random() * 40) + 20; // 20-60岁
        
        // 获取风险评分
        const riskScoreElement = document.querySelector('.score-value');
        const riskScore = riskScoreElement ? riskScoreElement.textContent : '0';
        
        // 获取风险等级
        const riskLevelElement = document.querySelector('.alert h5');
        const riskLevel = riskLevelElement ? riskLevelElement.textContent : '未知';
        
        // 生成分享卡片
        container.innerHTML = `
            <div class="share-card">
                <div class="share-card-header">
                    <img src="images/tc-hsbc-logo-2.svg" alt="汇丰保险" class="share-card-logo">
                    <h5 data-i18n="healthRiskReport">健康风险报告</h5>
                </div>
                <div class="share-card-body">
                    <div class="share-card-avatar">
                        <i class="fas fa-user-circle"></i>
                        <p>${age}岁</p>
                    </div>
                    <div class="share-card-info">
                        <div class="share-card-score">
                            <div class="score-circle">
                                <span>${riskScore}</span>
                            </div>
                            <p data-i18n="riskScore">风险评分</p>
                        </div>
                        <div class="share-card-level">
                            <h6 data-i18n="riskLevel">风险等级</h6>
                            <p>${riskLevel}</p>
                        </div>
                    </div>
                </div>
                <div class="share-card-footer">
                    <p data-i18n="scanToCheck">扫描二维码查看详细报告</p>
                    <div class="share-card-qrcode">
                        <!-- 这里放置二维码图片 -->
                        <i class="fas fa-qrcode"></i>
                    </div>
                </div>
            </div>
            <div class="text-center mt-3">
                <button class="btn btn-sm btn-outline-secondary" onclick="downloadShareCard()" data-i18n="downloadCard">
                    <i class="fas fa-download me-1"></i>下载分享卡片
                </button>
            </div>
        `;
        
        // 重新应用语言
        applyLanguage();
    }, 1500);
}

// 下载分享卡片
function downloadShareCard() {
    // 在实际应用中，这里会将分享卡片转换为图片并下载
    alert('分享卡片下载功能将在正式版本中提供');
}

// 分享到微信
function shareToWechat() {
    // 在实际应用中，这里会调用微信分享API
    alert('微信分享功能将在正式版本中提供');
}

// 分享到微博
function shareToWeibo() {
    // 在实际应用中，这里会调用微博分享API
    alert('微博分享功能将在正式版本中提供');
}

// 初始化保险推荐表单提交
function initInsuranceRecommendationForm() {
    const form = document.getElementById('insurance-recommendation-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const ageGroup = document.getElementById('age-group').value;
        const familyStatus = document.getElementById('family-status').value;
        const goalRetirement = document.getElementById('goal-retirement').checked;
        const goalEducation = document.getElementById('goal-education').checked;
        const goalHealth = document.getElementById('goal-health').checked;
        const goalWealth = document.getElementById('goal-wealth').checked;
        const monthlyBudget = document.getElementById('monthly-budget').value;
        const riskTolerance = document.getElementById('risk-tolerance').value;
        
        // 显示加载状态
        const formContainer = form.parentElement;
        formContainer.innerHTML = `
            <div class="text-center py-5">
                <p data-i18n="generatingRecommendation">正在为您生成保险推荐方案...</p>
                <div class="spinner-border text-danger mt-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `;
        
        // 模拟分析过程
        setTimeout(() => {
            // 显示保险推荐结果
            showInsuranceRecommendations(
                ageGroup,
                familyStatus,
                goalRetirement,
                goalEducation,
                goalHealth,
                goalWealth,
                monthlyBudget,
                riskTolerance
            );
        }, 2000);
    });
}

// 显示保险推荐结果
function showInsuranceRecommendations(ageGroup, familyStatus, goalRetirement, goalEducation, goalHealth, goalWealth, monthlyBudget, riskTolerance) {
    // 获取保险推荐结果容器
    const container = document.querySelector('.insurance-recommendation-section .card-body');
    
    if (!container) return;
    
    // 定义保险产品库
    const insuranceProducts = [
        {
            id: 'term-life',
            name: '定期寿险',
            description: '为特定期限内提供死亡保障的保险产品',
            suitableFor: ['已婚有子女', '单亲家庭'],
            goals: ['健康保障', '子女教育'],
            minAge: 18,
            maxAge: 65,
            riskLevel: 'low',
            monthlyPremiumRange: {
                low: '200-300元',
                medium: '300-600元',
                high: '600-1000元',
                veryHigh: '1000元以上'
            },
            features: [
                '固定保险期限（如10年、20年或30年）',
                '保费较低，适合预算有限的家庭',
                '纯保障型产品，无现金价值积累'
            ]
        },
        {
            id: 'whole-life',
            name: '终身寿险',
            description: '提供终身死亡保障并具有现金价值的保险产品',
            suitableFor: ['已婚无子女', '已婚有子女'],
            goals: ['健康保障', '退休规划', '财富积累'],
            minAge: 18,
            maxAge: 70,
            riskLevel: 'medium',
            monthlyPremiumRange: {
                low: '不适用',
                medium: '800-1500元',
                high: '1500-3000元',
                veryHigh: '3000元以上'
            },
            features: [
                '终身保障，无期限限制',
                '具有现金价值，可以作为长期财富规划工具',
                '保费较高，但长期来看具有投资价值'
            ]
        },
        {
            id: 'critical-illness',
            name: '重疾保险',
            description: '在被保人罹患特定重大疾病时提供一次性赔付的保险产品',
            suitableFor: ['单身', '已婚无子女', '已婚有子女', '单亲家庭'],
            goals: ['健康保障'],
            minAge: 18,
            maxAge: 60,
            riskLevel: 'low',
            monthlyPremiumRange: {
                low: '150-300元',
                medium: '300-800元',
                high: '800-1500元',
                veryHigh: '1500元以上'
            },
            features: [
                '覆盖多种重大疾病（如癌症、心脏病、中风等）',
                '确诊即赔付，无需等待治疗结束',
                '年轻时投保保费更为经济'
            ]
        },
        {
            id: 'education-insurance',
            name: '教育金保险',
            description: '为子女未来教育储蓄的保险产品',
            suitableFor: ['已婚有子女', '单亲家庭'],
            goals: ['子女教育'],
            minAge: 18,
            maxAge: 55,
            riskLevel: 'medium',
            monthlyPremiumRange: {
                low: '不适用',
                medium: '500-1000元',
                high: '1000-2000元',
                veryHigh: '2000元以上'
            },
            features: [
                '在子女到达特定年龄（如18岁、22岁）时分期给付教育金',
                '兼具保障和储蓄功能',
                '可为子女的教育经费提前规划'
            ]
        },
        {
            id: 'investment-linked',
            name: '投连险',
            description: '将保障和投资相结合的保险产品',
            suitableFor: ['单身', '已婚无子女'],
            goals: ['财富积累', '退休规划'],
            minAge: 18,
            maxAge: 65,
            riskLevel: 'high',
            monthlyPremiumRange: {
                low: '不适用',
                medium: '不适用',
                high: '2000-4000元',
                veryHigh: '4000元以上'
            },
            features: [
                '保费分为保障部分和投资部分',
                '投资部分可选择不同风险等级的投资账户',
                '收益与投资表现挂钩，有较高的增值潜力但也有投资风险'
            ]
        },
        {
            id: 'annuity',
            name: '年金保险',
            description: '为退休生活提供稳定收入的保险产品',
            suitableFor: ['单身', '已婚无子女', '已婚有子女'],
            goals: ['退休规划', '财富积累'],
            minAge: 30,
            maxAge: 70,
            riskLevel: 'medium',
            monthlyPremiumRange: {
                low: '不适用',
                medium: '800-1500元',
                high: '1500-3000元',
                veryHigh: '3000元以上'
            },
            features: [
                '在约定的年金领取年龄开始，定期给付年金',
                '提供退休收入保障，缓解养老压力',
                '长期稳健增值，适合保守型投资者'
            ]
        },
        {
            id: 'medical-insurance',
            name: '医疗保险',
            description: '报销医疗费用的保险产品',
            suitableFor: ['单身', '已婚无子女', '已婚有子女', '单亲家庭'],
            goals: ['健康保障'],
            minAge: 18,
            maxAge: 60,
            riskLevel: 'low',
            monthlyPremiumRange: {
                low: '100-300元',
                medium: '300-600元',
                high: '600-1000元',
                veryHigh: '1000元以上'
            },
            features: [
                '报销住院、手术等医疗费用',
                '弥补社保报销范围外的自费项目',
                '减轻医疗费用负担，避免因病致贫'
            ]
        }
    ];
    
    // 根据用户信息筛选合适的保险产品
    let recommendedProducts = [];
    
    // 解析年龄段获取数值
    let ageMin, ageMax;
    if (ageGroup === '18-25') { ageMin = 18; ageMax = 25; }
    else if (ageGroup === '26-35') { ageMin = 26; ageMax = 35; }
    else if (ageGroup === '36-45') { ageMin = 36; ageMax = 45; }
    else if (ageGroup === '46-55') { ageMin = 46; ageMax = 55; }
    else if (ageGroup === '56-65') { ageMin = 56; ageMax = 65; }
    else { ageMin = 66; ageMax = 99; }
    
    // 筛选符合条件的产品
    insuranceProducts.forEach(product => {
        // 检查年龄是否符合
        if (ageMin < product.maxAge && ageMax >= product.minAge) {
            // 检查家庭状况是否适合
            if (product.suitableFor.includes(getFamilyStatusText(familyStatus))) {
                // 检查是否符合财务目标
                let matchesGoal = false;
                if (goalRetirement && product.goals.includes('退休规划')) matchesGoal = true;
                if (goalEducation && product.goals.includes('子女教育')) matchesGoal = true;
                if (goalHealth && product.goals.includes('健康保障')) matchesGoal = true;
                if (goalWealth && product.goals.includes('财富积累')) matchesGoal = true;
                
                if (matchesGoal) {
                    // 检查预算和风险偏好
                    if (product.monthlyPremiumRange[monthlyBudget] !== '不适用') {
                        // 风险偏好匹配
                        // 如果用户风险偏好较高，可以接受所有产品
                        // 如果用户风险偏好中等，可以接受低风险和中风险产品
                        // 如果用户风险偏好较低，只能接受低风险产品
                        if (
                            (riskTolerance === 'high') || 
                            (riskTolerance === 'medium' && (product.riskLevel === 'low' || product.riskLevel === 'medium')) ||
                            (riskTolerance === 'low' && product.riskLevel === 'low')
                        ) {
                            // 计算匹配分数
                            let matchScore = 0;
                            
                            // 家庭状况完全匹配加分
                            if (product.suitableFor.length === 1 && product.suitableFor[0] === getFamilyStatusText(familyStatus)) {
                                matchScore += 2;
                            }
                            
                            // 财务目标匹配度
                            let goalMatches = 0;
                            if (goalRetirement && product.goals.includes('退休规划')) goalMatches++;
                            if (goalEducation && product.goals.includes('子女教育')) goalMatches++;
                            if (goalHealth && product.goals.includes('健康保障')) goalMatches++;
                            if (goalWealth && product.goals.includes('财富积累')) goalMatches++;
                            
                            matchScore += goalMatches;
                            
                            // 风险偏好完全匹配加分
                            if (
                                (riskTolerance === 'low' && product.riskLevel === 'low') ||
                                (riskTolerance === 'medium' && product.riskLevel === 'medium') ||
                                (riskTolerance === 'high' && product.riskLevel === 'high')
                            ) {
                                matchScore += 2;
                            }
                            
                            // 添加推荐产品和匹配分数
                            recommendedProducts.push({
                                ...product,
                                matchScore: matchScore,
                                premium: product.monthlyPremiumRange[monthlyBudget]
                            });
                        }
                    }
                }
            }
        }
    });
    
    // 按匹配分数排序
    recommendedProducts.sort((a, b) => b.matchScore - a.matchScore);
    
    // 限制推荐产品数量
    recommendedProducts = recommendedProducts.slice(0, 3);
    
    // 如果没有推荐产品，添加一个通用提示
    if (recommendedProducts.length === 0) {
        // 更新容器内容
        container.innerHTML = `
            <h3 class="text-center mb-4" data-i18n="insuranceRecommendationResults">保险推荐结果</h3>
            
            <div class="alert alert-info text-center py-4">
                <i class="fas fa-info-circle fa-3x mb-3"></i>
                <h4 data-i18n="noRecommendationsTitle">暂无匹配的保险产品</h4>
                <p data-i18n="noRecommendationsDesc">基于您提供的信息，我们暂时没有找到完全匹配的保险产品。请调整您的需求或联系我们的专业顾问获取更个性化的建议。</p>
                <a href="#contact" class="btn btn-hsbc mt-3" data-i18n="contactAdvisor">联系专业顾问</a>
            </div>
            
            <div class="text-center mt-5">
                <button class="btn btn-outline-secondary" onclick="resetInsuranceRecommendation()" data-i18n="startOver">重新开始</button>
            </div>
        `;
    } else {
        // 生成推荐产品卡片
        const productCards = recommendedProducts.map(product => `
            <div class="col-md-4 mb-4">
                <div class="insurance-product-card">
                    <div class="product-header">
                        <h5>${product.name}</h5>
                        <div class="match-score">
                            <div class="match-badge">${getMatchLevelText(product.matchScore)}</div>
                        </div>
                    </div>
                    <div class="product-body">
                        <p class="product-description">${product.description}</p>
                        <div class="product-feature">
                            <h6 data-i18n="monthlyPremium">每月保费</h6>
                            <p class="premium-amount">${product.premium}</p>
                        </div>
                        <div class="product-feature">
                            <h6 data-i18n="keyFeatures">主要特点</h6>
                            <ul class="feature-list">
                                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="product-footer">
                        <button class="btn btn-hsbc btn-sm w-100 mb-2" onclick="showProductDetails('${product.id}')" data-i18n="viewDetails">查看详情</button>
                        <button class="btn btn-outline-secondary btn-sm w-100" onclick="contactAdvisor('${product.id}')" data-i18n="consultAdvisor">咨询顾问</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // 更新容器内容
        container.innerHTML = `
            <h3 class="text-center mb-4" data-i18n="insuranceRecommendationResults">保险推荐结果</h3>
            
            <div class="insurance-recommendation-intro mb-4">
                <p data-i18n="basedOnYourInfo">根据您提供的信息，我们为您推荐以下保险产品：</p>
            </div>
            
            <div class="row insurance-products">
                ${productCards}
            </div>
            
            <div class="recommendation-note mt-4 p-3 bg-light rounded">
                <p class="mb-1"><strong data-i18n="disclaimerTitle">免责声明：</strong></p>
                <p class="small text-muted mb-0" data-i18n="disclaimerContent">以上推荐仅供参考，实际保险需求可能因个人情况而异。建议您咨询专业保险顾问，获取更详细的个性化建议。</p>
            </div>
            
            <div class="text-center mt-5">
                <a href="#contact" class="btn btn-hsbc" data-i18n="contactAdvisor">联系专业顾问</a>
                <button class="btn btn-outline-secondary ms-2" onclick="resetInsuranceRecommendation()" data-i18n="startOver">重新开始</button>
            </div>
        `;
    }
    
    // 重新应用语言
    applyLanguage();
}

// 获取家庭状况文本
function getFamilyStatusText(status) {
    switch (status) {
        case 'single': return '单身';
        case 'married': return '已婚无子女';
        case 'family': return '已婚有子女';
        case 'singleParent': return '单亲家庭';
        default: return '';
    }
}

// 获取匹配程度文本
function getMatchLevelText(score) {
    if (score >= 5) return translations[currentLanguage]['bestMatch'] || '最佳匹配';
    if (score >= 3) return translations[currentLanguage]['recommended'] || '推荐';
    return translations[currentLanguage]['consider'] || '可考虑';
}

// 重置保险推荐
function resetInsuranceRecommendation() {
    window.location.href = '#insurance-recommendation';
    location.reload();
}

// 显示产品详情
function showProductDetails(productId) {
    alert(translations[currentLanguage]['productDetailNotAvailable'] || '产品详情功能将在正式版本中提供');
}

// 咨询顾问
function contactAdvisor(productId) {
    window.location.href = '#contact';
} 
