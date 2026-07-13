//#region ../node_modules/.pnpm/make-event-props@2.0.0/node_modules/make-event-props/dist/index.js
var e = [
	"onCopy",
	"onCut",
	"onPaste"
], t = [
	"onCompositionEnd",
	"onCompositionStart",
	"onCompositionUpdate"
], n = ["onFocus", "onBlur"], r = [
	"onInput",
	"onInvalid",
	"onReset",
	"onSubmit"
], i = ["onLoad", "onError"], a = [
	"onKeyDown",
	"onKeyPress",
	"onKeyUp"
], o = [
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
], s = [
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
], c = [
	"onDrag",
	"onDragEnd",
	"onDragEnter",
	"onDragExit",
	"onDragLeave",
	"onDragOver",
	"onDragStart",
	"onDrop"
], l = ["onSelect"], u = [
	"onTouchCancel",
	"onTouchEnd",
	"onTouchMove",
	"onTouchStart"
], d = [
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
], f = ["onScroll"], p = ["onWheel"], m = [
	"onAnimationStart",
	"onAnimationEnd",
	"onAnimationIteration"
], h = ["onTransitionEnd"], g = ["onToggle"], _ = ["onChange"], v = [
	...e,
	...t,
	...n,
	...r,
	...i,
	...a,
	...o,
	...s,
	...c,
	...l,
	...u,
	...d,
	...f,
	...p,
	...m,
	...h,
	..._,
	...g
];
function y(e, t) {
	let n = {};
	for (let r of v) {
		let i = e[r];
		i && (t ? n[r] = ((e) => i(e, t(r))) : n[r] = i);
	}
	return n;
}
//#endregion
export { v as allEvents, m as animationEvents, _ as changeEvents, e as clipboardEvents, t as compositionEvents, y as default, c as dragEvents, n as focusEvents, r as formEvents, i as imageEvents, a as keyboardEvents, o as mediaEvents, s as mouseEvents, g as otherEvents, d as pointerEvents, l as selectionEvents, u as touchEvents, h as transitionEvents, f as uiEvents, p as wheelEvents };
