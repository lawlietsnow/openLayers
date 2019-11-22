# openLayers

map chứa layer  <br />layer chứa source<br />  source chứa các feature <br /> feature chứa icon. icon có syle và syle có imgsrc

#marker

marker có thể là 1 feature hoặc 1 overlay


#overlay

overlay thường dùng để tao popup<br />

#draw
var draw = new Draw({<br />
  source : vevctorSource,<br />
  type : 'Polygon'<br />
});<br />
map.addInteraction(draw);<br />
draw.on('drawend',evt=>{<br />
  //on end draw<br />
});<br />


#todo: click vào 1 icon(feature) thì hiển thị 1 overlay có thông tin của icon
