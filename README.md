Navbar ve login page den oluşuyor 
redux toolkit kullandım
uı için bootstrap
yönlendirme router olarak yapılıyor
Navbar bootsstrapten eklendi
User varsa bizi anasayfaya yönlendir yoksa yönlendirme 
Amacımız apiden gelen verileride etrafa dağıtmak
user biligilerini global statete yani reduxta tutucaz
Sonraki kullanımlar için email ve paswordu siliyoruz
Loginde veriyi silmeden önce dispatch ile satete yazıyoruz
Disaptch ile redux state gidiyor sıkıntı yoksa güncelliyor stateleri
Hadi kullanıcıdan ladığımız stateleri global statete dispatch ile taşıyalım
App içerisinden Approuteri çağırıyoruz herşey Approutere geliyor
Stateteki veri,leri useSelector ile user bilgisini okuyoruz
features içerisinde projenin stateleri oluyor
app içerisinde projenin store oluyor
user biligileri için Authslice
createSlice methodu ile obje oluşturuyoruz
initialState başlangıç değerini veriyoruz
reducerslar stateleri değiştiren action methodları içeriyor
authSlice içerisinde userı setleyen method ve userı silen methoda var
setUser giriş yapıldığı zaman  veriyi alıp doldurması lazım
hem methodalrı hemde reducerı göndermemiz gerekiyor
ConfigureStore ekliyoruz stora
rxslice yazarak sliceları kolayca oluşturabiliyoruz
Silme işleminde payloada ihitiyaç yok
İstediğimiz sayfada gelen veriyi dispatch yapıyoruz
Kişi Login Olduğunda  setUser methodunu güncellememiz lazım
Loginde setUsera email ve password datasını vereerek güncellemseini istiyoruz
Loginden setUsera gidiyor ve onu güncelleyip usera yazıyor bizim isteklerimizi
ilk gelecek hatayı gidermenin yolu  soru işreti koymak çünkü null veya undefined gelebilir
user?.email  user varsa emaile git demek
İl sayfada 20 adet geliyor sonrasında pagination yapsısı kurarak  değerlerinide gösterebiliriz
form ve search avantajı formda enter demeye gerek yok searchte ise yazdığın anda x işareti çıkıyor
valueye bağlı olmazssa kontrolsüz component oluyor
middleware api isteklerimin reducera sunulmasını sağlayan ara yazılım
veriyi çekerken ilki type sonra yazmak istediğimiz async fonksiyon
async den gelen veriye göre statei güncellememiz gerekiyor

//! 2.Kısım Sorular ve Cevaplar // !

1)Form elementine onSubmit(handleSubmit ) yapmak ile sadece butona onClick verme arasında ne fark var?
1)Cevap:
Form elementine onSubmit kullanıldığında:

Varsayılan Davranış: onSubmit tetiklendiğinde tarayıcı, formun varsayılan davranışı olan sayfa yenilemeyi gerçekleştirir. React projelerinde genellikle bu davranış, event.preventDefault() ile engellenir.
Enter Tuşu ile Çalışma: Form içerisindeki herhangi bir input alanında kullanıcı "Enter" tuşuna bastığında da onSubmit çalışır. Bu, formların varsayılan ve yaygın bir davranışıdır.
Aksesuarlar: onSubmit, birden fazla input veya button varsa formun bütünsel bir şekilde çalışmasını sağlar.
Erişilebilirlik (Accessibility): Form elementine onSubmit kullanmak, erişilebilirlik standartlarına daha uygun bir deneyim sunar. Örneğin, ekran okuyucular bu davranışı destekler.

Sadece butona onClick atandığında:

//**Enter Tuşu Çalışmaz: Kullanıcı formdaki herhangi bir input alanında "Enter" tuşuna bastığında işlem gerçekleşmez. Kullanıcı yalnızca butona tıklayarak işlemi tetikleyebilir.
Sadece Buton Odaklıdır: onClick, yalnızca o butonla ilişkilendirilir. Bu, formun bütünsel bir davranış sergilemesini engeller.
Erişilebilirlik Daha Azdır: onClick kullanımı form bağlamında daha az erişilebilir bir yaklaşımdır. Örneğin, ekran okuyucular formun submit işlemini düzgün şekilde algılamayabilir.//

2)Lablellerde kullanılan HtmlFor ne için kullanılır

2)Cevap:
Özet
htmlFor, bir <label> etiketiyle bir form elemanını bağlamak için kullanılır.
htmlFor'un değeri, form elemanının id değeriyle aynı olmalıdır.
Erişilebilirliği ve kullanıcı deneyimini iyileştirir.
React'te htmlFor, HTML'deki for özelliğinin karşılığıdır.

Label ve Input Bağlantısı Kurar:

Bir <label> etiketiyle bir form elemanını ilişkilendirir.
Kullanıcı, <label> üzerine tıkladığında otomatik olarak bağlı form elemanına odaklanır.
Erişilebilirlik (Accessibility):

Ekran okuyucular ve diğer yardımcı teknolojiler, bu bağlantıyı algılayarak kullanıcı deneyimini iyileştirir.
Kullanıcı Deneyimi:

Küçük dokunmatik ekranlarda (örneğin telefonlarda), <input> yerine <label> üzerine tıklamak daha kolaydır.

3)Movies Yanında film sayısını göster
4)Put ve id redux üzerinden yap

onClick={handleDelete(movie.id)}   bu şekilde sü butonu çalıştırdığı için hemen render ediliyor onClick={()=>handleDelete(movie.id)} şeklinde çağırmak 
lazım bu butona basmadığın sürece çalışmaz