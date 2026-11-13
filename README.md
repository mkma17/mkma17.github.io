# موقع Mohammed Ashram المهني

موقع ثابت ثنائي اللغة (العربية والإنجليزية) لعرض السيرة المهنية والمشاريع والمهارات والمقالات والدورات. يعمل مباشرة على GitHub Pages من دون خادم أو خطوات بناء أو مكتبات خارجية.

## محتويات المجلد

- `index.html` — أقسام الموقع ومحتواه.
- `styles.css` — التصميم المتجاوب ودعم الوضعين الفاتح والداكن.
- `script.js` — تبديل اللغة والسمة وحقول الروابط الاختيارية والمدونة.
- `assets/favicon.svg` — أيقونة الموقع.
- `assets/profile.jpg` — الصورة الشخصية.
- `assets/Mohammed_Ashram_CV.pdf` — نسخة السيرة المرتبطة بزر التنزيل.
- `assets/certificates/Intro-To-Splunk.pdf` — شهادة إتمام دورة Splunk.
- `assets/certificates/Intro-To-Splunk-preview.png` — معاينة شهادة Splunk داخل البطاقة.
- `assets/certificates/Introduction-to-Enterprise-Security.pdf` — شهادة إتمام Introduction to Enterprise Security.
- `assets/certificates/Introduction-to-Enterprise-Security-preview.png` — معاينة للشهادة داخل المعرض.
- `assets/certificates/eCIR-Prep-Certificate.jpeg` — صورة شهادة eCIR Prep.
- `assets/certificates/Digital-Forensics-Fundamentals.pdf` — شهادة Digital Forensics Fundamentals.
- `assets/certificates/Digital-Forensics-Fundamentals-preview.png` — معاينة للشهادة داخل المعرض.

## النشر على GitHub Pages

1. أنشئ مستودعًا جديدًا في حساب GitHub المرتبط بالاسم `mkma17`، وسمّه `mkma17.github.io`.
2. ارفع **محتويات هذا المجلد** إلى جذر المستودع، بحيث يكون `index.html` في الجذر.
3. افتح **Settings → Pages**.
4. اختر **Deploy from a branch**، ثم الفرع `main` والمجلد `/(root)`، واضغط **Save**.
5. بعد اكتمال النشر، افتح `https://mkma17.github.io`.

لا يحتاج الموقع إلى `npm install` أو أمر بناء. عند تعديل الملفات ورفع التغييرات إلى الفرع المنشور، يعيد GitHub Pages نشرها تلقائيًا. يمكن كذلك استخدام مستودع مشروع عادي، وعندها يكون الرابط بصيغة `https://mkma17.github.io/اسم-المستودع`.

## تحديث المحتوى

- حدّث بيانات الأقسام في `index.html`.
- روابط CyberDefenders وTryHackMe وLetsDefend موجودة في قسم المنصات داخل `index.html`.
- حدّث النصوص المقابلة للغتين في `script.js` عند إضافة أي نص يحمل خاصية `data-copy`.
- استبدل `assets/profile.jpg` بالصورة الشخصية عند تحديثها.
- في `SITE_LINKS` داخل `script.js` أضف رابط قناة YouTube وروابط إثبات الأعمال. رقم WhatsApp مضبوط على الرقم الوارد في السيرة الذاتية. شهادتا Splunk وeCIR Prep وروابطهما مضافتان؛ تظهر أزرار الشهادات الاختيارية بعد إضافة رابط صالح.
- أضف التدوينات إلى `BLOG_POSTS` في `script.js`. استخدم `type: "writeup"` مع `ar` و`en` لعنوان وملخص ومحتوى المقال، أو `type: "video"` مع رابط YouTube. مثال: `{ type: "video", url: "https://youtu.be/VIDEO_ID", ar: { title: "العنوان", summary: "ملخص" }, en: { title: "Title", summary: "Summary" } }`.
- استبدل ملف PDF عند تحديث السيرة الذاتية.

## الخصوصية

زر تنزيل السيرة يتيح الوصول إلى ملف PDF الأصلي الذي يتضمن البريد ورقم الهاتف. صفحة GitHub Pages متاحة للزوار على الإنترنت، لذا أزل بيانات التواصل من ملف PDF إذا كنت لا تريد نشرها للعامة.









