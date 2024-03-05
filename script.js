document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const submitButton = document.getElementById('submit-btn');
    const warningMessage = document.getElementById('warning-message');

    // إخفاء الرسالة التحذيرية في البداية
    warningMessage.style.opacity = '0';

    submitButton.addEventListener('click', function(event) {
        if (nameInput.value === '' || ageInput.value === '') {
            event.preventDefault(); // منع سلوك الزر الافتراضي (إرسال النموذج)
            warningMessage.textContent = "اكتب اسمك وسنك الأول!";
            fadeIn(warningMessage);
        } else {
            // إخفاء الرسالة بمجرد استكمال البيانات
            warningMessage.style.opacity = '0';
            // تحويل الطفل إلى الصفحة الجديدة بعد استكمال البيانات
            window.location.href = 'D:\lolo learn script 0\تصنيفات\قوائم.html'; //  "D:\lolo learn script 0\تصنيفات\قوائم.html" إلى عنوان URL الفعلي للصفحة الجديدة
        }
    });
});

// دالة لجعل العنصر مرئيًا تدريجيا
function fadeIn(element) {
    let opacity = 0;
    let interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 100);
}
