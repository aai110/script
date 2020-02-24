


<script>
  // ARRAY FOR HEADER.
  var arrHead = new Array();
  arrHead = ['project/task', 'task reported'];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.

  // FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
  // ADD THE TABLE TO YOUR WEB PAGE.
  function createTable() {
    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'empTable');            // SET THE TABLE ID.

    var tr = empTable.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
      var th = document.createElement('th');          // TABLE HEADER.
      th.innerHTML = arrHead[h];
      tr.appendChild(th);
    }

    var div = document.getElementById('cont');
    div.appendChild(empTable);    // ADD THE TABLE TO YOUR WEB PAGE.
  }

  // ADD A NEW ROW TO THE TABLE.s
  function addRow() {
    var empTab = document.getElementById('empTable');

    var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
    tr = empTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) {
      var td = document.createElement('td');          // TABLE DEFINITION.
      td = tr.insertCell(c);

      if (c == 0) {           // FIRST COLUMN.
        var ele = document.createElement('input');
        ele.setAttribute('type', 'text');
        ele.setAttribute('value', '');

        td.appendChild(ele);
      }
      else {
        // CREATE AND ADD TEXTBOX IN EACH CELL.
        var ele = document.createElement('input');
        ele.setAttribute('type', 'text');
        ele.setAttribute('value', '');

        td.appendChild(ele);
      }
    }
  }

  // DELETE TABLE ROW.
  function removeRow(oButton) {
    var empTab = document.getElementById('empTable');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
  }

  // EXTRACT AND SUBMIT TABLE DATA.
  function submit() {
    var myTab = document.getElementById('empTable');
    var values = new Array();

    // LOOP THROUGH EACH ROW OF THE TABLE.
    for (row = 1; row < myTab.rows.length - 1; row++) {
      for (c = 0; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.

        var element = myTab.rows.item(row).cells[c];
        if (element.childNodes[0].getAttribute('type') == 'text') {
          values.push("'" + element.childNodes[0].value + "'");
        }
      }
    }

    // SHOW THE RESULT IN THE CONSOLE WINDOW.
    console.log(values);
  }

  $(function () {
    $('#calendericon').daterangepicker({
      opens: 'right'
    }, function (start, end, label) {
      document.getElementById('startdate').innerHTML = start || "MM-DD";
      document.getElementById('hyphn').innerHTML = "-" || "??";
      document.getElementById('enddate').innerHTML = end || "MM-DD";
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
    

    //Get the value of Start and End of Week
    
  });



  $(document).ready(function () {
    $('#weeklyDatePicker').on('dp.change', function (e) {
      var value = $("#weeklyDatePicker").val();
      var firstDate = moment(value, "MM-DD-YYYY").day(0).format("MM-DD-YYYY");
      var lastDate = moment(value, "MM-DD-YYYY").day(6).format("MM-DD-YYYY");
      $("#weeklyDatePicker").val(firstDate + " - " + lastDate);
    });
    //Initialize the datePicker(I have taken format as mm-dd-yyyy, you can     //have your owh)

  });

  var obj =
    [
      {
        tittle: "App migration with rollbase", mon: "7 h: 19 min",
        tue: "4 h:15 min", wed: "7 h: 19 min", ths: "4 h:15 min"
        , fri: "7 h: 19 min", sat: "4 h:15 min"
      },

      {
        tittle: "migrating the app", mon: "7 h: 19 min",
        tue: "4 h:15 min", wed: "7 h: 19 min", ths: "4 h:15 min"
        , fri: "7 h: 19 min", sat: "4 h:15 min"
      },

      {
        tittle: "testing rollbase isde functionalities", mon: "7 h: 19 min",
        tue: "4 h:15 min", wed: "7 h: 19 min", ths: "4 h:15 min"
        , fri: "7 h: 19 min", sat: "4 h:15 min"
      },

      {
        tittle: "Documentation for icons", mon: "7 h: 19 min",
        tue: "4 h:15 min", wed: "7 h: 19 min", ths: "4 h:15 min"
        , fri: "7 h: 19 min", sat: "4 h:15 min"
      },

      {
        tittle: "container app impprovements", mon: "7 h: 19 min",
        tue: "4 h:15 min", wed: "7 h: 19 min", ths: "4 h:15 min"
        , fri: "7 h: 19 min", sat: "4 h:15 min"
      }
    ]


  var tbl = $("<table/>").attr("id", "mytable");
  $("#div1").append(tbl);
  for (var i = 0; i < obj.length; i++) {
    var tr = "<tr>";
    var td1 = "<td>" + obj[i]["tittle"] + "</td>";
    var td2 = "<td>" + obj[i]["mon"] + "</td>";
    var td3 = "<td>" + obj[i]["tue"] + "</td>";
    var td4 = "<td>" + obj[i]["wed"] + "</td>";
    var td5 = "<td>" + obj[i]["ths"] + "</td>";
    var td6 = "<td>" + obj[i]["fri"] + "</td>";
    var td7 = "<td>" + obj[i]["sat"] + "</td></tr>";
    $("#mytable").append(tr + td1 + td2 + td3 + td4 + td5 + td6 + td7);
  }


</script>
