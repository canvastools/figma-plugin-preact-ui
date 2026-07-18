//#region src/utils/components/list.ts
var e = [
	"ListItem_drag-over",
	"ListItem_drag-above",
	"ListItem_drag-below",
	"ListItem_drag-inside",
	"ListItem_drag-self",
	"ListItem_drag-between-selected"
], t = () => {
	let e = window.__puiDraggingIds;
	return Array.isArray(e) ? e : null;
}, n = (e) => {
	window.__puiDraggingIds = e;
}, r = () => {
	try {
		delete window.__puiDraggingIds;
	} catch {}
}, i = (e) => {
	let n = t(), r = e?.getData("application/json");
	if (r) try {
		let e = JSON.parse(r);
		e && Array.isArray(e.ids) && (n = e.ids);
	} catch {}
	if (!n) {
		let t = e?.getData("text/plain");
		t && (n = [t]);
	}
	return n;
}, a = (e) => {
	let n = t();
	if (n) return n;
	let r = e?.getData("text/plain");
	return r ? [r] : [];
}, o = () => {
	document.querySelectorAll(".ListItem_drop-itself").forEach((e) => {
		e.classList.remove("ListItem_drop-itself");
	});
}, s = (e) => {
	if (o(), !e) return;
	let n = t();
	if (!(!n || n.length === 0)) for (let t of n) {
		let n;
		try {
			n = document.querySelector(`[data-item-id="${CSS.escape(t)}"]`);
		} catch {
			n = document.querySelector(`[data-item-id="${t}"]`);
		}
		n && n.classList.contains("ListItem_selection-scope-descendants") && (n === e || n.contains(e)) && n.classList.add("ListItem_drop-itself");
	}
}, c = (e, t) => {
	(t.current !== e || e && !e.classList.contains("ListItem_drop-parent")) && (document.querySelectorAll(".ListItem_drop-parent").forEach((e) => {
		e.classList.remove("ListItem_drop-parent");
	}), e && e.classList.add("ListItem_drop-parent"), t.current = e), s(e);
}, l = (e) => Array.from(e.children).filter((e) => e.classList.contains("ListItem")), u = (...e) => (t) => {
	e.forEach((e) => {
		e && (typeof e == "function" ? e(t) : e.current = t);
	});
};
//#endregion
export { e as DRAG_ZONE_CLASSES, r as clearDraggingIds, o as clearDropItself, l as getChildListItems, a as getDragOverIds, t as getDraggingIds, u as mergeRefs, i as resolveDraggedIds, n as setDraggingIds, c as setDropParentElement, s as syncDropItself };
