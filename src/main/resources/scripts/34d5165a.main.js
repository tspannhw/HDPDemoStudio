$(document).ready(function(){var a=!0;$("#appImage").fileinput({dropZoneEnabled:!1,showUpload:!1,allowedFileExtensions:["jpg","gif","png"],allowedFileTypes:["image"],elErrorContainer:"#errorBlock",browseClass:"btn btn-success",browseLabel:"Pick Image",browseIcon:'<i class="glyphicon glyphicon-picture"></i>',removeClass:"btn btn-danger",removeLabel:"Delete",removeIcon:'<i class="glyphicon glyphicon-trash"></i>'});var b=1;$("#cpTable").on("click",".cp_add",function(){console.log("Starting Row Add"),$(".cp_add").addClass("hidden"),$(".cp_del").removeClass("hidden"),b++;var a=$("<tr></tr>").attr("id","cp_"+b),d=$("<input/>").attr("type","text").attr("name","cp_"+b+"_name").attr("id","cp_"+b+"_name").addClass("form-control");a.append($("<td></td>").append(d)),a.append($("<td></td>").append(c("cp_"+b+"_type")));var e=$("<input/>").attr("type","radio").attr("name","cp_pivot").attr("id","cp_"+b+"_name");a.append($("<td></td>").append(e));var f=$("<button>").attr("type","button").attr("id","cp_"+b+"_add").addClass("btn btn-success cp_add").append('<span class="glyphicon glyphicon-plus" aria-hidden="true" />'),g=$("<button>").attr("type","button").attr("id","cp_"+b+"_del").attr("rowidx",b).addClass("btn btn-danger cp_del").append('<span class="glyphicon glyphicon-minus" aria-hidden="true" />');a.append($("<td></td>").append(f).append(g)),$("#cpTable > tbody:last").append(a)}),$("#cpTable").on("click",".cp_del",function(){console.log($("#cp_"+$(this).attr("rowidx"))),$("#cp_"+$(this).attr("rowidx")).remove()});var c=function(a){var b=[{displayName:"String",value:"string"},{displayName:"Test",value:"text_general"},{displayName:"Integer",value:"integer"},{displayName:"Long",value:"long"},{displayName:"Location",value:"location"},{displayName:"Date",value:"date"}],c=$("<select></select>").attr("id",a).attr("name",a).addClass("form-control");return $.each(b,function(a){c.append("<option>"+b[a].displayName+"</option>").attr("value",b[1].value)}),c};$("#imageUpload").submit(function(b){var c="app/upload";a&&(c="app/upload"),console.log("Upload Url: "+c),$.ajax({url:c,type:"POST",data:new FormData(this),processData:!1,contentType:!1}),b.preventDefault()}),$("#createAppButton").click(function(b){var c="app/create";a&&(console.log("In DEV Changing Locations"),console.log($("#imageUpload").attr("action")),$("#imageUpload").attr("action","app/upload"),c="app/create",console.log(c)),$("#imageUpload").submit();var d=$("#appForm").serializeArray(),e={};$.each(d,function(a,b){"on"===b.value&&(b.value=!0),e[b.name]=b.value}),e.bgImg="/tmp/bg.jpg",$.post(c,e),b.preventDefault()}),$("#form").keypress(function(a){13===a.which&&a.preventDefault()})});