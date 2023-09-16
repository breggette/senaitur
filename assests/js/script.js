 
$(document).ready(function() {
    $(".btnPassagem").click(function() {
        // Coletar os valores dos campos de entrada
        var origem = $("input[name='origem']").val();
        var destino = $("input[name='destino']").val();
        var dataIda = $("input[name='dataIda']").val();
        var dataRetorno = $("input[name='dataRetorno']").val();

        // Criar o conteúdo da modal com os valores coletados
        var modalContent = "<p>Origem: " + origem + "</p>";
        modalContent += "<p>Destino: " + destino + "</p>";
        modalContent += "<p>Data de Ida: " + dataIda + "</p>";
        modalContent += "<p>Data de Retorno: " + dataRetorno + "</p>";

        // Adicionar informações da tabela à modal
        modalContent += "<table>";
        modalContent += "<th>Companhias</th>";
        modalContent += "<th>Preços</th>";
        modalContent += "<th>Horarios</th>";

        // Adicionar linhas da tabela à modal (você pode adicionar mais linhas conforme necessário)
        modalContent += "<tr><td>Latam</td><td>R$ 500</td><td>07:00</td></tr>";
        modalContent += "<tr><td>Azul</td><td>R$ 498</td><td>18:00</td></tr>";
        modalContent += "<tr><td>Gold</td><td>R$ 489</td><td>10:00</td></tr>";

        modalContent += "</table>";

        // Exibir a modal com o conteúdo
        $("#modalContent").html(modalContent);
        $("#myModal").modal("show");
    });

    // Fechar a modal quando o botão "Fechar" for clicado ou fora da modal
    $("#myModal").on("hidden.bs.modal", function() {
        // $(this).find('form')[0].reset(); // Limpar o formulário quando a modal é fechada
    });
});