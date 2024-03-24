function showAbout() {
    alert("FavDess sitesi, çoğu kişinin vazgeçemediği benzersiz tatlı tarifleri için oluşturulmuştur. Sitede çeşitli tatlı tariflerini bulabilir ve deneyebilirsiniz.");
}
function showContact() {
    alert("İletişim Bilgileri:\nAdres: Örnek Mahallesi, Örnek Sokak No: 123\nTelefon: 0123 456 78 90\nE-posta: info@ornek.com");
}

function toggleRecipe(recipeId) {
    var recipePopup = document.getElementById(recipeId);
    if (recipePopup.style.display === "block") {
        recipePopup.style.display = "none";
    } else {
        // Tüm tariflerin görünürlüğünü kapat
        var allRecipePopups = document.querySelectorAll('.recipe-popup');
        allRecipePopups.forEach(function(item) {
            item.style.display = 'none';
        });
        // Seçili tarifin görünürlüğünü aç
        recipePopup.style.display = "block";
    }
}

function zoomLogo() {
    var logo = document.getElementById("logo");
    logo.style.transform = "scale(1.1)"; // Logoyu büyüt
}
