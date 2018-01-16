function import_url()
{
  astroprint.importDesign("https://www.thingiverse.com/download:2101202", "test.stl", null, true);
}

function import_blob()
{
  var fileInput = document.getElementById('the-file');
  var file = fileInput.files[0];
  if (file) {
    astroprint.importDesignByBlob(file, file.type, file.name, false);
  }
}