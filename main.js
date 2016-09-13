console.log("Javascript,are you there?");

$(document).ready(function () { //Putting them in a table.
    $.getJSON('http://localhost:3000',
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].Name + "</td>");
            tr.append("<td>" + json[i].Score + "</td>");
            tr.append("<td>" + json[i].Initial + "</td>");
            $('table').append(tr);
        }
        $.fail(function () {
          console.log('error')
        })
        $.always(function () {
          console.log('complete')
        })
    });
});
