/**
 * 健康智汇 - 浮动对话演示浮窗
 * 这个脚本用于处理浮动对话窗口的交互和演示内容
 */

document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const chatLauncher = document.querySelector('.chat-demo-launcher');
    const chatContainer = document.querySelector('.chat-demo-container');
    const chatMinimize = document.querySelector('.chat-demo-minimize');
    const chatClose = document.querySelector('.chat-demo-close');
    const chatInput = document.querySelector('.chat-demo-input');
    const chatSend = document.querySelector('.chat-demo-send');
    const chatMessages = document.querySelector('.chat-demo-messages');
    
    // 初始化聊天窗口滚动行为
    initChatScroll();
    
    // 演示对话内容
    const demoConversation = [
        {
            type: 'bot',
            message: '您好！我是您的智能健康顾问。我可以帮您进行健康评估、风险分析和保险推荐。您想了解什么？',
            options: ['健康评估', '风险分析', '保险推荐']
        },
        {
            type: 'user',
            message: '健康评估'
        },
        {
            type: 'bot',
            message: '很好！为了进行健康评估，我需要了解一些基本信息。您方便分享您的年龄、身高和体重吗？',
            delay: 1000
        },
        {
            type: 'user',
            message: '我今年35岁，身高175cm，体重70kg',
            formData: {
                'age': '35',
                'height': '175',
                'weight': '70',
                'gender': 'male'
            },
            delay: 4500,
        },
        {
            type: 'bot',
            message: '谢谢您提供的信息。您的BMI指数为22.9，属于正常范围。您最近有进行过体检吗？',
            delay: 4500,
            options: ['是的，有体检报告', '没有，最近没体检']
        },
        {
            type: 'user',
            message: '是的，有体检报告'
        },
        {
            type: 'bot',
            message: '太好了！您可以上传您的体检报告，我可以为您分析详细的健康状况。或者您也可以手动输入一些关键指标，如血压、血糖等。',
            delay: 5000,
            action: {
                text: '上传体检报告',
                section: 'health-analysis'
            }
        },
        {
            type: 'user',
            message: '我的血压是120/80，血糖是5.2',
            formData: {
                'systolic': '120',
                'diastolic': '80',
                'bloodSugar': '5.2'
            },
            delay: 9000
        },
        {
            type: 'bot',
            message: '您的血压和血糖都在正常范围内，这很好！为了更全面地评估您的健康风险，我还需要了解一些关于您生活方式的信息。',
            delay: 5500
        },
        {
            type: 'bot',
            message: '您是否有吸烟习惯？每周的运动频率如何？',
            delay: 5000,
            options: ['不吸烟，经常运动', '偶尔吸烟，适量运动', '经常吸烟，很少运动']
        },
        {
            type: 'user',
            message: '不吸烟，经常运动',
            formData: {
                'smoking-status': 'never',
                'exercise-frequency': 'active'
            },
            delay: 5000,
        },
        {
            type: 'bot',
            message: '非常好！根据您提供的信息，您的整体健康状况良好，健康风险较低。',
            delay: 9500
        },
        {
            type: 'bot',
            message: '基于您的健康状况和生活习惯，我建议您考虑以下保险产品：1. 综合医疗保险 2. 重大疾病保险 3. 意外伤害保险',
            delay: 6000,
            action: {
                text: '查看保险推荐',
                section: 'insurance-recommendation'
            }
        },
        {
            type: 'user',
            message: '我对重大疾病保险比较感兴趣',
            formData: {
                'goal-health': true,
                'age-group': '26-35',
                'family-status': 'single',
                'monthly-budget': 'veryHigh',
                'risk-tolerance': 'medium'
            },
            delay: 5000,
        },
        {
            type: 'bot',
            message: '重大疾病保险是一个很好的选择！考虑到您的年龄和健康状况，我推荐汇丰保险的"康健保"重疾险，它覆盖100多种重大疾病，并提供多次赔付功能。',
            delay: 5000
        },
        {
            type: 'bot',
            message: '您希望了解更多关于这款产品的详细信息，还是想与专业顾问进行一对一咨询？',
            delay: 5000,
            options: ['了解产品详情', '咨询专业顾问']
        },
        {
            type: 'user',
            message: '咨询专业顾问'
        },
        {
            type: 'bot',
            message: '好的，我已为您预约了专业顾问。我们的顾问将在24小时内与您联系，为您提供一对一的专业咨询服务。您还有其他问题吗？',
            delay: 2000,
            action: {
                text: '联系我们',
                section: 'contact'
            }
        }
    ];
    
    // 当前对话索引
    let currentMessageIndex = 0;
    // 是否正在自动演示
    let isAutoDemo = false;
    // 自动演示的计时器
    let autoDemoTimer = null;
    
    // 打开聊天窗口
    function openChat() {
        chatContainer.classList.add('active');
        // 如果是首次打开，显示第一条消息
        if (chatMessages.children.length === 0) {
            addMessage(demoConversation[0]);
            currentMessageIndex = 1;
        }
        
        // 确保滚动到底部
        setTimeout(() => {
            scrollToBottom();
        }, 100);
    }
    
    // 关闭聊天窗口
    function closeChat() {
        chatContainer.classList.remove('active');
        stopAutoDemo();
    }
    
    // 最小化聊天窗口
    function minimizeChat() {
        chatContainer.classList.toggle('minimized');
    }
    
    // 添加消息到聊天窗口
    function addMessage(messageData) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', messageData.type);
        
        // 如果是机器人消息且正在输入
        if (messageData.type === 'bot' && messageData.typing) {
            messageElement.classList.add('typing');
            messageElement.innerHTML = `
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            `;
        } else {
            // 普通消息
            messageElement.innerHTML = `
                <div class="message-content">${messageData.message}</div>
                <div class="message-time">${getCurrentTime()}</div>
            `;
            
            // 如果有选项，添加选项按钮
            if (messageData.options && messageData.options.length > 0) {
                const optionsContainer = document.createElement('div');
                optionsContainer.classList.add('chat-form-options');
                
                messageData.options.forEach(option => {
                    const optionElement = document.createElement('div');
                    optionElement.classList.add('chat-form-option');
                    optionElement.textContent = option;
                    
                    // 为选项添加数据属性，用于识别特殊选项
                    if (option === '健康评估') {
                        optionElement.setAttribute('data-option-type', 'health-assessment');
                    } else if (option === '风险分析') {
                        optionElement.setAttribute('data-option-type', 'risk-analysis');
                    } else if (option === '保险推荐') {
                        optionElement.setAttribute('data-option-type', 'insurance-recommendation');
                    }
                    
                    optionElement.addEventListener('click', () => {
                        // 添加用户选择的选项作为用户消息
                        addMessage({
                            type: 'user',
                            message: option
                        });
                        
                        // 强制滚动到底部
                        scrollToBottom();
                        
                        // 处理特殊选项的点击
                        handleSpecialOptionClick(option);
                        
                        // 查找下一条机器人消息
                        const nextBotMessage = findNextBotMessage(option);
                        if (nextBotMessage) {
                            // 显示机器人正在输入
                            showTyping();
                            // 强制滚动到底部
                            scrollToBottom();
                            
                            // 延迟后显示机器人回复
                            setTimeout(() => {
                                removeTyping();
                                addMessage(nextBotMessage);
                                
                                // 强制滚动到底部
                                scrollToBottom();
                                
                                // 如果有下一条消息，继续自动演示
                                if (isAutoDemo) {
                                    continueAutoDemo();
                                }
                            }, nextBotMessage.delay || 1000);
                        }
                    });
                    optionsContainer.appendChild(optionElement);
                });
                
                messageElement.appendChild(optionsContainer);
            }
            
            // 如果有操作按钮，添加操作按钮
            if (messageData.action) {
                const actionButton = document.createElement('div');
                actionButton.classList.add('chat-action-button');
                actionButton.textContent = messageData.action.text;
                actionButton.addEventListener('click', () => {
                    // 滚动到指定部分
                    const section = document.getElementById(messageData.action.section);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                });
                messageElement.appendChild(actionButton);
            }
            
            // 如果是用户消息且包含表单数据，自动填充相应表单
            if (messageData.type === 'user' && messageData.formData) {
                // 延迟填充表单，确保DOM已完全更新
                setTimeout(() => {
                    fillFormData(messageData.formData);
                }, 200);
            }
        }
        
        chatMessages.appendChild(messageElement);
        
        // 滚动到底部
        scrollToBottom();
    }
    
    // 处理特殊选项的点击
    function handleSpecialOptionClick(option) {
        // 根据选项类型执行相应操作
        if (option === '健康评估') {
            // 点击页面上的健康评估按钮
            setTimeout(() => {
                const healthAssessmentBtn = document.querySelector('.health-assessment-btn, #health-assessment-btn, [data-action="health-assessment"]');
                if (healthAssessmentBtn) {
                    healthAssessmentBtn.click();
                    console.log('点击健康评估按钮');
                } else if (window.jQuery) {
                    // 尝试使用jQuery查找按钮
                    const $btn = window.jQuery('button:contains("健康评估"), button:contains("分析数据")');
                    if ($btn.length > 0) {
                        $btn[0].click();
                        console.log('使用jQuery点击健康评估按钮');
                    }
                } else {
                    // 尝试使用文本内容查找按钮
                    findAndClickButtonByText(['健康评估', '分析数据', '评估', '分析']);
                }
                
                // 滚动到健康评估部分
                const healthSection = document.getElementById('health-analysis');
                if (healthSection) {
                    healthSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else if (option === '风险分析') {
            // 点击页面上的风险分析按钮
            setTimeout(() => {
                const riskAnalysisBtn = document.querySelector('.risk-analysis-btn, #risk-analysis-btn, [data-action="risk-analysis"]');
                if (riskAnalysisBtn) {
                    riskAnalysisBtn.click();
                    console.log('点击风险分析按钮');
                } else if (window.jQuery) {
                    // 尝试使用jQuery查找按钮
                    const $btn = window.jQuery('button:contains("风险分析"), button:contains("评估风险")');
                    if ($btn.length > 0) {
                        $btn[0].click();
                        console.log('使用jQuery点击风险分析按钮');
                    }
                } else {
                    // 尝试使用文本内容查找按钮
                    findAndClickButtonByText(['风险分析', '评估风险', '风险', '评估']);
                }
                
                // 滚动到风险分析部分
                const riskSection = document.getElementById('risk-assessment');
                if (riskSection) {
                    riskSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else if (option === '保险推荐') {
            // 点击页面上的保险推荐按钮
            setTimeout(() => {
                const insuranceRecommendationBtn = document.querySelector('.insurance-recommendation-btn, #insurance-recommendation-btn, [data-action="insurance-recommendation"]');
                if (insuranceRecommendationBtn) {
                    insuranceRecommendationBtn.click();
                    console.log('点击保险推荐按钮');
                } else if (window.jQuery) {
                    // 尝试使用jQuery查找按钮
                    const $btn = window.jQuery('button:contains("保险推荐"), button:contains("获取推荐")');
                    if ($btn.length > 0) {
                        $btn[0].click();
                        console.log('使用jQuery点击保险推荐按钮');
                    }
                } else {
                    // 尝试使用文本内容查找按钮
                    findAndClickButtonByText(['保险推荐', '获取推荐', '保险', '推荐']);
                }
                
                // 滚动到保险推荐部分
                const insuranceSection = document.getElementById('insurance-recommendation');
                if (insuranceSection) {
                    insuranceSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }
    
    // 滚动聊天窗口到底部
    function scrollToBottom() {
        // 检查聊天消息容器是否存在
        if (!chatMessages) {
            console.error('聊天消息容器不存在');
            return;
        }
        
        // 确保聊天容器有正确的样式设置
        chatMessages.style.overflowY = 'auto';
        chatMessages.style.maxHeight = '300px'; // 设置最大高度确保可滚动
        
        // 立即滚动到底部
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // 使用 requestAnimationFrame 确保在下一帧渲染前滚动到底部
        requestAnimationFrame(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
        
        // 额外的延迟滚动，确保在DOM完全更新后滚动到底部
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100);
    }
    
    // 自动填充表单数据
    function fillFormData(formData) {
        // 遍历表单数据
        for (const [id, value] of Object.entries(formData)) {
            const element = document.getElementById(id);
            if (element) {
                // 根据元素类型设置值
                if (element.type === 'checkbox') {
                    element.checked = value;
                } else if (element.type === 'select-one') {
                    element.value = value;
                } else {
                    element.value = value;
                }
                
                // 触发change事件，以便其他可能的监听器能够响应
                const event = new Event('change', { bubbles: true });
                element.dispatchEvent(event);
                
                // 如果是健康分析表单中的字段，高亮显示已填充的字段
                highlightField(element);
            }
        }
        
        // 检查是否需要触发评估按钮
        triggerEvaluationButtons(formData);
    }
    
    // 触发评估按钮
    function triggerEvaluationButtons(formData) {
        // 根据填充的表单数据决定触发哪个评估按钮
        
        // 健康评估按钮
        if (formData['age'] || formData['height'] || formData['weight'] || 
            formData['systolic'] || formData['diastolic'] || formData['bloodSugar']) {
            // 尝试多种可能的选择器来找到健康评估按钮
            const healthEvalBtnSelectors = [
                '#health-data-form button'
            ];
            
            setTimeout(() => {
                let healthEvalBtn = null;
                
                // 尝试所有可能的选择器
                for (const selector of healthEvalBtnSelectors) {
                    const btn = document.querySelector(selector);
                    if (btn) {
                        healthEvalBtn = btn;
                        break;
                    }
                }
                
                // 如果找到按钮，点击它
                if (healthEvalBtn) {
                    healthEvalBtn.click();
                    console.log('触发健康评估按钮');
                } else {
                    // 如果没有找到按钮，尝试使用jQuery选择器（如果jQuery可用）
                    if (window.jQuery) {
                        const $btn = window.jQuery('button:contains("健康评估"), button:contains("分析数据"), .btn:contains("健康评估"), .btn:contains("分析数据")');
                        if ($btn.length > 0) {
                            $btn[0].click();
                            console.log('使用jQuery触发健康评估按钮');
                        }
                    } else {
                        // 尝试使用文本内容查找按钮
                        findAndClickButtonByText(['健康评估', '分析数据', '评估', '分析']);
                    }
                }
            }, 500);
        }
        
        // 风险评估按钮
        if (formData['smoking-status'] || formData['exercise-frequency']) {
            // 尝试多种可能的选择器来找到风险评估按钮
            const riskEvalBtnSelectors = [
                '#risk-assessment-form button'
            ];
            
            setTimeout(() => {
                let riskEvalBtn = null;
                
                // 尝试所有可能的选择器
                for (const selector of riskEvalBtnSelectors) {
                    const btn = document.querySelector(selector);
                    if (btn) {
                        riskEvalBtn = btn;
                        break;
                    }
                }
                
                // 如果找到按钮，点击它
                if (riskEvalBtn) {
                    riskEvalBtn.click();
                    console.log('触发风险评估按钮');
                } else {
                    // 如果没有找到按钮，尝试使用jQuery选择器（如果jQuery可用）
                    if (window.jQuery) {
                        const $btn = window.jQuery('button:contains("风险分析"), button:contains("评估风险"), .btn:contains("风险分析"), .btn:contains("评估风险")');
                        if ($btn.length > 0) {
                            $btn[0].click();
                            console.log('使用jQuery触发风险评估按钮');
                        }
                    } else {
                        // 尝试使用文本内容查找按钮
                        findAndClickButtonByText(['风险分析', '评估风险', '风险', '评估']);
                    }
                }
            }, 500);
        }
        
        // 保险推荐按钮
        if (formData['goal-health'] || formData['age-group'] || formData['family-status']) {
            // 尝试多种可能的选择器来找到保险推荐按钮
            const insuranceEvalBtnSelectors = [
                '#insurance-recommendation-form button'
            ];
            
            setTimeout(() => {
                let insuranceEvalBtn = null;
                
                // 尝试所有可能的选择器
                for (const selector of insuranceEvalBtnSelectors) {
                    const btn = document.querySelector(selector);
                    if (btn) {
                        insuranceEvalBtn = btn;
                        break;
                    }
                }
                
                // 如果找到按钮，点击它
                if (insuranceEvalBtn) {
                    insuranceEvalBtn.click();
                    console.log('触发保险推荐按钮');
                } else {
                    // 如果没有找到按钮，尝试使用jQuery选择器（如果jQuery可用）
                    if (window.jQuery) {
                        const $btn = window.jQuery('button:contains("保险推荐"), button:contains("获取推荐"), .btn:contains("保险推荐"), .btn:contains("获取推荐")');
                        if ($btn.length > 0) {
                            $btn[0].click();
                            console.log('使用jQuery触发保险推荐按钮');
                        }
                    } else {
                        // 尝试使用文本内容查找按钮
                        findAndClickButtonByText(['保险推荐', '获取推荐', '保险', '推荐']);
                    }
                }
            }, 500);
        }
    }
    
    // 通过文本内容查找并点击按钮
    function findAndClickButtonByText(textOptions) {
        // 获取所有可能是按钮的元素
        const buttonElements = document.querySelectorAll('button, .btn, [type="button"], [role="button"], .button, input[type="submit"], a.btn, a.button');
        
        // 遍历所有可能的文本选项
        for (const text of textOptions) {
            // 遍历所有可能的按钮元素
            for (const button of buttonElements) {
                // 检查按钮文本是否包含指定文本
                if (button.textContent.includes(text)) {
                    // 点击按钮
                    button.click();
                    console.log(`通过文本内容"${text}"找到并点击按钮`);
                    return true;
                }
            }
        }
        
        return false;
    }
    
    // 高亮显示已填充的字段
    function highlightField(element) {
        // 添加高亮效果
        element.classList.add('filled-by-chat');
        
        // 获取表单容器
        let formContainer = null;
        let sectionId = null;
        
        // 如果是健康分析表单，自动切换到相应的标签页
        if (element.closest('#health-data-form')) {
            formContainer = document.getElementById('health-data-form');
            sectionId = 'health-analysis';
            const manualTab = document.getElementById('manual-tab');
            if (manualTab) {
                manualTab.click();
            }
        } else if (element.closest('#risk-assessment-form')) {
            // 如果是风险评估表单，滚动到风险评估部分
            formContainer = document.getElementById('risk-assessment-form');
            sectionId = 'risk-assessment';
        } else if (element.closest('#insurance-recommendation-form')) {
            // 如果是保险推荐表单，滚动到保险推荐部分
            formContainer = document.getElementById('insurance-recommendation-form');
            sectionId = 'insurance-recommendation';
        }
        
        // 滚动到相应部分
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                
                // 确保表单在视图中
                if (formContainer) {
                    setTimeout(() => {
                        formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 300);
                }
            }
        }
        
        // 2秒后移除高亮效果
        setTimeout(() => {
            element.classList.remove('filled-by-chat');
        }, 2000);
    }
    
    // 显示机器人正在输入
    function showTyping() {
        addMessage({
            type: 'bot',
            typing: true
        });
        
        // 确保滚动到底部
        scrollToBottom();
    }
    
    // 移除机器人正在输入的提示
    function removeTyping() {
        const typingElements = chatMessages.querySelectorAll('.chat-message.typing');
        typingElements.forEach(element => {
            element.remove();
        });
        
        // 确保滚动到底部
        scrollToBottom();
    }
    
    // 获取当前时间
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        
        // 补零
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        return `${hours}:${minutes}`;
    }
    
    // 根据用户选择查找下一条机器人消息
    function findNextBotMessage(userOption) {
        // 在这个简化版本中，我们只是按顺序返回下一条机器人消息
        // 在实际应用中，可以根据用户选择的选项来决定返回哪条消息
        for (let i = currentMessageIndex; i < demoConversation.length; i++) {
            if (demoConversation[i].type === 'bot') {
                currentMessageIndex = i + 1;
                return demoConversation[i];
            }
        }
        return null;
    }
    
    // 发送用户消息
    function sendUserMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // 添加用户消息
            addMessage({
                type: 'user',
                message: message
            });
            
            // 清空输入框
            chatInput.value = '';
            
            // 显示机器人正在输入
            showTyping();
            
            // 强制滚动到底部
            scrollToBottom();
            
            // 延迟后显示机器人回复
            setTimeout(() => {
                removeTyping();
                
                // 获取下一条机器人消息
                const nextBotMessage = findNextBotMessage();
                if (nextBotMessage) {
                    addMessage(nextBotMessage);
                    
                    // 强制滚动到底部
                    scrollToBottom();
                    
                    // 如果有下一条消息，继续自动演示
                    if (isAutoDemo) {
                        continueAutoDemo();
                    }
                }
            }, 1000);
        }
    }
    
    // 开始自动演示
    function startAutoDemo() {
        isAutoDemo = true;
        continueAutoDemo();
    }
    
    // 继续自动演示
    function continueAutoDemo() {
        if (!isAutoDemo) return;
        
        // 清除之前的计时器
        if (autoDemoTimer) {
            clearTimeout(autoDemoTimer);
        }
        
        // 如果还有消息，继续演示
        if (currentMessageIndex < demoConversation.length) {
            const nextMessage = demoConversation[currentMessageIndex];
            const delay = nextMessage.type === 'bot' ? (nextMessage.delay || 2000) : 1500;
            
            autoDemoTimer = setTimeout(() => {
                if (nextMessage.type === 'user') {
                    // 添加用户消息
                    addMessage(nextMessage);
                    currentMessageIndex++;
                    
                    // 强制滚动到底部
                    scrollToBottom();
                    
                    // 检查是否是特殊选项，如果是则触发相应操作
                    if (nextMessage.message === '健康评估' || 
                        nextMessage.message === '风险分析' || 
                        nextMessage.message === '保险推荐') {
                        handleSpecialOptionClick(nextMessage.message);
                    }
                    
                    // 显示机器人正在输入
                    showTyping();
                    
                    // 强制滚动到底部
                    scrollToBottom();
                    
                    // 延迟后显示机器人回复
                    setTimeout(() => {
                        removeTyping();
                        
                        // 获取下一条机器人消息
                        if (currentMessageIndex < demoConversation.length) {
                            const botMessage = demoConversation[currentMessageIndex];
                            if (botMessage.type === 'bot') {
                                addMessage(botMessage);
                                currentMessageIndex++;
                                
                                // 确保滚动到底部
                                scrollToBottom();
                            }
                        }
                        
                        // 继续自动演示
                        continueAutoDemo();
                    }, 1500);
                } else {
                    // 添加机器人消息
                    addMessage(nextMessage);
                    currentMessageIndex++;
                    
                    // 确保滚动到底部
                    scrollToBottom();
                    
                    // 继续自动演示
                    continueAutoDemo();
                }
            }, delay);
        }
    }
    
    // 停止自动演示
    function stopAutoDemo() {
        isAutoDemo = false;
        if (autoDemoTimer) {
            clearTimeout(autoDemoTimer);
            autoDemoTimer = null;
        }
    }
    
    // 初始化聊天窗口滚动行为
    function initChatScroll() {
        // 确保聊天容器有正确的样式设置
        if (chatMessages) {
            // 设置基本样式
            chatMessages.style.overflowY = 'auto';
            chatMessages.style.maxHeight = '300px'; // 设置最大高度确保可滚动
            chatMessages.style.scrollBehavior = 'smooth';
            
            // 使用 MutationObserver 监听聊天消息变化
            const messageObserver = new MutationObserver((mutations) => {
                scrollToBottom();
            });
            
            // 开始观察聊天消息容器的变化
            messageObserver.observe(chatMessages, {
                childList: true,
                subtree: true,
                characterData: true
            });
            
            // 监听窗口大小变化
            window.addEventListener('resize', () => {
                scrollToBottom();
            });
            
            // 监听聊天容器可见性变化
            const containerObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        if (chatContainer.classList.contains('active')) {
                            // 当聊天窗口变为活动状态时，滚动到底部
                            scrollToBottom();
                        }
                    }
                });
            });
            
            containerObserver.observe(chatContainer, { attributes: true });
            
            // 初始滚动到底部
            scrollToBottom();
            
            // 添加点击事件，确保点击聊天窗口时滚动条正常工作
            chatContainer.addEventListener('click', () => {
                setTimeout(scrollToBottom, 100);
            });
        } else {
            console.error('聊天消息容器不存在');
        }
    }
    
    // 事件监听
    chatLauncher.addEventListener('click', () => {
        openChat();
        // 自动开始演示
        startAutoDemo();
        // 确保滚动到底部
        scrollToBottom();
    });
    
    chatClose.addEventListener('click', closeChat);
    chatMinimize.addEventListener('click', minimizeChat);
    
    chatSend.addEventListener('click', sendUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
    // 添加国际化支持
    if (window.i18n) {
        // 更新占位符文本
        const updatePlaceholders = () => {
            const elements = document.querySelectorAll('[data-i18n-placeholder]');
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                if (window.i18n.messages[window.i18n.currentLanguage][key]) {
                    element.placeholder = window.i18n.messages[window.i18n.currentLanguage][key];
                }
            });
        };
        
        // 初始更新
        updatePlaceholders();
        
        // 语言变更时更新
        document.addEventListener('languageChanged', updatePlaceholders);
    }
}); 