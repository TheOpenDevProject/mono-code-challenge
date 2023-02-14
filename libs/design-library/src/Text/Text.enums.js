/**
 * This enum provides our definitions of standard font weights
 */
export var FontWeight;
(function (FontWeight) {
  FontWeight[(FontWeight["lightest"] = 300)] = "lightest";
  FontWeight[(FontWeight["light"] = 400)] = "light";
  FontWeight[(FontWeight["medium"] = 500)] = "medium";
  FontWeight[(FontWeight["heavy"] = 600)] = "heavy";
})(FontWeight || (FontWeight = {}));
/**
 * This enum provides a list of sensible font sizes for various situations.
 * You're of course free to eject and use your own size, your PR will be rejected
 * if it looks stupid.
 */
export var FontSize;
(function (FontSize) {
  FontSize["tiny"] = "8px";
  FontSize["xSmall"] = "10px";
  FontSize["small"] = "12px";
  FontSize["medium"] = "14px";
  FontSize["large"] = "18px";
  FontSize["xLarge"] = "24px";
  FontSize["xxLarge"] = "36px";
})(FontSize || (FontSize = {}));
