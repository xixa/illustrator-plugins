#include json2.js

function main() {
  var titles = loadJson("moreThings.json");

  var doc = documents.add()
  var midX = app.activeDocument.width / 2
  var midY = app.activeDocument.height / 2

  var rad = 200

  for (var i = 0; i < titles.length; i++) {
    var group = doc.groupItems.add()
    var circle = group.pathItems.ellipse(0, 0, 1, 1)
    var txt = group.textFrames.add()
    var angle  =  -i * (360 / titles.length)

    txt.translate(rad, 0)
    txt.contents = titles[i]
    txt.selected = true

    group.left = midX
    group.top = midY

    group.rotate( angle, true, false, false, false, Transformation.LEFT)

    circle.remove()

    if (angle < -90 && angle > -270 ) {
      txt.resize(-100, -100)
    }
  }
}

function loadJson(path) {
  var thisFile = new File($.fileName);
  var json = new File(thisFile.path + "/" + path);

  json.open("r");
  var content = json.read();
  json.close();

  return JSON.parse(content);
}

main();
