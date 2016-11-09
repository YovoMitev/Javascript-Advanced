function tableBuilder(selector) {
    let table = $('<table>');

    function createTable(tableArr){
        let tr = $('<tr>');
        for(let data of tableArr){
            tr.append($('<th>').text(data));
        }
         tr.append($('<th>').text("Action"));
        table.append(tr);

        $(selector).empty();
        $(selector).append(table);
    }
    
    function fillData(arr) {
        for(let data of arr){
            let tr = $('<tr>');
            for(let name of data){
                tr.append($('<td>').text(name));
            }
            tr.append($('<td>').append($('<button>').text('Delete')).on('click',function () {
                $(this).parent().remove();
            }));
            table.append(tr);
        }

    }

    return {createTable,fillData};
}