/*
 İşlem Adımları

 1- Butona tıklandığı an yakalanmalı. (addeventlistener kullanılmalı) +
 2- Input içerisine yazılan değerler tespit edilmeli. (query selector)
 3- Input içerisinde boş bir alan veya girilmemiş zorunlu alanlar var mı kontrol edilmeli. Kurala uymayan bir durum var ise alert ile ekrana
 uyarı verilmeli.
 4- Şartlar uyuyorsa localstorage a kayıt işlemi yapılmalı. ve ekrana başarılı alert'i gösterilmeli. 
 */

// üye girişi için
let uyeGirisi = document.getElementById("uyeGiris");
uyeGirisi.addEventListener('click', login);
function login() {

  let email = document.querySelector("#emailLogin");
  let password = document.querySelector("#passwordLogin");

  console.log("Email = " + email.value + "Password: " + password.value)

  if (email.value == "" || password.value == "") {
    alert("Giriş yapmak için email ve parola giriniz!");

  }
  else {


  }
}

/*
localstoragedan dataları çek ve for döngüsü dön mail mailine tutan şifresi şifresine tutan user varsa ansayfaya yönlenmesi lazım
değilse giriş bilgileri hatalı uyarısı versin.

*/


// üyelik kaydı için
const yeniUyelik = document.getElementById("yeniuyelik");

yeniUyelik.addEventListener('click', register);

function register() {

  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const eMail = document.querySelector("#emailfield");
  const password = document.querySelector("#passwordField");
  const kvkk = document.querySelector("#kvkk");

  console.log("FirstName = " + firstName.value + "Last Name : " + lastName.value + "Email:" + eMail.value + "password:" + password.value + "kvkk:" + kvkk.checked)

  if (firstName.value == "" || lastName.value == "" || eMail.value == "" || password.value == "" || kvkk.checked == false) {
    alert("Lütfen zorunlu alanları giriniz!");
  }
  else {

    let usersData = localStorage.getItem("users");
    let userList = [];
    let user = {
      FirstName: firstName.value,
      LastName: lastName.value,
      Email: eMail.value,
      Password: password.value,
      Kvkk: kvkk.checked
    }

    if (user.Email.indexOf("@") == -1 || user.Email.length < 3) {
      alert("Geçersiz email girdiniz.")
    }
    else {

      if (user.password.length < 8) {
        alert("Lütfen en az 8 karekter uzunluğunda şifre giriniz.")
      }

      else {
        if (usersData == null) {
          userList.push(user);
          let usersString = JSON.stringify(userList);
          localStorage.setItem("users", usersString);
          alert("Üye kaydınız oluşturuldu.");
        }
        else {
          userList = JSON.parse(usersData);
          let userExist = false;

          for (let index = 0; index < userList.length; index++) {
            let selectedUser = userList[index];
            if (selectedUser.Email == user.Email) {
              userExist = true;
              break;
            }
          }

          if (userExist == true) {
            alert("Bu email ile sistemde kayıtlı kullanıcı var.")
          } else {
            userList.push(user);
            let usersString = JSON.stringify(userList);
            localStorage.setItem("users", usersString);
            alert("Üye kaydınız oluşturuldu.");

          }

        }

      }

    }





  }

}