function verificar() {
  var date = new Date();
  var year = date.getFullYear();
  var fullyear = document.getElementById("txtyear");
  var res = document.querySelector("div.res");
  if (fullyear.value.length == 0 || Number(fullyear.value) > year) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var age = year - Number(fullyear.value);
    var gender = "";
    var img = document.createElement("img");
    img.setAttribute("id", "photo");
    if (fsex[0].checked) {
      gender = "masculino";
      if (age >= 0 && age < 10) {
        //child
        img.setAttribute("src", "img/menino.png");
      } else if (age >= 10 && age < 18) {
        //teenager
        img.setAttribute("src", "img/menino-adolescente.png");
      } else if (age >= 18 && age < 40) {
        //younger
        img.setAttribute("src", "img/homem-jovem.png");
      } else if (age >= 40 && age < 70) {
        //mature
        img.setAttribute("src", "img/homem-maduro.png");
      } else {
        //older
        img.setAttribute("src", "img/homem-idoso.png");
      }
    } else if (fsex[1].checked) {
      gender = "feminino";
      if (age >= 0 && age < 10) {
        //child
        img.setAttribute("src", "img/menina.png");
      } else if (age >= 10 && age < 18) {
        //teenager
        img.setAttribute("src", "img/menina-adolescente.png");
      } else if (age < 40) {
        //younger
        img.setAttribute("src", "img/mulher-jovem.png");
      } else if (age >= 40 && age < 70) {
        //mature
        img.setAttribute("src", "img/mulher-madura.png");
      } else {
        //older
        img.setAttribute("src", "img/mulher-idosa.png");
      }
    }
    res.innerHTML = `Você é uma pessoa do gênero ${gender} com ${age} anos`;
    res.appendChild(img);
  }
}
