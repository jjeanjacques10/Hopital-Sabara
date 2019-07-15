//Create table and fetch data from JSON.
$(document).ready(function(){
    $.getJSON("/files/json/Acesso_aos_privilegios_Intranet.json", function(data) {
        json_obj2 = data;
    
        var k = 0;
        var table_body = '';
        
        for(i =0;i<json_obj2.length;i++){
                table_body+='<tr>';

                table_body +='<td>';
                table_body +=json_obj2[k]["Código MV"];
                table_body +='</td>';

                table_body +='<td>';
                table_body +=json_obj2[k]["Nome"];
                table_body +='</td>';

                table_body +='<td>';
                table_body +=json_obj2[k]["Número do Conselho"];
                table_body +='</td>';

                table_body +='<td>';
                table_body +=json_obj2[k]["Especialidade"];
                table_body +='</td>';

                table_body +='<td>';
                table_body +=json_obj2[k]["Escopo de Atuação Geral"];
                table_body +='</td>';

                table_body +='<td>';
                table_body +=json_obj2[k]["Escopo de Atuação Específico"];
                table_body +='</td>';

                table_body +='<td>';
                table_body +=json_obj2[k]["Privilégios Adicionais"];
                table_body +='</td>';
            
                table_body+='</tr>';
                k++;
                $('#tableDiv').html("<h2>Carregando...</h2>");
        }

        $('#tableDiv').html(table_body);
        //display data..........
    }); 

    
});

$(document).ready(function(){
    // for search function.................................. only............................
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("table tr").filter(function(index) {
            if(index>0){
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            }
        });
    });
    //=================End=========================End===============================
});