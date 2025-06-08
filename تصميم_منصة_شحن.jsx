export default function Home() {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <header className="text-center">
        <h1 className="text-3xl font-bold">منصة الشحن من تركيا إلى العراق</h1>
        <p className="text-gray-600 mt-2">اطلب منتجاتك من تركيا واحصل عليها بكل سهولة</p>
      </header>

      <section className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">تسجيل الدخول / إنشاء حساب</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" type="email" placeholder="البريد الإلكتروني" />
          <input className="border p-2 rounded" type="password" placeholder="كلمة المرور" />
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 md:col-span-2">تسجيل الدخول</button>
          <p className="md:col-span-2 text-center text-sm text-gray-500">ليس لديك حساب؟ <a href="#" className="text-blue-600">سجّل الآن</a></p>
        </form>
      </section>

      <section className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">الملف الشخصي</h2>
        <div className="space-y-2">
          <p><strong>الاسم:</strong> أحمد علي</p>
          <p><strong>البريد الإلكتروني:</strong> ahmad@example.com</p>
          <p><strong>الهاتف:</strong> 07701234567</p>
          <button className="bg-gray-800 text-white py-1 px-4 rounded hover:bg-gray-900">تعديل المعلومات</button>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">طلباتي السابقة</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>طلب رقم 2341 - تم التسليم</li>
            <li>طلب رقم 2348 - قيد الشحن</li>
            <li>طلب رقم 2355 - قيد المعالجة</li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2">1. تصفح المنتجات</h2>
          <p className="text-sm text-gray-700">اختر منتجك من كتالوجنا أو أرسل رابط المنتج من Trendyol أو Hepsiburada.</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2">2. أرسل الطلب</h2>
          <p className="text-sm text-gray-700">املأ نموذج الطلب مع معلوماتك ورابط المنتج، وسنقوم بشرائه نيابة عنك.</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2">3. استلم في العراق</h2>
          <p className="text-sm text-gray-700">بعد التجميع والشحن، سيتم توصيل الطلب إلى باب منزلك والدفع عند الاستلام.</p>
        </div>
      </section>

      <section className="bg-gray-50 rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">نموذج الطلب</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" type="text" placeholder="اسمك الكامل" />
          <input className="border p-2 rounded" type="text" placeholder="رقم الهاتف" />
          <input className="border p-2 rounded md:col-span-2" type="text" placeholder="رابط المنتج (مثلاً من Trendyol)" />
          <textarea className="border p-2 rounded md:col-span-2" rows="3" placeholder="ملاحظات إضافية (المقاس، اللون...)"></textarea>
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 md:col-span-2">إرسال الطلب</button>
        </form>
      </section>

      <section className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">تتبع الطلب</h2>
        <form className="space-y-4">
          <input className="border p-2 rounded w-full" type="text" placeholder="أدخل رقم الطلب" />
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">تتبع</button>
        </form>
        <div className="mt-4 text-sm text-gray-600">
          <p>ستظهر تفاصيل تتبع الشحنة هنا بعد إدخال رقم الطلب.</p>
        </div>
      </section>

      <section className="bg-yellow-50 shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">لوحة تحكم المشرف</h2>
        <div className="space-y-2">
          <div className="border rounded p-4 bg-white">
            <h3 className="font-semibold">عدد الطلبات الجديدة:</h3>
            <p className="text-green-700">12 طلب قيد المعالجة</p>
          </div>
          <div className="border rounded p-4 bg-white">
            <h3 className="font-semibold">طلبات جاهزة للشحن:</h3>
            <p className="text-blue-700">5 طلبيات جاهزة</p>
          </div>
          <div className="border rounded p-4 bg-white">
            <h3 className="font-semibold">طلبات تم تسليمها:</h3>
            <p className="text-gray-700">34 طلب مكتمل</p>
          </div>
        </div>
      </section>

      <section className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">مركز الدعم</h2>
        <form className="space-y-4">
          <input className="border p-2 rounded w-full" type="text" placeholder="عنوان الرسالة" />
          <textarea className="border p-2 rounded w-full" rows="4" placeholder="اكتب مشكلتك أو استفسارك هنا..."></textarea>
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">إرسال إلى الدعم</button>
        </form>
        <p className="text-sm text-gray-500 mt-2">يتم الرد خلال 24 ساعة عبر البريد الإلكتروني أو الرسائل النصية.</p>
      </section>

      <section className="bg-gray-100 shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">الأسئلة الشائعة</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>كم يستغرق الشحن من تركيا إلى العراق؟</strong> من 7 إلى 14 يومًا حسب المنطقة.</li>
          <li><strong>هل أستطيع الدفع عند الاستلام؟</strong> نعم، هذه إحدى ميزاتنا.</li>
          <li><strong>ما طرق التواصل المتاحة؟</strong> عبر البريد، الهاتف، أو تيليغرام.</li>
          <li><strong>هل يمكنني إرجاع المنتجات؟</strong> حسب شروط البائع التركي، نتوسط فقط في الشحن.</li>
        </ul>
      </section>
    </div>
  );
}
