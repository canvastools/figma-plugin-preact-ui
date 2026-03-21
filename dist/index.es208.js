const s = ["onCopy", "onCut", "onPaste"], a = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
], r = ["onFocus", "onBlur"], i = ["onInput", "onInvalid", "onReset", "onSubmit"], c = ["onLoad", "onError"], u = ["onKeyDown", "onKeyPress", "onKeyUp"], E = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
], v = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
], d = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
], l = ["onSelect"], g = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], p = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
], P = ["onScroll"], m = ["onWheel"], C = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
], h = ["onTransitionEnd"], D = ["onToggle"], M = ["onChange"], S = [
  ...s,
  ...a,
  ...r,
  ...i,
  ...c,
  ...u,
  ...E,
  ...v,
  ...d,
  ...l,
  ...g,
  ...p,
  ...P,
  ...m,
  ...C,
  ...h,
  ...M,
  ...D
];
function L(t, y) {
  const n = {};
  for (const o of S) {
    const e = t[o];
    e && (n[o] = e);
  }
  return n;
}
export {
  S as allEvents,
  C as animationEvents,
  M as changeEvents,
  s as clipboardEvents,
  a as compositionEvents,
  L as default,
  d as dragEvents,
  r as focusEvents,
  i as formEvents,
  c as imageEvents,
  u as keyboardEvents,
  E as mediaEvents,
  v as mouseEvents,
  D as otherEvents,
  p as pointerEvents,
  l as selectionEvents,
  g as touchEvents,
  h as transitionEvents,
  P as uiEvents,
  m as wheelEvents
};
