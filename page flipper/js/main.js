$(document).ready(init);

function init() 
{
	$("#mi_libro").booklet(
		{
			width:900,
			height:650,

			closed:true,
			covers:true,
			autoCenter:true,

			pagePadding:0,
			hoverWidth:100,

		}
	);

	$("#bt_go").click(function() {
		$("#mi_libro").booklet("gotopage",$("#in_go").val());
	});


}

