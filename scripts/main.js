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
            
            console.log(k);
            table_body += table_body == " " ? '<tr style="background: #e9edf8;">' : '<tr>';

            table_body += '<th scope="row">';
            table_body += json_obj2[planilha_name][k]["Código MV"];
            table_body += "</th>";

            table_body += "<td>";
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
  $("#search").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $("table tr").filter(function(index) {
      if (index > 0) {
        $(this).toggle(
          $(this)
            .text()
            .toLowerCase()
            .indexOf(value) > -1
        );
      }
    });
  });
  //=================End=========================End===============================
});


function itemUndefined(item){
    if(item === undefined){
      return "-";
    }else{
      return item;
    }
}