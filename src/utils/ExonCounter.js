export const exonCounter = (position, gene) => {
  if (gene === "RHD") {
    if (position >= 1 && position <= 187) return 1
    if (position >= 188 && position <= 374) return 2
    if (position >= 375 && position <= 525) return 3
    if (position >= 526 && position <= 673) return 4
    if (position >= 674 && position <= 840) return 5
    if (position >= 841 && position <= 978) return 6
    if (position >= 979 && position <= 1112) return 7
    if (position >= 1113 && position <= 1192) return 8
    if (position >= 1193 && position <= 1266) return 9
    if (position >= 1267 && position <= 2814) return 10
  } else if (gene === "RHCE") {
    if (position >= 1 && position <= 187) return 1
    if (position >= 188 && position <= 374) return 2
    if (position >= 375 && position <= 525) return 3
    if (position >= 526 && position <= 673) return 4
    // this exon has one more nucleotide
    if (position >= 674 && position <= 841) return 5
    // this exon has one less
    if (position >= 842 && position <= 978) return 6
    if (position >= 979 && position <= 1112) return 7
    if (position >= 1113 && position <= 1192) return 8
    if (position >= 1193 && position <= 1266) return 9
    if (position >= 1267 && position <= 2814) return 10
  }

  return null
}
