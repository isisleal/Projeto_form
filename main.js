

 

   firebase.initializeApp({
     apiKey: "AIzaSyDbDhbUV8XxSNrVSKDB9y7Vj6IjFx9sOZs",
     authDomain: "projeto-form-f37bf.firebaseapp.com",
     projectId: "projeto-form-f37bf",
   });
  
   var db = firebase.firestore()
   
   function executar(){  

  

    function getRadioValue()
    {
        for (var i = 0; i < document.getElementsByName("sexo").length; i++)
        {
            if (document.getElementsByName("sexo")[i].checked)
            {
                return document.getElementsByName("sexo")[i].value;
            } 
        }
    }
    

  
    

 db.collection("Projeto").add({
    nome: document.getElementById("form_nome").value,
    data: document.getElementById("form_data").value,
    sexo: getRadioValue(),
    endereco: document.getElementById("form_end").value,
    complemento: document.getElementById("form_end_com").value,
    bairro: document.getElementById("form_end_bai").value,
    cidade: document.getElementById("form_end_cid").value,
    estado: document.getElementById("select").value,
    telefone: document.getElementById("form_tel").value,
    celular: document.getElementById("form_cel").value,
    email: document.getElementById("form_end_email").value,
    mensagem: document.getElementById("texto").value,
    
    
 })
 .then(function() {
     console.log("Document successfully written!");
 })
 .catch(function(error) {
     console.error("Error writing document: ", error);
 });

 }

 