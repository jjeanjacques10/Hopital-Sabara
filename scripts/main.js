//Create table and fetch data from JSON.
$(document).ready(function() {
  $.getJSON("/files/json/Acesso_aos_privilegios_Intranet.json", function(data) {
    json_obj2 = data;

    planilha = Object.keys(json_obj2);

    var k;
    var table_body = " ";

    for (j = 0; j < planilha.length; j++) {
        k = 0;
        planilha_name = planilha[j];

        for (i = 0; i < json_obj2[planilha_name].length; i++) {
            if (json_obj2[planilha_name][k] != null) {
            table_body += table_body == " " ? '<tr style="background: #e9edf8;">' : '<tr>';

            table_body += '<th scope="row">';
            table_body += json_obj2[planilha_name][k]["Código MV"];
            table_body += "</th>";

            table_body += '<td>';
            table_body += itemUndefined(json_obj2[planilha_name][k]["Nome"]);
            table_body += "</td>";

            table_body += "<td>";
            table_body += itemUndefined(json_obj2[planilha_name][k]["Número do Conselho"]);
            table_body += "</td>";

            table_body += "<td>";
            table_body += itemUndefined(json_obj2[planilha_name][k]["Especialidade"]);
            table_body += "</td>";

            table_body += "<td>";
            table_body += itemUndefined(json_obj2[planilha_name][k]["Escopo de Atuação Geral"]);
            table_body += "</td>";

            table_body += "<td>";
            table_body += itemUndefined(json_obj2[planilha_name][k]["Escopo de Atuação Específico"]);
            table_body += "</td>";

            table_body += "<td>";
            table_body += itemUndefined(json_obj2[planilha_name][k]["Privilégios Adicionais"]);
            table_body += "</td>";

            table_body += "</tr>";
            }
            k++;
            $("#tableDiv").html("<h2>Carregando...</h2>");
        }
    }

    $("#tableDiv").html(table_body);
    //display data..........
  });
});

$(document).ready(function() {
  // for search function.................................. only............................

  //=================End=========================End===============================
});


function itemUndefined(item){
    if(item === undefined){
      return "-";
    }else{
      return item;
    }
}


$(document).ready(function() {
  // for search function.................................. only...........................
  $("button").click(function() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("table-acesso");
    tr = table.getElementsByTagName("tr");
    selectNome = document.getElementById('selectNome');
    selectNumConselho = document.getElementById('selectNumConselho');
    selectEspecialidade = document.getElementById('selectEspecialidade');
    txtNumConselho = txtNome = txtEspecialidade = nome = numConselho = especialidade = "";

    for (i = 0; i < tr.length; i++) {
      nome = tr[i].getElementsByTagName("td")[0];
      numConselho = tr[i].getElementsByTagName("td")[1];
      especialidade = tr[i].getElementsByTagName("td")[2];
      
      if (nome || numConselho || especialidade) {
        if(selectNome.checked){
          txtNome = nome.textContent || nome.innerText;
          tr[i].style.display = txtNome.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
        if(selectNumConselho.checked){
          txtNumConselho = numConselho.textContent || numConselho.innerText;
          tr[i].style.display = txtNumConselho.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
        if(selectEspecialidade.checked){
          txtEspecialidade = especialidade.textContent || especialidade.innerText;
          tr[i].style.display = txtEspecialidade.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
        if(selectEspecialidade.checked == false && selectNome.checked == false && selectNumConselho.checked == false || input == null){
          tr[i].style.display = "";
        }

      } 
    }
  });
  //=================End=========================End===============================
});