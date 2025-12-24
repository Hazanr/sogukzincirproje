# Soğuk Zincir Lojistik ve Filo Yönetimi Karar Destek Sistemi (DSS)

Bu çalışma, Ege Bölge Müdürlüğü bünyesinde faaliyet gösteren soğuk zincir depolarının ve sevkiyat filosunun yönetim süreçlerini dijitalleştirmek ve stratejik karar verme aşamalarını optimize etmek amacıyla geliştirilmiş bir Karar Destek Sistemidir (KDS).

## Projenin Amacı ve Kapsamı
Yönetim Bilişim Sistemleri (YBS) perspektifiyle hazırlanan bu proje, sıcaklık hassasiyeti yüksek olan gıda ürünlerinin tedarik zinciri boyunca güvenliğini sağlamayı, operasyonel maliyetleri minimize etmeyi ve kaynak verimliliğini artırmayı hedeflemektedir. Sistem, bölge müdürüne betimsel ve kestirimci analizler sunarak proaktif bir yönetim ortamı sağlamaktadır.

## Temel Fonksiyonlar
- **CBS Tabanlı Canlı İzleme:** Leaflet.js entegrasyonu ile depo lokasyonlarının ve aktif filonun (35 A Serisi) coğrafi bilgi sistemleri üzerinde anlık takibi.
- **Dinamik Kapasite Simülasyonu (What-If Analizi):** Stok girişleri öncesinde "Gelecek Ürün" parametreleri ile 3 renkli görselleştirme üzerinden doluluk oranlarının öngörülmesi.
- **Yeşil Lojistik ve Emisyon Takibi:** Yakıt tüketimi, soğutma ünitesi enerji yükü ve karbon ayak izi (CO2 emisyonu) hesaplamaları ile sürdürülebilir lojistik yönetimi.
- **Rota Optimizasyonu:** Operasyonel verimlilik için duraklar arası en verimli rotanın coğrafi olarak haritalandırılması.
- **Veri Güvenliği ve Bütünlüğü:** Veritabanı seviyesinde tanımlanan SQL Tetikleyicileri (Triggers) ile kapasite aşımlarının önlenmesi ve veri tutarlılığının sağlanması.

## Teknik Mimari (MVC)
Proje, katmanlı mimari yapısına uygun olarak **Model-View-Controller (MVC)** mimarisi üzerine inşa edilmiştir:
- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS), Chart.js
- **Veritabanı:** MySQL (Relational Database Management System)
- **Harita Servisi:** OpenStreetMap / Leaflet.js

## Kurulum ve Çalıştırma
1. Proje dosyalarını klonlayın.
2. `npm install` komutu ile kütüphaneleri yükleyin.
3. Veritabanı yedeğini (`.sql`) MySQL sunucunuza aktarın.
4. `node app.js` komutu ile sunucuyu başlatın ve `http://localhost:3000` adresinden erişim sağlayın.