function noteRandomizer(octaves) {
  const notes = ["a", "b", "c", "d", "e", "f", "g"];
  const note = notes[Math.floor(Math.random() * Math.floor(notes.length))];
  const octave = octaves[Math.floor(Math.random() * Math.floor(octaves.length))]

  return note + "/" + octave;
}

module.exports = noteRandomizer;
