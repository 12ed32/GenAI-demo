// 体检历史管理页面脚本

document.addEventListener('DOMContentLoaded', function() {
    // 初始化模态框
    const addRecordModal = new bootstrap.Modal(document.getElementById('add-record-modal'));
    
    // 获取DOM元素
    const addRecordBtn = document.getElementById('add-record-btn');
    const saveRecordBtn = document.getElementById('save-record-btn');
    const recordsList = document.getElementById('records-list');
    const recordDetails = document.getElementById('record-details');
    
    // 初始化BMI计算
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiInput = document.getElementById('bmi');
    
    // 当身高或体重输入变化时计算BMI
    [heightInput, weightInput].forEach(input => {
        input.addEventListener('input', calculateBMI);
    });
    
    function calculateBMI() {
        if (heightInput.value && weightInput.value) {
            // 身高从cm转为m
            const heightInMeters = parseFloat(heightInput.value) / 100;
            const weightInKg = parseFloat(weightInput.value);
            
            // BMI = 体重(kg) / (身高(m) * 身高(m))
            const bmi = weightInKg / (heightInMeters * heightInMeters);
            bmiInput.value = bmi.toFixed(2);
        }
    }
    
    // 显示添加记录模态框
    addRecordBtn.addEventListener('click', function() {
        // 重置表单
        document.getElementById('add-record-form').reset();
        // 显示模态框
        addRecordModal.show();
    });
    
    // 保存记录
    saveRecordBtn.addEventListener('click', function() {
        // 获取表单数据
        const examDate = document.getElementById('exam-date').value;
        const examInstitution = document.getElementById('exam-institution').value;
        const height = document.getElementById('height').value;
        const weight = document.getElementById('weight').value;
        const bmi = document.getElementById('bmi').value;
        const bodyFat = document.getElementById('body-fat').value;
        const systolic = document.getElementById('systolic').value;
        const diastolic = document.getElementById('diastolic').value;
        const heartRate = document.getElementById('heart-rate').value;
        const temperature = document.getElementById('temperature').value;
        const bloodGlucose = document.getElementById('blood-glucose').value;
        const totalCholesterol = document.getElementById('total-cholesterol').value;
        const hdlCholesterol = document.getElementById('hdl-cholesterol').value;
        const ldlCholesterol = document.getElementById('ldl-cholesterol').value;
        const triglycerides = document.getElementById('triglycerides').value;
        const uricAcid = document.getElementById('uric-acid').value;
        const hba1c = document.getElementById('hba1c').value;
        const creatinine = document.getElementById('creatinine').value;
        const doctorComments = document.getElementById('doctor-comments').value;
        
        // 验证必填字段
        if (!examDate || !examInstitution || !height || !weight || !systolic || !diastolic || !heartRate || !temperature || !bloodGlucose) {
            alert(translations[currentLanguage]['pleaseCompleteRequiredFields'] || '请完成所有必填字段');
            return;
        }
        
        // 创建一个新的记录对象
        const newRecord = {
            id: Date.now().toString(), // 使用时间戳作为唯一ID
            date: examDate,
            institution: examInstitution,
            basicIndicators: {
                height: parseFloat(height),
                weight: parseFloat(weight),
                bmi: parseFloat(bmi),
                bodyFat: bodyFat ? parseFloat(bodyFat) : null
            },
            vitalSigns: {
                bloodPressure: {
                    systolic: parseInt(systolic),
                    diastolic: parseInt(diastolic)
                },
                heartRate: parseInt(heartRate),
                temperature: parseFloat(temperature)
            },
            bloodWork: {
                bloodGlucose: parseFloat(bloodGlucose),
                totalCholesterol: totalCholesterol ? parseFloat(totalCholesterol) : null,
                hdlCholesterol: hdlCholesterol ? parseFloat(hdlCholesterol) : null,
                ldlCholesterol: ldlCholesterol ? parseFloat(ldlCholesterol) : null,
                triglycerides: triglycerides ? parseFloat(triglycerides) : null,
                uricAcid: uricAcid ? parseFloat(uricAcid) : null,
                hba1c: hba1c ? parseFloat(hba1c) : null,
                creatinine: creatinine ? parseFloat(creatinine) : null
            },
            doctorComments: doctorComments,
            reportFile: null // 在实际应用中，这里会保存上传的文件信息
        };
        
        // 从localStorage获取现有记录
        let records = JSON.parse(localStorage.getItem('healthRecords')) || [];
        
        // 添加新记录
        records.push(newRecord);
        
        // 保存回localStorage
        localStorage.setItem('healthRecords', JSON.stringify(records));
        
        // 关闭模态框
        addRecordModal.hide();
        
        // 刷新记录列表
        loadHealthRecords();
        
        // 显示新添加的记录详情
        showRecordDetails(newRecord.id);
    });
    
    // 加载健康记录列表
    function loadHealthRecords() {
        // 从localStorage获取记录
        const records = JSON.parse(localStorage.getItem('healthRecords')) || [];
        
        // 清空当前列表
        recordsList.innerHTML = '';
        
        if (records.length === 0) {
            // 如果没有记录，显示空状态
            recordsList.innerHTML = `
                <li class="list-group-item text-center py-4">
                    <i class="fas fa-folder-open text-muted mb-2"></i>
                    <p class="mb-0" data-i18n="noRecordsYet">暂无体检记录</p>
                    <p class="text-muted small" data-i18n="clickAddToStart">点击"添加记录"开始记录您的健康数据</p>
                </li>
            `;
        } else {
            // 对记录按日期排序（最新的在前）
            records.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            // 为每条记录创建列表项
            records.forEach(record => {
                const date = new Date(record.date);
                const formattedDate = date.toLocaleDateString();
                
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item health-record-item';
                listItem.dataset.recordId = record.id;
                listItem.innerHTML = `
                    <div class="health-record-date">${formattedDate}</div>
                    <div class="health-record-institution">${record.institution}</div>
                `;
                
                // 点击记录项显示详情
                listItem.addEventListener('click', function() {
                    // 移除其他项的active类
                    document.querySelectorAll('.health-record-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // 添加active类到当前项
                    this.classList.add('active');
                    
                    // 显示该记录的详情
                    showRecordDetails(record.id);
                });
                
                recordsList.appendChild(listItem);
            });
        }
        
        // 应用语言翻译
        applyLanguage();
    }
    
    // 显示记录详情
    function showRecordDetails(recordId) {
        // 从localStorage获取记录
        const records = JSON.parse(localStorage.getItem('healthRecords')) || [];
        
        // 查找指定ID的记录
        const record = records.find(r => r.id === recordId);
        
        if (!record) {
            return;
        }
        
        // 格式化日期
        const date = new Date(record.date);
        const formattedDate = date.toLocaleDateString();
        
        // 评估健康状态函数
        function getStatusClass(value, normal, high) {
            if (value === null || value === undefined) return '';
            if (value <= normal) return 'normal';
            if (value <= high) return 'warning';
            return 'danger';
        }
        
        // 血压状态
        const systolicStatus = getStatusClass(record.vitalSigns.bloodPressure.systolic, 120, 140);
        const diastolicStatus = getStatusClass(record.vitalSigns.bloodPressure.diastolic, 80, 90);
        
        // BMI状态
        let bmiStatus = '';
        if (record.basicIndicators.bmi < 18.5) bmiStatus = 'warning'; // 偏瘦
        else if (record.basicIndicators.bmi <= 24.9) bmiStatus = 'normal'; // 正常
        else if (record.basicIndicators.bmi <= 29.9) bmiStatus = 'warning'; // 超重
        else bmiStatus = 'danger'; // 肥胖
        
        // 血糖状态
        const bloodGlucoseStatus = getStatusClass(record.bloodWork.bloodGlucose, 6.1, 7.0);
        
        // 胆固醇状态
        const totalCholesterolStatus = record.bloodWork.totalCholesterol ? getStatusClass(record.bloodWork.totalCholesterol, 5.2, 6.2) : '';
        const ldlCholesterolStatus = record.bloodWork.ldlCholesterol ? getStatusClass(record.bloodWork.ldlCholesterol, 3.4, 4.1) : '';
        const hdlCholesterolStatus = record.bloodWork.hdlCholesterol ? (record.bloodWork.hdlCholesterol >= 1.0 ? 'normal' : 'warning') : '';
        
        // 更新详情区域的HTML
        recordDetails.innerHTML = `
            <div class="record-details-container">
                <div class="details-header">
                    <div>
                        <div class="record-date">${formattedDate}</div>
                        <div class="record-institution">${record.institution}</div>
                    </div>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-outline-danger delete-record-btn" data-record-id="${record.id}">
                            <i class="fas fa-trash-alt me-1"></i><span data-i18n="deleteRecord">删除记录</span>
                        </button>
                    </div>
                </div>
                
                <div class="details-section">
                    <h5 data-i18n="basicIndicators">基础指标</h5>
                    <div class="indicator-row">
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="height">身高</div>
                            <div class="indicator-value">${record.basicIndicators.height} cm</div>
                        </div>
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="weight">体重</div>
                            <div class="indicator-value">${record.basicIndicators.weight} kg</div>
                        </div>
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="bmi">BMI</div>
                            <div class="indicator-value ${bmiStatus}">${record.basicIndicators.bmi}</div>
                        </div>
                        ${record.basicIndicators.bodyFat ? `
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="bodyFat">体脂率</div>
                            <div class="indicator-value">${record.basicIndicators.bodyFat}%</div>
                        </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="details-section">
                    <h5 data-i18n="vitalSigns">生命体征</h5>
                    <div class="indicator-row">
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="bloodPressure">血压</div>
                            <div class="indicator-value">
                                <span class="${systolicStatus}">${record.vitalSigns.bloodPressure.systolic}</span>/<span class="${diastolicStatus}">${record.vitalSigns.bloodPressure.diastolic}</span> mmHg
                            </div>
                        </div>
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="heartRate">心率</div>
                            <div class="indicator-value">${record.vitalSigns.heartRate} bpm</div>
                        </div>
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="temperature">体温</div>
                            <div class="indicator-value">${record.vitalSigns.temperature} ℃</div>
                        </div>
                    </div>
                </div>
                
                <div class="details-section">
                    <h5 data-i18n="bloodWorkLabTests">血液检查</h5>
                    <div class="indicator-row">
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="bloodGlucose">血糖</div>
                            <div class="indicator-value ${bloodGlucoseStatus}">${record.bloodWork.bloodGlucose} mmol/L</div>
                        </div>
                        ${record.bloodWork.totalCholesterol ? `
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="totalCholesterol">总胆固醇</div>
                            <div class="indicator-value ${totalCholesterolStatus}">${record.bloodWork.totalCholesterol} mmol/L</div>
                        </div>
                        ` : ''}
                        ${record.bloodWork.hdlCholesterol ? `
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="hdlCholesterol">高密度脂蛋白</div>
                            <div class="indicator-value ${hdlCholesterolStatus}">${record.bloodWork.hdlCholesterol} mmol/L</div>
                        </div>
                        ` : ''}
                        ${record.bloodWork.ldlCholesterol ? `
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="ldlCholesterol">低密度脂蛋白</div>
                            <div class="indicator-value ${ldlCholesterolStatus}">${record.bloodWork.ldlCholesterol} mmol/L</div>
                        </div>
                        ` : ''}
                        ${record.bloodWork.triglycerides ? `
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="triglycerides">甘油三酯</div>
                            <div class="indicator-value">${record.bloodWork.triglycerides} mmol/L</div>
                        </div>
                        ` : ''}
                        ${record.bloodWork.uricAcid ? `
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="uricAcid">尿酸</div>
                            <div class="indicator-value">${record.bloodWork.uricAcid} μmol/L</div>
                        </div>
                        ` : ''}
                        ${record.bloodWork.hba1c ? `
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="hba1c">糖化血红蛋白</div>
                            <div class="indicator-value">${record.bloodWork.hba1c}%</div>
                        </div>
                        ` : ''}
                        ${record.bloodWork.creatinine ? `
                        <div class="indicator-item">
                            <div class="indicator-label" data-i18n="creatinine">肌酐</div>
                            <div class="indicator-value">${record.bloodWork.creatinine} μmol/L</div>
                        </div>
                        ` : ''}
                    </div>
                </div>
                
                ${record.doctorComments ? `
                <div class="details-section">
                    <h5 data-i18n="doctorComments">医生评语</h5>
                    <p>${record.doctorComments}</p>
                </div>
                ` : ''}
                
                <div class="details-section">
                    <h5 data-i18n="healthTrends">健康趋势</h5>
                    <div class="health-chart-container">
                        <canvas id="health-trend-chart"></canvas>
                    </div>
                    <p class="text-center text-muted" data-i18n="healthTrendsDescription">图表显示了您的健康指标随时间的变化趋势，帮助您更好地了解自己的健康状况</p>
                </div>
            </div>
        `;
        
        // 绑定删除按钮事件
        const deleteBtn = recordDetails.querySelector('.delete-record-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                const recordId = this.dataset.recordId;
                deleteRecord(recordId);
            });
        }
        
        // 初始化健康趋势图表
        initHealthTrendChart(recordId);
        
        // 应用语言翻译
        applyLanguage();
    }
    
    // 初始化健康趋势图表
    function initHealthTrendChart(currentRecordId) {
        const canvas = document.getElementById('health-trend-chart');
        if (!canvas) return;
        
        // 从localStorage获取所有记录
        let records = JSON.parse(localStorage.getItem('healthRecords')) || [];
        
        // 如果只有一条记录，无法显示趋势
        if (records.length <= 1) {
            const ctx = canvas.getContext('2d');
            ctx.font = '16px Arial';
            ctx.fillStyle = '#999';
            ctx.textAlign = 'center';
            ctx.fillText(translations[currentLanguage]['notEnoughDataForTrend'] || '暂无足够数据显示趋势，请至少添加两条体检记录', canvas.width / 2, canvas.height / 2);
            return;
        }
        
        // 排序记录（按日期从旧到新）
        records.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // 准备图表数据
        const dates = records.map(record => {
            const date = new Date(record.date);
            return date.toLocaleDateString();
        });
        
        const bmiData = records.map(record => record.basicIndicators.bmi);
        const systolicData = records.map(record => record.vitalSigns.bloodPressure.systolic);
        const diastolicData = records.map(record => record.vitalSigns.bloodPressure.diastolic);
        const bloodGlucoseData = records.map(record => record.bloodWork.bloodGlucose);
        
        // 当前记录的索引
        const currentRecordIndex = records.findIndex(r => r.id === currentRecordId);
        
        // 创建图表
        const healthChart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'BMI',
                        data: bmiData,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        tension: 0.3
                    },
                    {
                        label: translations[currentLanguage]['systolic'] || '收缩压',
                        data: systolicData,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        tension: 0.3
                    },
                    {
                        label: translations[currentLanguage]['diastolic'] || '舒张压',
                        data: diastolicData,
                        borderColor: 'rgba(255, 159, 64, 1)',
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        tension: 0.3
                    },
                    {
                        label: translations[currentLanguage]['bloodGlucose'] || '血糖',
                        data: bloodGlucoseData,
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        tension: 0.3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                },
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
        
        // 高亮显示当前记录的数据点
        if (currentRecordIndex !== -1) {
            healthChart.data.datasets.forEach(dataset => {
                const pointBackgroundColors = Array(dataset.data.length).fill(dataset.pointBackgroundColor);
                pointBackgroundColors[currentRecordIndex] = 'rgba(219, 0, 17, 1)'; // 使用HSBC红色高亮当前点
                
                dataset.pointBackgroundColor = pointBackgroundColors;
                dataset.pointBorderColor = pointBackgroundColors.map(color => color === 'rgba(219, 0, 17, 1)' ? '#fff' : '#fff');
                dataset.pointBorderWidth = pointBackgroundColors.map(color => color === 'rgba(219, 0, 17, 1)' ? 2 : 1);
                dataset.pointRadius = pointBackgroundColors.map(color => color === 'rgba(219, 0, 17, 1)' ? 6 : 4);
            });
            
            healthChart.update();
        }
    }
    
    // 删除记录
    function deleteRecord(recordId) {
        if (confirm(translations[currentLanguage]['confirmDeleteRecord'] || '确定要删除这条体检记录吗？此操作不可撤销。')) {
            // 从localStorage获取记录
            let records = JSON.parse(localStorage.getItem('healthRecords')) || [];
            
            // 过滤掉要删除的记录
            records = records.filter(record => record.id !== recordId);
            
            // 保存回localStorage
            localStorage.setItem('healthRecords', JSON.stringify(records));
            
            // 刷新记录列表
            loadHealthRecords();
            
            // 清空详情区域
            recordDetails.innerHTML = `
                <div class="text-center py-5 empty-state">
                    <i class="fas fa-file-medical fa-4x text-muted mb-3"></i>
                    <h5 data-i18n="selectRecord">请选择一条体检记录查看详情</h5>
                    <p class="text-muted" data-i18n="orAddNewRecord">或点击"添加记录"按钮创建新的体检记录</p>
                </div>
            `;
            
            // 应用语言翻译
            applyLanguage();
        }
    }
    
    // 初始化加载记录
    loadHealthRecords();
    
    // 生成一些示例数据（仅在首次访问时）
    function generateSampleData() {
        // 检查localStorage中是否已有数据
        const existingRecords = JSON.parse(localStorage.getItem('healthRecords')) || [];
        
        // 如果已有数据，不生成示例
        if (existingRecords.length > 0) {
            return;
        }
        
        // 示例数据
        const sampleRecords = [
            {
                id: '1',
                date: '2023-02-15',
                institution: '健康体检中心',
                basicIndicators: {
                    height: 175,
                    weight: 70,
                    bmi: 22.86,
                    bodyFat: 18.5
                },
                vitalSigns: {
                    bloodPressure: {
                        systolic: 120,
                        diastolic: 80
                    },
                    heartRate: 72,
                    temperature: 36.5
                },
                bloodWork: {
                    bloodGlucose: 5.2,
                    totalCholesterol: 4.8,
                    hdlCholesterol: 1.2,
                    ldlCholesterol: 3.0,
                    triglycerides: 1.5,
                    uricAcid: 350,
                    hba1c: 5.3,
                    creatinine: 85
                },
                doctorComments: '整体健康状况良好，建议保持健康的生活方式和定期体检。',
                reportFile: null
            },
            {
                id: '2',
                date: '2023-08-20',
                institution: '阳光健康医院',
                basicIndicators: {
                    height: 175,
                    weight: 72,
                    bmi: 23.51,
                    bodyFat: 19.2
                },
                vitalSigns: {
                    bloodPressure: {
                        systolic: 125,
                        diastolic: 82
                    },
                    heartRate: 75,
                    temperature: 36.6
                },
                bloodWork: {
                    bloodGlucose: 5.4,
                    totalCholesterol: 5.0,
                    hdlCholesterol: 1.1,
                    ldlCholesterol: 3.2,
                    triglycerides: 1.6,
                    uricAcid: 370,
                    hba1c: 5.4,
                    creatinine: 87
                },
                doctorComments: '健康状况整体稳定，血压略有上升。建议增加运动量，控制饮食，减少盐分摄入。',
                reportFile: null
            }
        ];
        
        // 保存示例数据到localStorage
        localStorage.setItem('healthRecords', JSON.stringify(sampleRecords));
        
        // 刷新记录列表
        loadHealthRecords();
    }
    
    // 生成示例数据
    generateSampleData();
}); 