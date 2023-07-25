    function calculate() {
    let weight = parseFloat(document.getElementById('weight').value);
    let growth = parseFloat(document.getElementById('growth').value);
    if (growth >= 2.5) {
        alert('Nie ma takiego wzrostu');
    }
    else{
        console.log('Testowo');
    let growtha = growth * growth;
    let result = weight/growtha;
    let bmi = Math.round(result);
    if(bmi<18.4){
        document.getElementById('all').innerHTML ="<span class='textt'><b>Twoje BMI wynosi"+bmi+" i masz niedowagę.</b><br> Skonsultuj się z lekarzem, aby ustalić przyczyny niedowagi i określić odpowiedni plan żywieniowy oraz zdrowy sposób na osiągnięcie prawidłowej masy ciała. <br>Włącz do diety pełnowartościowe posiłki, bogate w białko, zdrowe tłuszcze i węglowodany, aby zapewnić organizmowi niezbędne składniki odżywcze.<br> </span>";
        document.getElementById('back').innerHTML = "<input type='submit' class='btn btn-primary submit' onclick='goBack()' value='Wróć'>";  

    }
    if(18.5<bmi && bmi<=24.9){
      document.getElementById('all').innerHTML = "<span class='textt'> <b>Twoje BMI wynosi "+bmi+" i masz idealną wagę.</b><br> Brawo za utrzymanie prawidłowej masy ciała! <br> Pamiętaj o regularnych kontrolach zdrowia, aby monitorować swoje parametry i unikać nadmiernego przybierania na wadze.<br> Wybieraj produkty bogate w witaminy, minerały i błonnik, aby wspierać swoje zdrowie ogólnie i zapobiegać ewentualnym problemom zdrowotnym.</span>";
      document.getElementById('back').innerHTML = "<input type='submit' class='btn btn-primary submit' onclick='goBack()' value='Wróć'>";  

    }
    if(25<=bmi && bmi<=29.9){
        document.getElementById('all').innerHTML = "<span class='textt'><b>Twoje BMI wynosi "+bmi+" i masz delikatną nadwagę.</b> <br>Ogranicz spożycie wysokokalorycznych przekąsek i napojów słodzonych, a zamiast tego wybieraj zdrowe przekąski.<br>Unikaj spożywania przekąsek i posiłków w późnych godzinach wieczornych. <br>Zwiększ aktywność fizyczną, podejmując regularne ćwiczenia, takie jak spacery, bieganie lub jazda na rowerze, aby spalić nadmiar kalorii.</span>";
        document.getElementById('back').innerHTML = "<input type='submit' class='btn btn-primary submit' onclick='goBack()' value='Wróć'>";  

    }
    if(30<bmi && bmi<=34.9){
        document.getElementById('all').innerHTML = "<span class='textt'> <b>Twoje BMI wynosi "+bmi+" i masz otyłość I stopnia.</b><br>Skonsultuj się z lekarzem, aby ustalić wpływ otyłości na zdrowie i opracować indywidualny plan redukcji wagi.<br>Ogranicz spożycie kalorii i unikaj żywności o wysokiej zawartości tłuszczów i cukrów.<br>Regularnie angażuj się w ćwiczenia aerobowe i trening siłowy, aby spalić kalorie i zwiększyć wydolność organizmu.</span>";
        document.getElementById('back').innerHTML = "<input type='submit' class='btn btn-primary submit' onclick='goBack()' value='Wróć'>";  

    }
    if(35<bmi && bmi<= 39.9){
        document.getElementById('all').innerHTML = "<span class='textt'> Twoje BMI wynosi "+bmi+" i masz otyłość II stopnia.</span><br>Skonsultuj się z lekarzem, aby omówić radykalne zmiany w stylu życia, dieta niskokaloryczna i program aktywności fizycznej.<br>Skonsultuj się z lekarzem, aby omówić radykalne zmiany w stylu życia, dieta niskokaloryczna i program aktywności fizycznej.";
        document.getElementById('back').innerHTML = "<input type='submit' class='btn btn-primary submit' onclick='goBack()' value='Wróć'>";  

    }
    if(39.9<bmi){
        document.getElementById('all').innerHTML = "<span class='textt'> <b>Twoje BMI wynosi "+bmi+" i jesteś eksptremalnie otyły.</b> <br>Natychmiast skonsultuj się z lekarzem w celu opracowania bezpiecznego i zindywidualizowanego planu redukcji wagi.<br>Skorzystaj z wsparcia terapeuty, dietetyka lub specjalisty ds. odżywiania, aby uzyskać motywację i wskazówki dotyczące zdrowych nawyków żywieniowych.<br></span>";
        document.getElementById('back').innerHTML = "<input type='submit' class='btn btn-primary submit' onclick='goBack()' value='Wróć'>";  

}}}
function goBack() {
    window.location.href = 'index.html';
}