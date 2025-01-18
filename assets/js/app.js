function openTab(event, tabId) {
            const tabButtons = document.querySelectorAll('.button');
            const tabContents = document.querySelectorAll('.tabPara');

            tabButtons.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(tabPara => tabPara.classList.remove('active'));

            event.currentTarget.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        }