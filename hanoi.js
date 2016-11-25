function File(size) {
   var size = size;
   file = document.createElement('div');
   file.setAttribute('id', size);
   file.setAttribute('class', 'file');
   file.setAttribute('style', 'width:'+i*2+'em');
   
   this.selectFile = function() {
      alert();
      document.getElementById('aux').appendChild(this);
   }
  /*this.putFile = function(){}
   this.checkFile = function(){}
  */
   return file;
}

function Game() {
   var tower      = document.getElementById('t1');
   var selected   = false;
   var aux        = document.getElementById('aux');
   var selectFile = function(t) {
      files = t.getElementsByClassName('file');
      n = files.length -1; 
      selFile = files[n];
      console.log('selFile');
      aux.appendChild(selFile);
      selected = true;
   };
   var getSelectedFile = function(t) {
      files = t.getElementsByClassName('file');
      console.log(files);
      n = files.length -1;
      console.log(n);
      auxFile = aux.getElementsByClassName('file')[0];
      console.log(auxFile);
      if( n >= 0 ) {
         lastFileSize = files[n].getAttribute('id');
         console.log(lastFileSize);
         if(lastFileSize > auxFile.getAttribute('id') ) {
            t.appendChild(auxFile);
            selected = false;
         }
      } else {
         t.appendChild(auxFile);
         selected = false;
      }
   }
   for ( i = 7; i >= 1; i-- ) {
      file = new File(i);
      tower.appendChild(file);
   }
   var towerList = document.getElementsByClassName('tower');
   for ( i in towerList ) {
      towerList[i].addEventListener('click', function() { 
         if( selected ) {
            getSelectedFile(this);
         } else {
            selectFile(this);
         }
      });
   }
}

document.onload = new Game();
