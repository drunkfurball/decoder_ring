function MurphsDecoderRingOfBadassery() {

  this.rot13 = function rot13(str, key, offset, decode) { // LBH QVQ VG!

    var i = "";
    var s = {};
    //if a key is passed use it, otherwise use alphabet, rot13 default
    key = (key ? key : ['A', 'B', 'C', 'D', 'E',  'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
    //if an valid offset has been passed use it, otherwise default to half and half, rot13 default
    offset = ((offset && offset < key.length) ? offset : key.length/2);
    //Build dictionary from key and offset
    if (decode) {// if the decode argument is set, flip the key pairs
      for (x = 0;x < key.length; x++) {
        if(x + offset < key.length) {
          s[key[offset + x]] = key[x];
        }
        else {
          s[key[offset - (key.length -x)]] = key[x];
        }
      }
    }
      else {
        for (x = 0; x < key.length; x++) {
          if (x + offset < key.length) {
            s[key[x]] = key[offset + x];
          }
          else {
            s[key[x]] = key[offset - (key.length - x)];
          }
        }
    }
    //encode str using the dictionary
    for (n = 0; n < str.length; n++) {
      if (s[str.charAt(n)] !== undefined) { 
        i = i + s[str.charAt(n)];
      }
      else {
        i = i + str.charAt(n);
      }
    }
    return i;

  }

}
// Change the inputs below to test
//rot13("SERR PBQR PNZC!");
//rot13("SERRCVMMN!");
//rot13("SERR YBIR?");
//rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
//rot13("HELLO WOLRD."); // regular rot13 encode
//rot13("URYYB JBYEQ."); // regular decode method
//rot13("HELLO WORLD!", ['W', 'E', 'L', 'C', 'O', 'M', 'T', 'H', 'U', 'N', 'D', 'R']); //encode with custom key
//rot13("EHUUD TDMUO!", ['W', 'E', 'L', 'C', 'O', 'M', 'T', 'H', 'U', 'N', 'D', 'R']); //decode from custom key
//rot13("HELLO WORLD?", ['W', 'E', 'L', 'C', 'O', 'M', 'T', 'H', 'U', 'N', 'D', 'R'], 5); //encode with custom key and custom offset
//rot13("WTHHN MNOHC?", ['W', 'E', 'L', 'C', 'O', 'M', 'T', 'H', 'U', 'N', 'D', 'R'], 5, true); //decode from custom key and custom offset
