//<![CDATA[

var map, httpObj;

function initialize()  {
	map = new GMap2(document.getElementById("map"));
	map.setCenter(new GLatLng(34.834752, 138.183324), 13);
	map.addControl(new GLargeMapControl());
	var msec = (new Date()).getTime();
	httpObj = GXmlHttp.create();
	httpObj.open("get", "./data/mise.csv?cache="+msec);

	httpObj.onreadystatechange = function() {
		if ((httpObj.readyState == 4) && (httpObj.status == 200)) addMarker();
	}
	httpObj.send(null);
}

function addMarker() {
	var CR = String.fromCharCode(13);
	var txt = httpObj.responseText;
	var pointData = txt.split(CR);
		for (var i=0; i<pointData.length; i++) {
			var pnt = pointData[i].split(",");
			var html = "<a href="+pnt[13]+","+pnt[14]+">"+pnt[0]+"</a>";
			var point = new GLatLng(pnt[11],pnt[12]);
			/*var icon=new GIcon();
			
				
					icon.image="./images/a.png";
				
			icon.iconSize=new GSize(20, 20);
			icon.iconAnchor = new GPoint(10, 10);
			*/
			var marker = createMarker(point,html);

			
		}
}
function createMarker(point,html){
	var marker = new GMarker(point);
	map.addOverlay(marker);
	GEvent.addListener(marker, "click", function() {
   		marker.openInfoWindowHtml(html);
 	 });
	return marker;
}
google.maps.event.addDomListener(window, 'load', initialize);

//]]>
