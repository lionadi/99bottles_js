import { downTo } from "./helpers";

class Bottles {
  constructor() {
    this.bottlesAmount = 0;
  }

  song()
  {
    return this.verses(99, 0);
  }

  verse(bottlesStart) 
      {
          return this.verses(bottlesStart, bottlesStart);
      }

  verses(bottlesStart, bottlesEnd = bottlesStart) {
    var text = "";

    for (var bottles = bottlesStart; bottles >= bottlesEnd; bottles--) {
      if (bottles > 2) {
        text +=
          `${bottles} bottles of beer on the wall, ` +
          `${bottles} bottles of beer.\n` +
          `Take one down and pass it around, ` +
          `${bottles - 1} bottles of beer on the wall.\n`;
      } else if (bottles == 2) {
        text +=
          `${bottles} bottles of beer on the wall, ` +
          `${bottles} bottles of beer.\n` +
          `Take one down and pass it around, ` +
          `${bottles - 1} bottle of beer on the wall.\n`;
      } else if (bottles == 1) {
        text +=
          `${bottles} bottle of beer on the wall, ` +
          `${bottles} bottle of beer.\n` +
          "Take it down and pass it around, " +
          `no more bottles of beer on the wall.\n`;
      } else if (bottles == 0) {
        text +=
          "No more bottles of beer on the wall, " +
          "no more bottles of beer.\n" +
          "Go to the store and buy some more, " +
          "99 bottles of beer on the wall.\n";
      }

      if(bottles > bottlesEnd)
        text += '\n';
    }

    return text;
  }
}

export { Bottles };
